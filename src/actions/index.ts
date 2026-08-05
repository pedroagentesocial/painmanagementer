import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema'; // Astro re-exports Zod here for Actions.
import { deliverLead } from '../lib/leads';
import { verifyTurnstile } from '../lib/turnstile';

/**
 * Server actions. The lead-capture action validates the marketing form with Zod
 * and then fans the lead out to every configured channel (email + webhook).
 */
export const server = {
  lead: defineAction({
    // Parse multipart/urlencoded form submissions (progressive enhancement: works without JS).
    accept: 'form',
    input: z.object({
      name: z.string().trim().min(2),
      email: z.string().trim().email(),
      phone: z.string().trim().min(7),
      message: z.string().trim().max(1000).optional(),
      // Data-processing consent: an unchecked box is omitted from the form, so a
      // missing value fails validation and surfaces as a field error.
      consent: z.literal('on'),
      // SMS consent, separate from the data-processing one above: TCPA requires
      // its own clear opt-in for text messages, so bundling them would weaken
      // both. Unchecked boxes are omitted from the form, hence literal('on').
      smsConsent: z.literal('on'),
      // Exact wording shown, in the language it was read: the consent record.
      smsConsentText: z.string().trim().max(600).optional(),
      // Locale travels with the submission so notifications can be localized.
      locale: z.enum(['es', 'en']).default('es'),
      // Honeypot: real users leave it empty; bots tend to fill every field.
      company: z.string().max(0).optional(),
      // Turnstile injects this field into the form automatically.
      'cf-turnstile-response': z.string().optional(),
    }),
    handler: async (input, ctx) => {
      // Honeypot tripped → silently accept and drop (don't tip off the bot).
      if (input.company) {
        return { ok: true as const, name: input.name };
      }

      // Captcha before any delivery work. No-op when the secret isn't set.
      const human = await verifyTurnstile(input['cf-turnstile-response'], ctx.clientAddress);
      if (!human) {
        throw new ActionError({ code: 'FORBIDDEN', message: 'captcha_failed' });
      }

      try {
        await deliverLead({
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
          locale: input.locale,
          smsConsentText: input.smsConsentText,
        });
      } catch (err) {
        console.error('[lead] delivery failed:', err);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Lead delivery failed',
        });
      }

      return { ok: true as const, name: input.name };
    },
  }),
};
