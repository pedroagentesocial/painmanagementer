/**
 * Bespoke line-icon set drawn on a 24px grid, 1.6 stroke, round joins.
 * Inner SVG markup only — the <Icon> component supplies the shared <svg> shell,
 * so every icon stays visually consistent. Arrays are ordered to match the
 * dictionary items in es.ts (conditions.items / treatments.items).
 */

export const conditionIcons: string[] = [
  // Back & neck — a curved spine with vertebrae
  '<path d="M9.5 3.5c-1.3 1.3-1.3 2.7 0 4s1.3 2.7 0 4-1.3 2.7 0 4"/><path d="M9 5h5.5M9.2 9h6M9.2 13h6M9.5 17h5.5"/>',
  // Joints — two bones meeting at a pivot
  '<circle cx="12" cy="12" r="2.6"/><path d="M7 4v5.2l2.6 1.8M17 20v-5.2l-2.6-1.8"/>',
  // Neuropathic — a nerve trunk with offshoots
  '<path d="M12 3.5v17"/><path d="M12 7.5c1.8-1.2 3.8-1.1 5 .6M12 12.5c-1.8-1.2-3.8-1.1-5 .6M12 16.5c1.8-1.2 3.8-1.1 5 .6"/>',
  // Migraine — a head with radiating pulses
  '<circle cx="10.5" cy="12" r="6"/><path d="M18.6 8.2l2.3-1.1M19.4 12h2.4M18.6 15.8l2.3 1.1"/>',
  // Post-surgical — an incision line with stitches
  '<path d="M4 12h16"/><path d="M7.5 9.5l1.6 5M11.5 9.5l1.6 5M15.5 9.5l1.6 5"/>',
  // Fibromyalgia — a figure with widespread points
  '<circle cx="12" cy="5" r="2"/><path d="M12 7.2v6l-3.2 4M12 13.2l3.2 4M8 9.4h8"/><circle cx="5" cy="7.2" r="0.7" fill="currentColor" stroke="none"/><circle cx="19" cy="7.2" r="0.7" fill="currentColor" stroke="none"/>',
];

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
