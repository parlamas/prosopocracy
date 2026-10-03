import type { Metadata } from "next";
import PaperShell from "../PaperShell";
import Paper from "../Paginator";
import { polish } from "../content/polish";
import { english } from "../content/english";

export const metadata: Metadata = {
  title: "Horistics — wydanie polskie i angielskie",
  description: "Gramatyka, paragramatyka, polityka, jakość życia, wiadomości interpretacyjne. Tygodnik.",
};

// /paper/polish              → screen version (Polish, then English)
// /paper/polish?layout=print → tête-bêche print version
export default async function PaperPolish({
  searchParams,
}: {
    searchParams: Promise<{ layout?: string; single?: string }>;
}) {
    const { layout, single } = await searchParams;
  return (
    <PaperShell>
            <Paper editions={single ? [polish] : [polish, english]} layout={layout === "print" ? "print" : "screen"} />
    </PaperShell>
  );
}
