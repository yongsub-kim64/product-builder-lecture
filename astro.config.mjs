// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chulbuji.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/playground/') &&
        !page.includes('/tools/') &&
        !page.includes('/log/ai-sangseon-yaksu/') &&
        !page.includes('/log/taming-the-architect/'),
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
