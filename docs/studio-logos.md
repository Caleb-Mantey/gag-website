# Studio logos

Real studio artwork lives in [`assets/studios/`](../assets/studios) and is wired
up in [`lib/studios.ts`](../lib/studios.ts). Files are imported (not served from
`public/`) so Next optimises them, generates a responsive `srcset`, and knows
each image's dimensions at build time.

A studio with no `logo` entry falls back to a clean typographic wordmark on the
home page and to a coloured initials chip in the studios directory — never a
broken image.

## Adding a logo

1. Drop the two theme variants in `assets/studios/`, named
   `<slug>-light.<ext>` and `<slug>-dark.<ext>` (`.svg`, `.png`, `.webp`,
   `.jpg`, `.jpeg` all work).
2. Import them at the top of `lib/studios.ts` and set `logo: { light, dark }` on
   that studio.

```ts
import kofiroDark from '@/assets/studios/kofiro-dark.webp';
import kofiroLight from '@/assets/studios/kofiro-light.webp';

// …
{ slug: 'kofiro', name: 'Kofiro', /* … */ logo: { light: kofiroLight, dark: kofiroDark } }
```

Both variants render into the page; CSS shows whichever matches the active
theme, so switching themes is instant and needs no JavaScript.

## Artwork guidance

- **Two versions:** give the logo *light*-theme artwork (dark mark) and
  *dark*-theme artwork (light mark) so it stays legible on both themes.
- **One version only:** if a single logo works on any background, point both
  `light` and `dark` at the same import.
- **Transparent PNG/WebP/SVG float best** — but opaque JPGs are handled too: the
  `-light` variant is composited with `mix-blend-mode: multiply` (drops a white
  background) and the `-dark` variant with `mix-blend-mode: screen` (drops a
  black background), so a logo baked onto solid white/black still floats cleanly
  with no visible box. A dark variant baked onto a *white* or mid-grey
  background will show as a visible rectangle — re-export it on black or
  transparent.
- **Mono white-on-black logo with no light version?** Set `invertLight: true` on
  the studio; the light theme inverts it to black-on-cream (used for Dusu
  Studios).
- **Trim the artboard.** Each tile letterboxes the logo inside a fixed box
  (`object-fit: contain`), so generous transparent padding inside the source
  file makes the mark read smaller than its neighbours.

## Ecosystem partners

Partners aren't studios — they live in [`lib/partners.ts`](../lib/partners.ts)
with artwork in `assets/partners/`, and are excluded from `studioCount` and the
studio directory. Everything else (naming, theme variants, blend keying) works
exactly the same.

> **Play.warped** — the supplied mark is byte-identical to the Warped Atlas
> white logo, so the founding wall and the Warped Atlas band on the home page
> show the same artwork. It's stored once as `play-warped.png` and inverted for
> the light theme via `invertLight`. Swap in a distinct Play.warped mark if one
> exists.

> **Dumsor Games** — supplied as a single JPEG (black linework on a near-white
> artboard). Both variants were generated from it: the artboard keyed to
> transparent, and for the dark variant the black linework recoloured white
> while the coloured face buttons were left alone.

> **Gasbros Gaming Network** — the supplied `dark.jpeg` was a broken export: a
> white wordmark on a `#f7f7f7` background, so no blend mode or colour key can
> separate the two. The variants in `assets/partners/` were rebuilt from the
> clean `light.jpeg` — background keyed to transparent, and the wordmark forced
> white for the dark variant (the artwork has a 12px empty gutter between mark
> and wordmark, so the split is exact). If Gasbros can supply a transparent PNG
> or SVG of each variant, swap them straight in.

## Where logos appear

| Surface | Box | Source |
|---|---|---|
| Home — founding wall | 236 × 132 | `app/page.tsx` |
| Home — member wall | 180 × 84 | `app/page.tsx` |
| Home — partner wall | 230 × 100 | `app/page.tsx` |
| Studios — flagship panel | 116 × 96 | `app/studios/page.tsx` |
| Studios — directory card | 132 × 46 | `app/studios/page.tsx` |

Sizes are set in `app/globals.css` under *studio logo wall*.

## Slugs

Founding studios: `leti-arts`, `relu-interactives`, `organized-khaos`,
`play-warped`.

Member studios: `ogames-studio`, `mills-media`, `cityquest-africa`, `dobiison`,
`play233`, `bawala-studios`, `dumsor-games`, `dusu-studios`.

Independent developers: `kofiro`, `kwame-opare-asiedu`.

Partners: `gasbros-gaming-network`.

`lib/studios.ts` holds three arrays — `foundingStudios`, `memberStudios` and
`indieStudios` — and the home walls, the studios page and the network total all
read from them, so adding an entry is the only step. Partners live in
`lib/partners.ts` and stay outside the studio count.
