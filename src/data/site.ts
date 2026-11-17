/**
 * Non-translatable site data: image sources, brand-name placeholders, contact.
 * (Translatable copy lives in src/i18n/locales/*.) Anything marked PLACEHOLDER
 * must be replaced with real, verifiable data before launch — see the note in
 * the WhyUs / Testimonials sections about medical-advertising compliance.
 */

// The hero is now a bespoke graphic (no photography) — see HeroGraphic.astro.

/** Aseguradoras con las que trabaja la clínica. Vacío hasta tener la lista real:
 * la de la plantilla (Sanitas, Adeslas, DKV, Asisa, Mapfre, Cigna) eran nombres de
 * relleno, casi todos de aseguradoras de España, y estaban en vivo. Con la lista
 * vacía el bloque no se muestra. */
export const insurers: string[] = [];

/** Contact / location. Phone and email are real; address is real. */
export const contact = {
  phone: '801-849-3103',
  email: 'support@painmanagementer.com',
  addressLines: ['8706 S 700 E, Suite 102-103', 'Sandy, UT 84070'],
};

/** WhatsApp, solo dígitos con lada (ej. 18018493103). Vacío mientras no haya número
 * confirmado: antes era 34900000000, un número de relleno de España que estaba en vivo. */
export const whatsappNumber = '';

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
  { name: 'WhatsApp', icon: 'whatsapp', href: whatsappNumber ? `https://wa.me/${whatsappNumber}` : '', color: '#25D366' },
];
