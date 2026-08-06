import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import warpedAtlasLogo from '@/assets/warped-atlas-white.png';
import JoinForm from '@/components/JoinForm';
import { FlagRule, GagMarkLarge, Glyph, Glyphs } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About',
  description:
    "The Game Developers Association of Ghana (GAG) unites the country's game makers, champions the industry, and works with Warped Atlas to put Ghana on the map of African game development.",
};

const pillars = [
  {
    shape: 'circle' as const,
    title: 'Connect',
    body: 'Bring studios, creators and talent together through events, meetups and a shared network.',
  },
  {
    shape: 'tri' as const,
    title: 'Grow',
    body: 'Develop the craft with workshops, mentorship and pathways for the next generation of developers.',
  },
  {
    shape: 'x' as const,
    title: 'Champion',
    body: 'Represent the industry to partners, platforms, funders and policymakers with one clear voice.',
  },
  {
    shape: 'square' as const,
    title: 'Document',
    body: "Keep Ghana's studios, games and milestones on the record, including on Warped Atlas.",
  },
];

const leadership = [
  {
    initials: 'ET',
    chip: 'var(--accent)',
    name: 'Eyram Tawia',
    role: 'Chair · Convener',
    bio: "Co-founder & CEO of Leti Arts and a pioneer of African game development. Chaired GAG's founding gathering.",
  },
  {
    initials: '—',
    chip: 'var(--green)',
    name: 'Executive board',
    role: 'Roster to be published',
    bio: "GAG's founding executive spans studios and disciplines across the community. Full profiles coming soon.",
  },
  {
    initials: '—',
    chip: 'var(--ink)',
    name: 'Studio council',
    role: 'Member representatives',
    bio: "Representatives from member studios help set the association's priorities and programmes.",
  },
  {
    initials: '+',
    chip: 'var(--gold)',
    chipInk: true,
    name: 'You?',
    role: 'Volunteers welcome',
    bio: 'The association runs on its community. If you want to help build it, there’s a place for you.',
  },
];

const investorPoints = [
  {
    color: 'var(--accent)',
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7z" />,
    title: 'Proven, award-winning talent',
    body: 'Presidential Pitch winners, Unity for Humanity grantees and globally-published studios.',
  },
  {
    color: 'var(--gold)',
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </>
    ),
    title: 'An early, uncrowded market',
    body: 'Get in before the rest of the world notices what’s happening in Accra and Tema.',
  },
  {
    color: 'var(--green)',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </>
    ),
    title: 'A documented, verifiable pipeline',
    body: 'Every studio is mapped and traceable via Warped Atlas, diligence starts with a real dataset.',
  },
  {
    color: 'var(--accent)',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" />
      </>
    ),
    title: 'A single point of contact',
    body: 'GAG connects you to the right studios directly, no cold outreach, no guesswork.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid cols-2" style={{ alignItems: 'center', gap: 48 }}>
          <div>
            <FlagRule className="reveal" />
            <p className="eyebrow reveal d1" style={{ marginTop: 20 }}>
              About the association
            </p>
            <h1 className="balance reveal d1">One industry. One voice. From Accra to the World.</h1>
            <p className="lead pretty reveal d2">
              The Game Developers Association of Ghana brings the country&apos;s studios and creators together to grow
              the craft, represent the industry, and make Ghana a name the global games world knows.
            </p>
          </div>
          {/* the mark floats straight on the page — the logo PNG carries a baked-in
              white field, so the vector mark is what works plate-free on both themes */}
          <div className="hero-visual about-visual reveal d2" aria-hidden="true">
            <div className="hero-glow" />
            <GagMarkLarge />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section section--alt">
        <div className="container grid cols-2" style={{ gap: 56, alignItems: 'start' }}>
          <div>
            <p className="eyebrow eyebrow--green reveal">Our story</p>
            <h2 className="h2 balance reveal d1" style={{ margin: '16px 0 22px' }}>
              Founded by the community, in 2022.
            </h2>
            <div className="prose reveal d2">
              <p>
                GAG came together in <strong>August 2022</strong>, when Ghana&apos;s game makers gathered to build
                something the scene had never had: a shared home. The inaugural meeting was chaired by{' '}
                <strong>Eyram Tawia</strong>, CEO of Leti Arts and one of the pioneers of African game development.
              </p>
              <p>
                The association unites everyone who makes games in Ghana from programmers, artists, designers, audio
                professionals, content creators and streamers, with support from <strong>Ambitious Ghana</strong>,
                whose work spans education, entertainment and entrepreneurship.
              </p>
              <p>
                Since then, Ghanaian studios have won presidential pitches, earned global grants, and shipped games that
                travel far beyond our borders. GAG exists to turn those individual wins into a durable, investable
                industry.
              </p>
            </div>
          </div>
          <div className="reveal d1">
            <blockquote className="pull">
              We&apos;re not waiting to be discovered. We&apos;re building the industry and inviting the world to
              build it with us.
              <cite>The GAG founding vision</cite>
            </blockquote>
            <div className="stat-band" style={{ marginTop: 34, gridTemplateColumns: 'repeat(2,1fr)' }}>
              <div className="stat">
                <div className="n">
                  Aug<b> ’22</b>
                </div>
                <div className="l">Founded in Accra</div>
              </div>
              <div className="stat">
                <div className="n">3</div>
                <div className="l">Pillars: educate · entertain · build</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow reveal">What we do</p>
              <h2 className="h2 balance reveal d1">Four jobs, one goal.</h2>
            </div>
          </div>
          <div className="grid cols-4">
            {pillars.map((pillar, i) => (
              <div className={`card reveal${i ? ` d${i}` : ''}`} key={pillar.title}>
                <Glyph shape={pillar.shape} style={{ marginBottom: 16 }} />
                <h3 className="h3" style={{ fontSize: 20 }}>
                  {pillar.title}
                </h3>
                <p className="text-muted" style={{ fontSize: 15, marginTop: 10 }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARPED ATLAS COLLAB */}
      <section className="section section--alt" id="warped" style={{ scrollMarginTop: 90 }}>
        <div className="container">
          <div className="band band--ink reveal">
            <div className="grid cols-2" style={{ alignItems: 'center', gap: 44 }}>
              <div>
                <Image
                  src={warpedAtlasLogo}
                  alt="Warped Atlas"
                  sizes="160px"
                  style={{ height: 36, width: 'auto', display: 'block', marginBottom: 20 }}
                />
                <p className="eyebrow eyebrow--gold">The collaboration</p>
                <h2 className="h2 balance" style={{ margin: '16px 0 18px' }}>
                  GAG × Warped Atlas.
                </h2>
                <p className="lead" style={{ marginBottom: 16 }}>
                  Warped Atlas is the public record of Africa&apos;s game-development and interactive-media ecosystem,
                  a searchable, source-based atlas of the studios, creators, projects, tools and events shaping digital
                  creation across the continent.
                </p>
                <p style={{ opacity: 0.85, marginBottom: 16 }}>
                  At the time of writing it documents <strong>57+ studios across 12+ countries</strong> and{' '}
                  <strong>94+ projects</strong>. Its Ghana chapter alone holds <strong>44 records</strong>, including
                  every flagship studio in this association.
                </p>
                <p style={{ opacity: 0.85 }}>
                  GAG partners with Warped Atlas to keep Ghana&apos;s entry accurate and complete so when investors,
                  publishers and press look for African talent, Ghana is impossible to miss. Their work of mapping the
                  continent, and ours of building the industry, point in the same direction.
                </p>
                <div style={{ marginTop: 26, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <a href="https://warpedatlas.com/" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                    Visit Warped Atlas ↗
                  </a>
                  <a
                    href="https://warpedatlas.com/countries/ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost"
                    style={{ borderColor: 'color-mix(in oklab,currentColor 40%,transparent)', color: 'currentColor' }}
                  >
                    Ghana chapter ↗
                  </a>
                </div>
              </div>
              <div className="grid" style={{ gap: 14 }}>
                <div
                  className="card"
                  style={{
                    background: 'color-mix(in oklab,currentColor 7%,transparent)',
                    borderColor: 'color-mix(in oklab,currentColor 18%,transparent)',
                    color: 'inherit',
                  }}
                >
                  <p className="eyebrow eyebrow--gold" style={{ color: 'var(--gold)' }}>
                    Why it matters for investors
                  </p>
                  <p style={{ marginTop: 12, opacity: 0.9, fontSize: 15.5, lineHeight: 1.6 }}>
                    A single, verified map means you can size the market, find studios and track the ecosystem&apos;s
                    growth without guesswork. Ghana&apos;s chapter is one of the most active on the continent.
                  </p>
                </div>
                <div className="grid cols-2" style={{ gap: 14 }}>
                  <div
                    className="card"
                    style={{
                      background: 'transparent',
                      borderColor: 'color-mix(in oklab,currentColor 18%,transparent)',
                      color: 'inherit',
                    }}
                  >
                    <div className="stat">
                      <div className="n" style={{ color: 'var(--gold)' }}>
                        44
                      </div>
                      <div className="l" style={{ color: 'color-mix(in oklab,currentColor 66%,transparent)' }}>
                        Ghana records
                      </div>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      background: 'transparent',
                      borderColor: 'color-mix(in oklab,currentColor 18%,transparent)',
                      color: 'inherit',
                    }}
                  >
                    <div className="stat">
                      <div className="n" style={{ color: 'var(--green)' }}>
                        12<b>+</b>
                      </div>
                      <div className="l" style={{ color: 'color-mix(in oklab,currentColor 66%,transparent)' }}>
                        Countries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--green reveal">Leadership</p>
              <h2 className="h2 balance reveal d1">The people steering it.</h2>
            </div>
          </div>
          <div className="grid cols-4">
            {leadership.map((person, i) => (
              <article className={`card studio-card reveal${i ? ` d${i}` : ''}`} key={person.name}>
                <div
                  className="logo-chip"
                  style={{ background: person.chip, color: person.chipInk ? 'var(--ink)' : undefined }}
                >
                  {person.initials}
                </div>
                <div>
                  <h3 style={{ fontSize: 19 }}>{person.name}</h3>
                  <p className="role">{person.role}</p>
                </div>
                <p className="bio">{person.bio}</p>
              </article>
            ))}
          </div>
          <p
            className="text-muted"
            style={{ fontSize: 13, marginTop: 22, fontFamily: 'var(--font-mono)', letterSpacing: '.02em' }}
          >
            Leadership details beyond the chair are placeholders pending the association&apos;s confirmed roster.
          </p>
        </div>
      </section>

      {/* PARTNER / INVEST */}
      <section className="section section--alt" id="partner" style={{ scrollMarginTop: 90 }}>
        <div className="container">
          <div className="grid cols-2" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <p className="eyebrow reveal">For investors &amp; partners</p>
              <h2 className="h2 balance reveal d1" style={{ margin: '16px 0 20px' }}>
                Why Ghana. Why now.
              </h2>
              <div className="prose reveal d2">
                <p>
                  Ghana pairs a young, English-speaking, digitally-native population with a rising cohort of studios
                  that are already winning international recognition. The talent is proven; the market is early. That
                  combination is exactly what returns are made of.
                </p>
              </div>
              <div className="reveal d2" style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="#join" className="btn btn--primary">
                  Start a conversation
                </Link>
                <Link href="/studios" className="btn btn--ghost">
                  Review the studios
                </Link>
              </div>
            </div>
            <div className="grid reveal d1" style={{ gap: 14 }}>
              {investorPoints.map((point) => (
                <div className="card" key={point.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span className="badge-award" style={{ color: point.color }}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      width="20"
                      height="20"
                      aria-hidden="true"
                    >
                      {point.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="h3" style={{ fontSize: 18 }}>
                      {point.title}
                    </h3>
                    <p className="text-muted" style={{ fontSize: 14.5, marginTop: 6 }}>
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="section" id="join" style={{ scrollMarginTop: 90 }}>
        <div className="container">
          <div className="band band--ink reveal">
            <div className="grid cols-2" style={{ gap: 44, alignItems: 'center' }}>
              <div>
                <Glyphs style={{ marginBottom: 20 }} />
                <p className="eyebrow eyebrow--gold">Get involved</p>
                <h2 className="h2 balance" style={{ margin: '14px 0 16px' }}>
                  Join, partner, or just say hello.
                </h2>
                <p className="lead">
                  Whether you&apos;re a studio, a developer, an investor or a partner, there&apos;s a way in. Tell us
                  who you are and we&apos;ll take it from there.
                </p>
              </div>
              <JoinForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
