export type GameGenre = 'action' | 'narrative' | 'xr' | 'education' | 'casual';

export type Game = {
  title: string;
  studio: string;
  /** Small mono label above the title. */
  kicker: string;
  blurb: string;
  /** Filter tags used by the games page pill tabs. */
  genres: GameGenre[];
  /** Placeholder key-art gradient until real art lands. */
  art: string;
  /** Optional suffix on the studio tag, e.g. "· Announced". */
  tagSuffix?: string;
};

export const games: Game[] = [
  {
    title: "Africa's Legends",
    studio: 'Leti Arts',
    kicker: 'Action · Comics',
    blurb: 'A superhero universe reimagining African mythology and history — the flagship franchise of African heroes.',
    genres: ['action'],
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(30% 0.09 18))',
  },
  {
    title: 'Karmzah',
    studio: 'Leti Arts',
    kicker: 'Action · Adventure',
    blurb: 'A hero with cerebral palsy whose crutches become power — an archaeologist adventurer based on the comic by Farida Bedwei.',
    genres: ['action', 'narrative'],
    art: 'linear-gradient(135deg, oklch(64% 0.17 35), oklch(45% 0.12 300))',
  },
  {
    title: 'StoriWeave',
    studio: 'Organized Khaos',
    kicker: 'Narrative platform',
    blurb: 'An interactive storytelling platform recognised by the 2026 Unity for Humanity grant.',
    genres: ['narrative'],
    art: 'linear-gradient(135deg, oklch(70% 0.14 150), oklch(38% 0.1 168))',
  },
  {
    title: 'Code Quest',
    studio: 'Organized Khaos',
    kicker: 'Educational',
    blurb: 'Teaches the fundamentals of programming through play — winner of the 2023 AfricaComicade ARK pitch.',
    genres: ['education'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(50% 0.13 150))',
  },
  {
    title: 'Tales from the Baobab',
    studio: 'OGames Studio',
    kicker: 'Adventure · Heritage',
    blurb: 'A narrative adventure rooted in Ghanaian folklore — a step toward a fully home-grown open world.',
    genres: ['narrative'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
  },
  {
    title: 'Relu Spatial',
    studio: 'Relu Interactives',
    kicker: 'XR · Platform',
    blurb: 'A WebXR platform for multi-user, spatial-computing experiences across enterprise and entertainment.',
    genres: ['xr'],
    art: 'linear-gradient(135deg, oklch(60% 0.15 150), oklch(42% 0.14 200))',
  },
  {
    title: 'Ring Frenzy',
    studio: 'Organized Khaos',
    kicker: 'VR',
    blurb: "A fast, arcade-style VR experience — one of the studio's ventures into immersive play.",
    genres: ['xr'],
    art: 'linear-gradient(135deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
  },
  {
    title: 'Fallen Souls',
    studio: 'OGames Studio',
    kicker: 'Action',
    blurb: "An action title from OGames' catalogue of original games built in Accra.",
    genres: ['action', 'casual'],
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(45% 0.15 300))',
  },
  {
    title: 'SimuLab',
    studio: 'OGames Studio',
    tagSuffix: '· Announced',
    kicker: 'Educational · Sim',
    blurb: "An announced simulation project extending OGames' work in learning through games.",
    genres: ['education'],
    art: 'linear-gradient(135deg, oklch(72% 0.13 120), oklch(45% 0.12 160))',
  },
  {
    title: 'Afrocomix',
    studio: 'Leti Arts',
    kicker: 'Digital comics',
    blurb: 'A publishing platform bringing African comics, animation and wallpapers to a continental audience.',
    genres: ['narrative'],
    art: 'linear-gradient(135deg, oklch(64% 0.16 40), oklch(40% 0.1 25))',
  },
  {
    title: 'Karmzah Run',
    studio: 'Leti Arts',
    kicker: 'Casual · Runner',
    blurb: 'An accessible endless-runner spin-off that brings the Karmzah universe to a wider mobile audience.',
    genres: ['casual'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(58% 0.16 40))',
  },
  {
    title: 'Alien-X',
    studio: 'OGames Studio',
    kicker: 'Arcade',
    blurb: "A pick-up-and-play arcade shooter from OGames' growing library of casual titles.",
    genres: ['casual', 'action'],
    art: 'linear-gradient(135deg, oklch(60% 0.15 150), oklch(80% 0.15 88))',
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

/** The three titles featured on the home page. */
export const featuredGames: Game[] = [
  {
    title: "Africa's Legends",
    studio: 'Leti Arts',
    kicker: 'Action · Comics',
    blurb: "A superhero universe drawn from African mythology, the franchise that put the continent's heroes on mobile.",
    genres: ['action'],
    art: 'linear-gradient(135deg, oklch(58% 0.19 27), oklch(35% 0.1 20))',
  },
  {
    title: 'StoriWeave',
    studio: 'Organized Khaos',
    kicker: 'Narrative platform',
    blurb: 'An interactive storytelling platform recognised by the 2026 Unity for Humanity grant.',
    genres: ['narrative'],
    art: 'linear-gradient(135deg, oklch(70% 0.14 150), oklch(40% 0.1 165))',
  },
  {
    title: 'Tales from the Baobab',
    studio: 'OGames Studio',
    kicker: 'Adventure · Heritage',
    blurb: 'A narrative adventure rooted in Ghanaian folklore, a step toward a fully home-grown open world.',
    genres: ['narrative'],
    art: 'linear-gradient(135deg, oklch(80% 0.15 88), oklch(52% 0.13 60))',
  },
];
