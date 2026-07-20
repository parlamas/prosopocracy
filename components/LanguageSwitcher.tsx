// components/LanguageSwitcher.tsx
'use client';

import { useState } from 'react';

const LANGS = [
  { code: 'en', label: 'EN', href: '/' },
  { code: 'el', label: 'ΕΛ', href: '/el' },
  { code: 'es', label: 'ES', href: '/es' },
  // Add future languages here, e.g.:
  // { code: 'fr', label: 'FR', href: '/fr' },
];

export default function LanguageSwitcher({ current }: { current: string }) {
  const [open, setOpen] = useState(false);

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
          gap: 4,
          padding: 0,
          marginLeft: 22,
        }}
      >
        {LANGS.find((l) => l.code === current)?.label ?? current.toUpperCase()} &#9662;
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
              minWidth: 100,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              zIndex: 10,
            }}
          >
            {LANGS.map((l) => (
              <a
                key={l.code}
                href={l.href}
                style={{
                  display: 'block',
                  padding: '8px 14px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: l.code === current ? 'var(--civic-blue)' : 'var(--ink-soft)',
                  textDecoration: 'none',
                  fontWeight: l.code === current ? 700 : 400,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
