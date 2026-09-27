// lib/deviceLocation.ts
// Asks the browser for the device's current location (used when joining,
// starting or confirming a circle). Browser-only: call from client components.
import type { DeviceLocation } from './agora';

export function getDeviceLocation(): Promise<DeviceLocation> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      reject(new Error('unsupported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        }),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 15_000, maximumAge: 0 }
    );
  });
}