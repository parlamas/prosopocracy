// app/robots.ts
// Auto-generates /robots.txt. Blocks API and the account-only Agora
// pages (login, "mine") from being crawled. Everything else is public.

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api',
        '/api/',
        '/agora/login',
        '/agora/mine',
      ],
    },
    sitemap: 'https://prosopocracy.com/sitemap.xml',
  };
}
