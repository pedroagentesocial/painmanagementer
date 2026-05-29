import { ui } from './ui';
import { languages, defaultLang, type Lang } from './config';

/**
 * Read the active language from the URL (e.g. /en/treatments → 'en').
 * Falls back to the default locale for non-prefixed paths.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) {
    return maybeLang as Lang;
  }
  return defaultLang;
}

/** Get the dictionary for a language. Usage: `const t = useTranslations(lang)`. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * Build a localized href for an internal route.
 * Usage: `const localize = useTranslatedPath(lang); localize('treatments') → '/es/treatments'`.
 */
export function useTranslatedPath(lang: Lang) {
  return (path = ''): string => {
    const clean = path.replace(/^\/+/, '');
    return clean ? `/${lang}/${clean}` : `/${lang}/`;
  };
}

/**
 * Given the current pathname, return its equivalent in `targetLang`.
 * Used by the language selector so switching keeps you on the same page.
 * e.g. ('/es/treatments', 'en') → '/en/treatments'
 */
export function getLocalizedPathname(pathname: string, targetLang: Lang): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }
  const trailingSlash = pathname.endsWith('/') || segments.length === 1 ? '/' : '';
  return '/' + segments.join('/') + trailingSlash;
}
