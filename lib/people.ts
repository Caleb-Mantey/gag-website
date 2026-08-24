import type { StaticImageData } from 'next/image';

import andyPortrait from '@/assets/leaders/Andy.webp';
import calebPortrait from '@/assets/leaders/caleb.png';
import eyramPortrait from '@/assets/leaders/Eyram.webp';

export type Person = {
  name: string;
  role: string;
  bio: string;
  /** Shown in the monogram frame until a portrait is supplied. */
  initials: string;
  /** Statically imported portrait or an image served from /public. */
  photo?: StaticImageData | string;
  /** Monogram plate, used only while `photo` is missing. */
  tint: string;
  /** Dark type on a light plate. */
  inkText?: boolean;
};

export const leadership: Person[] = [
  {
    name: 'Eyram Tawia',
    role: 'Chair · Convener',
    bio: "Co-founder & CEO of Leti Arts and a pioneer of African game development. Chaired GDAG's founding gathering.",
    initials: 'ET',
    photo: eyramPortrait,
    tint: 'linear-gradient(150deg, oklch(58% 0.19 27), oklch(34% 0.11 22))',
  },
  {
    name: 'Andy Korshie',
    role: 'President',
    bio: "A member of GDAG's leadership team, helping steer the association and Ghana's game-development community.",
    initials: 'AK',
    photo: andyPortrait,
    tint: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(36% 0.1 165))',
  },
  {
    name: 'Caleb Mantey',
    role: 'Community Lead',
    bio: "A member of GDAG's leadership team, helping steer the association and Ghana's game-development community.",
    initials: 'CM',
    photo: calebPortrait,
    tint: 'linear-gradient(150deg, oklch(32% 0.02 60), oklch(18% 0.01 60))',
  },
];
