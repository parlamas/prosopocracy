import type { Metadata } from "next";
import PaperShell from "../PaperShell";
import Paper from "../Paginator";
import { greek } from "../content/greek";
import { english } from "../content/english";

export const metadata: Metadata = {
  title: "Horistics — ελληνική και αγγλική έκδοση",
  description: "Γραμματική, παραγραμματική, πολιτική, ποιότητα ζωής. Μηνιαία.",
};

// /paper/greek              → screen version (Greek, then English)
// /paper/greek?layout=print → tête-bêche print version
// /paper/greek?single=1     → Greek only (for the PDF)
export default async function PaperGreek({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; single?: string }>;
}) {
  const { layout, single } = await searchParams;
  return (
    <PaperShell>
      <Paper editions={single ? [greek] : [greek, english]} layout={layout === "print" ? "print" : "screen"} />
    </PaperShell>
  );
}
