import type { Metadata } from 'next';
import Link from 'next/link';

import StudioLogo from '@/components/StudioLogo';
import { ArrowIcon, FlagRule, StarIcon } from '@/components/icons';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { foundingStudios, memberStudios, studioCount } from '@/lib/studios';

export const metadata: Metadata = {
  title: 'Studios',
  description:
    'The studios of the Game Developers Association of Ghana, from flagship names like Leti Arts, Relu Interactives, Organized Khaos and OGames Studio to the wider network documented on Warped Atlas.',
};

export default function StudiosPage() {
  return (
    <>
      <section className="page-hero">
        <Stagger className="container" stagger={0.09}>
          <StaggerItem>
            <FlagRule />
          </StaggerItem>
          <StaggerItem as="p" className="eyebrow" style={{ marginTop: 20 }}>
            The network · {studioCount} studios
          </StaggerItem>
          <StaggerItem>
            <h1 className="balance">The studios of Ghana&apos;s games industry.</h1>
          </StaggerItem>
          <StaggerItem as="p" className="lead pretty">
            From globally recognised names to emerging indies, these are the teams building games, XR and interactive
            media in Ghana, many of them documented alongside GAG on Warped Atlas.
          </StaggerItem>
        </Stagger>
      </section>

      {/* FLAGSHIP */}
      <section className="section--tight">
        <div className="container">
          <Reveal as="p" className="eyebrow" style={{ marginBottom: 26 }}>
            Flagship members
          </Reveal>
          <Stagger className="grid" stagger={0.1} style={{ gap: 24 }}>
            {foundingStudios.map((studio) => (
              <StaggerItem as="article" className="flagship" variant="card" key={studio.slug}>
                <span className="badge badge-award">
                  <StarIcon />
                  {studio.badge}
                </span>
                <StudioLogo
                  slug={studio.slug}
                  name={studio.name}
                  logo={studio.logo}
                  invertLight={studio.invertLight}
                  className="visual"
                  sizes="150px"
                  fallback={studio.initials}
                />
                <div>
                  <h3>{studio.name}</h3>
                  <p className="role" style={{ marginTop: 6 }}>
                    {studio.role}
                  </p>
                  <p className="bio">{studio.bio}</p>
                  <div className="chips">
                    {studio.chips.map((chip, i) => (
                      <span className={i === 0 ? 'chip chip--flag' : 'chip'} key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="meta-row">
                    {studio.meta.map((m) => (
                      <div className="m" key={m.k}>
                        <div className="k">{m.k}</div>
                        <div className="v">{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow eyebrow--green">
                The wider network
              </Reveal>
              <Reveal as="h2" className="h2 balance" delay={0.06}>
                Ten more studios on the map.
              </Reveal>
            </div>
            <Reveal delay={0.06}>
              <a
                href="https://warpedatlas.com/countries/ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                See Ghana on Warped Atlas
                <ArrowIcon />
              </a>
            </Reveal>
          </div>
          <Stagger className="grid cols-3" stagger={0.07}>
            {memberStudios.map((studio) => (
              <StaggerItem as="article" className="card studio-card" variant="card" key={studio.slug}>
                <StudioLogo
                  slug={studio.slug}
                  name={studio.name}
                  logo={studio.logo}
                  invertLight={studio.invertLight}
                  className="directory-logo"
                  sizes="140px"
                  fallback={
                    <span className="logo-chip" style={{ background: studio.chip.background, color: studio.chip.color }}>
                      {studio.initials}
                    </span>
                  }
                />
                <div>
                  <h3>{studio.name}</h3>
                  <p className="role">{studio.role}</p>
                </div>
                <p className="bio">{studio.bio}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal
            as="p"
            className="text-muted"
            style={{ fontSize: 13.5, marginTop: 26, fontFamily: 'var(--font-mono)', letterSpacing: '.02em' }}
          >
            Studio profiles are being expanded, is your studio missing?{' '}
            <Link href="/about#join" className="text-accent">
              Add it
            </Link>
          </Reveal>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="band band--ink" style={{ textAlign: 'center' }}>
            <p className="eyebrow eyebrow--gold" style={{ justifyContent: 'center' }}>
              Are you a Ghanaian studio?
            </p>
            <h2 className="h2 balance" style={{ margin: '16px auto', maxWidth: '18ch' }}>
              Join the network. Be counted.
            </h2>
            <p className="lead" style={{ marginInline: 'auto' }}>
              Membership connects you to partners, events, funding opportunities and a national voice for the industry.
            </p>
            <div className="hero-cta" style={{ justifyContent: 'center', marginTop: 26 }}>
              <Link href="/about#join" className="btn btn--primary">
                Join GAG
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
