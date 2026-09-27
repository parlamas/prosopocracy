// components/LocalTime.tsx
// Shows a date and time in the visitor's own time zone. (The server runs in
// UTC, so times are formatted in the browser rather than on the server.)
'use client';

import { useEffect, useState } from 'react';

export default function LocalTime({ iso }: { iso: string }) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(
      new Date(iso).toLocaleString(undefined, {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    );
  }, [iso]);

  return <time dateTime={iso}>{text}</time>;
}