import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeScript from '@/components/ThemeScript';
import MotionProvider from '@/components/motion/MotionProvider';

import './globals.css';

/* Display — Bricolage Grotesque. A contemporary grotesque with real character
   in its details; carries the "bold + editorial" voice at large sizes. */
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

/* Body — Geist. Neutral, engineered, high legibility at 17px. */
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

/* Labels, eyebrows, stats — Geist Mono. */
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

/* One editorial serif voice, reserved for pull quotes and manifesto lines. */
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gag.gh'),
  title: {
    default: "Game Developers Association of Ghana, Building Africa's next games powerhouse",
    template: '%s — Game Developers Association of Ghana',
  },
  description:
    'The Game Developers Association of Ghana (GAG) unites the studios, creators and games putting Ghana on the map as a powerhouse of African game development.',
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    siteName: 'Game Developers Association of Ghana',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      // the design system sets scroll-behavior:smooth; this tells the router to
      // skip the animation on route changes and land at the top instantly
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
