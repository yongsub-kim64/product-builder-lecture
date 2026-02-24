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
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['active', 'completed', 'archived']).default('active'),
  }),
});

export const collections = {
  'ko/pages': pagesCollection,
  'en/pages': pagesCollection,
  'ko/log': logCollection,
  'en/log': logCollection,
  'ko/projects': projectsCollection,
  'en/projects': projectsCollection,
  'ko/insight': logCollection,
};
