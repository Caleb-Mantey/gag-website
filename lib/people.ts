export type Person = {
  name: string;
  role: string;
  bio: string;
  /** Shown in the monogram frame until a portrait is supplied. */
  initials: string;
  /** Portrait under /public, e.g. '/people/eyram-tawia.jpg'. See docs/media.md. */
  photo?: string;
  /** Monogram plate, used only while `photo` is missing. */
  tint: string;
  /** Dark type on a light plate. */
  inkText?: boolean;
};

export const leadership: Person[] = [
  {
    name: 'Eyram Tawia',
    role: 'Chair · Convener',
    bio: "Co-founder & CEO of Leti Arts and a pioneer of African game development. Chaired GAG's founding gathering.",
    initials: 'ET',
    tint: 'linear-gradient(150deg, oklch(58% 0.19 27), oklch(34% 0.11 22))',
  },
  {
    name: 'Executive board',
    role: 'Roster to be published',
    bio: "GAG's founding executive spans studios and disciplines across the community. Full profiles coming soon.",
    initials: '—',
    tint: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(36% 0.1 165))',
  },
  {
    name: 'Studio council',
    role: 'Member representatives',
    bio: "Representatives from member studios help set the association's priorities and programmes.",
    initials: '—',
    tint: 'linear-gradient(150deg, oklch(32% 0.02 60), oklch(18% 0.01 60))',
  },
  {
    name: 'You?',
    role: 'Volunteers welcome',
    bio: 'The association runs on its community. If you want to help build it, there’s a place for you.',
    initials: '+',
    tint: 'linear-gradient(150deg, oklch(84% 0.15 88), oklch(66% 0.14 68))',
    inkText: true,
  },
];
