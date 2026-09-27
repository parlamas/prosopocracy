// components/AgoraExplorer.tsx
// Find circles within a chosen radius (1–20 km) of a point, join or leave them, and start new ones.
// Circles are either ONLINE (dialogue on the site; the map point marks the
// neighbourhood) or IN_PERSON (the map point is the exact meeting spot).
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import './AgoraExplorer.css';
import {
  createCircle,
  joinCircle,
  leaveCircle,
  type ActionResult,
} from '../app/agora/actions';
import {
  DURATIONS,
  MAX_SEATS,
  MIN_SEATS,
  RADIUS_KM,
  RADIUS_OPTIONS,
  type RepeatSource,
} from '../lib/agora';

const AgoraMap = dynamic(() => import('./AgoraMap'), {
  ssr: false,
  loading: () => <div className="agoraMapPlaceholder">Loading map…</div>,
});

type Point = { lat: number; lng: number };
type Format = 'ONLINE' | 'IN_PERSON';

type NearbyCircle = {
  id: string;
  format: Format;
  question: string;
  placeName: string;
  latitude: number;
  longitude: number;
  startsAt: string;
  durationMin: number;
  maxSeats: number;
  seatsTaken: number;
  joined: boolean;
  isCreator: boolean;
  distanceKm: number;
};

const FORMAT_LABEL: Record<Format, string> = {
  ONLINE: 'Online',
  IN_PERSON: 'In person',
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

function defaultStartLocal(): string {
  const d = new Date(Date.now() + 60 * 60_000);
  d.setMinutes(0, 0, 0);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function AgoraExplorer({
  signedIn,
  repeatFrom = null,
}: {
  signedIn: boolean;
  repeatFrom?: RepeatSource | null;
}) {
  const [centre, setCentre] = useState<Point | null>(
    repeatFrom ? { lat: repeatFrom.latitude, lng: repeatFrom.longitude } : null
  );
  const [radiusKm, setRadiusKm] = useState<number>(RADIUS_KM);
  const [circles, setCircles] = useState<NearbyCircle[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(!!repeatFrom && signedIn);
  const [pending, startTransition] = useTransition();
  const createRef = useRef<HTMLDivElement>(null);

  // Arriving from "Repeat": scroll to the pre-filled form.
  useEffect(() => {
    if (repeatFrom && signedIn) createRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [repeatFrom, signedIn]);

  const load = useCallback(async (p: Point, r: number) => {
    setLoading(true);
    try {
      const res = await fetch('/api/agora/circles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat: p.lat, lng: p.lng, radiusKm: r }),
        cache: 'no-store',
      });
      const data = await res.json();
      if (res.ok) {
        setCircles(data.circles);
      } else {
        setCircles([]);
        setMessage(data.error ?? 'Could not load circles.');
      }
    } catch {
      setMessage('Could not load circles.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (centre) load(centre, radiusKm);
  }, [centre, radiusKm, load]);

  function useMyLocation() {
    if (!navigator.geolocation) {
      setMessage('Your browser cannot share its location. Tap the map instead.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setMessage(null);
        setCentre({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => setMessage('Location was not shared. Tap the map to choose a centre instead.'),
      { enableHighAccuracy: false, timeout: 10_000 }
    );
  }

  function run(action: () => Promise<ActionResult>, onSuccess?: () => void) {
    setMessage(null);
    startTransition(async () => {
      const result = await action();
      if (!result.ok) {
        setMessage(result.error);
      } else {
        onSuccess?.();
      }
      if (centre) await load(centre, radiusKm);
    });
  }

  const now = Date.now();

  return (
    <section className="section">
      <div className="wrap">
        <div className="sectionLabel">Find a Circle</div>
        <h2 className="sectionTitle">Circles within {radiusKm} km</h2>
        <p className="sectionIntro">
          Tap the map to choose a centre anywhere in the world, or use your current location. The
          location is only used for this search and is not saved.
        </p>

        <div className="agoraToolbar">
          <button type="button" className="ctaBtn" onClick={useMyLocation}>
            Use my location
          </button>
          <label className="agoraRadius">
            Radius
            <select value={radiusKm} onChange={(e) => setRadiusKm(Number(e.target.value))}>
              {RADIUS_OPTIONS.map((r) => (
                <option key={r} value={r}>
                  {r} km
                </option>
              ))}
            </select>
          </label>
          {centre && (
            <span className="agoraCoords">
              Centre {centre.lat.toFixed(4)}, {centre.lng.toFixed(4)}
            </span>
          )}
        </div>

        <div className="agoraMap">
          <AgoraMap
            centre={centre}
            radiusKm={radiusKm}
            circles={circles}
            onPick={(lat, lng) => {
              setMessage(null);
              setCentre({ lat, lng });
            }}
          />
        </div>

        {message && <p className="agoraMessage">{message}</p>}

        {!centre && <p className="agoraEmpty">Choose a centre to see circles near it.</p>}

        {centre && !loading && circles.length === 0 && (
          <p className="agoraEmpty">No open circles within {radiusKm} km yet.</p>
        )}

        {centre && loading && <p className="agoraEmpty">Looking for circles…</p>}

        {circles.length > 0 && (
          <ul className="agoraList">
            {circles.map((c) => {
              const started = new Date(c.startsAt).getTime() <= now;
              const full = c.seatsTaken >= c.maxSeats;
              return (
                <li key={c.id} className="agoraCircleItem">
                  <div>
                    <span className={c.format === 'ONLINE' ? 'agoraFormat' : 'agoraFormat inPerson'}>
                      {FORMAT_LABEL[c.format]}
                    </span>
                    <h3>
                      <Link href={`/agora/circle/${c.id}`} className="agoraCircleLink">
                        {c.question}
                      </Link>
                    </h3>
                    <p className="agoraMeta">
                      {c.placeName} · {c.distanceKm.toFixed(1)} km away
                    </p>
                    <p className="agoraMeta">
                      {started ? (
                        <span className="agoraNow">Happening now</span>
                      ) : (
                        formatStart(c.startsAt)
                      )}{' '}
                      · {c.durationMin} min · {c.seatsTaken}/{c.maxSeats} seats
                    </p>
                  </div>
                  <div className="agoraCircleAction">
                    {!signedIn ? (
                      <Link href="/agora/login" className="agoraGhostBtn">
                        Sign in to join
                      </Link>
                    ) : c.joined ? (
                      <button
                        type="button"
                        className="agoraGhostBtn"
                        disabled={pending}
                        onClick={() => run(() => leaveCircle(c.id))}
                      >
                        Leave
                      </button>
                    ) : full ? (
                      <span className="agoraFull">Full</span>
                    ) : (
                      <button
                        type="button"
                        className="ctaBtn"
                        disabled={pending}
                        onClick={() => run(() => joinCircle(c.id))}
                      >
                        Join
                      </button>
                    )}
                    {c.joined && (
                      <span className="agoraBadge">
                        {c.isCreator ? 'You started this' : 'You joined'}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

                <div className="agoraCreate" ref={createRef}>
          <h3>Start a circle</h3>
          {!signedIn ? (
            <p className="agoraHint">
              <Link href="/agora/login">Sign in</Link> with your Veltistos account to start or join a
              circle.
            </p>
          ) : !showForm ? (
            <>
              <p className="agoraHint">
                A circle can meet online, on this site, or in person at a real place. Tap the map
                first: for an in-person circle, tap the exact meeting spot; for an online one, tap
                roughly your neighbourhood.
              </p>
              <button
                type="button"
                className="ctaBtn"
                disabled={!centre}
                onClick={() => setShowForm(true)}
              >
                Start a circle here
              </button>
            </>
          ) : (
                        <CreateCircleForm
              centre={centre}
              initial={repeatFrom}
              pending={pending}
              onCancel={() => setShowForm(false)}
              onSubmit={(input) =>
                run(
                  () => createCircle(input),
                  () => setShowForm(false)
                )
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}

function CreateCircleForm({
  centre,
  initial,
  pending,
  onCancel,
  onSubmit,
}: {
  centre: Point | null;
  initial: RepeatSource | null;
  pending: boolean;
  onCancel: () => void;
  onSubmit: (input: Parameters<typeof createCircle>[0]) => void;
}) {
    const [format, setFormat] = useState<Format>(initial?.format ?? 'ONLINE');
  const [question, setQuestion] = useState(initial?.question ?? '');
  const [placeName, setPlaceName] = useState(initial?.placeName ?? '');
  const [startLocal, setStartLocal] = useState(defaultStartLocal);
  const [durationMin, setDurationMin] = useState(initial?.durationMin ?? 30);
  const [maxSeats, setMaxSeats] = useState(initial?.maxSeats ?? MAX_SEATS);
  const [error, setError] = useState<string | null>(null);

  const online = format === 'ONLINE';

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!centre) {
      setError(online ? 'Tap the map to mark your neighbourhood.' : 'Tap the map to choose where the circle meets.');
      return;
    }
    const start = new Date(startLocal);
    if (Number.isNaN(start.getTime())) {
      setError('Choose a start time.');
      return;
    }
    setError(null);
    onSubmit({
      format,
      question,
      placeName,
      latitude: centre.lat,
      longitude: centre.lng,
      startsAt: start.toISOString(),
      durationMin,
      maxSeats,
    });
  }

  const seatOptions: number[] = [];
  for (let n = MIN_SEATS; n <= MAX_SEATS; n++) seatOptions.push(n);

  return (
        <form className="agoraForm" onSubmit={submit}>
      {initial && (
        <p className="agoraHint agoraRepeatNote">
          Repeating an earlier circle. Everything is filled in: choose a new start time.
        </p>
      )}
      <div className="agoraSegment" role="radiogroup" aria-label="Format">
        <button
          type="button"
          role="radio"
          aria-checked={online}
          className={online ? 'agoraSegBtn active' : 'agoraSegBtn'}
          onClick={() => setFormat('ONLINE')}
        >
          Online
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={!online}
          className={!online ? 'agoraSegBtn active' : 'agoraSegBtn'}
          onClick={() => setFormat('IN_PERSON')}
        >
          In person
        </button>
      </div>
      <p className="agoraHint">
        {online
          ? 'The dialogue takes place here on the site, among people nearby.'
          : 'Members meet at a real place and hold the dialogue face to face.'}
      </p>

      <label>
        Issue to discuss
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="A concept to define, a local question, or anything worth discussing. For example: What is justice? Should the city centre be car-free?"
          maxLength={500}
          rows={3}
          required
        />
      </label>
      <label>
        {online ? 'Area' : 'Meeting place'}
        <input
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
          placeholder={online ? 'Aarhus C' : 'Café Casablanca, Rosensgade'}
          maxLength={80}
          required
        />
      </label>
      <div className="agoraFormRow">
        <label>
          Starts
          <input
            type="datetime-local"
            value={startLocal}
            onChange={(e) => setStartLocal(e.target.value)}
            required
          />
        </label>
        <label>
          Duration
          <select value={durationMin} onChange={(e) => setDurationMin(Number(e.target.value))}>
            {DURATIONS.map((d) => (
              <option key={d} value={d}>
                {d} min
              </option>
            ))}
          </select>
        </label>
        <label>
          Seats
          <select value={maxSeats} onChange={(e) => setMaxSeats(Number(e.target.value))}>
            {seatOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
      {centre && (
        <p className="agoraHint">
          {online
            ? 'The neighbourhood is marked at the selected point, rounded to about 1 km so no exact address is shown.'
            : `Meeting spot pinned at ${centre.lat.toFixed(4)}, ${centre.lng.toFixed(4)}.`}{' '}
          Tap the map to move it.
        </p>
      )}
      {error && <p className="agoraMessage">{error}</p>}
      <div className="agoraFormActions">
        <button type="submit" className="ctaBtn" disabled={pending}>
          Start circle
        </button>
        <button type="button" className="agoraGhostBtn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
