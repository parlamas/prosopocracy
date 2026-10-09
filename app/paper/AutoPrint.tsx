//app/paper/AutoPrint.tsx

"use client";

import { useEffect } from "react";

// Opens the print dialog when the page is loaded with ?print=1
export default function AutoPrint() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") === "1") {
      document.fonts.ready.then(() => setTimeout(() => window.print(), 300));
    }
  }, []);
  return null;
}