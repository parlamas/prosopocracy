// app/paper/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Horistics — the newspaper",
  description:
    "Grammar, paragrammar, politics, quality of life. Weekly. Read every edition online or download it as a PDF.",
};

type Edition = {
  name: string;
  label: string;
  href: string;
  pdf?: string;
};

const EDITIONS: Edition[] = [
  {
    name: "Danish + English",
    label: "Dansk og engelsk udgave",
    href: "/paper/danish",
    pdf: "/paper/pdf/horistics-danish-english.pdf",
  },
  { name: "Greek", label: "Ελληνική έκδοση", href: "/paper/greek" },
  { name: "Spanish", label: "Edición en español", href: "/paper/spanish" },
  { name: "Polish", label: "Wydanie polskie", href: "/paper/polish" },
  { name: "English", label: "English edition", href: "/paper/english" },
];

const linkStyle = {
  fontWeight: 700,
  marginRight: "1.5rem",
  textDecoration: "underline",
} as const;

export default function PaperIndex() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily: "Georgia, serif",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: "2.4rem", margin: 0 }}>Horistics</h1>
      <p style={{ opacity: 0.7, marginTop: "0.25rem" }}>
        Grammar, paragrammar, politics, quality of life. Weekly.
      </p>
      <p>Read each edition online or download it as a PDF.</p>

      <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0 0" }}>
        {EDITIONS.map((e) => (
          <li
            key={e.href}
            style={{
              borderTop: "1px solid rgba(128,128,128,0.35)",
              padding: "1.25rem 0",
            }}
          >
            <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>{e.name}</div>
            <div style={{ opacity: 0.7, marginBottom: "0.75rem" }}>{e.label}</div>
            <Link href={e.href} style={linkStyle}>
              Read online
            </Link>
            {e.pdf ? (
              <a href={e.pdf} download style={linkStyle}>
                Download PDF
              </a>
            ) : (
              <span style={{ opacity: 0.6 }}>PDF coming soon</span>
            )}
          </li>
        ))}
      </ul>

      <p style={{ opacity: 0.6, fontSize: "0.9rem", marginTop: "3rem" }}>
        &copy; 2026 Isidoros Parlamas
      </p>
    </main>
  );
}