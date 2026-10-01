// lib/videos.ts
// Metadata for prosopocracy's own-hosted video series. Files live in
// Cloudflare R2 (bucket: prosopocracy-videos), served over the bucket's
// Public Development URL as plain MP4s via a plain <video> tag — no
// YouTube, no third-party player, no outside moderation dependency.

export const VIDEO_BASE_URL = "https://pub-b7f21e0d30324839accf0a666e05e808.r2.dev";

export type Video = {
  slug: string;
  filename: string; // object key in the R2 bucket
  title: string;
  description: string;
};

// Add future episodes here — one entry per video, newest first or in
// whatever order you want them listed.
export const VIDEOS: Video[] = [
  {
    slug: "grammar-01",
    filename: "GRAMMAR-01-ENG.mp4",
    title: "Grammar, Episode 1",
    description: "Grammar vs Paragrammar",
  },
  {
    slug: "grammatiki-01",
    filename: "GRAMMAR-01-HEL.mp4",
    title: "Γραμματική, Επισόδειο 1",
    description: "Γραμματική και Παραγραμματική",
  },
];

export function videoUrl(filename: string): string {
  return `${VIDEO_BASE_URL}/${filename}`;
}

export function getVideoBySlug(slug: string): Video | undefined {
  return VIDEOS.find((v) => v.slug === slug);
}
