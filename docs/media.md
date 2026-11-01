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
| Leti Arts | letigames.com/games | Africa's Legends, Karmzah, Puzzle Scout, Sweave |
| Relu Interactives | reluinteractives.com, akofena.reluspatial.com | Sort Jam, Africa's Legends VR (both with gameplay video), Akofena (key art plus a gameplay still) |
| Organized Khaos | organizedkhaosgh.com/products | Echo, Ring Frenzy, Brick Blast. Spar 3D is no longer on the studio's site, so its card has no link |
| OGames Studio | ogamesstudio.com/our-games | SimuLab, Alien-X, Fallen Souls, Corona Dodge |
| Kofiro | kofiro.com | Only One, Space VR Racer, Cubox, Magicube, Rolly Birdie, The Last Drive |

Blurbs start from each studio's description, rewritten with the stop-slop rules.
**This is other people's
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
(`mtnContestTiles`, `mtnConferenceTiles` and `galleryTiles` for the events page,
`communityTiles` for the about page) and [`lib/events.ts`](../lib/events.ts)

```ts
{ label: 'Global Game Jam · Accra ’24', span: 'hero', art: '…', image: '/gallery/ggj-24.jpg' }
```

Keep the walls balanced: show the whole community, not just one studio or stand.

`span` sets the tile's footprint in the wall: `'hero'` (4 cols × 2 rows),
`'wide'` (3 cols), `'tall'` (2 cols × 2 rows) or `''` (2 cols). The current set
tiles the grid exactly — if you add or remove tiles, rebalance the spans so each
row fills six columns. Longer walls repeat the same run of spans.

Landscape photos at **1600 × 1000** or larger. Tiles crop to fill, so keep the
subject near the centre, or set `position` (for example `'50% 25%'`) to choose
what stays in frame. Clicking a tile expands it into the lightbox.

Each entry in `pastEvents` takes its own photo too. Until `image` is set, the
card shows the event's `art` gradient with its date on top:

```ts
{ slug: 'mtn-gaming-conference-2026', /* … */
  image: '/gallery/mtn-gaming-conference-2026.jpg',
  imageAlt: 'Keynote at the MTN Gaming Conference' }
```

The first two entries lead the page as "just wrapped" (16:9); the rest sit in
the year-by-year archive (16:10). The Gamescom 2026 card borrows a 2025 booth
photo until 2026 photos arrive.

The community wall mixes GDAG's own photos from Gamescom and the MTN Gaming
Conference with pictures from Leti Arts' newsletter (Novembre Numérique, Global
Game Jam, Pi Day). Those are Leti's photos, credited under the wall, so confirm
they're happy for GDAG to use them. The contest wall uses press photos published
by Choice News Online, also credited on the page, which need the same OK.

## News

**Folder:** `public/news/` **Data:** [`lib/news.ts`](../lib/news.ts)

Stories are curated by hand, newest first, from Leti Arts' newsletter
(letinews.substack.com), the Organized Khaos blog, Relu Interactives and Gasbros
Gaming Network. Organized Khaos (`/rss.xml`), Gasbros (`/feed/`) and the Leti
newsletter (`/feed`) all publish feeds, which is the quickest way to see what's
new. Write the headline and summary in our own words and link out for the full
story.

`image` is optional and shows at 16:9, so wide art works best. Pre-crop anything
portrait, or use the blurred treatment above so the art isn't cut off. Game posters from
`public/games/` are fine for a story about that game. Without one the card shows
the `art` gradient with the source's name.

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
`public/`, but never commit camera originals: a 12 MB photo bloats the repo and
makes the first request for each size slow. Export at **1800px on the long edge**
as JPEG quality 74, which lands around 200–400 KB, and strip the metadata, because
camera files can carry GPS. Video is **not** processed — compress those yourself.

Keep each image's `sizes` true to how wide it really renders, capped at the
1180px container. That hint decides which file the browser downloads, so it
matters as much as the source file. Only use `preload` for an image that's visible
without scrolling.
