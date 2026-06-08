/**
 * Bespoke line-icon set drawn on a 24px grid, 1.6 stroke, round joins.
 * Inner SVG markup only — the <Icon> component supplies the shared <svg> shell,
 * so every icon stays visually consistent. Arrays are ordered to match the
 * dictionary items in es.ts (conditions.items / treatments.items).
 */

// Clear, recognizable icons (Lucide, ISC-licensed) — ordered to match
// es.ts conditions.items.
export const conditionIcons: string[] = [
  // Back & neck — a standing body
  '<circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/>',
  // Joints — a bone
  '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>',
  // Neuropathic — a lightning bolt (electric nerve pain)
  '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  // Migraine — a brain
  '<path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>',
  // Post-surgical — a bandage
  '<path d="M10 10.01h.01"/><path d="M10 14.01h.01"/><path d="M14 10.01h.01"/><path d="M14 14.01h.01"/><path d="M18 6v12"/><path d="M6 6v12"/><rect x="2" y="6" width="20" height="12" rx="2"/>',
  // Fibromyalgia — a vital-sign pulse (chronic, whole-body)
  '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
];

// Service-line icons (ordered to match es.ts services.items).
export const servicesIcons: string[] = [
  // Medical imaging — scan frame brackets with a pulse line
  '<path d="M4 8V6.5A2.5 2.5 0 0 1 6.5 4H8"/><path d="M16 4h1.5A2.5 2.5 0 0 1 20 6.5V8"/><path d="M20 16v1.5a2.5 2.5 0 0 1-2.5 2.5H16"/><path d="M8 20H6.5A2.5 2.5 0 0 1 4 17.5V16"/><path d="M6.5 12H9l1.3-3 2 6L13.5 12H17.5"/>',
  // General medicine — clipboard with a plus
  '<rect x="6" y="5" width="12" height="14.5" rx="2"/><rect x="9" y="3.5" width="6" height="3" rx="1"/><path d="M12 10v4.5M9.75 12.25h4.5"/>',
  // Physical therapy — a stretching figure
  '<circle cx="12" cy="4.8" r="1.8"/><path d="M12 7v5.5M12 12.5l-3.2 4.2M12 12.5l3.2 4.2M8.3 9.8h7.4"/>',
  // Mental therapy — a head holding a heart
  '<circle cx="12" cy="11" r="7"/><path d="M12 14.6s-3-1.8-3-3.7c0-1 .8-1.6 1.6-1.6.7 0 1.1.4 1.4.8.3-.4.7-.8 1.4-.8.8 0 1.6.6 1.6 1.6 0 1.9-3 3.7-3 3.7Z"/>',
  // Post-accident — a car silhouette
  '<path d="M4 14l1.4-4.2A2 2 0 0 1 7.3 8.4h9.4a2 2 0 0 1 1.9 1.4L20 14"/><path d="M3.5 14h17v3a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-.8H7v.8a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1Z"/><path d="M7 11.4h10"/>',
  // Targeted care — a crosshair on the body
  '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.8"/><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5"/>',
];

// Contact-method icons (keyed for the contact section).
export const contactIcons: Record<string, string> = {
  phone: '<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A17 17 0 0 1 4 6a1 1 0 0 1 1-2Z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>',
  location: '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>',
};

// Social icons (stroke versions in the project's line style).
export const socialIcons: Record<string, string> = {
  whatsapp:
    '<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Z"/><path d="M8.6 8.2c-.3 0-.6.1-.8.4-.3.3-.7.8-.7 1.8s.8 2.1 1 2.3c.1.2 1.5 2.5 3.8 3.4 1.9.7 2.3.6 2.7.6.4 0 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1l-.7-.4-1.5-.7c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.6-.3-1.3-.6-2-1.5-.5-.6-.6-1-.5-1.2l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.5-.4-.4-.6-.4Z"/>',
  instagram:
    '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none"/>',
  facebook:
    '<rect x="4" y="4" width="16" height="16" rx="5"/><path d="M14.6 8.5h-1.1c-.8 0-1.3.5-1.3 1.3V11H15l-.4 2.6h-2.4V20"/>',
};

export const serviceIcons: string[] = [
  // Image-guided injection — needle entering a target
  '<circle cx="9" cy="15" r="4.3"/><path d="M9 15l5.6-5.6M13 7l4 4M15.4 6.6l2 2"/>',
  // Radiofrequency — a pulse waveform
  '<path d="M3 12h3.2l2-5.6 3.6 11 2.2-5.4H21"/>',
  // Neuromodulation — a signal node network
  '<circle cx="12" cy="12" r="2.4"/><circle cx="5" cy="6.5" r="1.4"/><circle cx="19" cy="6.5" r="1.4"/><circle cx="5" cy="17.5" r="1.4"/><circle cx="19" cy="17.5" r="1.4"/><path d="M6.2 7.5l3.5 3M17.8 7.5l-3.5 3M6.2 16.5l3.5-3M17.8 16.5l-3.5-3"/>',
  // Regenerative & physio — a growing sprout
  '<path d="M12 21v-8"/><path d="M12 13c0-3.2 2.2-5.2 5.4-5.2 0 3.2-2.2 5.2-5.4 5.2Z"/><path d="M12 15.4c0-2.6-2-4.2-4.8-4.2 0 2.6 2 4.2 4.8 4.2Z"/>',
];
