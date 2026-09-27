// app/page.tsx
import './styles.css';
import HomepageContent from '../components/HomepageContent';
import { HOMEPAGE_TRANSLATIONS } from '../lib/homepage-translations';
import { auth } from '../lib/auth';

export default async function ProsopocracyPage() {
  const session = await auth();
  return (
    <HomepageContent
      lang="en"
      t={HOMEPAGE_TRANSLATIONS.en!}
      userName={session?.user?.name ?? null}
    />
  );
}
