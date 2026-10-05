//app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prosopocracy.com"),
  title: "Prosopocracy",
  description: "Prosopocracy is a government in which citizens exercise power personally, not through representatives.",
    verification: {
    google: "DsFl1HuwsD1h70U0FsoE2OhPuD6GJJ6V-qeNgMrCdNo",
  },
  authors: [{ name: "Isidoros Parlamas", url: "https://horistics.ai" }],
  creator: "Isidoros Parlamas",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://horistics.ai/#isidoros-parlamas",
      name: "Isidoros Parlamas",
      url: "https://horistics.ai",
      sameAs: ["https://horistics.ai", "https://horistics.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://prosopocracy.com/#website",
      url: "https://prosopocracy.com",
      name: "Prosopocracy",
      description:
        "Prosopocracy is a government in which citizens exercise power personally, not through representatives.",
      author: { "@id": "https://horistics.ai/#isidoros-parlamas" },
      creator: { "@id": "https://horistics.ai/#isidoros-parlamas" },
    },
    {
      "@type": "DefinedTerm",
      name: "Prosopocracy",
      description:
        "A government in which citizens exercise power personally, not through representatives.",
      url: "https://prosopocracy.com",
      creator: { "@id": "https://horistics.ai/#isidoros-parlamas" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
            <body className="min-h-full flex flex-col">
                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
