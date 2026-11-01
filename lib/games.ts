export type GameGenre = 'action' | 'narrative' | 'xr' | 'education' | 'casual';

/** What plays when a card is hovered — a second still, or gameplay footage. */
export type GameMedia =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster?: string };

export type Game = {
  title: string;
  studio: string;
  /** Small mono label above the title. */
  kicker: string;
  blurb: string;
  /** Filter tags used by the games page pill tabs. */
  genres: GameGenre[];
  /** Placeholder key-art gradient, used until `poster` is supplied. */
  art: string;
  /**
   * Key art at rest. A path under /public, e.g. '/games/karmzah.jpg'.
   * See docs/media.md.
   */
  poster?: string;
  /**
   * Revealed on hover — gameplay footage reads best:
   * { type: 'video', src: '/games/sort-jam.mp4' }
   */
  hover?: GameMedia;
  /** The studio's page for this title — the card links there. */
  url?: string;
  /** Optional suffix on the studio tag, e.g. "· Announced". */
  tagSuffix?: string;
};

/**
 * Titles, art and copy come from each studio's own site — see docs/media.md
 * for where the files live and how to add more.
 */
export const games: Game[] = [
  // ---- Leti Arts · letigames.com ----
  {
    title: "Africa's Legends",
    studio: 'Leti Arts',
    kicker: 'Match-3 · RPG battles',
    blurb: 'Fight match-3 battles and unlock abilities across a roster of African heroes.',
    genres: ['action'],
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(30% 0.09 18))',
    poster: '/games/africas-legends.jpg',
    url: 'https://www.letigames.com/africas-legends',
  },
  {
    title: 'Karmzah',
    studio: 'Leti Arts',
    kicker: 'Action · Adventure',
    blurb: 'Play as Morowa Adjei, an archaeologist with cerebral palsy whose crutches give her ancient powers.',
    genres: ['action', 'narrative'],
    art: 'linear-gradient(135deg, oklch(64% 0.17 35), oklch(45% 0.12 300))',
    poster: '/games/karmzah.jpg',
    url: 'https://www.letigames.com/karmzah',
  },
  {
    title: 'Puzzle Scout',
    studio: 'Leti Arts',
    kicker: 'Puzzle · History',
    blurb: 'Relive events from African history and compete to become the best Puzzle Scout.',
    genres: ['education', 'casual'],
    art: 'linear-gradient(135deg, oklch(64% 0.16 40), oklch(40% 0.1 25))',
    poster: '/games/puzzle-scout.jpg',
    url: 'https://www.letigames.com/puzzle-scout',
  },
  {
    title: 'Sweave',
    studio: 'Leti Arts',
    kicker: 'Hyper-casual',
    blurb: 'Steer a thread through African weaving patterns and take down mythological bosses to the beat.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(58% 0.16 40))',
    poster: '/games/sweave.jpg',
    url: 'https://www.letigames.com/sweave',
  },

  // ---- Relu Interactives · reluinteractives.com ----
  {
    title: 'Sort Jam',
    studio: 'Relu Interactives',
    kicker: 'VR · Sorting',
    blurb: 'Grab objects and sort them into your cart to build combos across ice-cream, mechanic, farm and hospital worlds in VR.',
    genres: ['xr', 'casual'],
    art: 'linear-gradient(135deg, oklch(60% 0.15 150), oklch(42% 0.14 200))',
    poster: '/games/sort-jam.jpg',
    hover: { type: 'video', src: '/games/sort-jam.mp4' },
    url: 'https://reluinteractives.com/studios/sort-jam',
  },
  {
    title: "Africa's Legends VR",
    studio: 'Relu Interactives',
    kicker: 'VR · Action',
    blurb: 'Step into VR as characters drawn from African mythology.',
    genres: ['xr', 'action'],
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(35% 0.1 20))',
    poster: '/games/africas-legends-vr.jpg',
    hover: { type: 'video', src: '/games/africas-legends-vr.mp4' },
    url: 'https://reluinteractives.com/studios/africa-legends',
  },
  {
    title: 'Akofena',
    studio: 'Relu Interactives',
    kicker: 'Fighting · Browser',
    blurb: 'Fight as 19 legends of African history and folklore, from Yaa Asantewaa to Ananse. Play free in your browser, with nothing to download.',
    genres: ['action'],
    art: 'linear-gradient(135deg, oklch(64% 0.17 35), oklch(30% 0.09 18))',
    poster: '/games/akofena.jpg',
    hover: { type: 'image', src: '/games/akofena-gameplay.jpg' },
    url: 'https://akofena.reluspatial.com/',
  },

  // ---- Organized Khaos · organizedkhaosgh.com ----
  {
    title: 'Echo',
    studio: 'Organized Khaos',
    kicker: 'Narrative simulation',
    blurb: 'Moderate content on a fictional African social platform. Your ethical choices carry across roguelite runs.',
    genres: ['narrative'],
    art: 'linear-gradient(135deg, oklch(70% 0.14 150), oklch(38% 0.1 168))',
    poster: '/games/echo.jpg',
    url: 'https://organizedkhaosgh.com/games/echo/',
  },
  {
    title: 'Spar 3D',
    studio: 'Organized Khaos',
    kicker: 'Cards · Strategy',
    blurb: 'Play Spar, the Ghanaian card game, in 3D.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(72% 0.13 120), oklch(45% 0.12 160))',
    poster: '/games/spa-3d.jpg',
  },
  {
    title: 'Ring Frenzy',
    studio: 'Organized Khaos',
    kicker: 'VR · Arcade',
    blurb: 'A fast arcade game built for VR.',
    genres: ['xr'],
    art: 'linear-gradient(135deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    poster: '/games/ring-frenzy.jpg',
    url: 'https://organizedkhaosgh.com/games/ring-frenzy/',
  },
  {
    title: 'Brick Blast',
    studio: 'Organized Khaos',
    kicker: 'Arcade',
    blurb: 'Smash bricks with dozens of balls and power-ups.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(50% 0.13 150))',
    poster: '/games/brick-blast.jpg',
    url: 'https://organizedkhaosgh.com/games/brick-blast/',
  },

  // ---- OGames Studio · ogamesstudio.com ----
  {
    title: 'SimuLab',
    studio: 'OGames Studio',
    kicker: 'Educational · STEM',
    blurb: 'Learn STEM through hands-on science simulations and quick quizzes.',
    genres: ['education'],
    art: 'linear-gradient(135deg, oklch(72% 0.13 120), oklch(45% 0.12 160))',
    poster: '/games/simulab.jpg',
    url: 'https://www.ogamesstudio.com/our-games/simulab',
  },
  {
    title: 'Alien-X',
    studio: 'OGames Studio',
    kicker: 'Action · Sci-fi shooter',
    blurb: 'Stop the Grog invasion of a human outpost and clear the station corridor by corridor.',
    genres: ['action'],
    art: 'linear-gradient(135deg, oklch(60% 0.15 150), oklch(80% 0.15 88))',
    poster: '/games/alien-x.jpg',
    url: 'https://www.ogamesstudio.com/our-games/alien-x',
  },
  {
    title: 'Fallen Souls',
    studio: 'OGames Studio',
    kicker: 'Action · Dungeon',
    blurb: 'Escape a cursed dungeon against the clock as a soul hunted by demons.',
    genres: ['action'],
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(45% 0.15 300))',
    poster: '/games/fallen-souls.jpg',
    url: 'https://www.ogamesstudio.com/our-games/fallen-souls',
  },
  {
    title: 'Corona Dodge',
    studio: 'OGames Studio',
    kicker: 'Arcade · Maze',
    blurb: 'Collect medicine and dodge the virus to clear the maze.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    poster: '/games/corona-dodge.jpg',
    url: 'https://www.ogamesstudio.com/our-games/corona-dodge',
  },

  // ---- Kofiro · kofiro.com ----
  {
    title: 'Only One',
    studio: 'Kofiro',
    kicker: 'Puzzle · Logic',
    blurb: 'A logic puzzle game.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    poster: '/games/only-one.jpg',
    url: 'https://kofiro.com/',
  },
  {
    title: 'Space VR Racer',
    studio: 'Kofiro',
    kicker: 'VR · Racing',
    blurb: 'An endless space racer built for VR.',
    genres: ['xr', 'casual'],
    art: 'linear-gradient(135deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    poster: '/games/space-vr-racer.jpg',
    url: 'https://kofiro.com/',
  },
  {
    title: 'Cubox',
    studio: 'Kofiro',
    kicker: 'Puzzle platformer',
    blurb: 'A 2D puzzle platformer.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    poster: '/games/cubox.jpg',
    url: 'https://kofiro.com/',
  },
  {
    title: 'Magicube',
    studio: 'Kofiro',
    kicker: 'Puzzle · Toy',
    blurb: "A puzzle toy inspired by the Rubik's Cube.",
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(70% 0.14 150), oklch(38% 0.1 168))',
    poster: '/games/magicube.jpg',
    url: 'https://kofiro.com/',
  },
  {
    title: 'Rolly Birdie',
    studio: 'Kofiro',
    kicker: 'Casual · Arcade',
    blurb: 'Roll to collect your eggs.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(58% 0.16 40))',
    poster: '/games/rolly-birdie.jpg',
    url: 'https://kofiro.com/',
  },
  {
    title: 'The Last Drive',
    studio: 'Kofiro',
    kicker: 'Endless driving',
    blurb: 'An endless driving game with missions along the way.',
    genres: ['casual', 'action'],
    art: 'linear-gradient(135deg, oklch(60% 0.15 150), oklch(42% 0.14 200))',
    poster: '/games/the-last-drive.jpg',
    url: 'https://kofiro.com/',
  },
];

export const gameFilters: { value: GameGenre | 'all'; label: string }[] = [
  { value: 'all', label: 'All titles' },
  { value: 'action', label: 'Action' },
  { value: 'narrative', label: 'Narrative' },
  { value: 'xr', label: 'XR / VR' },
  { value: 'education', label: 'Educational' },
  { value: 'casual', label: 'Casual' },
];

/** The three titles featured on the home page — the two with gameplay footage, plus Echo. */
export const featuredGames: Game[] = [
  games.find((g) => g.title === 'Sort Jam')!,
  games.find((g) => g.title === "Africa's Legends VR")!,
  games.find((g) => g.title === 'Echo')!,
];
