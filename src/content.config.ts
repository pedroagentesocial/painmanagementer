import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts live in src/content/blogs/{es,en}/*.md.
 * The entry id is "<lang>/<slug>", so a post and its translation share the
 * same file name — that is what lets the language selector swap /es/blog/x
 * for /en/blog/x.
 *
 * Medical content: every figure in a post must be cited in its `sources`.
 */
const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('PainManagement ER'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    sources: z
      .array(
        z.object({
          title: z.string(),
          publisher: z.string(),
          url: z.string().url(),
          date: z.string().optional(),
        }),
      )
      .min(1),
  }),
});

export const collections = { blogs };
