import type { Metadata } from "next";
import PaperShell from "../PaperShell";
import Paper from "../Paginator";
import { spanish } from "../content/spanish";
import { english } from "../content/english";

export const metadata: Metadata = {
  title: "Horistics — edición española e inglesa",
  description: "Gramática, paragramática, política, calidad de vida. Mensuario.",
};

// /paper/spanish              → screen version (Spanish, then English)
// /paper/spanish?layout=print → tête-bêche print version
// /paper/spanish?single=1     → Spanish only
export default async function PaperSpanish({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; single?: string }>;
}) {
  const { layout, single } = await searchParams;
  const editions = single === "1" ? [spanish] : [spanish, english];
  return (
    <PaperShell>
      <Paper editions={editions} layout={layout === "print" && editions.length === 2 ? "print" : "screen"} />
    </PaperShell>
  );
}
