// lib/locationCheck.ts
// Server-side checks on a location reported by a member's device.
// A website cannot make location fully fake-proof, so several independent
// checks are combined to stop casual faking:
//   1. accuracy: the reading must come with a realistic accuracy value;
//   2. internet address: the device must not be far from where its internet
//      connection is (Vercel's IP lookup), which catches most browser-tool fakes;
//   3. travel: the position must not jump faster than is physically possible
//      since the member's previous check in the same circle.
// Only the outcome is kept by the caller, plus a position rounded to ~1 km.
import { headers } from 'next/headers';
import { haversineKm, type DeviceLocation } from './agora';

const MAX_ACCURACY_M = 1000;
const MAX_IP_DISTANCE_KM = 300;
const MAX_SPEED_KMH = 250;
const MIN_JUMP_KM = 50;

export type PreviousCheck = { lat: number | null; lng: number | null; at: Date | null };

export type LocationVerdict =
  | { valid: true; lat: number; lng: number; distanceKm: number }
  | { valid: false; reason: string };

/** Rounds a coordinate to 2 decimals (about 1 km). */
export function roundCoord(value: number): number {
  return Math.round(value * 100) / 100;
}

export async function checkLocation(
  location: DeviceLocation | null | undefined,
  target: { latitude: number; longitude: number },
  previous?: PreviousCheck
): Promise<LocationVerdict> {
  if (!location) return { valid: false, reason: 'Your location is needed.' };

  const lat = Number(location.lat);
  const lng = Number(location.lng);
  const accuracy = Number(location.accuracy);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) {
    return { valid: false, reason: 'Your device sent an invalid location.' };
  }

  // 1. Accuracy
  if (!Number.isFinite(accuracy) || accuracy <= 0 || accuracy > MAX_ACCURACY_M) {
    return {
      valid: false,
      reason: 'Your location is not precise enough. Turn on Wi-Fi or GPS and try again.',
    };
  }

  // 2. Internet address (only on the live site; there is no lookup on localhost)
  const h = await headers();
  const ipLatRaw = h.get('x-vercel-ip-latitude');
  const ipLngRaw = h.get('x-vercel-ip-longitude');
  if (ipLatRaw && ipLngRaw) {
    const ipLat = Number(ipLatRaw);
    const ipLng = Number(ipLngRaw);
    if (
      Number.isFinite(ipLat) &&
      Number.isFinite(ipLng) &&
      haversineKm(lat, lng, ipLat, ipLng) > MAX_IP_DISTANCE_KM
    ) {
      return {
        valid: false,
        reason:
          'Your internet connection appears to be far from your device’s location. If you use a VPN, turn it off and try again.',
      };
    }
  }

  // 3. Travel since the previous check
  if (previous && previous.lat !== null && previous.lng !== null && previous.at) {
    const km = haversineKm(lat, lng, previous.lat, previous.lng);
    const hours = Math.max((Date.now() - previous.at.getTime()) / 3_600_000, 1 / 60);
    if (km > MIN_JUMP_KM && km / hours > MAX_SPEED_KMH) {
      return { valid: false, reason: 'Your location changed faster than is physically possible.' };
    }
  }

  return {
    valid: true,
    lat,
    lng,
    distanceKm: haversineKm(lat, lng, target.latitude, target.longitude),
  };
}