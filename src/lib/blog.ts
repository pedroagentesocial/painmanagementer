import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/config';

export type BlogPost = CollectionEntry<'blogs'>;

/** Slug without the language folder: "es/dolor-lumbar" → "dolor-lumbar". */
export function postSlug(post: BlogPost): string {
  return post.id.split('/').slice(1).join('/');
}

/** Published posts for one language, newest first. */
export async function getPosts(lang: Lang): Promise<BlogPost[]> {
  const posts = await getCollection(
    'blogs',
    (post) => post.id.startsWith(`${lang}/`) && !post.data.draft,
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Rough reading time at ~220 words per minute. */
export function readingMinutes(post: BlogPost): number {
  const words = (post.body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'es' ? 'es-US' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
