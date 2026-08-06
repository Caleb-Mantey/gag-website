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

## Where logos appear

| Surface | Box | Source |
|---|---|---|
| Home — founding wall | 236 × 132 | `app/page.tsx` |
| Home — member wall | 180 × 84 | `app/page.tsx` |
| Studios — flagship panel | 116 × 96 | `app/studios/page.tsx` |
| Studios — directory card | 132 × 46 | `app/studios/page.tsx` |

Sizes are set in `app/globals.css` under *studio logo wall*.

## Slugs

Founding studios: `leti-arts`, `relu-interactives`, `organized-khaos`,
`ogames-studio`.

Member studios: `mills-media`, `cityquest-africa`, `dobiison`, `play233`,
`worldrunner-visuals`, `kofiro`, `bawala-studios`, `dusu-studios`,
`kwame-opare-asiedu`, `play-warped`.

Adding a brand-new studio? Add an entry to `memberStudios` in `lib/studios.ts` —
the home wall, the directory and the studio count all read from that array.
