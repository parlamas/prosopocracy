// components/LanguageSwitcher.tsx
'use client';

import { useState } from 'react';
import { HOMEPAGE_TRANSLATIONS, LanguageCode } from '../lib/homepage-translations';
import { flagUrl } from '../lib/language-flags';

// Only languages that actually have a translation entry show up here — as
// more languages are added to homepage-translations.ts, they appear in this
// dropdown automatically, no edits needed in this file.
const AVAILABLE_LANGS = Object.keys(HOMEPAGE_TRANSLATIONS) as LanguageCode[];

function hrefFor(code: LanguageCode) {
  return code === 'en' ? '/' : `/${code}`;
}

export default function LanguageSwitcher({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  const currentEntry = HOMEPAGE_TRANSLATIONS[current as LanguageCode];

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--ink-soft)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: 0,
          marginLeft: 22,
        }}
      >
        {currentEntry && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={flagUrl(current, 20)} alt="" width={16} height={12} style={{ borderRadius: 2 }} />
        )}
        {currentEntry?.label ?? current.toUpperCase()} &#9662;
      </button>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 9 }}
          />
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 8,
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 3,
              minWidth: 170,
              maxHeight: 320,
              overflowY: 'auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              zIndex: 10,
            }}
          >
            {AVAILABLE_LANGS.map((code) => {
              const entry = HOMEPAGE_TRANSLATIONS[code]!;
              return (
                <a
                  key={code}
                  href={hrefFor(code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 14px',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: code === current ? 'var(--civic-blue)' : 'var(--ink-soft)',
                    textDecoration: 'none',
                    fontWeight: code === current ? 700 : 400,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={flagUrl(code, 20)} alt="" width={16} height={12} style={{ borderRadius: 2, flexShrink: 0 }} />
                  {entry.label}
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
