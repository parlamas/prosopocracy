// app/sitemap.ts
// Auto-generates /sitemap.xml at build time. Only lists public pages.
// Dynamic pages (/videos/[slug], /agora/circle/[id]) are public but not
// enumerated here (no static list) — they stay crawlable via links.
// /agora/login and /agora/mine are excluded (also blocked in robots.ts).

import type { MetadataRoute } from 'next';

const BASE_URL = 'https://prosopocracy.com';

// English lives at the root; these are the other language versions.
const LANGS = [
  'el', 'es', 'pt', 'it', 'fr', 'de', 'nl', 'da', 'no', 'sv', 'fi', 'is',
  'et', 'lv', 'lt', 'pl', 'cs', 'sk', 'hu', 'sl', 'ro', 'sr', 'hr', 'bg',
  'sq', 'uk', 'ru', 'ka', 'tr', 'ja', 'ko', 'zh', 'hi', 'ms', 'id', 'tl',
  'he', 'ar', 'fa',
];

const PUBLIC_PATHS = [
  '/',
  '/rota',
  '/agora',
  '/videos',
  '/paper/english',
  '/paper/greek',
  '/paper/danish',
  '/paper/polish',
  ...LANGS.map((l) => `/${l}`),
  ...LANGS.map((l) => `/${l}/rota`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PUBLIC_PATHS.map((path) => ({
    url: path === '/' ? BASE_URL : `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.7,
  }));
}
