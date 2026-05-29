/**
 * Central i18n configuration.
 * Keep this list in sync with `i18n.locales` in astro.config.mjs.
 */
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

/** Native names used in the language selector (already correct above, kept explicit). */
export const languageNames: Record<Lang, string> = languages;
