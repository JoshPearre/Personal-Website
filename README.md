# Joshua Pearre — Personal Website

The personal site of **Joshua Pearre** — Computer Science graduate (UMHB, May 2026) and NCAA
basketball player, now Lead AI Solutions Developer at Dakar Projects. Brand: **"No Joshing around."**

This branch (`new-website-examples`) is the **expressive, motion-led redesign** — a single-page,
fully-dark experience with oversized type and a pinned, scroll-scrubbed "court → code" story.

- **Stack:** Vite + React 18 + Framer Motion + hand-authored CSS ("Court & Console" design tokens)
- **Structure:** one page — Hero → Story (pinned scroll) → Projects → Skills → Timeline → Connect
- **Content:** all copy lives in `src/data/content.js` (single source of truth)
- The previous vanilla site is preserved in [`legacy/`](./legacy).

## Run it

```bash
npm install
npm run dev        # local dev server (hot reload)
npm run build      # production build → dist/
npm run preview    # preview the build
```

## Deploy (GitHub Pages — when ready)

This is a Vite app, so Pages needs the **built output**, not the source:

1. Set `base: '/Personal-Website/'` in `vite.config.js` (currently `'./'` for portable previews).
2. `npm run build` → publish `dist/` (e.g. a Pages Action, or push `dist` to a `gh-pages` branch).

## Notes

- Motion respects `prefers-reduced-motion` (the pinned scroll story collapses to a plain read).
- The contact form currently opens the visitor's mail client — wire it to Formspree / Web3Forms /
  JotForm to capture submissions server-side.
- See [`CLAUDE.md`](./CLAUDE.md) for the full content/brand system and conventions.
