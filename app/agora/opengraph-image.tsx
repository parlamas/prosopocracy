// app/agora/opengraph-image.tsx
// The preview image shown when prosopocracy.com/agora itself is shared.
import { ImageResponse } from 'next/og';
import { loadPreviewFont, PREVIEW_COLORS as C } from '../../lib/previewImage';

export const alt = 'Agora: live local discussion circles on Prosopocracy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const TITLE = 'Agora';
const LINE = 'Live discussion circles near you, online or in person.';
const SUB = 'One issue, 4–8 people, a set time. Start one where you are.';

export default async function Image() {
  const font = await loadPreviewFont(
    ['PROSOPOCRACY', TITLE, LINE, SUB, 'prosopocracy.com/agora'].join(' ')
  );

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
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: C.blue }}>
          PROSOPOCRACY
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', fontSize: 120, color: C.blue }}>{TITLE}</div>
          <div style={{ display: 'flex', fontSize: 40, color: C.ink, maxWidth: 1000 }}>{LINE}</div>
          <div style={{ display: 'flex', fontSize: 28, color: C.inkSoft, maxWidth: 1000 }}>{SUB}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: C.red }}>prosopocracy.com/agora</div>
      </div>
    ),
    {
      ...size,
      // Only pass fonts when loaded; otherwise next/og keeps its built-in font.
      ...(font ? { fonts: [{ name: 'Preview', data: font, weight: 600 as const, style: 'normal' as const }] } : {}),
    }
  );
}