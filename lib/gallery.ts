export type GalleryTile = {
  label: string;
  /** Where the tile sits in the wall. See .gtile spans in globals.css. */
  span: 'hero' | 'wide' | 'tall' | '';
  /** Placeholder gradient, used until `image` is supplied. */
  art: string;
  /** A photo under /public, e.g. '/gallery/ggj-accra-24.jpg'. See docs/media.md. */
  image?: string;
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
