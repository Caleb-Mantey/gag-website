import type { Metadata } from 'next';
import Link from 'next/link';

import GamesGrid from '@/components/GamesGrid';
import { FlagRule, Glyphs } from '@/components/icons';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'Games',
  description:
    "Games and interactive titles made in Ghana, from Leti Arts' Africa's Legends to Organized Khaos' StoriWeave, OGames' Tales from the Baobab and Relu's spatial XR.",
};

export default function GamesPage() {
  return (
    <>
      <section className="page-hero">
        <Stagger className="container" stagger={0.09}>
          <StaggerItem>
            <FlagRule />
          </StaggerItem>
          <StaggerItem as="p" className="eyebrow" style={{ marginTop: 20 }}>
            Made in Ghana
          </StaggerItem>
          <StaggerItem>
            <h1 className="balance">Games that carry a continent&apos;s stories.</h1>
          </StaggerItem>
          <StaggerItem as="p" className="lead pretty">
            Superheroes drawn from African mythology, adventures, spatial XR and open worlds rooted in Ghanaian
            folklore. This is the creativity coming out of the association&apos;s studios.
          </StaggerItem>
        </Stagger>
      </section>

      <section className="section--tight">
        <div className="container">
          <GamesGrid />
        </div>
      </section>

      {/* EDITORIAL: creativity in the industry */}
      <section className="section section--alt">
        <div className="container grid cols-2" style={{ alignItems: 'center', gap: 56 }}>
          <Reveal>
            <p className="eyebrow eyebrow--gold">The creative current</p>
            <h2 className="h2 balance" style={{ margin: '16px 0 20px' }}>
              Three ideas the industry keeps returning to.
            </h2>
            <div className="prose">
              <p>
                <strong>African stories, told first-hand.</strong> From Leti Arts&apos; legends to OGames&apos; baobab
                tales, Ghanaian studios aren&apos;t localising other people&apos;s games, they&apos;re mining their own
                mythology, history and folklore for worlds no one else can build.
              </p>
              <p>
                <strong>Games with a job to do.</strong> Serious and educational games like Code Quest, StoriWeave,
                SimuLab turn play into learning, and have drawn global grant funding to Accra.
              </p>
              <p>
                <strong>Into the third dimension.</strong> XR is a genuine frontier here: Relu Interactives is building
                spatial-computing infrastructure for the whole continent, not just single titles.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="pull">
              When a Ghanaian child plays a hero who looks like them, in a world built from their own stories,
              that&apos;s the whole point.
              <cite>The case for made-in-Ghana games</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Stagger className="container" stagger={0.08} style={{ textAlign: 'center', maxWidth: 680, marginInline: 'auto' }}>
          <StaggerItem>
            <Glyphs style={{ justifyContent: 'center', marginBottom: 24 }} />
          </StaggerItem>
          <StaggerItem as="h2" className="h2 balance" style={{ marginBottom: 16 }}>
            Want to publish, fund or port a Ghanaian title?
          </StaggerItem>
          <StaggerItem as="p" className="lead" style={{ marginInline: 'auto', textAlign: 'center' }}>
            GAG can connect you directly to the studios behind these games.
          </StaggerItem>
          <StaggerItem className="hero-cta" style={{ justifyContent: 'center', marginTop: 26 }}>
            <Link href="/about#partner" className="btn btn--primary">
              Get in touch
            </Link>
            <Link href="/studios" className="btn btn--ghost">
              See the studios
            </Link>
          </StaggerItem>
        </Stagger>
      </section>
    </>
  );
}
