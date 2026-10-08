//app/paper/english/page.tsx

import type { Metadata } from "next";
import PaperShell from "../PaperShell";
import Paper from "../Paginator";
import { english } from "../content/english";

export const metadata: Metadata = {
  title: "Horistics — English edition",
  description: "Grammar, paragrammar, politics, quality of life, interpretive news. Monthly.",
};

// English on its own (for previewing while you write).
export default function PaperEnglish() {
  return (
    <PaperShell>
      <Paper editions={[english]} />
    </PaperShell>
  );
}
