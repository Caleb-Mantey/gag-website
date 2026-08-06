# Dropping in real media

Every media surface on the site is built and animated — each falls back to a
designed placeholder until a real file exists. Adding media is two steps: put
the file in `public/`, then point one data field at it.

Studio logos are the exception: they live in `assets/studios/` and are imported.
See [studio-logos.md](studio-logos.md).

## Where the current game art came from

`public/games/` is populated from each studio's own site, and every card links
back to the page it came from:

| Studio | Source | Titles |
|---|---|---|
| Leti Arts | letiarts.com/games | Africa's Legends, Karmzah, Puzzle Scout, Sweave |
| Relu Interactives | reluinteractives.com | Sort Jam, Africa's Legends VR — **both with gameplay video** |
| Organized Khaos | organizedkhaosgh.com/projects | Echo, Spar 3D, Ring Frenzy, Brick Blast |
| OGames Studio | ogamesstudio.com/our-games | SimuLab, Alien-X, Fallen Souls, Corona Dodge |
| Kofiro | kofiro.com | Only One, Space VR Racer, Cubox, Magicube, Rolly Birdie, The Last Drive |

Blurbs are the studios' own words, lightly trimmed. **This is other people's
artwork** — worth confirming each studio is happy for GAG to host it, even
though the association is showcasing its own members.

Sources were normalised to a single 3:4 poster treatment: the artwork centred
at full size over a blurred, darkened copy of itself. That way a 1600×900
banner and a 512×512 app icon read at the same optical weight. To regenerate
one:

```bash
ffmpeg -y -i source.png -filter_complex "\
[0:v]scale=900:1200:force_original_aspect_ratio=increase,crop=900:1200,gblur=sigma=42,eq=brightness=-0.06:saturation=1.15[bg];\
[0:v]scale='min(860,iw*4)':'min(1140,ih*4)':force_original_aspect_ratio=decrease[fg];\
[bg][fg]overlay=(W-w)/2:(H-h)/2" -frames:v 1 -q:v 4 public/games/slug.jpg
```

Gameplay clips get the same treatment plus a 10-second trim, no audio track,
and `-crf 30` (both land under 2 MB).

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

## Engine showcase

**Folder:** `public/engines/` **Data:** [`lib/engines.ts`](../lib/engines.ts)

Engines render as a horizontally scrolling rail of full-bleed cards — artwork
edge to edge, everything else laid over it. The rail breaks out of the
container to the screen edge and snaps card to card; arrows sit under it and
disable at each end.

Each entry takes either a looping clip or a rotating set of stills, both 16:10:

```ts
media: { type: 'video', src: '/engines/relu-spatial.mp4', poster: '/engines/relu-spatial.jpg' }
media: { type: 'gallery', images: [{ src: '/engines/gamekit-industrio.jpg', label: 'Industrio' }] }
```

- Export media at **1280 × 800**. It's cropped to fill, so keep the subject
  central — the bottom third sits under the scrim that carries the type.
- Video plays only while its card is on screen and pauses when it scrolls away;
  galleries cross-fade every 3.8s, naming whichever still is showing.
  Both freeze for anyone with "reduce motion" on.
- `mark` is the product's own logo, shown as an icon chip on a white plate, so
  a mark of any colour works.
- `creatorLogo` sits on the dark scrim, so it **must be light artwork** — point
  it at the studio's `-dark` variant. Without one the creator's name renders as
  type instead.
- `accent` tints the wash and the tagline — use a palette token, not a raw
  colour.

Current media: Relu Spatial's hero reel (reluspatial.com, trimmed to the
14 seconds showing a playable 3D scene and the editor), its app icon, and six
GameKit sample-game screenshots plus its icon (gamekit.opare.dev).

---

## A note on file size

`next/image` handles resizing and format conversion for everything under
`public/`, so upload the highest-quality original you have rather than
pre-shrinking it. Video is **not** processed — compress those yourself.
