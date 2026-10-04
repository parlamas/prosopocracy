import { ReactNode } from "react";
import { Lora, Literata } from "next/font/google";

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

// Lora has no Greek letters, so Greek text is set in Literata, a matching book serif.
const greekFont = Literata({
  subsets: ["greek"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});
const first = (f: string) => f.split(",")[0];

// Print setup: exact A5 pages, no browser margins, and only the paper is printed.
const printCss = `
@page { size: 148mm 210mm; margin: 0; }
@media print {
  html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; }
  body * { visibility: hidden; }
  #paper-root, #paper-root * { visibility: visible; }
  #paper-root { position: absolute; left: 0; top: 0; }
}
`;

/** Shared wrapper for every edition page: fonts + print settings. */
export default function PaperShell({ children }: { children: ReactNode }) {
  return (
    <div
      id="paper-root"
      className={lora.className}
      style={{ fontFamily: `${first(lora.style.fontFamily)}, ${greekFont.style.fontFamily}` }}
    >
      <style dangerouslySetInnerHTML={{ __html: printCss }} />
      {children}
    </div>
  );
}
