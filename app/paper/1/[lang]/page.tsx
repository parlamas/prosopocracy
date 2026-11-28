import { notFound } from "next/navigation";
import PaperShell from "../../PaperShell";
import Paper from "../../Paginator";
import type { Edition } from "../../Paginator";
import { english, englishSchools } from "../../content/1/english";
import { danish, danishSchools } from "../../content/1/danish";
import { polish, polishSchools } from "../../content/1/polish";
import { greek, greekSchools } from "../../content/1/greek";
import { spanish, spanishSchools } from "../../content/1/spanish";

// Archive of No. 1:
// /paper/1/english                → No. 1 in English
// /paper/1/polish                 → No. 1, Polish then English
// add ?single=1  → the language alone
// add ?layout=print → tête-bêche print version
// add ?schools=1 → the schools edition
const FULL: Record<string, Edition> = { english, danish, polish, greek, spanish };
const SCHOOLS: Record<string, Edition> = {
  english: englishSchools, danish: danishSchools, polish: polishSchools,
  greek: greekSchools, spanish: spanishSchools,
};

export default async function PaperNo1({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ single?: string; layout?: string; schools?: string }>;
}) {
  const { lang } = await params;
  const { single, layout, schools } = await searchParams;
  const set = schools === "1" ? SCHOOLS : FULL;
  const local = set[lang];
  if (!local) notFound();
  const editions = lang === "english" || single === "1" ? [local] : [local, set.english];
  return (
    <PaperShell>
      <Paper editions={editions} layout={layout === "print" && editions.length === 2 ? "print" : "screen"} />
    </PaperShell>
  );
}
