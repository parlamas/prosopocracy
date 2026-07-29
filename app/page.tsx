// app/page.tsx
import './styles.css';
import HomepageContent from '../components/HomepageContent';
import { HOMEPAGE_TRANSLATIONS } from '../lib/homepage-translations';

export default function ProsopocracyPage() {
  return <HomepageContent lang="en" t={HOMEPAGE_TRANSLATIONS.en!} />;
}
