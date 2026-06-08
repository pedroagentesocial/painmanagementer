/**
 * Non-translatable site data: image sources, brand-name placeholders, contact.
 * (Translatable copy lives in src/i18n/locales/*.) Anything marked PLACEHOLDER
 * must be replaced with real, verifiable data before launch — see the note in
 * the WhyUs / Testimonials sections about medical-advertising compliance.
 */

// The hero is now a bespoke graphic (no photography) — see HeroGraphic.astro.

/** Insurance partners — PLACEHOLDER names. Replace with the clinic's real list. */
export const insurers: string[] = [
  'Sanitas',
  'Adeslas',
  'DKV',
  'Asisa',
  'Mapfre',
  'Cigna',
];

/** Contact / location — PLACEHOLDER. Replace with the clinic's real details. */
export const contact = {
  phone: '+34 900 000 000',
  email: 'hola@painmanagementer.com',
  addressLines: ['Calle de Ejemplo 123', '28001 Madrid'],
};

/** WhatsApp + social profiles — PLACEHOLDER. Replace with the clinic's real handles. */
export const whatsappNumber = '34900000000';

export const social: { name: string; icon: string; href: string; color: string }[] = [
  { name: 'WhatsApp', icon: 'whatsapp', href: `https://wa.me/${whatsappNumber}`, color: '#25D366' },
  { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/painmanagementer', color: '#E1306C' },
  { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com/painmanagementer', color: '#1877F2' },
];
