import type { APIRoute } from 'astro';
import { SITE_URL } from '../utils/constants';

/**
 * Sitemap URL list — the `pages` array MUST mirror real file-based routes under `src/pages/`.
 * When you add or remove `.astro` routes, update this list and `Header.astro` / `Footer.astro` links.
 */
const pages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    url: '/sobre-nos',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    url: '/servicos',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    url: '/contato',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    url: '/orcamento',
    priority: '0.8',
    changefreq: 'weekly',
  },
];

export const GET: APIRoute = async () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
