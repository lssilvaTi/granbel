// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// First change for each new site: set `site` to the production URL (must match `SITE_URL` in `src/utils/constants.ts`).
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
