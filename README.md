# Game Developers Association of Ghana — website

Next.js (App Router) + TypeScript. The design system is the project's own CSS —
no UI framework — carried over from the original static build.

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
  layout.tsx          root shell: fonts, metadata, header/footer, theme + reveal
  globals.css         the whole design system (tokens, components, both themes)
  page.tsx            home
  studios/ games/ events/ about/
components/           Header, Footer, ThemeToggle, ScrollReveal, StudioLogo, …
lib/
  studios.ts          founding + member studios, incl. logo imports
  games.ts            game catalogue and the home page's featured titles
assets/               source images, imported so Next optimises them
docs/                 brand spec, studio-logo guide
legacy/               the original static HTML/CSS/JS this was ported from
```

Content lives in `lib/` — editing a studio or a game means editing data, not
JSX. Studio logos: see [docs/studio-logos.md](docs/studio-logos.md).

## Notes

- **Theme** — `data-theme` on `<html>`, applied by a blocking inline script
  (`components/ThemeScript.tsx`) before first paint so there's no flash;
  `ThemeToggle` flips it and stores the choice in `localStorage`.
- **Reveal animations** — `ScrollReveal` observes every `.reveal` element and
  re-arms on navigation. Add `reveal` (plus `d1`–`d4` to stagger) to any element.
- **Fonts** — Space Grotesk / Inter / JetBrains Mono via `next/font`, exposed to
  the CSS as `--font-display`, `--font-body`, `--font-mono`.
- **Forms** — the join and notify forms are demo-only; wire their `onSubmit`
  handlers to a real endpoint when ready.
