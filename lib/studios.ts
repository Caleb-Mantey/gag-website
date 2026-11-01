import type { StaticImageData } from 'next/image';

import bawalaDark from '@/assets/studios/bawala-studios-dark.jpg';
import bawalaLight from '@/assets/studios/bawala-studios-light.jpeg';
import dobiisonDark from '@/assets/studios/dobiison-dark.jpg';
import dobiisonLight from '@/assets/studios/dobiison-light.png';
import dumsorDark from '@/assets/studios/dumsor-games-dark.png';
import dumsorLight from '@/assets/studios/dumsor-games-light.png';
import kofiroDark from '@/assets/studios/kofiro-dark.webp';
import kofiroLight from '@/assets/studios/kofiro-light.webp';
import letiDark from '@/assets/studios/leti-arts-dark.jpg';
import letiLight from '@/assets/studios/leti-arts-light.jpg';
import ogamesDark from '@/assets/studios/ogames-studio-dark.png';
import ogamesLight from '@/assets/studios/ogames-studio-light.png';
import khaosDark from '@/assets/studios/organized-khaos-dark.jpg';
import khaosLight from '@/assets/studios/organized-khaos-light.png';
import reluDark from '@/assets/studios/relu-interactives-dark.png';
import reluLight from '@/assets/studios/relu-interactives-light.png';

/** Theme-aware logo artwork. Add a studio's files under assets/studios/ and
 *  import them above — see docs/studio-logos.md. */
export type StudioLogo = {
  light: StaticImageData;
  dark: StaticImageData;
};

type StudioBase = {
  slug: string;
  /** Full name — used for aria labels and headings. */
  name: string;
  /** Shorter name for the home-page logo wall placeholder. */
  wallName: string;
  /** Two-letter fallback used where no artwork exists. */
  initials: string;
  /** The studio's own site. Logo tiles link here when set. */
  url?: string;
  logo?: StudioLogo;
  /** Mono white-on-black artwork with no light variant: invert it in light theme. */
  invertLight?: boolean;
};

export type FoundingStudio = StudioBase & {
  /** Face-button glyph used by the typographic placeholder. */
  placeholder: 'circle' | 'square' | 'x' | 'triangle';
  badge: string;
  role: string;
  bio: string;
  chips: string[];
  meta: { k: string; v: string }[];
};

export type MemberStudio = StudioBase & {
  role: string;
  bio: string;
  /** Colour of the directory fallback chip. */
  chip: { background: string; color?: string };
};

export const foundingStudios: FoundingStudio[] = [
  {
    slug: 'leti-arts',
    name: 'Leti Arts',
    wallName: 'Leti Arts',
    initials: 'LA',
    url: 'https://www.letigames.com/',
    logo: { light: letiLight, dark: letiDark },
    placeholder: 'circle',
    badge: 'Since 2009',
    role: 'Accra, Ghana & Nairobi, Kenya · Games & digital comics',
    bio: "Co-founded in 2009 by Eyram Tawia and Wesley Kirinya, Leti Arts is one of Africa's most established game studios reimagining the continent's folklore, mythology and history as interactive entertainment. Its work spans mobile games and a pan-African digital-comics platform, and it has become a reference point for African creators worldwide.",
    chips: ['Mobile games', 'Digital comics', 'African folklore'],
    meta: [
      { k: 'Notable', v: "Africa's Legends · Karmzah" },
      { k: 'Founder', v: 'Eyram Tawia' },
      { k: 'Founded', v: '2009' },
    ],
  },
  {
    slug: 'relu-interactives',
    name: 'Relu Interactives',
    wallName: 'Relu Interactives',
    initials: 'RI',
    url: 'https://reluinteractives.com/',
    logo: { light: reluLight, dark: reluDark },
    placeholder: 'square',
    badge: 'Presidential Pitch ’23',
    role: 'Accra, Ghana · Immersive & spatial technology',
    bio: 'Relu Interactives builds interactive 3D software, VR/AR training simulations and the Relu Spatial WebXR platform for enterprise and entertainment. The studio applies extended reality and digital twins to real problems from closing education gaps for engineering students to multi-user spatial experiences and won the 2023 Presidential Pitch for its XR innovation. Its browser fighting game Akofena won the maiden MTN DigiFest Game Developer Contest in 2026.',
    chips: ['VR / AR', 'WebXR', 'Digital twins'],
    meta: [
      { k: 'Notable', v: 'Akofena · Sort Jam' },
      { k: 'Founder', v: 'Caleb Mantey' },
      { k: 'Founded', v: '2022' },
    ],
  },
  {
    slug: 'organized-khaos',
    name: 'Organized Khaos Studios',
    wallName: 'Organized Khaos',
    initials: 'OK',
    url: 'https://organizedkhaosgh.com/',
    logo: { light: khaosLight, dark: khaosDark },
    placeholder: 'x',
    badge: 'Unity for Humanity ’26',
    role: 'Tema, Greater Accra · Narrative & serious games',
    bio: 'Andy Korshie founded Organized Khaos, an independent studio making narrative and social-impact games for mobile, desktop, VR and console. StoriWeave earned an Honorable Mention in the 2026 Unity for Humanity grants, and lead developer Ebenezer Apau won the 2023 AfricaComicade ARK pitch with Code Quest, a game that teaches programming basics.',
    chips: ['Narrative', 'Serious games', 'VR'],
    meta: [
      { k: 'Notable', v: 'StoriWeave · Code Quest' },
      { k: 'Founder', v: 'Andy Korshie' },
      { k: 'Founded', v: '—' },
    ],
  },
];

export const memberStudios: MemberStudio[] = [
  {
    slug: 'ogames-studio',
    name: 'OGames Studio',
    wallName: 'OGames Studio',
    initials: 'OG',
    url: 'https://www.ogamesstudio.com/',
    logo: { light: ogamesLight, dark: ogamesDark },
    role: 'Accra · African heritage games',
    bio: 'Blends technology with storytelling to build games rooted in African cultural heritage, working toward a 100% Ghanaian-developed open world. Winner of the 2024 Presidential Pitch.',
    chip: { background: 'var(--gold)', color: 'var(--ink)' },
  },
  {
    slug: 'dobiison',
    name: 'DOBIISON',
    wallName: 'DOBIISON',
    initials: 'DB',
    url: 'https://dobiison.com/',
    logo: { light: dobiisonLight, dark: dobiisonDark },
    role: 'Accra · Immersive media',
    bio: 'An immersive-media studio exploring interactive and experiential formats for African audiences.',
    chip: { background: 'var(--ink)' },
  },
  {
    slug: 'bawala-studios',
    name: 'Bawala Studios',
    wallName: 'Bawala Studios',
    initials: 'BW',
    url: 'https://bawalastudios.com/',
    logo: { light: bawalaLight, dark: bawalaDark },
    role: 'Ghana · Game development',
    bio: "An independent game-development studio contributing to Ghana's interactive-media scene.",
    chip: { background: 'var(--ink)' },
  },
  {
    slug: 'dumsor-games',
    name: 'Dumsor Games',
    wallName: 'Dumsor Games',
    initials: 'DG',
    url: 'https://dumsorgames.itch.io/',
    logo: { light: dumsorLight, dark: dumsorDark },
    role: 'Ghana · Browser games',
    bio: 'A few game devs from Ghana who love to make games as much as they love to play them, shipping browser titles like Shooting Cell and Ninja Run.',
    chip: { background: 'var(--accent)' },
  },
];

/**
 * Independent developers — solo and very small teams. Listed separately from
 * the member studios but counted in the network total.
 */
export const indieStudios: MemberStudio[] = [
  {
    slug: 'kofiro',
    name: 'Kofiro',
    wallName: 'Kofiro',
    initials: 'KF',
    url: 'https://kofiro.com/',
    logo: { light: kofiroLight, dark: kofiroDark },
    role: 'Accra · Mobile games & apps',
    bio: 'A prolific solo developer with a deep catalogue of mobile titles, from logic puzzles and arcade games to a VR space racer.',
    chip: { background: 'var(--green)' },
  },
  {
    slug: 'kwame-opare-asiedu',
    name: 'Kwame Opare Asiedu',
    wallName: 'Kwame Opare Asiedu',
    initials: 'KO',
    url: 'https://github.com/kwameopareasiedu',
    role: 'Accra · Independent developer',
    bio: 'An independent Accra-based game developer building original interactive projects.',
    chip: { background: 'var(--accent)' },
  },
];

export const studioCount = foundingStudios.length + memberStudios.length + indieStudios.length;
