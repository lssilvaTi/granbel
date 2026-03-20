# Astro Marketing Site Template

A production-ready **Astro 5** + **Tailwind CSS 4** template for service businesses: multi-page sites, optional contact/quote forms (EmailJS), optional Cloudflare Turnstile, light/dark theme, SEO helpers, sitemap, and reusable section components.

This repository is intended to be **forked or copied** to spin up new client sites quickly. Branding defaults use placeholders (`YOUR_SITE_NAME`, `https://example.com`, `hello@example.com`). The instructions below are written so an **AI agent or developer** can swap branding, trim pages to a **single landing**, or **add/remove features** with clear, repeatable steps.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Quick start](#quick-start)
3. [Environment variables](#environment-variables)
4. [Project structure](#project-structure)
5. [Branding defaults](#branding-defaults)
6. [Configuration checklist (new site)](#configuration-checklist-new-site)
7. [Landing page vs multi-page site](#landing-page-vs-multi-page-site)
8. [Homepage sections (compose / remove)](#homepage-sections-compose--remove)
9. [Forms: enable, disable, or customize](#forms-enable-disable-or-customize)
10. [Navigation and footer](#navigation-and-footer)
11. [Branding and design tokens](#branding-and-design-tokens)
12. [SEO and sitemap](#seo-and-sitemap)
13. [Build and deploy](#build-and-deploy)
14. [Commands reference](#commands-reference)
15. [Agent command cookbook](#agent-command-cookbook)
16. [Contributing features back to the template](#contributing-features-back-to-the-template)
17. [Notes for AI agents](#notes-for-ai-agents)

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | [Astro](https://astro.build/) 5 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Icons | Font Awesome Free (bundled) |
| Forms | Client-side [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`) |
| Anti-spam | Honeypot field + optional [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) |
| Sitemap | Custom route `src/pages/sitemap.xml.ts` (manual URL list; `@astrojs/sitemap` is in dependencies if you want to wire the official integration later) |

---

## Quick start

```bash
npm install
cp env.example .env
# Edit .env if you use forms (see below)
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # output: ./dist/
npm run preview  # test production build locally
```

---

## Environment variables

Copy `env.example` to `.env`. All public keys use the `PUBLIC_` prefix (exposed to the browser).

| Variable | Required for forms | Purpose |
|----------|--------------------|---------|
| `PUBLIC_EMAILJS_SERVICE_ID` | Yes, to send mail | EmailJS service |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | Yes | Template ID |
| `PUBLIC_EMAILJS_PUBLIC_KEY` | Yes | Public key (init + send) |
| `PUBLIC_TURNSTILE_SITE_KEY` | No | If set, Turnstile widget loads on form pages |

**EmailJS template variables** used by this project (align your EmailJS template fields):

- `{{from_name}}`, `{{from_phone}}`, `{{from_email}}`, `{{from_address}}`, `{{message}}`, `{{to_email}}`

If forms are **not** configured, the UI shows a fallback message pointing users to WhatsApp/email (see form scripts in `contato.astro` / `orcamento.astro`).

---

## Project structure

```text
/
├── public/                 # Static assets (favicon, logos, OG image)
│   ├── assets/
│   │   └── logos/          # Logos da marca — ver `LOGO_*_PATH` em constants
│   ├── favicon.svg
│   ├── og-default.svg      # Default Open Graph image (replace with PNG if you prefer)
│   └── robots.txt          # Update sitemap URL when domain is final
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, WhatsAppButton
│   │   ├── sections/       # Hero, StatsBar, Services, FAQ, CTA, etc.
│   │   ├── seo/            # SEOHead, FAQSchema
│   │   └── ui/             # Button, Logo
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shell: SEO, Header, main, Footer, theme, optional Turnstile script
│   ├── pages/              # File-based routes
│   │   ├── index.astro
│   │   ├── sobre-nos.astro
│   │   ├── servicos.astro
│   │   ├── contato.astro
│   │   ├── orcamento.astro
│   │   └── sitemap.xml.ts
│   ├── styles/
│   │   └── global.css      # Tailwind + CSS variables (themes)
│   └── utils/
│       └── constants.ts    # SITE_URL, SITE_NAME, CONTACT, SERVICES, PLACEHOLDER_IMAGES, etc.
├── astro.config.mjs        # `site` — must match SITE_URL in constants (see below)
├── env.example
└── package.json
```

**Section components** under `src/components/sections/` (use on homepage or custom pages):

- `Hero.astro` — full-width hero with image carousel background  
- `StatsBar.astro` — animated counters  
- `Services.astro`, `ValueProposition.astro`, `Process.astro`, `Testimonials.astro`, `FAQ.astro`, `CTA.astro`  
- **Available but not on homepage by default:** `Pricing.astro`, `Portfolio.astro` — import where needed  

---

## Branding defaults

Single source of truth for **site identity** and **contact data** is `src/utils/constants.ts`:

| Export | Purpose |
|--------|---------|
| `SITE_URL` | Canonical origin; **must match** `site` in `astro.config.mjs` |
| `SITE_NAME` | Brand string (titles, alt text, JSON-LD, copyright) |
| `SITE_TAGLINE` | Short line for footer + default meta description fallback |
| `LOGO_PATH` | Path under `public/` for header/footer/form logo |
| `DEFAULT_OG_IMAGE` | Default share image (e.g. `/og-default.svg`) |
| `PLACEHOLDER_IMAGES` | `heroSlide`, `portrait` (URLs remotas até haver fotos próprias) |
| `CONTACT` | `phoneDisplay`, `phoneTel` (E.164 for `tel:` + schema), `whatsapp`, `email`, address fields, social URLs |
| `SERVICES`, `DIFFERENTIALS`, `PROCESS_STEPS`, `ABOUT_HIGHLIGHTS` | Content arrays for sections / pages |

Also update **`public/site.webmanifest`**, **`public/robots.txt`** (sitemap line), and per-page `BaseLayout` props (`title`, `description`, `keywords`, `canonical`, `url`, `image`) when going live.

---

## Configuration checklist (new site)

When cloning this repo for a **new client**, update at least:

1. **`astro.config.mjs`** — `site: 'https://your-domain.com'` (same string as `SITE_URL` in `constants.ts`)
2. **`src/utils/constants.ts`** — `SITE_URL`, `SITE_NAME`, `SITE_TAGLINE`, `LOGO_PATH`, `CONTACT`, content arrays, `PLACEHOLDER_IMAGES` if you add real files
3. **`src/pages/sitemap.xml.ts`** — the `pages` array (must match routes that exist under `src/pages/`)
4. **Each page’s `BaseLayout` props** — `title`, `description`, `keywords`, `canonical`, `url`, `image` (often derived from `SITE_URL` + path)
5. **`public/`** — replace `og-default.svg`, favicon, logos em `assets/logos/` e ajustar `LOGO_*_PATH` / `PLACEHOLDER_IMAGES` se necessário
6. **`.env`** — EmailJS (+ optional Turnstile) if forms are used
7. **`src/layouts/BaseLayout.astro`** — `lang` on `<html>` (default is `en`; change for other locales and translate UI copy)
8. **`public/robots.txt`** and **`public/site.webmanifest`** — name, URL, icons

---

## Landing page vs multi-page site

### Multi-page (default)

Routes:

| Path | File | Role |
|------|------|------|
| `/` | `index.astro` | Home with stacked sections |
| `/sobre-nos` | `sobre-nos.astro` | About |
| `/servicos` | `servicos.astro` | Services |
| `/contato` | `contato.astro` | Contact + form |
| `/orcamento` | `orcamento.astro` | Quote request + form |

**Agent instruction example:** *“Keep all pages; update copy and constants only.”*

### Single landing page

1. Put all needed sections in **`src/pages/index.astro`** only.  
2. **Delete** (or do not create) extra page files: `sobre-nos.astro`, `servicos.astro`, `contato.astro`, `orcamento.astro` as needed.  
3. **`Header.astro`** — remove or replace nav links; use in-page anchors (`#services`, `#contact`) instead of `/servicos`, `/contato`.  
4. **`Footer.astro`** — same: only links that exist.  
5. **`sitemap.xml.ts`** — set `pages` to `[{ url: '/', ... }]` (and any other routes you keep).  
6. Remove **CTA buttons** that point to deleted routes, or retarget them to `#contact` or external URLs.

**Agent instruction example:** *“Single-page site: one `index.astro`, anchor navigation, no `/orcamento` or `/contato` routes; optional form at bottom of home.”*

---

## Homepage sections (compose / remove)

Edit **`src/pages/index.astro`**: import only the sections you need and order them as desired.

```astro
---
import Hero from '../components/sections/Hero.astro';
import StatsBar from '../components/sections/StatsBar.astro';
// ...add or remove imports
---
<BaseLayout ...>
  <Hero />
  <StatsBar />
  <!-- remove StatsBar entirely if not needed -->
</BaseLayout>
```

- **StatsBar** data lives in `StatsBar.astro` (top of file).  
- **Services / FAQ / etc.** often read from `src/utils/constants.ts`.  

**Agent instruction example:** *“Remove StatsBar and Testimonials; add Portfolio section below Services.”*

---

## Forms: enable, disable, or customize

### Pages with forms

- **`src/pages/contato.astro`** — contact form + EmailJS script  
- **`src/pages/orcamento.astro`** — quote form + EmailJS script  

Both use:

- `novalidate` on `<form>` + JS validation (email regex, English messages in the template)  
- **US-style phone mask** (10 digits) in JS — replace with another locale in the `<script>` blocks if needed  
- Honeypot field `company_website`  
- Optional Turnstile: `BaseLayout` prop `loadTurnstile={true}` when `PUBLIC_TURNSTILE_SITE_KEY` is set  

### Disable forms entirely

1. Delete or replace **`contato.astro`** / **`orcamento.astro`** with static content (phone, email, map only).  
2. Remove nav/footer links to `/contato` and `/orcamento`.  
3. Remove **`loadTurnstile`** from `BaseLayout` on those pages (or delete the pages).  
4. Optionally remove **`@emailjs/browser`** from `package.json` if nothing uses it.  

### Single form only (e.g. contact only)

- Keep **`contato.astro`**; remove **`orcamento.astro`** and all “Request a quote” / `/orcamento` links from `Header.astro`, `Footer.astro`, and section CTAs (`CTA.astro`, etc.).  
- Update **`sitemap.xml.ts`**.

### Add a field

1. Add `<input>` / `<textarea>` in the `.astro` file.  
2. Extend the `templateParams` object in the page’s `<script>` to include the new field.  
3. Add the same variable in the **EmailJS** template.  
4. Document it in **`env.example`** comments if useful.  

**Agent instruction example:** *“No forms: static contact page with WhatsApp and map only.”*

---

## Navigation and footer

- **`src/components/layout/Header.astro`** — desktop nav, mobile menu, CTA button, theme toggle, social icons (from `CONTACT`).  
- **`src/components/layout/Footer.astro`** — page links + contact block + copyright.  

Any **new route** must be added here (and in **sitemap**) or users will get 404s from the menu.

---

## Branding and design tokens

- **Colors / themes:** `src/styles/global.css` — `@theme` variables (`--color-dark-blue`, `--color-cyan`, `--color-yellow`, etc.) and `[data-theme="light"]` / `[data-theme="dark"]` overrides (paleta verde).
- **Reusable UI:** `src/components/ui/Button.astro` (`primary`, `secondary`, `outline`).  

**Agent instruction example:** *“Rebrand to a green palette; update CSS variables and `LOGO_PATH` / files under `public/assets/logos/`.”*

---

## SEO and sitemap

- **`src/components/seo/SEOHead.astro`** — meta tags, OG, Twitter, canonical (fed by each page); defaults pull from `constants.ts`.  
- **`src/pages/sitemap.xml.ts`** — manual list of URLs; **`pages` must mirror real routes** (see file header comment).  
- Set **`astro.config.mjs` `site`** and **`SITE_URL`** for absolute URLs in production.  
- Default share image: **`public/og-default.svg`** (swap for a 1200×630 PNG if social platforms require raster).  

---

## Build and deploy

```bash
npm run build
```

Deploy **`dist/`** to any static host (Vercel, Netlify, Cloudflare Pages, etc.). Set environment variables on the host to match `.env` for EmailJS/Turnstile.

---

## Commands reference

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server (default port 4321) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npx astro check` | Type/check Astro (if configured) |

---

## Agent command cookbook

Paste-style prompts for a future agent session. Each row lists **what to do** and **where to edit**.

| Example prompt (English) | Agent actions |
|--------------------------|----------------|
| *“Landing only: single `index.astro`, anchor nav, remove `/orcamento` and `/contato`.”* | Delete or stub extra pages; edit `Header.astro` / `Footer.astro` links to `#sections`; trim `sitemap.xml.ts` `pages`; remove CTA links to removed routes in `CTA.astro`, `Hero.astro`, etc. |
| *“Remove all forms and EmailJS.”* | Replace `contato.astro` / `orcamento.astro` with static content; remove nav/footer links; strip `loadTurnstile` and form `<script>` blocks; optionally remove `@emailjs/browser` from `package.json`; update README if behavior changes. |
| *“Add a `/pricing` page with the existing Pricing section.”* | Add `src/pages/pricing.astro` with `BaseLayout` + import `Pricing.astro`; add links in `Header.astro`, `Footer.astro`; append `/pricing` to `sitemap.xml.ts` `pages`. |
| *“Change the palette to primary `#0f766e` and accent `#f59e0b`.”* | Edit `@theme` and theme overrides in `src/styles/global.css`; adjust `theme_color` / `background_color` in `site.webmanifest` if desired. |
| *“Replace placeholders with Acme Corp, domain `https://acme.example`, email `hello@acme.example`.”* | Set `SITE_NAME`, `SITE_URL`, `CONTACT`, `astro.config.mjs` `site`; update each page’s `canonical` / `url` meta; `robots.txt` sitemap line; manifest name. |
| *“Portuguese site: translate visible strings and set `lang=\"pt-BR\"`.”* | Change `<html lang>` in `BaseLayout.astro`; translate section copy and form labels/messages; set `og:locale` / `meta language` in `SEOHead.astro` if you localize SEO. |
| *“Put testimonials data in `constants.ts`.”* | Add e.g. `TESTIMONIALS` array in `constants.ts`; refactor `Testimonials.astro` to import it. |
| *“Disable Turnstile everywhere.”* | Clear `PUBLIC_TURNSTILE_SITE_KEY` in `.env`; remove `loadTurnstile={true}` from pages or rely on env (widgets won’t render without key). |

---

## Contributing features back to the template

When a **derived client site** gains a reusable feature (newsletter, blog, CMS, auth, etc.), port it to the **main template repo** so the next project inherits it.

**Checklist**

1. **Code** — implement in the template with placeholders (no client domains or secrets). Prefer `constants.ts` and env for configuration.  
2. **README** — document setup, file paths, env vars, and any agent-oriented instructions (add to [Agent command cookbook](#agent-command-cookbook) if it’s a common ask).  
3. **`env.example`** — add commented variables if the feature needs `PUBLIC_*` or server keys.  
4. **Build** — run `npm run build` on the template and fix regressions.  
5. **Sitemap / nav** — if new routes ship with the feature, update `sitemap.xml.ts`, `Header.astro`, and `Footer.astro` defaults, or document that derived sites must add them.  

Flow: ship and document on the **client repo** first if you need approval, then cherry-pick or copy the patch into the **template** repository.

---

## Notes for AI agents

Use this section as a **prompt cheat sheet** when genericizing the repo.

1. **Scope first:** Ask whether the site is **single landing** or **multi-page**, and whether **forms** are required.  
2. **Constants first:** Put client-specific text and links in **`constants.ts`** where possible; avoid hardcoding in many files.  
3. **Routes are files:** Adding `/blog` = add `src/pages/blog.astro` (or folder); then Header, Footer, sitemap.  
4. **Forms need env + EmailJS template** fields to match `templateParams`.  
5. **Remove unused dependencies** after stripping features (e.g. EmailJS).  
6. **Language:** default template UI is **English** and `lang="en"`; change `lang` and copy for other locales.  
7. **URL sync:** `SITE_URL` in `constants.ts` and `site` in `astro.config.mjs` must stay identical.  

**Example high-level prompts:**

- *“Convert to a one-page agency site: hero, services grid, testimonials, contact strip with mailto only—remove EmailJS and all form pages.”*  
- *“Keep multi-page structure; replace YOUR_SITE_NAME with {CLIENT}; update colors to {HEX}; add a /blog index page.”*  
- *“Remove quote form and `/orcamento`; keep contact form with Turnstile.”*

---

## License

Use and adapt for client projects as needed. Original Astro starter portions may retain their respective licenses.
