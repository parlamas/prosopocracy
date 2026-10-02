// app/[lang]/rota/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../../styles.css';
import RotaContent from '../../../components/RotaContent';
import { ROTA_TRANSLATIONS } from '../../../lib/rota-translations';
import { HOMEPAGE_TRANSLATIONS, LanguageCode } from '../../../lib/homepage-translations';

export function generateStaticParams() {
  return Object.keys(ROTA_TRANSLATIONS)
    .filter((code) => code !== 'en')
    .map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = ROTA_TRANSLATIONS[lang as LanguageCode];
  if (!t) return {};

  return {
    title: `${t.heroThesis} — ${t.wordmarkSecondary}`,
    description: t.heroLede,
    alternates: {
      canonical: `/${lang}/rota`,
      languages: Object.fromEntries(
        Object.keys(HOMEPAGE_TRANSLATIONS).map((code) => [
          code,
          code === 'en' ? '/rota' : `/${code}/rota`,
        ])
      ),
    },
  };
}

export default async function LocalizedRotaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = ROTA_TRANSLATIONS[lang as LanguageCode];

  if (!t) notFound();

  return <RotaContent lang={lang as LanguageCode} t={t} />;
}
