// app/robots.ts
// Auto-generates /robots.txt, pointing search engines at the sitemap.

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://prosopocracy.com/sitemap.xml',
  };
}
