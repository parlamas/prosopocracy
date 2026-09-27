// app/agora/circle/[id]/opengraph-image.tsx
// The preview image shown when a circle's link is shared (Facebook, LinkedIn,
// X, WhatsApp, Messenger …). Generated automatically for every circle.
import { ImageResponse } from 'next/og';
import { prisma } from '../../../../lib/prisma';
import { formatRadius } from '../../../../lib/agora';
import { loadPreviewFont, PREVIEW_COLORS as C } from '../../../../lib/previewImage';

export const alt = 'A discussion circle on the Prosopocracy agora';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const circle = await prisma.agoraCircle.findUnique({
    where: { id },
    select: {
      question: true,
      placeName: true,
      format: true,
      startsAt: true,
      durationMin: true,
      maxSeats: true,
      localOnly: true,
      radiusKm: true,
      status: true,
      _count: { select: { members: true } },
    },
  });

  const question = circle
    ? circle.question.length > 150
      ? `${circle.question.slice(0, 147)}…`
      : circle.question
    : 'Agora';
  const questionSize = question.length < 60 ? 66 : question.length < 110 ? 54 : 44;

  // The server runs in UTC; show the time in Danish time with its zone name,
  // so it is never ambiguous.
  const when = circle
    ? new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Copenhagen',
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      }).format(circle.startsAt)
    : '';
  const format = circle?.format === 'IN_PERSON' ? 'In person' : 'Online';
  const seats = circle ? `${circle._count.members}/${circle.maxSeats} seats` : '';
  const local = circle?.localOnly ? `Local only · ${formatRadius(circle.radiusKm)}` : '';
  const cancelled = circle?.status === 'CLOSED';

  const allText = [
    'PROSOPOCRACY · AGORA',
    question,
    circle?.placeName ?? '',
    when,
    format,
    seats,
    local,
    'Cancelled',
    `${circle?.durationMin ?? ''} min`,
    'prosopocracy.com/agora',
  ].join(' ');
  const font = await loadPreviewFont(allText);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: C.paper,
          padding: '60px 72px',
          ...(font ? { fontFamily: 'Preview' } : {}),
          borderBottom: `14px solid ${C.blue}`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: C.blue }}>
            PROSOPOCRACY · AGORA
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                padding: '6px 16px',
                border: `2px solid ${circle?.format === 'IN_PERSON' ? C.red : C.blue}`,
                color: circle?.format === 'IN_PERSON' ? C.red : C.blue,
              }}
            >
              {format}
            </div>
            {local && (
              <div
                style={{
                  display: 'flex',
                  fontSize: 24,
                  padding: '6px 16px',
                  border: `2px solid ${C.brass}`,
                  color: C.brass,
                }}
              >
                {local}
              </div>
            )}
            {cancelled && (
              <div
                style={{
                  display: 'flex',
                  fontSize: 24,
                  padding: '6px 16px',
                  background: C.red,
                  color: '#FFFFFF',
                }}
              >
                Cancelled
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: questionSize,
            lineHeight: 1.15,
            color: C.blue,
            maxWidth: 1040,
          }}
        >
          {question}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {circle && (
            <div style={{ display: 'flex', fontSize: 30, color: C.ink }}>{circle.placeName}</div>
          )}
          {circle && (
            <div style={{ display: 'flex', fontSize: 26, color: C.inkSoft }}>
              {when} · {circle.durationMin} min · {seats}
            </div>
          )}
          <div style={{ display: 'flex', fontSize: 24, color: C.red, marginTop: 8 }}>
            prosopocracy.com/agora
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // Only pass fonts when loaded; otherwise next/og keeps its built-in font.
      ...(font ? { fonts: [{ name: 'Preview', data: font, weight: 600 as const, style: 'normal' as const }] } : {}),
    }
  );
}