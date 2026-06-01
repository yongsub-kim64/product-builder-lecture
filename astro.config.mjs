// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const excludedLogSlugs = [
  'ai-sangseon-yaksu',
  'taming-the-architect',
  'history-of-lotto',
  'lotto-analysis-1',
  'lotto-analysis-2',
  'article-03',
  'article-04',
  'article-05',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://chulbuji.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/playground/') &&
        !page.includes('/tools/') &&
        !excludedLogSlugs.some((slug) => page.includes(`/log/${slug}/`)),
      i18n: {
        defaultLocale: 'ko',
        locales: {
          ko: 'ko-KR',
          en: 'en-US',
        },
      },
    }),
  ],
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
