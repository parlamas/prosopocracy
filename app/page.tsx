// app/page.tsx
import type { Metadata } from 'next';
import './styles.css';
import HomepageContent from '../components/HomepageContent';
import { HOMEPAGE_TRANSLATIONS } from '../lib/homepage-translations';

const t = HOMEPAGE_TRANSLATIONS.en!;

export const metadata: Metadata = {
  title: `${t.heroThesis} — ${t.wordmarkSecondary}`,
  description: t.heroLede,
  alternates: {
    canonical: '/',
    languages: Object.fromEntries(
      Object.keys(HOMEPAGE_TRANSLATIONS).map((code) => [
        code,
        code === 'en' ? '/' : `/${code}`,
      ])
    ),
  },
};

export default function ProsopocracyPage() {
  return <HomepageContent lang="en" t={HOMEPAGE_TRANSLATIONS.en!} />;
}
