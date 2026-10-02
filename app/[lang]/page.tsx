// app/[lang]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../styles.css';
import HomepageContent from '../../components/HomepageContent';
import { HOMEPAGE_TRANSLATIONS, LanguageCode } from '../../lib/homepage-translations';

export function generateStaticParams() {
  return Object.keys(HOMEPAGE_TRANSLATIONS)
    .filter((code) => code !== 'en')
    .map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = HOMEPAGE_TRANSLATIONS[lang as LanguageCode];
  if (!t) return {};

  return {
    title: `${t.heroThesis} — ${t.wordmarkSecondary}`,
    description: t.heroLede,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        Object.keys(HOMEPAGE_TRANSLATIONS).map((code) => [
          code,
          code === 'en' ? '/' : `/${code}`,
        ])
      ),
    },
  };
}

export default async function LocalizedHomepage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = HOMEPAGE_TRANSLATIONS[lang as LanguageCode];

  if (!t) notFound();

  return <HomepageContent lang={lang as LanguageCode} t={t} />;
}
