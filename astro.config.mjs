// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL; SITE_URL overrides it if a custom domain is added later.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
