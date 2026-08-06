import type { StaticImageData } from 'next/image';

import bawalaDark from '@/assets/studios/bawala-studios-dark.jpg';
import bawalaLight from '@/assets/studios/bawala-studios-light.jpeg';
import cityquestDark from '@/assets/studios/cityquest-africa-dark.png';
import cityquestLight from '@/assets/studios/cityquest-africa-light.png';
import dobiisonDark from '@/assets/studios/dobiison-dark.jpg';
import dobiisonLight from '@/assets/studios/dobiison-light.png';
import dusuDark from '@/assets/studios/dusu-studios-dark.png';
import dusuLight from '@/assets/studios/dusu-studios-light.png';
import kofiroDark from '@/assets/studios/kofiro-dark.webp';
import kofiroLight from '@/assets/studios/kofiro-light.webp';
import letiDark from '@/assets/studios/leti-arts-dark.jpg';
import letiLight from '@/assets/studios/leti-arts-light.jpg';
import millsDark from '@/assets/studios/mills-media-dark.png';
import millsLight from '@/assets/studios/mills-media-light.png';
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
    logo: { light: letiLight, dark: letiDark },
    placeholder: 'circle',
    badge: 'Since 2009',
    role: 'Accra, Ghana & Nairobi, Kenya · Games & digital comics',
    bio: "Co-founded in 2009 by Eyram Tawia and Wesley Kirinya, Leti Arts is one of Africa's most established game studios reimagining the continent's folklore, mythology and history as interactive entertainment. Its work spans mobile games and a pan-African digital-comics platform, and it has become a reference point for African creators worldwide.",
    chips: ['Mobile games', 'Digital comics', 'African folklore'],
    meta: [
      { k: 'Notable', v: "Africa's Legends · Karmzah" },
      { k: 'Platform', v: 'Afrocomix app' },
      { k: 'Founded', v: '2009' },
    ],
  },
  {
    slug: 'relu-interactives',
    name: 'Relu Interactives',
    wallName: 'Relu Interactives',
    initials: 'RI',
    logo: { light: reluLight, dark: reluDark },
    placeholder: 'square',
    badge: 'Presidential Pitch ’23',
    role: 'Accra, Ghana · Immersive & spatial technology',
    bio: 'Relu Interactives builds interactive 3D software, VR/AR training simulations and the Relu Spatial WebXR platform for enterprise and entertainment. The studio applies extended reality and digital twins to real problems from closing education gaps for engineering students to multi-user spatial experiences and won the 2023 Presidential Pitch for its XR innovation.',
    chips: ['VR / AR', 'WebXR', 'Digital twins'],
    meta: [
      { k: 'Platform', v: 'Relu Spatial' },
      { k: 'Focus', v: 'XR & simulation' },
      { k: 'Founded', v: '2022' },
    ],
  },
  {
    slug: 'organized-khaos',
    name: 'Organized Khaos Studios',
    wallName: 'Organized Khaos',
    initials: 'OK',
    logo: { light: khaosLight, dark: khaosDark },
    placeholder: 'x',
    badge: 'Unity for Humanity ’26',
    role: 'Tema, Greater Accra · Narrative & serious games',
    bio: 'An award-winning independent studio pushing the boundaries of narrative and social-impact games across mobile, desktop, VR and console. Founded by Mark Cofie Jr, Organized Khaos won the 2026 Unity for Humanity grant for its StoriWeave platform, and took the 2023 AfricaComicade ARK pitch with Code Quest, a game that teaches programming basics.',
    chips: ['Narrative', 'Serious games', 'VR'],
    meta: [
      { k: 'Notable', v: 'StoriWeave · Code Quest' },
      { k: 'Founder', v: 'Mark Cofie Jr' },
      { k: 'Founded', v: '—' },
    ],
  },
  {
    slug: 'ogames-studio',
    name: 'OGames Studio',
    wallName: 'OGames Studio',
    initials: 'OG',
    logo: { light: ogamesLight, dark: ogamesDark },
    placeholder: 'triangle',
    badge: 'Presidential Pitch ’24',
    role: 'Accra, Ghana · African heritage games',
    bio: 'OGames Studio blends technology with storytelling to build games rooted in African cultural heritage, working toward the goal of a 100% Ghanaian-developed open-world game. Alongside its titles it runs educational initiatives for young developers, and has won a GH₵110,000 prize at the 2024 Presidential Pitch and a $25,000 grant at African Skills Week 2024.',
    chips: ['Open world', 'Heritage', 'Education'],
    meta: [
      { k: 'Notable', v: 'Tales from the Baobab' },
      { k: 'Focus', v: 'Cultural storytelling' },
      { k: 'Founded', v: '—' },
    ],
  },
];

export const memberStudios: MemberStudio[] = [
  {
    slug: 'mills-media',
    name: 'Mills Media',
    wallName: 'Mills Media',
    initials: 'MM',
    logo: { light: millsLight, dark: millsDark },
    role: 'Accra · Animation & games',
    bio: 'Animation and game-development studio producing original interactive and animated work out of Accra.',
    chip: { background: 'var(--accent)' },
  },
  {
    slug: 'cityquest-africa',
    name: 'CityQuest Africa',
    wallName: 'CityQuest Africa',
    initials: 'CQ',
    logo: { light: cityquestLight, dark: cityquestDark },
    role: 'Accra · Location-based media',
    bio: 'Building location-based, interactive media experiences that turn real places into playable spaces.',
    chip: { background: 'var(--green)' },
  },
  {
    slug: 'dobiison',
    name: 'DOBIISON',
    wallName: 'DOBIISON',
    initials: 'DB',
    logo: { light: dobiisonLight, dark: dobiisonDark },
    role: 'Accra · Immersive media',
    bio: 'An immersive-media studio exploring interactive and experiential formats for African audiences.',
    chip: { background: 'var(--ink)' },
  },
  {
    slug: 'play233',
    name: 'Play233',
    wallName: 'Play233',
    initials: 'P2',
    role: 'Accra · Games & services',
    bio: 'Interactive-media and game-services studio supporting the Ghanaian ecosystem end to end.',
    chip: { background: 'var(--gold)', color: 'var(--ink)' },
  },
  {
    slug: 'worldrunner-visuals',
    name: 'Worldrunner Visuals',
    wallName: 'Worldrunner Visuals',
    initials: 'WV',
    role: 'Ghana · Games & animation',
    bio: 'Game development, animation and music-visualiser work with a strong visual signature.',
    chip: { background: 'var(--accent)' },
  },
  {
    slug: 'kofiro',
    name: 'Kofiro',
    wallName: 'Kofiro',
    initials: 'KF',
    logo: { light: kofiroLight, dark: kofiroDark },
    role: 'Accra · Game development',
    bio: "An Accra-based game studio documented as part of Ghana's growing development community.",
    chip: { background: 'var(--green)' },
  },
  {
    slug: 'bawala-studios',
    name: 'Bawala Studios',
    wallName: 'Bawala Studios',
    initials: 'BW',
    logo: { light: bawalaLight, dark: bawalaDark },
    role: 'Ghana · Game development',
    bio: "An independent game-development studio contributing to Ghana's interactive-media scene.",
    chip: { background: 'var(--ink)' },
  },
  {
    slug: 'dusu-studios',
    name: 'Dusu Studios',
    wallName: 'Dusu Studios',
    initials: 'DS',
    logo: { light: dusuLight, dark: dusuDark },
    invertLight: true,
    role: 'Ghana · Game development',
    bio: 'A game studio part of the documented Ghana network profile expanding as we grow.',
    chip: { background: 'var(--gold)', color: 'var(--ink)' },
  },
  {
    slug: 'kwame-opare-asiedu',
    name: 'Kwame Opare Asiedu',
    wallName: 'Kwame Opare Asiedu',
    initials: 'KO',
    role: 'Accra · Independent developer',
    bio: 'An independent Accra-based game developer building original interactive projects.',
    chip: { background: 'var(--accent)' },
  },
  {
    slug: 'play-warped',
    name: 'Play.warped',
    wallName: 'Play.warped',
    initials: 'PW',
    role: 'Ghana · Community initiative',
    bio: "A play & discovery initiative connecting Ghana's games to the wider Warped Atlas ecosystem.",
    chip: { background: 'var(--green)' },
  },
];

export const studioCount = foundingStudios.length + memberStudios.length;
