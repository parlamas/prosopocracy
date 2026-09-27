// app/agora/page.tsx
import type { Metadata } from 'next';
import '../styles.css';
import AgoraContent from '../../components/AgoraContent';
import { AGORA_TRANSLATIONS } from '../../lib/agora-translations';
import { auth } from '../../lib/auth';
import { prisma } from '../../lib/prisma';

export const metadata: Metadata = {
  title: AGORA_TRANSLATIONS.en!.metaTitle,
  description: AGORA_TRANSLATIONS.en!.metaDescription,
};

export default async function AgoraPage({
  searchParams,
}: {
  searchParams: Promise<{ repeat?: string | string[] }>;
}) {
  const session = await auth();
  const { repeat } = await searchParams;

  // "Repeat this circle": pre-fill the form from an earlier circle.
  const repeatFrom =
    typeof repeat === 'string'
      ? await prisma.agoraCircle.findUnique({
          where: { id: repeat },
          select: {
            question: true,
            placeName: true,
            format: true,
            durationMin: true,
            maxSeats: true,
            latitude: true,
            longitude: true,
          },
        })
      : null;

  return (
    <AgoraContent
      lang="en"
      t={AGORA_TRANSLATIONS.en!}
      userName={session?.user?.name ?? null}
      repeatFrom={repeatFrom}
    />
  );
}
