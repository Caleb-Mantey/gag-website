# Game Developers Association of Ghana — website

Next.js (App Router) + TypeScript, with [Motion](https://motion.dev) (Framer
Motion) for animation. The design system is the project's own CSS — no UI
framework.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerender statically)
npm start        # serve the production build
npm run typecheck
```

## Layout

```
app/
  layout.tsx          root shell: fonts, metadata, header/footer, theme
  template.tsx        per-route enter transition
  globals.css         the whole design system (tokens, components, both themes)
  page.tsx            home
  studios/ games/ events/ about/
components/
  motion/             Reveal, Stagger, CountUp, shared easing + viewport config
  GameCard, GamesGrid, Gallery, PeopleGrid, Header, Footer, ThemeToggle, …
lib/
  studios.ts games.ts gallery.ts people.ts     ← all content lives here
assets/               studio logos (imported, optimised at build)
public/               games/ · gallery/ · people/ — drop-in media
docs/                 brand spec, media guide, studio-logo guide
legacy/               the original static HTML/CSS/JS this was ported from
```

Content is data, not JSX — editing a studio, game, gallery tile or person means
editing `lib/`. Adding photos or gameplay footage:
**[docs/media.md](docs/media.md)**. Studio logos:
**[docs/studio-logos.md](docs/studio-logos.md)**.

## Type

| Role | Family |
|---|---|
| Display / headings | Bricolage Grotesque |
| Body | Geist |
| Labels, eyebrows, stats | Geist Mono |
| Pull quotes only | Instrument Serif (italic) |

Loaded via `next/font` in `app/layout.tsx` and exposed to CSS as
`--font-display`, `--font-body`, `--font-mono`, `--font-serif`. Swapping a
family is a one-line change in both files.

## Motion

Everything routes through `components/motion`:

- **`<Reveal>`** — fade-and-rise on scroll. `as`, `delay`, `y` props.
- **`<Stagger>` / `<StaggerItem>`** — grids and lists cascade in;
  `variant="card"` adds a touch of scale.
- **`<CountUp>`** — stat numbers count up in view, and server-render their
  final value so they're correct with JS off.
- **`config.ts`** — the shared easing curve and viewport thresholds. Note the
  `amount: 'some'` comment there before changing it.
- **`MotionProvider`** sets `reducedMotion="user"`, so the OS "reduce motion"
  setting drops every transform site-wide. Nothing depends on motion to become
  visible.

Interaction touches: the nav pill and the games filter both slide via
`layoutId`; the header carries a scroll-progress bar; the gallery lightbox is a
shared-element expansion portalled to `<body>`.

## Notes

- **Theme** — `data-theme` on `<html>`, applied by a blocking inline script
  (`components/ThemeScript.tsx`) before first paint; `ThemeToggle` flips it and
  stores the choice in `localStorage`.
- **Forms** — the join and notify forms are demo-only; wire their `onSubmit`
  handlers to a real endpoint when ready.
