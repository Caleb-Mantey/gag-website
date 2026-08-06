# Dropping in real media

Every media surface on the site is already built and animated — each one just
falls back to a designed placeholder until a real file exists. Adding media is
two steps: put the file in `public/`, then point one data field at it.

Studio logos are the exception: they live in `assets/studios/` and are imported.
See [studio-logos.md](studio-logos.md).

---

## Game key art & gameplay footage

**Folder:** `public/games/` **Data:** [`lib/games.ts`](../lib/games.ts)

```ts
{
  title: 'Karmzah',
  // …
  poster: '/games/karmzah.jpg',                          // shown at rest
  hover:  { type: 'video', src: '/games/karmzah.mp4' },   // plays on hover
}
```

- `poster` — the still. Cards are **3:4 portrait**, so export at least
  **900 × 1200**. Without it the card falls back to the `art` gradient.
- `hover` — either `{ type: 'video', src, poster? }` or
  `{ type: 'image', src }`. The layer cross-fades in over ~0.5s.
- **Video:** short loop (5–10s), **no audio track**, H.264 MP4 (or WebM),
  ideally under ~3 MB — it's only fetched on first hover (`preload="none"`).
  It plays muted, loops, and resets when the pointer leaves.
- Anyone with "reduce motion" on never sees the hover layer, so keep the poster
  legible on its own.

## Event photos

**Folder:** `public/gallery/` **Data:** [`lib/gallery.ts`](../lib/gallery.ts)

```ts
{ label: 'Global Game Jam · Accra ’24', span: 'hero', art: '…', image: '/gallery/ggj-24.jpg' }
```

`span` sets the tile's footprint in the wall: `'hero'` (4 cols × 2 rows),
`'wide'` (3 cols), `'tall'` (2 cols × 2 rows) or `''` (2 cols). The current set
tiles the grid exactly — if you add or remove tiles, rebalance the spans so each
row fills six columns.

Landscape photos at **1600 × 1000** or larger. Tiles crop to fill, so keep the
subject near the centre. Clicking a tile expands it into the lightbox.

## Portraits

**Folder:** `public/people/` **Data:** [`lib/people.ts`](../lib/people.ts)

```ts
{ name: 'Eyram Tawia', role: 'Chair · Convener', bio: '…', initials: 'ET', tint: '…', photo: '/people/eyram-tawia.jpg' }
```

Frames are **4:5 portrait** — export at least **800 × 1000**, head and
shoulders, centred. Until `photo` is set the frame shows the monogram plate
built from `initials` + `tint`. The bio slides up over the portrait on hover
(and sits under the name on touch devices).

---

## A note on file size

`next/image` handles resizing and format conversion for everything under
`public/`, so upload the highest-quality original you have rather than
pre-shrinking it. Video is **not** processed — compress those yourself.
