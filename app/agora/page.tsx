// app/agora/page.tsx
import type { Metadata } from 'next';
import '../styles.css';
import AgoraContent from '../../components/AgoraContent';
import { AGORA_TRANSLATIONS } from '../../lib/agora-translations';
import { auth } from '../../lib/auth';
import { prisma } from '../../lib/prisma';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.prosopocracy.com'),
  title: AGORA_TRANSLATIONS.en!.metaTitle,
  description: AGORA_TRANSLATIONS.en!.metaDescription,
  twitter: { card: 'summary_large_image' },
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
            localOnly: true,
            radiusKm: true,
          },
        })
            : null;

  // Start the map over the visitor's approximate city, from Vercel's IP lookup.
  // Not stored and not used for joining: it only sets where the map first looks.
  const h = await headers();
  const ipLat = Number(h.get('x-vercel-ip-latitude'));
  const ipLng = Number(h.get('x-vercel-ip-longitude'));
  const startView =
    !repeatFrom && h.get('x-vercel-ip-latitude') && Number.isFinite(ipLat) && Number.isFinite(ipLng)
      ? { lat: ipLat, lng: ipLng }
      : null;

  return (
    <AgoraContent
      lang="en"
      t={AGORA_TRANSLATIONS.en!}
      userName={session?.user?.name ?? null}
            repeatFrom={repeatFrom}
      startView={startView}
    />
  );
}
