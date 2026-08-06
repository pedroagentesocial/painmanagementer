// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.painmanagementer.com',

  // Native Astro i18n (no external library).
  // Spanish is the default locale; both locales are URL-prefixed (/es/ and /en/).
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      // Prefix EVERY locale, including the default → we get /es/ AND /en/.
      prefixDefaultLocale: true,
      // Hitting a non-prefixed route redirects to the default locale.
      redirectToDefaultLocale: true,
    },
  },

  // "/" → "/es/" (static, reliable redirect for the bare root).
  redirects: {
    '/': '/es/',
  },

  // Typed, validated environment variables (astro:env). All optional so the
  // project runs without them configured — the lead action degrades gracefully
  // (logs to console) until you add the keys.
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEAD_EMAIL_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEAD_EMAIL_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEAD_WEBHOOK_URL: envField.string({ context: 'server', access: 'secret', optional: true }),

      // Cloudflare Turnstile. Optional on purpose: without the secret the
      // captcha is not enforced, so local dev keeps working. Once the secret
      // exists (production), a missing or invalid token is rejected.
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },

  // Sitemap with bilingual hreflang annotations (uses `site` + i18n config).
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } } })],

  // Vercel adapter: prerendered pages ship as static; routes that opt out with
  // `export const prerender = false` (and the Actions endpoint) run as Vercel
  // serverless functions.
  adapter: vercel(),

  // Astro's CSRF guard (`checkOrigin`, on by default) compares the Origin
  // header against the request URL. Behind Vercel that comparison fails here,
  // so EVERY POST to the Actions endpoint was answered with 403 "Cross-site
  // POST form submissions are forbidden" before any validation ran. The lead
  // form was silently unusable: visitors only saw the generic error.
  //
  // Safe to disable for THIS form. CSRF protects actions performed on behalf
  // of an authenticated user; this form is public, with no login and no
  // session, so forging a submission gains an attacker nothing they could not
  // do by POSTing directly. Real abuse protection is Turnstile (verified
  // server-side), the honeypot and the Zod validation.
  security: { checkOrigin: false },

  vite: {
    plugins: [tailwindcss()],
  },
});
