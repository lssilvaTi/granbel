// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Deve coincidir com `SITE_URL` em `src/utils/constants.ts`.
export default defineConfig({
  site: 'https://www.granbeltransportes.com.br',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
