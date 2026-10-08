//app/paper/EditionSelect.tsx

"use client";

import { useRouter } from "next/navigation";

export default function EditionSelect({
  editions,
}: {
  editions: { name: string; href: string }[];
}) {
  const router = useRouter();

  return (
    <select
      defaultValue=""
      aria-label="Choose an edition"
      onChange={(e) => {
        if (e.target.value) router.push(e.target.value);
      }}
      style={{
        fontFamily: "inherit",
        fontSize: "1rem",
        padding: "0.5rem 0.75rem",
        marginTop: "0.5rem",
      }}
    >
      <option value="" disabled>
        Choose an edition…
      </option>
      {editions.map((e) => (
        <option key={e.href} value={e.href}>
          {e.name}
        </option>
      ))}
    </select>
  );
}