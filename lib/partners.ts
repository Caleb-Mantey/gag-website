import gasbrosDark from '@/assets/partners/gasbros-gaming-network-dark.png';
import gasbrosLight from '@/assets/partners/gasbros-gaming-network-light.png';
import warpedAtlasMark from '@/assets/warped-atlas-white.png';

import type { StudioLogo } from '@/lib/studios';

/**
 * Ecosystem partners — organisations GDAG works alongside that aren't studios,
 * so they sit outside the studio count and the studio directory.
 */
export type Partner = {
  slug: string;
  name: string;
  /** Shorter name for the logo wall placeholder. */
  wallName: string;
  initials: string;
  url: string;
  role: string;
  bio: string;
  logo?: StudioLogo;
  invertLight?: boolean;
  /** Colour of the fallback chip where no artwork exists. */
  chip: { background: string; color?: string };
};

export const warpedAtlas: Partner = {
  slug: 'warped-atlas',
  name: 'Warped Atlas',
  wallName: 'Warped Atlas',
  initials: 'WA',
  url: 'https://warpedatlas.com/',
  role: 'Africa · Ecosystem mapping',
  bio: "The company mapping Africa's game-development ecosystem. A Warped hq initiative, Warped Atlas is the searchable record of the continent's studios, projects, creators and events.",
  // one white-on-transparent mark, inverted in the light theme
  logo: { light: warpedAtlasMark, dark: warpedAtlasMark },
  invertLight: true,
  chip: { background: 'var(--ink)' },
};

/** Warped Atlas's published counts. Update them here and every page follows. */
export const atlasCounts = {
  records: 345,
  countries: 16,
  studios: 84,
  projects: 202,
  ghanaRecords: 108,
};

export const partners: Partner[] = [
  warpedAtlas,
  {
    slug: 'gasbros-gaming-network',
    name: 'Gasbros Gaming Network',
    wallName: 'Gasbros Gaming Network',
    initials: 'GB',
    url: 'https://gasbrosgamingnetwork.com/',
    role: 'Ghana · Gaming news & media',
    bio: "Ghana's gaming news network. GDAG works hand in hand with Gasbros to bring news, coverage and insight from the industry to the wider community.",
    logo: { light: gasbrosLight, dark: gasbrosDark },
    chip: { background: 'var(--green)' },
  },
];
