# CLAUDE.md — Joshua Pearre Personal Website

Guidance for Claude (and humans) working in this repo.

## What this is

The personal website of **Joshua Pearre**. The **expressive, motion-led** redesign now lives at
the repo root on `main`. It was selected from a set of five tiered previews; the other previews
were dropped and only this one ships here.

- **Person:** Joshua Pearre — **B.S. Computer Science, UMHB, graduated May 2026** (GPA 3.862, Provost
  Honors, Dean's List) · four-year NCAA basketball player · now Lead AI Solutions Developer at
  **Dakar Projects**. Dallas, TX.
- **Brand:** **"No Joshing around"** — resilience, tenacity, perseverance. Dual identity:
  **developer × athlete** (court → code).
- **Status note:** Josh has **graduated** (as of May 2026) — keep all copy in the past/"graduate"
  framing, not "student" / "graduating".
- **Contact (published):** joshpearre@gmail.com · 972-658-2149 · IG/X `joshpearre` · LinkedIn `josh-pearre`.

## Commands

- `npm run dev` · `npm run build` · `npm run preview`
- **Deploy:** push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages
  (live at `joshpearre.github.io/Personal-Website/`; `vite.config.js` sets `base: '/Personal-Website/'`).

## Layout

```
/                      ← the live site (Vite + React app)
├── index.html         ← Vite entry
├── package.json  vite.config.js  .gitignore
├── src/
│   ├── main.jsx  App.jsx
│   ├── data/content.js        ← SINGLE SOURCE OF TRUTH for all copy
│   ├── lib/asset.js           ← resolves /public assets for dev + build
│   ├── styles/                ← tokens.css (brand) + app.css (components)
│   └── components/            ← Nav, Hero, StoryScroll, Projects, Skills, Timeline, Connect, Footer
├── public/
│   ├── images/                ← real photos (kebab-named: umhb-basketball.jpg, hs-graduation.jpg, …)
│   └── resume/joshua-pearre-resume.pdf
├── README.md   CLAUDE.md
└── legacy/                    ← the previous vanilla HTML/CSS/JS site, archived (not built/served)
```

## Brand — "Court & Console" (`src/styles/tokens.css`)

Dual identity in the palette itself. Don't change the values; theme new work with them.

- **Court Blue** `#2D6CF6` (engineer — links/CTAs) · **Hardwood Amber** `#F5872B` (athlete —
  emphasis, "No Joshing") · deep **Ink** `#0E1116` base. The site is fully dark.
- Type: **Space Grotesk** (display) · **Inter** (body) · **JetBrains Mono** (labels/stats).

## Content model (`src/data/content.js`)

**Edit copy here — it's the single source of truth** for the hero, the My Story chapters, projects,
skills/certs, and the dual experience timeline. The page components map this object to the UI.

Story arc (My Story = the pinned scroll centerpiece): **01 The Foundation** (HS) → **02 The
Commitment** (Regis / Greece) → **03 The Process** (UMHB teammates, resilience) → **04 The Turn**
(the professional pivot — IT work, internships, Dakar AI consulting) → **05 The Walk** (UMHB
graduation, May 2026 — the final chapter).

The site expanded the original 3-chapter story into this arc and added Projects, Skills, and the
dual timeline (none existed on the old site). Verbatim-preserved brand lines: "Who is this guy? 🤷🏾‍♂️"
and "No Joshing around."

## Components of note

- **`StoryScroll.jsx`** — the signature: a pinned, scroll-scrubbed "court → code" sequence whose
  background temperature shifts warm→cool across the chapters, with a progress rail. Built on Framer
  Motion `useScroll` + `useTransform`. Falls back to a plain stacked read under `prefers-reduced-motion`.
  Note: `Story.jsx` is **unused** (not imported by `App.jsx`) — `StoryScroll.jsx` is the live component.
- **`Hero.jsx`** — oversized "No Joshing around." display type + particle field + the basketball photo.
- **`Particles.jsx`** — hand-rolled canvas particle field (no external lib).

## Images

Real photos are primary, in `public/images/` (kebab-named — **never reintroduce spaces in filenames**,
they break on GitHub Pages). Atmospheric backgrounds are pure CSS / canvas, not generated images.

## Conventions

- **Edit copy once** in `src/data/content.js`.
- Keep brand tokens identical; vary intensity, not the palette.
- Keep all copy in the **graduated** framing.
- `node_modules/` and `dist/` are git-ignored.
- `legacy/` is a frozen archive — don't wire it into the build.

## In progress / next

- **Contact form:** wire to a no-backend handler (Formspree / Web3Forms / JotForm) to capture
  submissions — `Connect.jsx`'s `onSubmit` is still a placeholder.
