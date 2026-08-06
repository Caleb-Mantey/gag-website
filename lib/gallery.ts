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
    label: 'Global Game Jam · Accra ’24',
    span: 'hero',
    art: 'linear-gradient(150deg, oklch(58% 0.19 27), oklch(32% 0.1 20))',
  },
  {
    label: 'Studio showcase',
    span: '',
    art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(52% 0.13 55))',
  },
  {
    label: 'Dev workshop',
    span: '',
    art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))',
  },
  {
    label: 'Inaugural gathering · 2022',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(20% 0.01 60), oklch(40% 0.06 30))',
  },
  {
    label: 'Investor & partner mixer',
    span: 'wide',
    art: 'linear-gradient(120deg, oklch(58% 0.19 27), oklch(80% 0.15 88))',
  },
  {
    label: 'Community meetup',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(45% 0.14 300))',
  },
  {
    label: 'XR demo day',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(70% 0.14 150), oklch(80% 0.15 88))',
  },
  {
    label: 'Student game day',
    span: 'tall',
    art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))',
  },
];
