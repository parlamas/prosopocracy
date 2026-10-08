import type { Metadata } from "next";
import PaperShell from "../PaperShell";
import Paper from "../Paginator";
import type { Edition } from "../Paginator";
import { englishSchools } from "../content/english";
import { danishSchools } from "../content/danish";
import { polishSchools } from "../content/polish";
import { greekSchools } from "../content/greek";
import { spanishSchools } from "../content/spanish";

export const metadata: Metadata = {
  title: "Horistics — schools edition",
  description: "Grammar, paragrammar, politics, quality of life. Monthly.",
};

// Schools edition (no Interpretive News):
// /paper/schools                          → English
// /paper/schools?lang=polish              → Polish, then English
// /paper/schools?lang=polish&layout=print → tête-bêche print version
// /paper/schools?lang=polish&single=1     → Polish only
const EDITIONS: Record<string, Edition[]> = {
  english: [englishSchools],
  danish: [danishSchools, englishSchools],
  polish: [polishSchools, englishSchools],
  greek: [greekSchools, englishSchools],
  spanish: [spanishSchools, englishSchools],
};

export default async function PaperSchools({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; layout?: string; single?: string }>;
}) {
  const { lang, layout, single } = await searchParams;
  const all = EDITIONS[lang ?? "english"] ?? EDITIONS.english;
  const editions = single === "1" ? [all[0]] : all;
  return (
    <PaperShell>
      <Paper editions={editions} layout={layout === "print" && editions.length === 2 ? "print" : "screen"} />
    </PaperShell>
  );
}
