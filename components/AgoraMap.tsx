// components/AgoraMap.tsx
// Leaflet map for the agora. Loaded only in the browser (see AgoraExplorer).
'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import {
  Circle,
  CircleMarker,
  MapContainer,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvents,
} from 'react-leaflet';

type Point = { lat: number; lng: number };
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

function FollowCentre({ centre }: { centre: Point | null }) {
  const map = useMap();
  useEffect(() => {
    if (!centre) return;
    const target: [number, number] = [centre.lat, centre.lng];
    const zoom = map.getZoom();
    if (zoom < 12 || !map.getBounds().contains(target)) {
      map.setView(target, Math.max(zoom, 12));
    }
  }, [centre, map]);
  return null;
}

export default function AgoraMap({
  centre,
  radiusKm,
  circles,
  onPick,
}: {
  centre: Point | null;
  radiusKm: number;
  circles: MapCircle[];
  onPick: (lat: number, lng: number) => void;
}) {
  return (
    <MapContainer center={[30, 10]} zoom={2} worldCopyJump style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
      />
      <ClickToPick onPick={onPick} />
      <FollowCentre centre={centre} />

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
