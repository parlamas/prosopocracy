// components/MyCircleActions.tsx
// The buttons next to each circle on "My circles": Repeat, and
// Delete (circles you started) or Remove (circles you joined, i.e. leave).
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { deleteCircle, leaveCircle } from '../app/agora/actions';

export default function MyCircleActions({ id, started }: { id: string; started: boolean }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function remove() {
    const question = started
      ? 'Delete this circle permanently? Its conversation will be deleted for everyone who took part.'
      : 'Remove this circle from your list? You will leave it.';
    if (!window.confirm(question)) return;

    setError(null);
    startTransition(async () => {
      const result = started ? await deleteCircle(id) : await leaveCircle(id);
      if (!result.ok) {
        setError(result.error);
      } else {
        router.refresh();
      }
    });
  }

  return (
    <>
      <Link href={`/agora?repeat=${id}`} className="agoraGhostBtn">
        Repeat
      </Link>
      <button type="button" className="agoraTextBtn danger" disabled={pending} onClick={remove}>
        {started ? 'Delete' : 'Remove'}
      </button>
      {error && <span className="agoraFull">{error}</span>}
    </>
  );
}