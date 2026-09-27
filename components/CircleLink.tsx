// components/CircleLink.tsx
// Shows a circle's link under it in the lists, with a Copy button.
'use client';

import { useState } from 'react';

export default function CircleLink({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  const path = `/agora/circle/${id}`;

  async function copy() {
    const url = `${window.location.origin}${path}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt('Copy this link:', url);
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <p className="agoraLinkRow">
      <a href={path} className="agoraLinkText">
        prosopocracy.com{path}
      </a>
      <button type="button" className="agoraTextBtn" onClick={copy}>
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </p>
  );
}