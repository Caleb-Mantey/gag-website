export type UpcomingEvent = {
  /** Short date for the home-page teaser. */
  date: string;
  pill: string;
  status: 'up' | 'live';
  title: string;
  body: string;
  when: string;
};

export type PastEvent = {
  slug: string;
  /** ISO date, as precise as we know it: '2026-10-26', '2026-08' or '2024'. */
  date: string;
  /** How the date reads on the page. */
  dateLabel: string;
  title: string;
  place: string;
  /** Who ran it. Be accurate: GDAG hosts some of these and only attends others. */
  host: string;
  /** One line for the home-page teaser. */
  summary: string;
  body: string;
  highlights?: string[];
  /** Winners by category, best first. */
  results?: { category: string; places: string[] }[];
  /** Placeholder gradient, used until `image` is supplied. */
  art: string;
  /** A photo under /public, e.g. '/gallery/mtn-gaming-conference-2026.jpg'. See docs/media.md. */
  image?: string;
  imageAlt?: string;
  links?: { label: string; href: string }[];
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    date: 'Q4 2026',
    pill: 'Upcoming · Q4 2026',
    status: 'up',
    title: 'GDAG Showcase & Investor Night',
    body: "Ghana's studios present their latest titles to publishers, partners and investors, the flagship moment to see the industry's momentum first-hand.",
    when: 'Accra · Date & venue TBA',
  },
  {
    date: 'Jan 2027',
    pill: 'Planned · 2027',
    status: 'up',
    title: 'Global Game Jam · Ghana',
    body: "GDAG hosts Ghana's site for the world's largest game-creation event, 48 hours, one theme, dozens of new playable games.",
    when: 'Accra · January 2027',
  },
  {
    date: 'Monthly',
    pill: 'Ongoing',
    status: 'live',
    title: "Members' Meetups",
    body: 'Regular community gatherings for developers, artists and streamers to share work, find collaborators and learn.',
    when: 'Accra · Monthly',
  },
];

/** Newest first. The first two lead the events page as "just wrapped". */
export const pastEvents: PastEvent[] = [
  {
    slug: 'mtn-digifest-game-developer-contest-2026',
    date: '2026-10-26',
    dateLabel: '26 Oct 2026',
    title: 'MTN DigiFest Game Developer Contest',
    place: 'KNUST, Kumasi',
    host: 'MTN Ghana',
    summary: "Team Akofena took the top prize at MTN Ghana's maiden contest, ahead of more than 50 entries.",
    body: "MTN Ghana's maiden contest put 10 projects, shortlisted from more than 50 entries, in front of a panel of judges under the theme Build, Showcase and Defend Your Game. Akofena, Relu Interactives' browser fighting game, took the top prize, and the three leading teams receive mentorship and support to take their games further.",
    results: [
      { category: 'Industry & overall', places: ['Team Akofena', 'African Household Drama', 'Path Puzzle'] },
      { category: 'University students', places: ['Team Sankofa', 'Team Megamind', 'Team Four Goal'] },
    ],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(48% 0.13 60))',
    image: '/gallery/mtn-digifest-contest-2026-group.jpg',
    imageAlt: 'Participants outside the hall at KNUST, under a Game Developer Contest banner',
    links: [
      {
        label: 'Ghana News Agency',
        href: 'https://gna.org.gh/2026/10/team-akofena-wins-maiden-mtn-game-developer-contest/',
      },
      {
        label: 'Graphic Online',
        href: 'https://www.graphic.com.gh/tech-news/team-akofena-wins-maiden-mtn-ghana-digifest-game-developer-contest.html',
      },
      {
        label: 'Choice News',
        href: 'https://choicenewsonline.com/mtn-digifest-2026-team-akofena-wins-macbook-pro-m5-as-sankofa-tops-student-category/',
      },
    ],
  },
  {
    slug: 'mtn-gaming-conference-2026',
    date: '2026-10-01',
    dateLabel: '1 Oct 2026',
    title: 'MTN Gaming Conference',
    place: 'Labadi Beach Hotel, Accra',
    host: 'MTN Ghana with Leti Arts',
    summary: 'Developers, investors, universities and esports leaders met under the theme Building Africa’s Gaming Futures.',
    body: "Developers, publishers, investors, educators and esports leaders met under the theme Building Africa's Gaming Futures. GDAG chair Eyram Tawia gave a keynote on the history of gaming in Ghana and across Africa, and members Relu Interactives, Organized Khaos and Kofiro showed playable games on the exhibition floor.",
    highlights: [
      'MTN, Ashesi University and Leti Arts signed to create a university game lab',
      'The Leti Arts x MTN Game Challenge was announced to find, train and support rising developers',
      'More than 50 decision-makers from Ghana and abroad in the room',
    ],
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(30% 0.09 18))',
    image: '/gallery/mtn-gaming-conference-2026-group.jpg',
    imageAlt: 'Speakers and guests together on the main stage at the MTN Gaming Conference',
    links: [
      { label: "Leti Arts' recap", href: 'https://letinews.substack.com/p/a-new-era-for-african-gaming' },
      { label: 'Gasbros review', href: 'https://gasbrosgamingnetwork.com/mtn-gaming-conference-2026-review/' },
      { label: 'Event page', href: 'https://mtn.com.gh/events/mtn-digifest-gaming-conference-2026/' },
    ],
  },
  {
    slug: 'gamescom-2026',
    date: '2026-08',
    dateLabel: 'Aug 2026',
    title: 'Gamescom · Cologne',
    place: 'Cologne, Germany',
    host: 'GDAG delegation',
    summary: "GDAG brought Ghana's game development community to the world's biggest games event.",
    body: "GDAG brought Ghana's game development community back to the global stage, with a booth where visitors could meet the people building games in Ghana and see what they're making.",
    art: 'linear-gradient(135deg, oklch(52% 0.15 250), oklch(32% 0.1 280))',
    // no 2026 photos yet, so this is a booth shot from the 2025 album: swap it when they arrive
    image: '/gallery/gamescom-2025-demo-stations.jpg',
    imageAlt: 'Games on show at a booth at Gamescom in Cologne',
  },
  {
    slug: 'novembre-numerique-2025',
    date: '2025-11-05',
    dateLabel: '5–7 Nov 2025',
    title: 'Novembre Numérique · Accra',
    place: 'Alliance Française Accra',
    host: 'Alliance Française Accra, Institut Français Ghana & Leti Arts',
    summary: "Ghana's first edition of the global festival of digital culture.",
    body: "Ghana's first edition of the global festival of digital culture: three days of talks, hands-on Unity and spatial-sound workshops, VR and AR experiences, game stations and esports.",
    art: 'linear-gradient(135deg, oklch(70% 0.14 150), oklch(80% 0.15 88))',
    image: '/gallery/novembre-numerique-2025-networking.jpg',
    imageAlt: 'Attendees talking between sessions at Novembre Numérique in Accra',
    links: [{ label: "Leti Arts' recap", href: 'https://letinews.substack.com/p/we-brought-a-global-digital-festival' }],
  },
  {
    slug: 'gamedev-ghana-1-week-jam-2025',
    date: '2025-08-25',
    dateLabel: '25 Aug – 1 Sep 2025',
    title: 'GameDev Ghana 1 Week Jam',
    place: 'Online',
    host: 'GDAG',
    summary: 'The first official game jam of the GameDev Ghana group.',
    body: 'The first official game jam of the GameDev Ghana group, hosted by the association on itch.io. The theme was Cedi, and five games were submitted over the week.',
    art: 'linear-gradient(135deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
    image: '/gallery/gamedev-ghana-1-week-jam-2025.png',
    imageAlt: 'Pixel-art logo reading 1 Week Game Jam',
    links: [{ label: 'Jam page', href: 'https://itch.io/jam/gamedev-ghana-1-week-jam' }],
  },
  {
    slug: 'gamescom-2025',
    date: '2025-08',
    dateLabel: 'Aug 2025',
    title: 'Gamescom · Cologne',
    place: 'Cologne, Germany',
    host: 'GDAG delegation',
    summary: "GDAG represented Ghana's development community at Gamescom 2025.",
    body: "The Game Developers Association of Ghana joined the global games industry at Gamescom 2025, representing Ghana's growing development community, showcasing African-made games and building connections with creators and partners from around the world.",
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(32% 0.1 20))',
    image: '/gallery/gamescom-2025-delegation.jpg',
    imageAlt: 'GDAG representatives meeting attendees at Gamescom 2025',
    links: [
      {
        label: 'Photo album',
        href: 'https://photos.google.com/share/AF1QipOp0nJlXEmQIt4jJo44uUGQvQ5s8mG7AoV4zEQVeDJ8jwSS9U04gnqvgheEa-96SQ?key=dGxRZDVTcTBoNEJpWGJVX1RCOVZSRjFGTl90ekdB',
      },
    ],
  },
  {
    slug: 'global-game-jam-2025-leti-hq',
    date: '2025-01',
    dateLabel: 'Jan 2025',
    title: 'Global Game Jam · Leti HQ',
    place: 'Leti Arts HQ',
    host: 'Leti Arts',
    summary: 'Leti Arts opened its doors for the Bubbles-themed jam.',
    body: 'Leti Arts opened its doors to developers, artists and designers for the Bubbles-themed jam. Three days of work produced two games, Bubble Blast and Bubble Girl.',
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/global-game-jam-2025-leti-hq.jpg',
    imageAlt: 'Jam teams planning at a whiteboard at Leti Arts HQ',
    links: [{ label: "Leti Arts' recap", href: 'https://letinews.substack.com/p/before-we-fell-in-love' }],
  },
  {
    slug: 'global-game-jam-2024-accra',
    date: '2024',
    dateLabel: '2024',
    title: 'Global Game Jam · Accra',
    place: 'Accra',
    host: 'Global Game Jam',
    summary: "Ghanaian developers joined the world's largest game-creation event.",
    body: 'Ghanaian developers took part in the global 48-hour jam, building playable games around a shared theme alongside thousands of teams worldwide.',
    art: 'linear-gradient(135deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
  },
  {
    slug: 'global-game-jam-2023-east-legon',
    date: '2023',
    dateLabel: '2023',
    title: 'Global Game Jam · East Legon site',
    place: 'East Legon, Accra',
    host: 'Global Game Jam',
    summary: 'Ghana hosted a Global Game Jam site in East Legon.',
    body: 'Ghana hosted a Global Game Jam site in East Legon, Accra, a milestone in bringing the international event home to local developers.',
    art: 'linear-gradient(135deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
  },
  {
    slug: 'gdag-inaugural-gathering-2022',
    date: '2022-08',
    dateLabel: 'Aug 2022',
    title: 'GDAG Inaugural Gathering',
    place: 'Accra',
    host: 'GDAG',
    summary: 'The founding of the association, chaired by Eyram Tawia of Leti Arts.',
    body: 'The founding of the Game Developers Association of Ghana, convened by the community and chaired by Eyram Tawia, CEO of Leti Arts, with support from Ambitious Ghana.',
    art: 'linear-gradient(135deg, oklch(32% 0.02 60), oklch(18% 0.01 60))',
  },
  {
    slug: 'mtn-gaming-conference-2019',
    date: '2019-08-30',
    dateLabel: '30 Aug 2019',
    title: 'MTN Gaming Conference',
    place: 'Accra Digital Centre',
    host: 'MTN Ghana',
    summary: 'An early one-day conference for the people building Ghana’s games sector.',
    body: "A free one-day conference for developers, artists, producers, audio professionals and business leaders, and an early milestone in bringing Ghana's game makers into one room.",
    art: 'linear-gradient(135deg, oklch(64% 0.16 40), oklch(40% 0.1 25))',
    links: [
      {
        label: 'Event listing',
        href: 'https://www.businessghana.com/site/events/conference/440220/MTN-Gaming-Conference-2019',
      },
    ],
  },
];
