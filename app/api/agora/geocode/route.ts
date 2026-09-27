// app/api/agora/geocode/route.ts
// Turns "city + country" into map coordinates, using OpenStreetMap's free
// Nominatim service. Called only when someone presses "Go" (never while
// typing), and results are cached for a day, as Nominatim's usage policy asks.
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const NOMINATIM = 'https://nominatim.openstreetmap.org/search';
const HEADERS = {
  'User-Agent': 'Prosopocracy-Agora/1.0 (+https://www.prosopocracy.com)',
  'Accept-Language': 'en',
};

type NominatimResult = { lat: string; lon: string; display_name: string };

async function lookup(params: Record<string, string>): Promise<NominatimResult | null> {
  const query = new URLSearchParams({ format: 'jsonv2', limit: '1', ...params });
  const res = await fetch(`${NOMINATIM}?${query}`, {
    headers: HEADERS,
    next: { revalidate: 86_400 },
  });
  if (!res.ok) throw new Error(`Nominatim ${res.status}`);
  const data = (await res.json()) as NominatimResult[];
  return data[0] ?? null;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const city = (url.searchParams.get('city') ?? '').trim().slice(0, 100);
  const country = (url.searchParams.get('country') ?? '').trim().slice(0, 100);
  if (!city && !country) {
    return NextResponse.json({ error: 'Enter a city or a country.' }, { status: 400 });
  }

  try {
    // Structured search first; fall back to a free-text search ("Aarhus, Denmark").
    const structured: Record<string, string> = {};
    if (city) structured.city = city;
    if (country) structured.country = country;
    const hit =
      (await lookup(structured)) ??
      (await lookup({ q: [city, country].filter(Boolean).join(', ') }));

    if (!hit) return NextResponse.json({ found: false });
    return NextResponse.json({
      found: true,
      lat: Number(hit.lat),
      lng: Number(hit.lon),
      name: hit.display_name,
    });
  } catch {
    return NextResponse.json({ error: 'The place search is unavailable right now.' }, { status: 502 });
  }
}