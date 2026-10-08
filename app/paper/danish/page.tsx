//app/paper/danish/page.tsx

import type { Metadata } from "next";
import PaperShell from "../PaperShell";
import Paper from "../Paginator";
import { danish } from "../content/danish";
import { english } from "../content/english";

export const metadata: Metadata = {
  title: "Horistics — dansk og engelsk udgave",
  description: "Grammatik, paragrammatik, politik, livskvalitet. Månedlig.",
};

// /paper/danish              → screen version (Danish, then English)
// /paper/danish?layout=print → tête-bêche print version
// /paper/danish?single=1     → Danish only (for the PDF)
export default async function PaperDanish({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; single?: string }>;
}) {
  const { layout, single } = await searchParams;
  return (
    <PaperShell>
      <Paper editions={single ? [danish] : [danish, english]} layout={layout === "print" ? "print" : "screen"} />
    </PaperShell>
  );
}

