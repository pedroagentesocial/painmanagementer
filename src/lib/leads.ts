import { Resend } from 'resend';
import {
  RESEND_API_KEY,
  LEAD_EMAIL_FROM,
  LEAD_EMAIL_TO,
  LEAD_WEBHOOK_URL,
} from 'astro:env/server';

export interface Lead {
  name: string;
  email: string;
  phone: string;
  message?: string;
  locale: 'es' | 'en';
}

/** Send the lead notification email via Resend. No-op if Resend isn't configured. */
async function sendEmail(lead: Lead): Promise<'sent' | 'skipped'> {
  if (!RESEND_API_KEY || !LEAD_EMAIL_FROM || !LEAD_EMAIL_TO) {
    console.warn('[lead] Resend not configured (RESEND_API_KEY/FROM/TO) — skipping email.');
    return 'skipped';
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: LEAD_EMAIL_FROM,
    to: LEAD_EMAIL_TO,
    replyTo: lead.email,
    subject: `Nuevo lead · ${lead.name} (${lead.locale.toUpperCase()})`,
    html: `
      <h2>Nuevo lead desde PainManagementer</h2>
      <ul>
        <li><strong>Nombre:</strong> ${escapeHtml(lead.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(lead.email)}</li>
        <li><strong>Teléfono:</strong> ${escapeHtml(lead.phone)}</li>
        <li><strong>Idioma:</strong> ${lead.locale.toUpperCase()}</li>
      </ul>
      ${lead.message ? `<p><strong>Mensaje:</strong><br>${escapeHtml(lead.message)}</p>` : ''}
    `,
  });

  if (error) throw new Error(`Resend error: ${error.message}`);
  return 'sent';
}

/** POST the lead to an external webhook (CRM, Make/Zapier...). No-op if not configured. */
async function postWebhook(lead: Lead): Promise<'sent' | 'skipped'> {
  if (!LEAD_WEBHOOK_URL) {
    console.warn('[lead] LEAD_WEBHOOK_URL not configured — skipping webhook.');
    return 'skipped';
  }

  const res = await fetch(LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      ...lead,
      source: 'painmanagementer',
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return 'sent';
}

/**
 * Deliver a lead through every configured channel (email + webhook) in parallel.
 * Throws only if EVERY channel that ran actually failed, so a single flaky
 * channel never loses a lead silently.
 */
export async function deliverLead(lead: Lead): Promise<void> {
  const results = await Promise.allSettled([sendEmail(lead), postWebhook(lead)]);

  const ran = results.filter(
    (r) => r.status === 'rejected' || (r.status === 'fulfilled' && r.value === 'sent'),
  );
  const failures = results.filter((r) => r.status === 'rejected');

  for (const f of failures) {
    if (f.status === 'rejected') console.error('[lead] delivery channel failed:', f.reason);
  }

  // Dev fallback: nothing configured at all → at least record the lead.
  if (ran.length === 0) {
    console.log('[lead] no delivery channel configured, captured lead:', lead);
    return;
  }

  // Something ran but every channel that ran failed → surface to the caller.
  if (failures.length === ran.length) {
    throw new Error('All configured lead delivery channels failed');
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
