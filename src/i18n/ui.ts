import { es } from './locales/es';
import { en } from './locales/en';
import type { Lang } from './config';

/** All dictionaries keyed by language code. */
export const ui: Record<Lang, typeof es> = { es, en };

/** The shape of a single dictionary (handy for typing props/components). */
export type UIDict = typeof es;
