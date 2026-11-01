import type { Metadata } from 'next';
import Link from 'next/link';

import GamesGrid from '@/components/GamesGrid';
import { FlagRule, Glyphs } from '@/components/icons';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'Games',
  description:
    "Play games made in Ghana by GDAG's studios, including Akofena, Africa's Legends, Karmzah and Echo.",
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
            <h1 className="balance">Play what Ghana is making.</h1>
          </StaggerItem>
          <StaggerItem as="p" className="lead pretty">
            Fight as African legends in your browser or learn science through hands-on simulations. GDAG&apos;s studios
            made all of these games.
          </StaggerItem>
        </Stagger>
      </section>

      <section className="section--tight">
        <div className="container">
          <GamesGrid />
        </div>
      </section>

      {/* EDITORIAL: what the studios build */}
      <section className="section section--alt">
        <div className="container grid cols-2" style={{ alignItems: 'center', gap: 56 }}>
          <Reveal>
            <p className="eyebrow eyebrow--gold">Three directions</p>
            <h2 className="h2 balance" style={{ margin: '16px 0 20px' }}>
              Ghanaian studios build three kinds of game.
            </h2>
            <div className="prose">
              <p>
                <strong>African stories.</strong> Leti Arts draws the heroes of Africa&apos;s Legends from the
                continent&apos;s mythology. In Relu Interactives&apos; Akofena, you fight as Yaa Asantewaa or Ananse.
              </p>
              <p>
                <strong>Games that teach.</strong> OGames Studio built SimuLab so you can learn STEM through science
                simulations. Organized Khaos made Code Quest to teach programming basics, and StoriWeave lets young
                readers shape interactive stories.
              </p>
              <p>
                <strong>VR and XR.</strong> Relu Interactives ships VR games like Sort Jam and builds Relu Spatial, a
                tool for publishing XR experiences to the browser. Kofiro made Space VR Racer, and Organized Khaos made
                Ring Frenzy.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="pull">
              We use [games] to bring Ghanaian perspectives to the global gaming stage.
              <cite>Andy Korshie · Founder, Organized Khaos</cite>
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
            Publish, fund or port a Ghanaian game.
          </StaggerItem>
          <StaggerItem as="p" className="lead" style={{ marginInline: 'auto', textAlign: 'center' }}>
            GDAG can put you in touch with the studios behind these titles.
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
