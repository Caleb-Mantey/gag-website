import gasbrosDark from '@/assets/partners/gasbros-gaming-network-dark.png';
import gasbrosLight from '@/assets/partners/gasbros-gaming-network-light.png';

import type { StudioLogo } from '@/lib/studios';

/**
 * Ecosystem partners — organisations GAG works alongside that aren't studios,
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

export const partners: Partner[] = [
  {
    slug: 'gasbros-gaming-network',
    name: 'Gasbros Gaming Network',
    wallName: 'Gasbros Gaming Network',
    initials: 'GB',
    url: 'https://gasbrosgamingnetwork.com/',
    role: 'Ghana · Gaming news & media',
    bio: "Ghana's gaming news network. GAG works hand in hand with Gasbros to bring news, coverage and insight from the industry to the wider community.",
    logo: { light: gasbrosLight, dark: gasbrosDark },
    chip: { background: 'var(--green)' },
  },
];
