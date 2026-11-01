export type NewsSource = 'leti-arts' | 'organized-khaos' | 'relu-interactives' | 'gasbros';

export type NewsItem = {
  slug: string;
  /** ISO date the story happened, not when a later write-up of it ran. */
  date: string;
  source: NewsSource;
  /** Set when the story is about `source` but the link goes elsewhere. */
  via?: string;
  /** Our own headline — the full story stays on the source's site. */
  title: string;
  summary: string;
  href: string;
  /** Placeholder gradient, used until `image` is supplied. */
  art: string;
  /** A path under /public. See docs/media.md. */
  image?: string;
};

export const newsSources: Record<NewsSource, string> = {
  'leti-arts': 'Leti Arts',
  'organized-khaos': 'Organized Khaos',
  'relu-interactives': 'Relu Interactives',
  gasbros: 'Gasbros',
};

export const newsFilters: { value: NewsSource | 'all'; label: string }[] = [
  { value: 'all', label: 'All news' },
  { value: 'leti-arts', label: newsSources['leti-arts'] },
  { value: 'organized-khaos', label: newsSources['organized-khaos'] },
  { value: 'relu-interactives', label: newsSources['relu-interactives'] },
  { value: 'gasbros', label: newsSources.gasbros },
];

/**
 * Curated by hand from each source, newest first. Write the headline and summary
 * in our own words and link out for the full story — see docs/media.md.
 */
export const news: NewsItem[] = [
  {
    slug: 'leti-google-play-indie-fund',
    date: '2026-10-30',
    source: 'leti-arts',
    title: 'Leti Arts joins the 2026 Google Play Indie Games Fund Africa',
    summary:
      'Leti Arts is one of ten studios in this year\'s cohort. Sweave gets non-dilutive grant funding, one-to-one mentorship from Google Play and technical support from Unity.',
    href: 'https://letinews.substack.com/p/leti-arts-selected-for-the-2026-google',
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(58% 0.16 40))',
    image: '/news/google-play-indie-games-fund-art.jpg',
  },
  {
    slug: 'akofena-wins-mtn-contest',
    date: '2026-10-26',
    source: 'relu-interactives',
    via: 'Graphic Online',
    title: 'Akofena wins the maiden MTN DigiFest Game Developer Contest',
    summary:
      "Relu Interactives' browser fighting game took the top prize at KNUST, where 10 projects shortlisted from more than 50 entries defended their work before a panel of judges.",
    href: 'https://www.graphic.com.gh/tech-news/team-akofena-wins-maiden-mtn-ghana-digifest-game-developer-contest.html',
    art: 'linear-gradient(135deg, oklch(64% 0.17 35), oklch(30% 0.09 18))',
    image: '/news/akofena-legends.jpg',
  },
  {
    slug: 'donut-sort-empire',
    date: '2026-10-24',
    source: 'gasbros',
    title: "Organized Khaos' Donut Sort Empire lands on Android",
    summary:
      'A free one-tap sorting puzzle set on a donut factory packing line, designed and built by Andy Korshie in Unity. An App Store release is listed as coming soon.',
    href: 'https://gasbrosgamingnetwork.com/donut-sort-empire/',
    art: 'linear-gradient(135deg, oklch(72% 0.13 120), oklch(45% 0.12 160))',
    image: '/news/donut-sort-empire.jpg',
  },
  {
    slug: 'supercell-african-grants',
    date: '2026-10-19',
    source: 'gasbros',
    title: "Supercell's first African studio grants close in on their winners",
    summary:
      'The equity-free programme offers $20,000 to $200,000 per studio, with three to five studios expected in the first cohort and funding due to start in December.',
    href: 'https://gasbrosgamingnetwork.com/supercell-grants-african-studios/',
    art: 'linear-gradient(135deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/news/supercell-grants.jpg',
  },
  {
    slug: 'gomahsan-demo-update',
    date: '2026-10-17',
    source: 'gasbros',
    title: 'Leti Arts ships a major Gomahsan demo update',
    summary:
      'Faster combat, a reworked parry system, a new ability for Karmzah and a mini-boss, Soumaoro the Hollow, plus save and load support.',
    href: 'https://gasbrosgamingnetwork.com/leti-arts-demo-update-new-combat-boss/',
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(45% 0.15 300))',
    image: '/news/gomahsan-demo-update.jpg',
  },
  {
    slug: 'organized-khaos-new-site',
    date: '2026-10-15',
    source: 'organized-khaos',
    title: 'Organized Khaos launches a new website',
    summary:
      "A fresh home for the Tema studio's games, news and projects, including Echo, Ring Frenzy, Brick Blast and Donut Sort Empire.",
    href: 'https://organizedkhaosgh.com/blog/welcome-to-the-new-site/',
    art: 'linear-gradient(135deg, oklch(70% 0.14 150), oklch(38% 0.1 168))',
    image: '/games/echo.jpg',
  },
  {
    slug: 'mtn-gaming-conference-recap',
    date: '2026-10-05',
    source: 'leti-arts',
    title: 'Inside the MTN Gaming Conference',
    summary:
      "Leti Arts' recap of the day at Labadi Beach Hotel, from the keynotes and exhibition floor to the two deals announced on stage: the MTN x Ashesi Game Lab and the Leti Arts x MTN Game Challenge.",
    href: 'https://letinews.substack.com/p/a-new-era-for-african-gaming',
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/mtn-gaming-conference-2026-hall.jpg',
  },
  {
    slug: 'leti-mtn-game-challenge',
    date: '2026-10-05',
    source: 'gasbros',
    title: 'Leti Arts and MTN announce a Game Challenge for Ghanaian developers',
    summary:
      "The programme will find, train and support rising developers with mentorship, funding and access to MTN's platform. Application details are still to come.",
    href: 'https://gasbrosgamingnetwork.com/leti-arts-and-mtn-announce-game-challenge/',
    art: 'linear-gradient(135deg, oklch(64% 0.16 40), oklch(40% 0.1 25))',
    image: '/gallery/mtn-gaming-conference-2026-handshake.jpg',
  },
  {
    slug: 'mtn-gaming-conference-review',
    date: '2026-10-03',
    source: 'gasbros',
    title: 'Gasbros reviews the MTN Gaming Conference',
    summary:
      'A first-hand look at a one-day event pitched at the industry rather than players, with notes on the partnerships announced and the developers who met in person for the first time.',
    href: 'https://gasbrosgamingnetwork.com/mtn-gaming-conference-2026-review/',
    art: 'linear-gradient(135deg, oklch(60% 0.15 150), oklch(42% 0.14 200))',
    image: '/gallery/mtn-gaming-conference-2026-front-row.jpg',
  },
  {
    slug: 'ghana-golden-era',
    date: '2026-09-16',
    source: 'gasbros',
    title: 'Is Ghana entering a golden era for game development?',
    summary:
      'Gasbros weighs the momentum from game jams, esports, better tools and international exposure against the funding, hardware and publishing gaps still in the way.',
    href: 'https://gasbrosgamingnetwork.com/ghana-video-game-developers-golden-era/',
    art: 'linear-gradient(135deg, oklch(20% 0.01 60), oklch(40% 0.06 30))',
    image: '/news/ghana-golden-era.jpg',
  },
  {
    slug: 'nita-bill-reaction',
    date: '2026-05-25',
    source: 'gasbros',
    title: 'Ghanaian developers raise concerns over the proposed NITA Bill',
    summary:
      'Gasbros reports developers\' worries about licensing, registration and compliance costs for indie studios.',
    href: 'https://gasbrosgamingnetwork.com/nita-bill-outrage-by-ghanaian-game-devs/',
    art: 'linear-gradient(135deg, oklch(32% 0.02 60), oklch(18% 0.01 60))',
    image: '/news/nita-bill.jpg',
  },
  {
    slug: 'novembre-numerique-ghana',
    date: '2025-11-17',
    source: 'leti-arts',
    title: 'Novembre Numérique comes to Ghana for the first time',
    summary:
      'A look back at the three-day digital culture festival Leti Arts ran with Alliance Française Accra and Institut Français Ghana.',
    href: 'https://letinews.substack.com/p/we-brought-a-global-digital-festival',
    art: 'linear-gradient(135deg, oklch(70% 0.14 150), oklch(80% 0.15 88))',
    image: '/gallery/novembre-numerique-2025-keynote.jpg',
  },
  {
    slug: 'karmzah-steam-wishlists',
    date: '2025-07-01',
    source: 'leti-arts',
    title: 'Karmzah opens for wishlists on Steam',
    summary: "Leti Arts' first PC game, born from its Afrocomix comic, gets its Steam page.",
    href: 'https://letinews.substack.com/p/karmzah-is-now-on-steam-our-first',
    art: 'linear-gradient(135deg, oklch(64% 0.17 35), oklch(45% 0.12 300))',
    image: '/games/karmzah.jpg',
  },
];

/** "31 Oct 2026". Pinned to en-GB and UTC so the server and browser always agree. */
export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(date),
  );
}
