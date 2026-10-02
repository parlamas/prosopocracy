// app/sitemap.ts
// Auto-generates /sitemap.xml at build time, listing every language
// variant of the homepage and ROTA page, plus the videos pages — so
// search engines can discover all ~120+ URLs directly instead of
// relying on crawling links one by one.

import type { MetadataRoute } from 'next';
import { HOMEPAGE_TRANSLATIONS } from '../lib/homepage-translations';
import { ROTA_TRANSLATIONS } from '../lib/rota-translations';
import { VIDEOS } from '../lib/videos';

const BASE_URL = 'https://prosopocracy.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  Object.keys(HOMEPAGE_TRANSLATIONS).forEach((lang) => {
    entries.push({
      url: lang === 'en' ? BASE_URL : `${BASE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: lang === 'en' ? 1 : 0.8,
    });
  });

  Object.keys(ROTA_TRANSLATIONS).forEach((lang) => {
    entries.push({
      url: lang === 'en' ? `${BASE_URL}/rota` : `${BASE_URL}/${lang}/rota`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  entries.push({
    url: `${BASE_URL}/videos`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  });

  VIDEOS.forEach((v) => {
    entries.push({
      url: `${BASE_URL}/videos/${v.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  return entries;
}
