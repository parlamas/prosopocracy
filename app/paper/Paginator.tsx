"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import styles from "./paper.module.css";

/* ───────────── Building blocks you use in the content files ───────────── */

/** Forces the next block onto a new page. */
export function PageBreak() {
  return <div data-break="page" />;
}

/** Everything inside runs across the full page width (one column). */
export function OneColumn({ children }: { children: ReactNode }) {
  return <div data-wide="1">{children}</div>;
}

/** Front page with two stories side by side: one in the left column, one in the right. */
export function FrontPage({ children }: { children: ReactNode }) {
  return <div data-front="1">{children}</div>;
}

/** One story. Inside <FrontPage>, whatever doesn't fit is held back until <Continue id="..."/>. */
export function Story({ id, children }: { id: string; children: ReactNode }) {
  return <div data-story={id}>{children}</div>;
}

/** Where the rest of a front-page story continues. */
export function Continue({ id }: { id: string }) {
  return <div data-continue={id} />;
}

/** A definition: whole definition in bright blue, the defined term in bold blue. */
export function Def({ term, children }: { term: string; children: ReactNode }) {
  return (
    <span className={styles.def}>
      <span className={styles.defTerm}>{term}</span> {children}
    </span>
  );
}

/* ───────────── Editions ───────────── */

export type Edition = {
  lang: string;            // "en", "da", "el", "es" — used for hyphenation
  name: string;            // paper name in the page footers
  date: string;            // issue date in the page footers
  masthead: ReactNode;     // top of the edition's front page
  continuedOn: string;     // e.g. "Continued on page {n} →"   ({n} = page number)
  continuedFrom: string;   // e.g. "Continued from page 1"
  content: ReactNode;      // the articles, in reading order
};

type Slot = { box: HTMLElement; before: Node | null; overflows: () => boolean; force?: boolean };

/** Lays out one edition into `out`. Returns its page count and a way to add blank pages. */
function layoutEdition(src: HTMLElement, mast: HTMLElement, out: HTMLElement, ed: Edition) {
  let pageNo = 0;
  let page!: HTMLElement;
  let cols!: HTMLDivElement;

    const isHeading = (el: Element | null) => !!el && /^H[1-6]$/.test(el.tagName);

  // Number the paragraphs of each article (restarting at every article headline),
  // so readers can match paragraphs between the language editions.
  {
    let pn = 0;
    let skip = false;
    const noNumber = `.${CSS.escape(styles.box)}, .${CSS.escape(styles.imprint)}`;
    for (const el of Array.from(src.querySelectorAll("h2, p")) as HTMLElement[]) {
            if (el.tagName === "H2") {
        skip = el.hasAttribute("data-nonum");
        continue;
      }
      el.removeAttribute("data-pn");
      if (skip || el.classList.contains(styles.lead) || el.closest(noNumber)) continue;
      el.dataset.pn = String(++pn);
    }
  }

  // Clone blocks; a <OneColumn> becomes one full-width group that holds its blocks.
  const flatten = (nodes: Element[]): HTMLElement[] => {
    const res: HTMLElement[] = [];
    for (const n of nodes) {
      const el = n as HTMLElement;
      if (el.dataset.wide) {
        const group = document.createElement("div");
        group.className = styles.wide;
        group.dataset.group = "1";
        for (const c of Array.from(el.children)) group.appendChild(c.cloneNode(true));
        res.push(group);
      } else {
        res.push(el.cloneNode(true) as HTMLElement);
      }
    }
    return res;
  };

  // If a page ends with a full-width block, stop the column line where that block ends.
  const finishPage = () => {
    const last = cols?.lastElementChild as HTMLElement | null;
    if (last && last.classList.contains(styles.wide)) {
      const gap = cols.clientHeight - (last.offsetTop + last.offsetHeight);
      cols.style.setProperty("--line-bottom", `${Math.max(gap + 2, 0)}px`);
    }
  };

  const newPage = () => {
    finishPage();
    pageNo++;
    page = document.createElement("section");
    page.className = styles.page;
    page.lang = ed.lang;
    if (pageNo === 1) {
      for (const n of Array.from(mast.childNodes)) page.appendChild(n.cloneNode(true));
    }
    cols = document.createElement("div");
    cols.className = styles.columns;
    page.appendChild(cols);
    if (pageNo > 1) {
      const folio = document.createElement("div");
      folio.className = styles.folio;
      for (const text of [ed.name, ed.date, String(pageNo)]) {
        const span = document.createElement("span");
        span.textContent = text;
        folio.appendChild(span);
      }
      page.appendChild(folio);
    }
    out.appendChild(page);
  };

  const main: Slot = {
    get box() {
      return cols;
    },
    before: null,
    overflows: () =>
      cols.scrollWidth > cols.clientWidth + 1 || cols.scrollHeight > cols.clientHeight + 1,
  };

  const contentCount = (s: Slot) => s.box.childElementCount - (s.before ? 1 : 0);
  const put = (s: Slot, node: Node) => s.box.insertBefore(node, s.before);
  const lastContent = (s: Slot) =>
    s.before ? (s.before as Element).previousElementSibling : s.box.lastElementChild;

  // Place as many words of the paragraph as fit; return the rest, or null if nothing fits.
  const splitToFit = (el: HTMLElement, s: Slot): HTMLElement | null => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const texts: Text[] = [];
    while (walker.nextNode()) texts.push(walker.currentNode as Text);

    const points: [Text, number][] = [];
    let prevEndsSpace = false;
    for (const t of texts) {
      const str = t.data;
      for (let i = 0; i < str.length; i++) {
        const prevSpace = i === 0 ? prevEndsSpace : /\s/.test(str[i - 1]);
        if (prevSpace && !/\s/.test(str[i])) points.push([t, i]);
      }
      if (str.length) prevEndsSpace = /\s/.test(str[str.length - 1]);
    }
    if (!points.length) return null;

    const firstPart = (end: [Text, number]) => {
      const r = document.createRange();
      r.setStart(el, 0);
      r.setEnd(end[0], end[1]);
      const part = el.cloneNode(false) as HTMLElement;
      part.appendChild(r.cloneContents());
      return part;
    };

    let lo = 0;
    let hi = points.length - 1;
    let best = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      const part = firstPart(points[mid]);
      put(s, part);
      const fits = !s.overflows();
      part.remove();
      if (fits) {
        best = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    if (best < 0) return null;

    const part = firstPart(points[best]);
    part.classList.add(styles.splitTop);
    put(s, part);

    const r2 = document.createRange();
    r2.setStart(points[best][0], points[best][1]);
    r2.setEnd(el, el.childNodes.length);
    const rest = el.cloneNode(false) as HTMLElement;
    rest.classList.remove(styles.splitTop);
    rest.removeAttribute("data-pn"); // the number shows only where the paragraph starts
    rest.appendChild(r2.cloneContents());
    return rest;
  };

    // Split a box between its lines: the lines that fit stay, the rest continue in a new box.
  const splitBox = (el: HTMLElement, s: Slot): HTMLElement | null => {
    const kids = Array.from(el.children) as HTMLElement[];
    const title = kids[0]?.classList.contains(styles.boxTitle) ? kids[0] : null;
    const items = title ? kids.slice(1) : kids;
    if (items.length < 2) return null;

    const part = el.cloneNode(false) as HTMLElement;
    if (title) part.appendChild(title.cloneNode(true));
    put(s, part);
    let placed = 0;
    for (const item of items) {
      const k = item.cloneNode(true);
      part.appendChild(k);
      if (s.overflows()) {
        part.removeChild(k);
        break;
      }
      placed++;
    }
    if (placed === 0 || placed === items.length) {
      part.remove();
      return null;
    }
    const rest = el.cloneNode(false) as HTMLElement;
    if (title) rest.appendChild(title.cloneNode(true));
    for (const item of items.slice(placed)) rest.appendChild(item.cloneNode(true));
    return rest;
  };

  const isMarker = (el: HTMLElement) =>
    !!(el.dataset.break || el.dataset.front || el.dataset.continue);

  // Fill a slot until it is full or a marker comes up.
  const fill = (s: Slot, queue: HTMLElement[]) => {
    const q = [...queue];
    while (q.length) {
      const block = q[0];
      if (isMarker(block)) return { left: q, full: false };
      q.shift();

      // A one-column group: fill it block by block; what doesn't fit continues on the next page.
      if (block.dataset.group) {
        const slotWasEmpty = contentCount(s) === 0;
        const shell = block.cloneNode(false) as HTMLElement;
        put(s, shell);
        const inner: Slot = { box: shell, before: null, overflows: s.overflows, force: slotWasEmpty };
                const r = fill(inner, Array.from(block.children).map((c) => c.cloneNode(true) as HTMLElement));
        if (!r.full) continue;
        if (shell.childElementCount > 0) {
          const restGroup = block.cloneNode(false) as HTMLElement;
          for (const k of r.left) restGroup.appendChild(k);
          return { left: [restGroup, ...q], full: true };
        }
        shell.remove();
        const carry: HTMLElement[] = [];
        while (contentCount(s) > 1 && isHeading(lastContent(s))) {
          const h = lastContent(s) as HTMLElement;
          h.remove();
          carry.unshift(h);
        }
        return { left: [...carry, block, ...q], full: true };
      }

      put(s, block);
      if (!s.overflows()) continue;
      block.remove();

      if (contentCount(s) === 0) {
        if (s.force === false) return { left: [block, ...q], full: true };
        put(s, block); // too big even for an empty slot: place it anyway (clipped)
        continue;
      }

            const rest =
                block.tagName === "P" || block.tagName === "BLOCKQUOTE"
          ? splitToFit(block, s)
          : block.classList.contains(styles.box)
            ? splitBox(block, s)
            : null;
      const carry: HTMLElement[] = [];
      if (!rest) {
        while (contentCount(s) > 1 && isHeading(lastContent(s))) {
          const h = lastContent(s) as HTMLElement;
          h.remove();
          carry.unshift(h);
        }
      }
      return { left: [...carry, rest ?? block, ...q], full: true };
    }
    return { left: q, full: false };
  };

  const held: Record<string, { title: string; blocks: HTMLElement[]; jump: HTMLElement }> = {};

  const buildFront = (front: HTMLElement) => {
    const grid = document.createElement("div");
    grid.className = styles.frontGrid;
    page.replaceChild(grid, cols);

    const stories = Array.from(front.children).filter(
      (c) => (c as HTMLElement).dataset.story,
    ) as HTMLElement[];

    for (const story of stories.slice(0, 2)) {
      const id = story.dataset.story!;
      const col = document.createElement("div");
      col.className = styles.frontCol;
      const jump = document.createElement("div");
      jump.className = styles.jumpTo;
      jump.textContent = ed.continuedOn.replace("{n}", "…");
      col.appendChild(jump);
      grid.appendChild(col);

      const slot: Slot = {
        box: col,
        before: jump,
        overflows: () => col.scrollHeight > col.clientHeight + 1,
      };
      const blocks = flatten(Array.from(story.children));
      const title = blocks.find((b) => isHeading(b))?.textContent ?? "";
      const { left } = fill(slot, blocks);
      if (left.length) held[id] = { title, blocks: left, jump };
      else jump.remove();
    }
  };

  newPage();
  let queue = flatten(Array.from(src.children));

  while (queue.length) {
    const head = queue[0];

    if (head.dataset.break) {
      queue.shift();
      if (contentCount(main) > 0) newPage();
      continue;
    }

    if (head.dataset.front) {
      queue.shift();
      if (pageNo !== 1 || contentCount(main) > 0) newPage();
      buildFront(head);
      newPage();
      continue;
    }

    if (head.dataset.continue) {
      queue.shift();
      const id = head.dataset.continue;
      const h = held[id];
      if (h) {
        const heading = document.createElement("h3");
        heading.className = styles.headline;
        heading.dataset.cont = id;
        heading.textContent = h.title;
        const from = document.createElement("span");
        from.className = styles.jumpFrom;
        from.textContent = ed.continuedFrom;
        heading.appendChild(from);
        queue = [heading, ...h.blocks, ...queue];
      }
      continue;
    }

    const { left, full } = fill(main, queue);
    queue = left;
    if (full) newPage();
  }

  finishPage();

  // Fill in "Continued on page N".
  const pages = Array.from(out.children);
  for (const [id, h] of Object.entries(held)) {
    const target = out.querySelector(`[data-cont="${id}"]`);
    const sec = target?.closest("section");
    if (sec) h.jump.textContent = ed.continuedOn.replace("{n}", String(pages.indexOf(sec) + 1));
  }

  return { count: () => pageNo, addBlank: () => newPage() };
}

/* ───────────── The paper ───────────── */

type Props = {
  editions: Edition[];          // one edition, or two: [local language, English]
  layout?: "screen" | "print";  // print + two editions = tête-bêche
};

export default function Paper({ editions, layout = "screen" }: Props) {
  const srcRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mastRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let cancelled = false;

    const run = () => {
      const results = editions.map((ed, i) => {
        const src = srcRefs.current[i];
        const mast = mastRefs.current[i];
        const part = partRefs.current[i];
        if (!src || !mast || !part) return null;
        part.innerHTML = "";
        return layoutEdition(src, mast, part, ed);
      });
      if (results.some((r) => !r)) return;
      const [a, b] = results as ReturnType<typeof layoutEdition>[];

      if (!b) {
        // Single edition: total a multiple of 4.
        while (a.count() % 4 !== 0) a.addBlank();
        return;
      }

      if (layout === "print") {
        // Tête-bêche: both halves the same even length, the second turned upside down
        // and in reverse order, so it starts from the back cover.
        let len = Math.max(a.count(), b.count());
        if (len % 2) len++;
        while (a.count() < len) a.addBlank();
        while (b.count() < len) b.addBlank();
        const partB = partRefs.current[1]!;
        const pagesB = Array.from(partB.children).reverse();
        for (const p of pagesB) {
          p.classList.add(styles.rotated);
          partB.appendChild(p);
        }
      } else {
        // Screen: local edition, then English. English starts on a right-hand page.
        if (a.count() % 2) a.addBlank();
        while ((a.count() + b.count()) % 4 !== 0) b.addBlank();
      }
    };

    // Wait for images and for the real typeface before measuring, and lay out again
    // whenever a font finishes loading later (otherwise text can end up hidden).
    const imgs = srcRefs.current.flatMap((s) => (s ? Array.from(s.querySelectorAll("img")) : []));
    const imagesReady = Promise.all(
      imgs.map((img) => (img.complete ? Promise.resolve() : img.decode().catch(() => {}))),
    );
    const root = document.getElementById("paper-root");
    const family = root ? getComputedStyle(root).fontFamily : "";
    const fontLoads = family
      ? ["normal 400", "normal 600", "normal 700", "italic 400", "italic 600", "italic 700"].map(
          (v) => document.fonts.load(`${v} 12px ${family}`).catch(() => []),
        )
      : [];
    Promise.all([document.fonts.ready, imagesReady, ...fontLoads]).then(() => {
      if (!cancelled) run();
    });
    const onFonts = () => {
      if (!cancelled) run();
    };
    document.fonts.addEventListener("loadingdone", onFonts);

    return () => {
      cancelled = true;
      document.fonts.removeEventListener("loadingdone", onFonts);
    };
  }, [editions, layout]);

  return (
    <>
      {editions.map((ed, i) => (
        <div key={`src-${i}`}>
          <div ref={(el) => { srcRefs.current[i] = el; }} className={styles.source}>
            {ed.content}
          </div>
          <div ref={(el) => { mastRefs.current[i] = el; }} className={styles.source}>
            {ed.masthead}
          </div>
        </div>
      ))}
      <div className={styles.viewer}>
        {editions.map((_, i) => (
          <div
            key={`part-${i}`}
            ref={(el) => { partRefs.current[i] = el; }}
            className={styles.part}
          />
        ))}
      </div>
    </>
  );
}
