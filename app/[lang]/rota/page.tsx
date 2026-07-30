// app/[lang]/rota/page.tsx
import { notFound } from 'next/navigation';
import '../../styles.css';
import RotaContent from '../../../components/RotaContent';
import { ROTA_TRANSLATIONS } from '../../../lib/rota-translations';
import { LanguageCode } from '../../../lib/homepage-translations';

export function generateStaticParams() {
  return Object.keys(ROTA_TRANSLATIONS)
    .filter((code) => code !== 'en')
    .map((lang) => ({ lang }));
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