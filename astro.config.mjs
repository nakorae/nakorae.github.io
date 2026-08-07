import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  //   base: '/repo-name',
  site: 'https://nakorae.github.io',

  integrations: [sitemap()],
});