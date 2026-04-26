import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

const logCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string(),
    published: z.boolean().default(true),
    showInLog: z.boolean().default(true),
    project_tag: z.string().optional(),
    version: z.string().optional(),
    project_link: z.string().optional(),
    next_action: z.string().optional(),
  }),
});

export const collections = {
  'ko/pages': pagesCollection,
  'en/pages': pagesCollection,
  'ko/log': logCollection,
  'en/log': logCollection,
  'ko/insight': logCollection,
  'en/insight': logCollection,
};
