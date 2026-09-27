// lib/previewImage.ts
// Shared pieces for the link-preview images (opengraph-image files).

export const PREVIEW_COLORS = {
  paper: '#E9E2CF',
  ink: '#23262B',
  inkSoft: '#4B4E54',
  blue: '#2C3A55',
  red: '#A13D2B',
  brass: '#A9824E',
};

/**
 * Loads Noto Sans (Latin and Greek) from Google Fonts, limited to the characters
 * in `text`. Returns null if unavailable; the image then uses the built-in font.
 */
export async function loadPreviewFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!src) return null;
    const res = await fetch(src);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}