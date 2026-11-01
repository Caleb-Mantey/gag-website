export type GalleryTile = {
  label: string;
  /** Where the tile sits in the wall. See .gtile spans in globals.css. */
  span: 'hero' | 'wide' | 'tall' | '';
  /** Placeholder gradient, used until `image` is supplied. */
  art: string;
  /** A photo under /public, e.g. '/gallery/ggj-accra-24.jpg'. See docs/media.md. */
  image?: string;
  /** Which part of the photo stays in frame when the tile crops it, e.g. '50% 25%'. */
  position?: string;
};

export const galleryTiles: GalleryTile[] = [
  {
    label: 'GDAG at Gamescom · 2025',
    span: 'hero',
    art: 'linear-gradient(150deg, oklch(58% 0.19 27), oklch(32% 0.1 20))',
    image: '/gallery/gamescom-2025-delegation.jpg',
  },
  {
    label: 'Showcasing African games · Gamescom 2025',
    span: '',
    art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/gamescom-2025-booth-demo.jpg',
  },
  {
    label: 'Industry connections · Gamescom 2025',
    span: '',
    art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
    image: '/gallery/gamescom-2025-industry-connections.jpg',
  },
  {
    label: 'On the exhibition floor · Gamescom 2025',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(20% 0.01 60), oklch(40% 0.06 30))',
    image: '/gallery/gamescom-2025-exhibition-floor.jpg',
  },
  {
    label: 'The team at Gamescom · 2025',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(58% 0.19 27), oklch(80% 0.15 88))',
    image: '/gallery/gamescom-2025-team-at-booth.jpg',
  },
  {
    label: 'Meeting the global games community',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    image: '/gallery/gamescom-2025-community-connections.jpg',
  },
  {
    label: 'Games and demos · Gamescom 2025',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(70% 0.14 150), oklch(80% 0.15 88))',
    image: '/gallery/gamescom-2025-game-demo.jpg',
  },
  {
    label: 'GDAG delegation networking · Gamescom 2025',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/gallery/gamescom-2025-delegation-networking.jpg',
  },
];

/** The about page's wall: the community across different events, not just one. */
export const communityTiles: GalleryTile[] = [
  {
    label: 'The community together · Gamescom 2025',
    span: 'hero',
    art: 'linear-gradient(150deg, oklch(58% 0.19 27), oklch(32% 0.1 20))',
    image: '/gallery/community-gamescom-2025-group.jpg',
  },
  {
    label: 'On stage · Novembre Numérique, Accra 2025',
    span: '',
    art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/novembre-numerique-2025-keynote.jpg',
  },
  {
    label: 'Global Game Jam at Leti HQ · 2025',
    span: '',
    art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
    image: '/gallery/global-game-jam-2025-leti-hq.jpg',
  },
  {
    label: 'Relu Interactives on the panel · MTN Gaming Conference 2026',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(20% 0.01 60), oklch(40% 0.06 30))',
    image: '/gallery/mtn-gaming-conference-2026-panel-relu.jpg',
    position: '50% 34%',
  },
  {
    label: 'Games and maths · Pi Day at the U.S. Embassy, 2025',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(58% 0.19 27), oklch(80% 0.15 88))',
    image: '/gallery/pi-day-2025-talk.jpg',
  },
  {
    label: 'Meeting the world at the booth · Gamescom 2025',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    image: '/gallery/community-gamescom-2025-booth.jpg',
  },
  {
    label: 'In the audience · MTN Gaming Conference 2026',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(70% 0.14 150), oklch(80% 0.15 88))',
    image: '/gallery/mtn-gaming-conference-2026-audience.jpg',
    position: '50% 25%',
  },
  {
    label: 'Logo Slide at the Organized Khaos stand · MTN Gaming Conference 2026',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/gallery/mtn-gaming-conference-2026-logo-slide.jpg',
    position: '50% 30%',
  },
];

/** The events page's newest wall. Press photos, credited on the page. */
export const mtnContestTiles: GalleryTile[] = [
  {
    label: 'Together on stage at KNUST',
    span: 'hero',
    art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(48% 0.13 60))',
    image: '/gallery/mtn-digifest-contest-2026-stage.jpg',
    position: '50% 56%',
  },
  {
    label: 'Presenting Akofena',
    span: '',
    art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(30% 0.09 18))',
    image: '/gallery/mtn-digifest-contest-2026-akofena-pitch.jpg',
    position: '50% 40%',
  },
  {
    label: 'Presenting African Household Drama',
    span: '',
    art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/mtn-digifest-contest-2026-household-drama-pitch.jpg',
    position: '50% 45%',
  },
  {
    label: 'A contest game on the big screen',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(20% 0.01 60), oklch(40% 0.06 30))',
    image: '/gallery/mtn-digifest-contest-2026-big-screen.jpg',
    position: '50% 44%',
  },
  {
    label: 'A full hall at KNUST',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(58% 0.19 27), oklch(80% 0.15 88))',
    image: '/gallery/mtn-digifest-contest-2026-hall.jpg',
    position: '50% 48%',
  },
  {
    label: 'On stage at the awards',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    image: '/gallery/mtn-digifest-contest-2026-awards.jpg',
    position: '50% 45%',
  },
  {
    label: 'Receiving a prize',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(70% 0.14 150), oklch(80% 0.15 88))',
    image: '/gallery/mtn-digifest-contest-2026-prize.jpg',
    position: '50% 40%',
  },
  {
    label: 'Students in the audience',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/gallery/mtn-digifest-contest-2026-audience.jpg',
    position: '50% 55%',
  },
];

export const mtnConferenceTiles: GalleryTile[] = [
  {
    label: 'Everyone on stage',
    span: 'hero',
    art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/mtn-gaming-conference-2026-selfie.jpg',
    position: '50% 22%',
  },
  {
    label: 'On the main stage',
    span: '',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/gallery/mtn-gaming-conference-2026-keynote.jpg',
  },
  {
    label: 'Logo Slide at the Organized Khaos stand',
    span: '',
    art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
    image: '/gallery/mtn-gaming-conference-2026-logo-slide.jpg',
    position: '50% 30%',
  },
  {
    label: 'Relu Interactives on the panel',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    image: '/gallery/mtn-gaming-conference-2026-panel-relu.jpg',
    position: '50% 34%',
  },
  {
    label: 'Panellists together on stage',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/mtn-gaming-conference-2026-panellists.jpg',
    position: '50% 30%',
  },
  {
    label: 'At the Ghana Esports stand',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/gallery/mtn-gaming-conference-2026-ghana-esports.jpg',
    position: '50% 30%',
  },
  {
    label: 'In the audience',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
    image: '/gallery/mtn-gaming-conference-2026-audience.jpg',
    position: '50% 25%',
  },
  {
    label: 'At the Leti Arts stand',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    image: '/gallery/mtn-gaming-conference-2026-exhibition.jpg',
    position: '50% 25%',
  },
  {
    label: 'Speakers and guests together',
    span: 'hero',
    art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/mtn-gaming-conference-2026-group.jpg',
    position: '50% 45%',
  },
  {
    label: 'VR demos on the exhibition floor',
    span: '',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/gallery/mtn-gaming-conference-2026-vr-demos.jpg',
    position: '50% 30%',
  },
  {
    label: 'GEng demo at the Organized Khaos stand',
    span: '',
    art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
    image: '/gallery/mtn-gaming-conference-2026-organized-khaos.jpg',
    position: '50% 18%',
  },
  {
    label: 'Panel talk on the main stage',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    image: '/gallery/mtn-gaming-conference-2026-panel-speakers.jpg',
    position: '50% 31%',
  },
  {
    label: 'Speakers from across the industry',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
    image: '/gallery/mtn-gaming-conference-2026-panel-industry.jpg',
    position: '50% 40%',
  },
  {
    label: 'On the panel',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
    image: '/gallery/mtn-gaming-conference-2026-panel.jpg',
    position: '50% 55%',
  },
  {
    label: 'A handshake on stage',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
    image: '/gallery/mtn-gaming-conference-2026-handshake.jpg',
    position: '50% 25%',
  },
  {
    label: 'Networking outside',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
    image: '/gallery/mtn-gaming-conference-2026-networking.jpg',
  },
];
