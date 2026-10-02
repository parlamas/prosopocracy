// app/rota/page.tsx
import type { Metadata } from 'next';
import '../styles.css';
import RotaContent from '../../components/RotaContent';
import { ROTA_TRANSLATIONS } from '../../lib/rota-translations';
import { HOMEPAGE_TRANSLATIONS } from '../../lib/homepage-translations';

const t = ROTA_TRANSLATIONS.en!;

export const metadata: Metadata = {
  title: `${t.heroThesis} — ${t.wordmarkSecondary}`,
  description: t.heroLede,
  alternates: {
    canonical: '/rota',
    languages: Object.fromEntries(
      Object.keys(HOMEPAGE_TRANSLATIONS).map((code) => [
        code,
        code === 'en' ? '/rota' : `/${code}/rota`,
      ])
    ),
  },
};

export default function RotaPage() {
  return <RotaContent lang="en" t={ROTA_TRANSLATIONS.en!} />;
}
