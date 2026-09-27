// app/agora/page.tsx
import type { Metadata } from 'next';
import '../styles.css';
import AgoraContent from '../../components/AgoraContent';
import { AGORA_TRANSLATIONS } from '../../lib/agora-translations';
import { auth } from '../../lib/auth';

export const metadata: Metadata = {
  title: AGORA_TRANSLATIONS.en!.metaTitle,
  description: AGORA_TRANSLATIONS.en!.metaDescription,
};

export default async function AgoraPage() {
  const session = await auth();
  return (
    <AgoraContent
      lang="en"
      t={AGORA_TRANSLATIONS.en!}
      userName={session?.user?.name ?? null}
    />
  );
}
