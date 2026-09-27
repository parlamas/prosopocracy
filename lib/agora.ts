// lib/agora.ts
// Shared agora rules and geometry. Pure functions only — safe to import from
// both server code and client components (no Prisma, no Node-only APIs).

export const RADIUS_KM = 5; // default search radius
export const RADIUS_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20] as const;
export const MAX_RADIUS_KM = 20;
export const DURATIONS = [15, 30, 45, 60, 90, 120] as const;
export const MAX_DURATION_MIN = 120;
export const MIN_SEATS = 4;
export const MAX_SEATS = 8;
export const MAX_DAYS_AHEAD = 30;
export const MAX_UPCOMING_PER_USER = 3;

const KM_PER_DEG_LAT = 111.32;

/** Great-circle distance between two points, in kilometres. */
export function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Rough lat/lng box around a point, used to pre-filter in the database before
 * the exact distance check. (Does not wrap across the ±180° meridian.)
 */
export function boundingBox(lat: number, lng: number, km: number) {
  const dLat = km / KM_PER_DEG_LAT;
  const cos = Math.max(Math.cos((lat * Math.PI) / 180), 0.01);
  const dLng = km / (KM_PER_DEG_LAT * cos);
  return {
    minLat: lat - dLat,
    maxLat: lat + dLat,
    minLng: lng - dLng,
    maxLng: lng + dLng,
  };
}

export function circleEndsAt(circle: { startsAt: Date; durationMin: number }): Date {
  return new Date(circle.startsAt.getTime() + circle.durationMin * 60_000);
}

/** True if someone born on `dateOfBirth` has had their 18th birthday. */
export function isAdult(dateOfBirth: Date, now: Date = new Date()): boolean {
  const eighteenth = new Date(dateOfBirth);
  eighteenth.setFullYear(eighteenth.getFullYear() + 18);
  return eighteenth <= now;
}
