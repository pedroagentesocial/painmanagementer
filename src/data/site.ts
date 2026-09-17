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

/** Contact / location. Phone is real; email and address are still PLACEHOLDER. */
export const contact = {
  phone: '801-849-3103',
  email: 'hola@painmanagementer.com',
  addressLines: ['Calle de Ejemplo 123', '28001 Madrid'],
};

/** WhatsApp + social profiles — PLACEHOLDER. Replace with the clinic's real handles. */
export const whatsappNumber = '34900000000';

/**
 * Las CINCO redes de la marca, siempre visibles, más WhatsApp (que es canal de
 * contacto, no red). Un href vacío se muestra igual pero no enlaza: nunca
 * publicamos un perfil que no existe. Al poner la url, enlaza.
 */
export const social: { name: string; icon: string; href: string; color: string }[] = [
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/painmanagementer/', color: '#1877F2' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/pain_management_er/', color: '#E1306C' },
  { name: 'TikTok', icon: 'tiktok', href: '', color: '#010101' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@PainManagementER', color: '#FF0000' },
  { name: 'LinkedIn', icon: 'linkedin', href: '', color: '#0A66C2' },
  { name: 'WhatsApp', icon: 'whatsapp', href: `https://wa.me/${whatsappNumber}`, color: '#25D366' },
];
