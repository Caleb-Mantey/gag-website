# Brand spec — Game Developers Association of Ghana (GAG)

Palette extracted from the supplied logo (`gag-logo.png`): the PlayStation
face buttons (○ △ ✕ □) rendered in Ghana's national colours, with a "G"
cut into the circle and square.

## Source colours (from logo)
- Red circle → `#D6473C` (Ghana red, warmed)
- Gold triangle → `#F2CE2E` (Ghana gold)
- Green square → `#3E9E4E` (Ghana green)
- X + type → near-black `#141414`
- Field → white / off-white

## Colour tokens — LIGHT theme
```css
:root{
  --bg:      oklch(98% 0.006 95);   /* warm paper white */
  --surface: oklch(100% 0 0);       /* card white */
  --fg:      oklch(20% 0.01 60);    /* ink */
  --muted:   oklch(50% 0.012 60);   /* secondary text */
  --border:  oklch(90% 0.008 90);   /* hairline */

  --accent:  oklch(58% 0.19 27);    /* Ghana red — primary CTA / energy */
  --gold:    oklch(84% 0.16 90);    /* Ghana gold — highlight / premium */
  --green:   oklch(60% 0.15 150);   /* Ghana green — growth / success */
  --ink:     oklch(20% 0.01 60);    /* the black button */
}
```

## Colour tokens — DARK theme
```css
:root[data-theme="dark"]{
  --bg:      oklch(18% 0.012 60);   /* near-black, warm */
  --surface: oklch(23% 0.014 60);   /* raised card */
  --fg:      oklch(96% 0.006 95);   /* paper text */
  --muted:   oklch(70% 0.012 80);   /* secondary */
  --border:  oklch(32% 0.014 60);   /* hairline on dark */

  --accent:  oklch(64% 0.19 28);    /* red, brightened for dark */
  --gold:    oklch(85% 0.16 90);
  --green:   oklch(68% 0.15 150);
  --ink:     oklch(96% 0.006 95);
}
```

## Typography
- **Display / headings:** `'Space Grotesk'` (geometric, gaming-forward) with
  `-apple-system, system-ui` fallback. Weight 600–700, tight tracking
  (-0.02em at ≥32px). This is the "bold / energetic" voice.
- **Editorial serif accent:** `'Fraunces'`/`'Newsreader'` reserved for one
  pull quote / manifesto line only — the "editorial / magazine" voice.
  (Use sparingly; body stays sans.)
- **Body:** `'Inter'`, system fallback, weight 400, 1.6 line-height, 62–70ch.
- **Mono (labels, stats, studio metadata):** `'JetBrains Mono'`, uppercase
  eyebrows at `0.08em` tracking.

## Layout posture (bold + editorial)
- Fixed 1200px max container, 12-col grid, generous section spacing (96px+).
- One decisive accent per screen; the four flag colours act as a *system*
  (red = energy/CTA, gold = highlight/premium, green = growth) — never all
  three shouting at once.
- Face-button motifs (○ △ ✕ □) reusable as section markers / bullets —
  a signature flourish pulled straight from the logo.
- Hairline borders, no drop shadows in light; soft elevation in dark.
- Big editorial headlines, mono eyebrows, real imagery placeholders as
  DS-tinted gradient blocks (no external images, no AI-face SVGs).
- Dark + light theme toggle persisted to localStorage.
