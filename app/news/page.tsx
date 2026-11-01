import type { Metadata } from 'next';
import Link from 'next/link';

import NewsGrid from '@/components/NewsGrid';
import { FlagRule, Glyphs } from '@/components/icons';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'News',
  description:
    "The latest from Ghana's games industry, gathered from Leti Arts, Organized Khaos, Relu Interactives and Gasbros Gaming Network.",
};

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <Stagger className="container" stagger={0.09}>
          <StaggerItem>
            <FlagRule />
          </StaggerItem>
          <StaggerItem as="p" className="eyebrow" style={{ marginTop: 20 }}>
            Industry news
          </StaggerItem>
          <StaggerItem>
            <h1 className="balance">What&apos;s happening in Ghana&apos;s games industry.</h1>
          </StaggerItem>
          <StaggerItem as="p" className="lead pretty">
            Launches, wins and funding from our studios, with coverage from Gasbros Gaming Network. Every story links
            back to its source.
          </StaggerItem>
        </Stagger>
      </section>

      <section className="section--tight">
        <div className="container">
          <NewsGrid />
        </div>
      </section>

      <section className="section section--alt">
        <Stagger className="container" stagger={0.08} style={{ textAlign: 'center', maxWidth: 680, marginInline: 'auto' }}>
          <StaggerItem>
            <Glyphs style={{ justifyContent: 'center', marginBottom: 24 }} />
          </StaggerItem>
          <StaggerItem as="h2" className="h2 balance" style={{ marginBottom: 16 }}>
            Got news from your studio?
          </StaggerItem>
          <StaggerItem as="p" className="lead" style={{ marginInline: 'auto', textAlign: 'center' }}>
            A launch, a win, a grant or a jam. Tell us and we&apos;ll share it with the community.
          </StaggerItem>
          <StaggerItem className="hero-cta" style={{ justifyContent: 'center', marginTop: 26 }}>
            <Link href="/about#join" className="btn btn--primary">
              Get in touch
            </Link>
            <Link href="/events" className="btn btn--ghost">
              See the events
            </Link>
          </StaggerItem>
        </Stagger>
      </section>
    </>
  );
}
