// components/AgoraMap.tsx
// Leaflet map for the agora. Loaded only in the browser (see AgoraExplorer).
'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {
  AttributionControl,
  Circle,
  CircleMarker,
  MapContainer,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvents,
} from 'react-leaflet';

type Point = { lat: number; lng: number };
type MapView = { lat: number; lng: number; zoom: number; key: number };
type MapCircle = { id: string; question: string; latitude: number; longitude: number };

const CIVIC_BLUE = '#2C3A55';
const STAMP_RED = '#A13D2B';

function ClickToPick({ onPick }: { onPick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onPick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

// Zoom level at which the search circle roughly fits the map.
function zoomForRadius(km: number): number {
  if (km <= 0.2) return 17;
  if (km <= 0.5) return 16;
  if (km < 1) return 15;
  if (km <= 1) return 14;
  if (km <= 2) return 13;
  if (km <= 5) return 12;
  if (km <= 10) return 11;
  return 10;
}

function FollowCentre({ centre, radiusKm }: { centre: Point | null; radiusKm: number }) {
    const map = useMap();
  const hadCentre = useRef(false);
  useEffect(() => {
    if (!centre) {
      // After "Reset": back to the world view.
      if (hadCentre.current) map.setView([30, 10], 2);
      hadCentre.current = false;
      return;
    }
    hadCentre.current = true;
    const target: [number, number] = [centre.lat, centre.lng];
    const wanted = zoomForRadius(radiusKm);
    const zoom = map.getZoom();
    if (zoom < wanted - 2 || !map.getBounds().contains(target)) {
      map.setView(target, wanted);
    }
  }, [centre, radiusKm, map]);
  return null;
}

// Moves the map when a country is searched (without choosing a centre).
function FollowView({ view }: { view: MapView | null }) {
  const map = useMap();
  useEffect(() => {
    if (view) map.setView([view.lat, view.lng], view.zoom);
  }, [view, map]);
  return null;
}

export default function AgoraMap({
  centre,
  radiusKm,
  view = null,
  circles,
  onPick,
}: {
  centre: Point | null;
  radiusKm: number;
  view?: MapView | null;
  circles: MapCircle[];
  onPick: (lat: number, lng: number) => void;
}) {
  return (
        <MapContainer
      center={[30, 10]}
      zoom={2}
      worldCopyJump
      attributionControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <AttributionControl prefix='<a href="https://leafletjs.com">Leaflet</a>' />
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
      />
      <ClickToPick onPick={onPick} />
                  <FollowCentre centre={centre} radiusKm={radiusKm} />
      <FollowView view={view} />

      {centre && (
        <>
          <Circle
            center={[centre.lat, centre.lng]}
            radius={radiusKm * 1000}
            pathOptions={{ color: CIVIC_BLUE, weight: 1.5, fillOpacity: 0.06 }}
          />
          <CircleMarker
            center={[centre.lat, centre.lng]}
            radius={6}
            pathOptions={{ color: CIVIC_BLUE, fillColor: CIVIC_BLUE, fillOpacity: 1 }}
          />
        </>
      )}

      {circles.map((c) => (
        <CircleMarker
          key={c.id}
          center={[c.latitude, c.longitude]}
          radius={8}
          pathOptions={{ color: STAMP_RED, fillColor: STAMP_RED, fillOpacity: 0.85 }}
        >
          <Tooltip>{c.question}</Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
