/**
 * Production site URL — MUST match `site` in `astro.config.mjs` (canonical URLs, sitemap, OG).
 */
export const SITE_URL = 'https://example.com' as const;

/** Visible brand name (header alt text, copyright, JSON-LD). */
export const SITE_NAME = 'YOUR_SITE_NAME' as const;

/** Short line for footer blurb and generic meta fallbacks. */
export const SITE_TAGLINE =
  'Replace this line with a concise value proposition for your business.' as const;

/** Header / footer / form logo path under `public/`. */
export const LOGO_PATH = '/assets/logos/logo-placeholder.svg' as const;

/** Default Open Graph / Twitter image under `public/`. */
export const DEFAULT_OG_IMAGE = '/og-default.svg' as const;

/** Example image paths — swap for real photography per client. */
export const PLACEHOLDER_IMAGES = {
  heroSlide: '/assets/placeholders/photo-wide.svg',
  portrait: '/assets/placeholders/photo-square.svg',
  partnerLogo: '/assets/placeholders/partner-logo.svg',
} as const;

/**
 * SERVICES — cards on the homepage (`Services.astro`) and service summaries.
 * Keep `id` stable if you add anchors or deep links.
 */
export const SERVICES = [
  {
    id: 'service-one',
    title: 'Primary service',
    description:
      'Describe your flagship offering. This copy is intentionally generic so you can replace it once per client in this file.',
    icon: 'fa-star',
  },
  {
    id: 'service-two',
    title: 'Secondary service',
    description:
      'Add a second pillar of your offer. Longer descriptions work well here for SEO and clarity.',
    icon: 'fa-layer-group',
  },
  {
    id: 'service-three',
    title: 'Add-on or specialty',
    description:
      'Optional third card — remove rows from this array if the client needs fewer services on the home page.',
    icon: 'fa-puzzle-piece',
  },
  {
    id: 'service-four',
    title: 'Nationwide or remote',
    description:
      'Use this slot for coverage area, delivery model, or a differentiator that applies across offerings.',
    icon: 'fa-globe',
  },
] as const;

/**
 * DIFFERENTIALS — bullet strengths (e.g. stats, trust row, or about highlights).
 */
export const DIFFERENTIALS = [
  { title: 'Experienced team and clear communication', icon: 'fa-users' },
  { title: 'Structured process from first call to delivery', icon: 'fa-list-check' },
  { title: 'Quality materials and careful handling', icon: 'fa-box-open' },
  { title: 'Reliable scheduling and follow-through', icon: 'fa-calendar-check' },
  { title: 'Transparent pricing and documentation', icon: 'fa-file-invoice-dollar' },
  { title: 'Fast response on questions and changes', icon: 'fa-bolt' },
] as const;

/**
 * PROCESS_STEPS — “How it works” timeline (`Process.astro`).
 */
export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Request a quote',
    description: 'Reach out via the form, email, or phone with your requirements.',
  },
  {
    number: 2,
    title: 'Assessment',
    description: 'We review scope, timing, and constraints, then propose next steps.',
  },
  {
    number: 3,
    title: 'Scheduling',
    description: 'We align on dates, deliverables, and any preparation you need to do.',
  },
  {
    number: 4,
    title: 'Delivery',
    description: 'We execute the work and confirm you are satisfied before closing out.',
  },
] as const;

/**
 * ABOUT_HIGHLIGHTS — extra bullets for the About page grid (`sobre-nos.astro`).
 */
export const ABOUT_HIGHLIGHTS = [
  { title: 'Licensed and insured where applicable', icon: 'fa-shield-halved' },
  { title: 'Trained specialists for your industry', icon: 'fa-user-graduate' },
  { title: 'Equipment and materials suited to the job', icon: 'fa-toolbox' },
  { title: 'Dedicated point of contact', icon: 'fa-headset' },
  { title: 'Coverage that matches your market', icon: 'fa-map-location-dot' },
  { title: 'Repeat clients and referrals', icon: 'fa-handshake' },
  { title: 'Clear contracts and change process', icon: 'fa-file-signature' },
  { title: 'Satisfaction-focused wrap-up', icon: 'fa-circle-check' },
] as const;

/**
 * CONTACT — phone, email, address, and social URLs (header, footer, maps, JSON-LD).
 * `phoneTel` must be a full international dial string for `tel:` links and schema.org.
 */
export const CONTACT = {
  phoneDisplay: '+1 (555) 000-0000',
  phoneTel: '+15550000000',
  whatsapp: '15550000000',
  email: 'hello@example.com',
  address: '123 Example Street, Suite 100',
  addressLine2: 'Example City, EX 00000',
  city: 'Example City',
  region: 'EX',
  postalCode: '00000',
  facebook: 'https://www.facebook.com/example',
  instagram: 'https://www.instagram.com/example',
} as const;
