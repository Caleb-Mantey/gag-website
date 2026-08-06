import type { Metadata } from 'next';
import Link from 'next/link';

import StudioLogo from '@/components/StudioLogo';
import { ArrowIcon, FlagRule, StarIcon } from '@/components/icons';
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
        <div className="container">
          <FlagRule className="reveal" />
          <p className="eyebrow reveal d1" style={{ marginTop: 20 }}>
            The network · {studioCount} studios
          </p>
          <h1 className="balance reveal d1">The studios of Ghana&apos;s games industry.</h1>
          <p className="lead pretty reveal d2">
            From globally recognised names to emerging indies, these are the teams building games, XR and interactive
            media in Ghana, many of them documented alongside GAG on Warped Atlas.
          </p>
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className="section--tight">
        <div className="container">
          <p className="eyebrow reveal" style={{ marginBottom: 26 }}>
            Flagship members
          </p>
          <div className="grid" style={{ gap: 24 }}>
            {foundingStudios.map((studio) => (
              <article className="flagship reveal" key={studio.slug}>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--green reveal">The wider network</p>
              <h2 className="h2 balance reveal d1">Ten more studios on the map.</h2>
            </div>
            <a
              href="https://warpedatlas.com/countries/ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow reveal d1"
            >
              See Ghana on Warped Atlas
              <ArrowIcon />
            </a>
          </div>
          <div className="grid cols-3">
            {memberStudios.map((studio, i) => (
              <article className={`card studio-card reveal${i % 3 ? ` d${i % 3}` : ''}`} key={studio.slug}>
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
              </article>
            ))}
          </div>
          <p
            className="text-muted"
            style={{ fontSize: 13.5, marginTop: 26, fontFamily: 'var(--font-mono)', letterSpacing: '.02em' }}
          >
            Studio profiles are being expanded, is your studio missing?{' '}
            <Link href="/about#join" className="text-accent">
              Add it
            </Link>
          </p>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="section section--alt">
        <div className="container">
          <div className="band band--ink reveal" style={{ textAlign: 'center' }}>
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
          </div>
        </div>
      </section>
    </>
  );
}
