import type { StaticImageData } from 'next/image';

import gamekitMark from '@/assets/engines/gamekit-mark.png';
import reluSpatialMark from '@/assets/engines/relu-spatial-mark.png';
import reluCreatorMark from '@/assets/studios/relu-interactives-dark.png';

/**
 * Engines and creator tools built in Ghana — the layer underneath the games.
 * Media lives in /public/engines; see docs/media.md.
 */
export type EngineMedia =
  | { type: 'video'; src: string; poster: string }
  | { type: 'gallery'; images: { src: string; label: string }[] };

export type Engine = {
  slug: string;
  name: string;
  /** Product mark, shown as an icon chip over the artwork. */
  mark: StaticImageData;
  /** Who builds it. */
  creator: string;
  creatorUrl?: string;
  /** Creator's logo — must be light artwork; it sits on the dark scrim. */
  creatorLogo?: StaticImageData;
  url: string;
  /** One line, in the project's own voice. */
  tagline: string;
  blurb: string;
  chips: string[];
  /** Accent colour token for the card's wash and highlights. */
  accent: string;
  media: EngineMedia;
};

export const engines: Engine[] = [
  {
    slug: 'relu-spatial',
    name: 'Relu Spatial',
    mark: reluSpatialMark,
    creator: 'Relu Interactives',
    creatorUrl: 'https://reluinteractives.com/',
    creatorLogo: reluCreatorMark,
    url: 'https://reluspatial.com/',
    tagline: 'Build any experience. Ship it instantly.',
    blurb: 'From a single prompt to a published, playable experience in the browser.',
    chips: ['WebXR', 'AR & VR', 'One-click publish'],
    accent: 'var(--green)',
    media: { type: 'video', src: '/engines/relu-spatial.mp4', poster: '/engines/relu-spatial.jpg' },
  },
  {
    slug: 'gamekit',
    name: 'GameKit',
    mark: gamekitMark,
    creator: 'Kwame Opare Asiedu',
    creatorUrl: 'https://github.com/kwameopareasiedu',
    url: 'https://gamekit.opare.dev/',
    tagline: 'A 2D Java game engine for creating simple games fast.',
    blurb: 'Java Swing under the hood, CPU-rendered, and quick enough for small and mid-sized 2D games.',
    chips: ['2D', 'Java', 'Open source · MIT'],
    accent: 'var(--accent)',
    media: {
      type: 'gallery',
      images: [
        { src: '/engines/gamekit-industrio.jpg', label: 'Industrio' },
        { src: '/engines/gamekit-fade-for-the-empire.jpg', label: 'Fade For The Empire' },
        { src: '/engines/gamekit-cozy-word-puzzle.jpg', label: 'Cozy Word Puzzle' },
        { src: '/engines/gamekit-sokoban.jpg', label: 'Sokoban' },
        { src: '/engines/gamekit-sliding-puzzle.jpg', label: 'Sliding Puzzle' },
        { src: '/engines/gamekit-circle-pong.jpg', label: 'Circle Pong' },
      ],
    },
  },
];
