// components/AgoraCircleRoom.tsx
// The circle page body: details, members, countdown, and the conversation.
// Members chat freely; any message can also be a definition move
// (proposal, refinement, counterexample, rival definition).
// Refreshes every 3 seconds while the circle is upcoming or live.
// When time is up, the whole conversation stays as the circle's record.
'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import './AgoraExplorer.css';
import './AgoraCircleRoom.css';
import {
  cancelCircle,
  joinCircle,
  leaveCircle,
  postMove,
  type ActionResult,
  type MoveKind,
} from '../app/agora/actions';

const POLL_MS = 3000;

type Phase = 'upcoming' | 'live' | 'ended' | 'cancelled';

type Move = {
  id: string;
  kind: MoveKind;
  text: string;
  replyToId: string | null;
  authorName: string;
  createdAt: string;
  mine: boolean;
};

type RoomData = {
  circle: {
    id: string;
    format: 'ONLINE' | 'IN_PERSON';
    question: string;
    placeName: string;
    startsAt: string;
    durationMin: number;
    maxSeats: number;
    creatorName: string;
  };
  phase: Phase;
  members: { username: string }[];
  moves: Move[];
  me: { signedIn: boolean; isMember: boolean; isCreator: boolean };
  serverNow: string;
};

const KIND_OPTIONS: { kind: MoveKind; label: string; needsTarget: boolean }[] = [
  { kind: 'COMMENT', label: 'Message', needsTarget: false },
  { kind: 'PROPOSAL', label: 'Proposal', needsTarget: false },
  { kind: 'REFINEMENT', label: 'Refinement', needsTarget: true },
  { kind: 'COUNTEREXAMPLE', label: 'Counterexample', needsTarget: true },
  { kind: 'RIVAL', label: 'Rival definition', needsTarget: true },
];

const PLACEHOLDER: Record<MoveKind, string> = {
  COMMENT: 'Write a message…',
  PROPOSAL: 'A definition, stated in one sentence.',
  REFINEMENT: 'The same definition, made more precise.',
  COUNTEREXAMPLE: 'A case the definition includes but should not, or excludes but should include.',
  RIVAL: 'A different definition, offered as a better one.',
};

function formatStart(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function formatRemaining(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

// Opens the phone's share menu (WhatsApp, Messenger, email …); on computers
// without one, copies the circle's link instead.
function ShareButton({ question }: { question: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: question, text: `Join this agora circle: ${question}`, url });
      } catch {
        // the person closed the share menu
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copy this link:', url);
    }
  }

  return (
    <button type="button" className="agoraGhostBtn" onClick={share}>
      {copied ? 'Link copied' : 'Share'}
    </button>
  );
}

export default function AgoraCircleRoom({ circleId }: { circleId: string }) {
  const [data, setData] = useState<RoomData | null>(null);
  const [offsetMs, setOffsetMs] = useState(0); // server clock minus this device's clock
  const [now, setNow] = useState(() => Date.now());
  const [loadError, setLoadError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [kind, setKind] = useState<MoveKind>('COMMENT');
  const [targetId, setTargetId] = useState<string>('');
  const [text, setText] = useState('');
  const [pending, startTransition] = useTransition();

  const chatRef = useRef<HTMLDivElement>(null);
  const stickToBottom = useRef(true);
  const lastCount = useRef(0);

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/agora/circles/${circleId}`, { cache: 'no-store' });
      if (!res.ok) {
        setLoadError(res.status === 404 ? 'This circle does not exist.' : 'Could not load the circle.');
        return;
      }
      const d: RoomData = await res.json();
      setData(d);
      setOffsetMs(new Date(d.serverNow).getTime() - Date.now());
      setLoadError(null);
    } catch {
      setLoadError('Connection problem. Retrying…');
    }
  }, [circleId]);

  // First load
  useEffect(() => {
    load();
  }, [load]);

  // Refresh every 3 s while the circle is upcoming or live (and the tab is visible)
  const phase = data?.phase;
  useEffect(() => {
    if (!phase || phase === 'ended' || phase === 'cancelled') return;
    const id = setInterval(() => {
      if (document.visibilityState === 'visible') load();
    }, POLL_MS);
    return () => clearInterval(id);
  }, [phase, load]);

  // One-second clock for the countdown
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Keep the chat scrolled to the newest message, unless the reader scrolled up
  const moveCount = data?.moves.length ?? 0;
  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;
    if (moveCount !== lastCount.current && stickToBottom.current) {
      el.scrollTop = el.scrollHeight;
    }
    lastCount.current = moveCount;
  }, [moveCount]);

  function run(action: () => Promise<ActionResult>, onSuccess?: () => void) {
    setMessage(null);
    startTransition(async () => {
      const result = await action();
      if (!result.ok) {
        setMessage(result.error);
      } else {
        onSuccess?.();
      }
      await load();
    });
  }

  if (!data) {
    return (
      <section className="section">
        <div className="wrap">
          <p className="agoraEmpty">{loadError ?? 'Loading circle…'}</p>
        </div>
      </section>
    );
  }

  const { circle, me, members, moves } = data;
  const online = circle.format === 'ONLINE';
  const serverNow = now + offsetMs;
  const startMs = new Date(circle.startsAt).getTime();
  const endMs = startMs + circle.durationMin * 60_000;
  const open = data.phase === 'upcoming' || data.phase === 'live';
  const canPost = online && me.isMember && data.phase === 'live';
  const seatsLeft = circle.maxSeats - members.length;

  // Definitions (proposals and rival definitions) are numbered #1, #2, …
  const definitions = moves.filter((m) => m.kind === 'PROPOSAL' || m.kind === 'RIVAL');
  const numberOf = new Map(definitions.map((m, i) => [m.id, i + 1]));
  const byId = new Map(moves.map((m) => [m.id, m]));

  function tagFor(m: Move): string | null {
    const ref = m.replyToId ? numberOf.get(m.replyToId) : undefined;
    switch (m.kind) {
      case 'PROPOSAL':
        return `Proposal #${numberOf.get(m.id)}`;
      case 'RIVAL':
        return `Rival definition #${numberOf.get(m.id)}${ref ? ` · to #${ref}` : ''}`;
      case 'REFINEMENT':
        return `Refinement of #${ref ?? '?'}`;
      case 'COUNTEREXAMPLE':
        return `Counterexample to #${ref ?? '?'}`;
      default:
        return null;
    }
  }

  const option = KIND_OPTIONS.find((o) => o.kind === kind)!;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (option.needsTarget && !targetId) {
      setMessage('Choose which definition you are responding to.');
      return;
    }
    const k = kind;
    const t = option.needsTarget ? targetId : null;
    run(
      () => postMove(circleId, k, text, t),
      () => {
        setText('');
        setKind('COMMENT');
        setTargetId('');
        stickToBottom.current = true;
      }
    );
  }

  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className={online ? 'agoraFormat' : 'agoraFormat inPerson'}>
            {online ? 'Online' : 'In person'}
          </span>
          <h1 className="sectionTitle agoraRoomTitle">{circle.question}</h1>

          <p className="agoraMeta">
            {online ? 'Area' : 'Meeting place'}: {circle.placeName}
          </p>
          <p className="agoraMeta">
            {formatStart(circle.startsAt)} · {circle.durationMin} min · started by{' '}
            {circle.creatorName}
          </p>

          <div className="agoraStatus">
            {data.phase === 'upcoming' && (
              <>
                <strong>Opens in {formatRemaining(startMs - serverNow)}</strong>
                <span>
                  {online
                    ? 'The conversation starts here at the start time.'
                    : `Members meet at ${circle.placeName} at the start time.`}
                </span>
              </>
            )}
            {data.phase === 'live' && (
              <>
                <strong className="agoraLive">Live · {formatRemaining(endMs - serverNow)} left</strong>
                <span>
                  {online
                    ? 'Write below. The page refreshes every few seconds.'
                    : `The circle is meeting now at ${circle.placeName}.`}
                </span>
              </>
            )}
            {data.phase === 'ended' && (
              <>
                <strong>Ended · the record</strong>
                <span>
                  {online
                    ? `${moves.length} message${moves.length === 1 ? '' : 's'}${
                        definitions.length > 0
                          ? ` · ${definitions.length} definition${definitions.length === 1 ? '' : 's'} proposed`
                          : ''
                      }`
                    : 'This in-person circle has ended.'}
                </span>
              </>
            )}
            {data.phase === 'cancelled' && (
              <>
                <strong>Cancelled</strong>
                <span>The member who started this circle cancelled it.</span>
              </>
            )}
          </div>

          <p className="agoraMembers">
            <span className="agoraMembersLabel">
              Members {members.length}/{circle.maxSeats}
            </span>{' '}
            {members.length > 0 ? members.map((m) => m.username).join(', ') : 'none yet'}
          </p>

          {open && (
            <div className="agoraRoomActions">
              {!me.signedIn ? (
                <Link href="/agora/login" className="agoraGhostBtn">
                  Sign in to join
                </Link>
              ) : me.isMember ? (
                <button
                  type="button"
                  className="agoraGhostBtn"
                  disabled={pending}
                  onClick={() => run(() => leaveCircle(circleId))}
                >
                  Leave
                </button>
              ) : seatsLeft > 0 ? (
                <button
                  type="button"
                  className="ctaBtn"
                  disabled={pending}
                  onClick={() => run(() => joinCircle(circleId))}
                >
                  Join
                </button>
              ) : (
                <span className="agoraFull">Full</span>
              )}
              {me.isCreator && (
                <button
                  type="button"
                  className="agoraTextBtn danger"
                  disabled={pending}
                  onClick={() => {
                    if (window.confirm('Cancel this circle? Members will see it as cancelled.')) {
                      run(() => cancelCircle(circleId));
                    }
                  }}
                >
                  Cancel circle
                </button>
              )}
            </div>
          )}

                    {data.phase !== 'cancelled' && (
            <div className="agoraShareRow">
              <ShareButton question={circle.question} />
              <span className="agoraHint">
                Invite people by sending the link on WhatsApp, email or social media.
              </span>
            </div>
          )}

          {message && <p className="agoraMessage">{message}</p>}
          {loadError && <p className="agoraMessage">{loadError}</p>}
        </div>
      </section>

      {online && data.phase !== 'cancelled' && (
        <section className="section">
          <div className="wrap">
            <div className="sectionLabel">
              {data.phase === 'ended' ? 'The Record' : 'The Conversation'}
            </div>

            <div
              className="agoraChat"
              ref={chatRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                stickToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
              }}
            >
              {moves.length === 0 ? (
                <p className="agoraEmpty agoraChatEmpty">
                  {data.phase === 'upcoming'
                    ? 'No messages yet. The conversation opens at the start time.'
                    : data.phase === 'live'
                      ? 'No messages yet. Say hello, or propose a definition.'
                      : 'No messages were posted in this circle.'}
                </p>
              ) : (
                <ol className="agoraChatList">
                  {moves.map((m) => {
                    const tag = tagFor(m);
                    const answered = m.replyToId ? byId.get(m.replyToId) : undefined;
                    return (
                      <li
                        key={m.id}
                        className={`agoraMsg kind-${m.kind.toLowerCase()}${m.mine ? ' mine' : ''}`}
                      >
                        <div className="agoraMsgHead">
                          <span className="agoraMsgAuthor">{m.mine ? 'You' : m.authorName}</span>
                          <span className="agoraMsgTime">{formatTime(m.createdAt)}</span>
                          {tag && <span className="agoraMsgTag">{tag}</span>}
                        </div>
                        {answered && (m.kind === 'REFINEMENT' || m.kind === 'COUNTEREXAMPLE' || m.kind === 'RIVAL') && (
                          <p className="agoraMsgQuote">{answered.text}</p>
                        )}
                        <p className="agoraMsgText">{m.text}</p>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>

            {canPost && (
              <form className="agoraComposer" onSubmit={submit}>
                <div className="agoraKindRow" role="radiogroup" aria-label="Type of message">
                  {KIND_OPTIONS.filter((o) => !o.needsTarget || definitions.length > 0).map((o) => (
                    <button
                      key={o.kind}
                      type="button"
                      role="radio"
                      aria-checked={kind === o.kind}
                      className={kind === o.kind ? 'agoraKindBtn active' : 'agoraKindBtn'}
                      onClick={() => {
                        setKind(o.kind);
                        if (o.needsTarget && !targetId && definitions.length > 0) {
                          setTargetId(definitions[definitions.length - 1].id);
                        }
                      }}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>

                {option.needsTarget && (
                  <label className="agoraTargetLabel">
                    Responding to
                    <select value={targetId} onChange={(e) => setTargetId(e.target.value)}>
                      {definitions.map((d) => (
                        <option key={d.id} value={d.id}>
                          #{numberOf.get(d.id)}: {d.text.length > 70 ? `${d.text.slice(0, 70)}…` : d.text}
                        </option>
                      ))}
                    </select>
                  </label>
                )}

                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                      e.preventDefault();
                      e.currentTarget.form?.requestSubmit();
                    }
                  }}
                  maxLength={500}
                  rows={3}
                  placeholder={PLACEHOLDER[kind]}
                  required
                />
                <div className="agoraFormActions">
                  <button type="submit" className="ctaBtn" disabled={pending}>
                    Send
                  </button>
                  <span className="agoraHint">Ctrl+Enter also sends.</span>
                </div>
              </form>
            )}

            {data.phase === 'live' && !me.isMember && (
              <p className="agoraHint agoraReadOnly">
                You are reading this conversation. Only members of the circle can write.
              </p>
            )}

            {data.phase === 'ended' && definitions.length > 0 && (
              <div className="agoraSummary">
                <div className="sectionLabel">Definitions Proposed</div>
                <ol className="agoraSummaryList">
                  {definitions.map((d) => {
                    const responses = moves.filter((m) => m.replyToId === d.id);
                    const counters = responses.filter((m) => m.kind === 'COUNTEREXAMPLE').length;
                    const refinements = responses.filter((m) => m.kind === 'REFINEMENT').length;
                    return (
                      <li key={d.id}>
                        <span className="agoraSummaryNumber">#{numberOf.get(d.id)}</span>
                        <p className="agoraMsgText">{d.text}</p>
                        <p className="agoraMoveMeta">
                          {d.authorName} ·{' '}
                          <span className={counters === 0 ? 'agoraTallyClean' : 'agoraTally'}>
                            {counters === 0
                              ? 'No counterexample'
                              : `${counters} counterexample${counters === 1 ? '' : 's'}`}
                          </span>
                          {refinements > 0 &&
                            ` · ${refinements} refinement${refinements === 1 ? '' : 's'}`}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
