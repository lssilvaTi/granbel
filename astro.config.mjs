// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deve coincidir com `SITE_URL` em `src/utils/constants.ts`.
export default defineConfig({
  site: 'https://www.granbeltransportes.com.br',
  vite: {
    plugins: [tailwindcss()],
  },
});
