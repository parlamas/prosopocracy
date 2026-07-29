// app/[lang]/page.tsx
import { notFound } from 'next/navigation';
import '../styles.css';
import HomepageContent from '../../components/HomepageContent';
import { HOMEPAGE_TRANSLATIONS, LanguageCode } from '../../lib/homepage-translations';

export function generateStaticParams() {
  return Object.keys(HOMEPAGE_TRANSLATIONS)
    .filter((code) => code !== 'en')
    .map((lang) => ({ lang }));
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
