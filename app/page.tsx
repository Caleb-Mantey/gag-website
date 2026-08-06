import Image from 'next/image';
import Link from 'next/link';

import warpedAtlasLogo from '@/assets/warped-atlas-white.png';
import GameCard from '@/components/GameCard';
import HeroVisual from '@/components/HeroVisual';
import StudioLogo from '@/components/StudioLogo';
import { ArrowIcon, FlagRule, Glyphs, StudioPlaceholderMark } from '@/components/icons';
import CountUp from '@/components/motion/CountUp';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { featuredGames } from '@/lib/games';
import { foundingStudios, memberStudios, studioCount } from '@/lib/studios';

const atlasStats = [
  { n: 44, suffix: '', label: 'Ghana records mapped', color: 'var(--gold)', tintNumber: true },
  { n: 12, suffix: '+', label: 'Countries covered', color: 'var(--gold)' },
  { n: 57, suffix: '+', label: 'Studios continent-wide', color: 'var(--green)' },
  { n: 94, suffix: '+', label: 'Projects documented', color: 'var(--gold)' },
];

const eventTeasers = [
  {
    date: 'Q4 2026',
    title: 'GAG Showcase & Investor Night',
    body: "Ghana's studios present their latest titles to partners, publishers and investors.",
    em: 'Details coming soon.',
    status: 'up' as const,
    statusLabel: 'Upcoming',
  },
  {
    date: '2024',
    title: 'Global Game Jam · Accra',
    body: "Ghanaian developers joined the world's largest game-creation event, building playable games in 48 hours.",
    status: 'past' as const,
    statusLabel: 'Past',
  },
  {
    date: 'Aug 2022',
    title: 'GAG Inaugural Gathering',
    body: 'The founding of the association, convened by the community and chaired by Eyram Tawia of Leti Arts.',
    status: 'past' as const,
    statusLabel: 'Past',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <Stagger stagger={0.1}>
            <StaggerItem>
              <FlagRule />
            </StaggerItem>
            <StaggerItem as="p" className="eyebrow" style={{ marginTop: 22 }}>
              Gamers · Est. Accra 2022
            </StaggerItem>
            <StaggerItem>
              <h1 className="display balance">Ghana is building Africa&apos;s next great games industry.</h1>
            </StaggerItem>
            <StaggerItem as="p" className="lead pretty">
              The Game Developers Association of Ghana unites the studios, creators and titles turning a young scene
              into a serious industry and putting Ghana on the map as a powerhouse of African game development.
            </StaggerItem>
            <StaggerItem className="hero-cta">
              <Link href="/studios" className="btn btn--primary">
                Meet the studios
                <ArrowIcon />
              </Link>
              <Link href="/about#partner" className="btn btn--ghost">
                Partner &amp; invest
              </Link>
            </StaggerItem>
          </Stagger>
          <HeroVisual />
        </div>
      </section>

      {/* STAT BAND */}
      <section className="container" style={{ marginBottom: 'clamp(40px,6vw,80px)' }}>
        <Stagger className="stat-band" stagger={0.07}>
          <StaggerItem className="stat">
            <div className="n">
              <CountUp to={studioCount} />
            </div>
            <div className="l">Studios in the network</div>
          </StaggerItem>
          <StaggerItem className="stat">
            <div className="n">
              <CountUp to={20} />
              <b>+</b>
            </div>
            <div className="l">Games &amp; interactive titles</div>
          </StaggerItem>
          <StaggerItem className="stat">
            <div className="n">
              <CountUp to={44} />
            </div>
            <div className="l">Ghana records on Warped Atlas</div>
          </StaggerItem>
          <StaggerItem className="stat">
            <div className="n">’22</div>
            <div className="l">Association founded, Accra</div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* MISSION */}
      <section className="section section--alt">
        <div className="container grid cols-2" style={{ alignItems: 'center', gap: 56 }}>
          <div>
            <Reveal as="p" className="eyebrow">
              The mission
            </Reveal>
            <Reveal as="h2" className="h2 balance" delay={0.06} style={{ margin: '16px 0 22px' }}>
              One voice for the people who make games in Ghana.
            </Reveal>
            <Reveal className="prose" delay={0.12}>
              <p>
                GAG is the industry body for Ghana&apos;s game makers, programmers, artists, designers, audio pros,
                streamers and studio founders. We exist to help the ecosystem network, grow professionally, and speak
                with one voice to partners, platforms and policymakers.
              </p>
              <p>
                Ghana&apos;s talent has already shipped award-winning games, won presidential pitches and earned global
                grants. Our job is to connect that talent to capital and opportunity, and to show the world what a
                Ghanaian games industry can become.
              </p>
            </Reveal>
            <Reveal delay={0.18} style={{ marginTop: 26 }}>
              <Link href="/about" className="link-arrow">
                Read our story
                <ArrowIcon />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <blockquote className="pull">
              Africa doesn&apos;t need permission to make world-class games. We just need to build, together.
              <cite>The GAG charter · Accra, 2022</cite>
            </blockquote>
            <Glyphs style={{ marginTop: 34 }} />
          </Reveal>
        </div>
      </section>

      {/* STUDIOS — FOUNDING + MEMBERS (logo walls) */}
      <section className="section" id="studios">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow eyebrow--green">
                The founding studios
              </Reveal>
              <Reveal as="h2" className="h2 balance" delay={0.06}>
                The four studios that started the movement.
              </Reveal>
            </div>
            <Reveal delay={0.06}>
              <Link href="/studios" className="link-arrow">
                All {studioCount} studios
                <ArrowIcon />
              </Link>
            </Reveal>
          </div>

          <Stagger className="logo-wall founding" stagger={0.09}>
            {foundingStudios.map((studio) => (
              <StaggerItem key={studio.slug} variant="card">
                <StudioLogo
                  slug={studio.slug}
                  name={studio.name}
                  logo={studio.logo}
                  invertLight={studio.invertLight}
                  href="/studios"
                  sizes="240px"
                  fallback={
                    <>
                      <StudioPlaceholderMark shape={studio.placeholder} />
                      <span className="lname">{studio.wallName}</span>
                    </>
                  }
                />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="studios-split">
            <Reveal as="p" className="eyebrow" style={{ marginBottom: 30 }}>
              Member studios · the wider network
            </Reveal>
            <Stagger className="logo-wall members" stagger={0.05}>
              {memberStudios.map((studio) => (
                <StaggerItem key={studio.slug} variant="card">
                  <StudioLogo
                    slug={studio.slug}
                    name={studio.name}
                    logo={studio.logo}
                    invertLight={studio.invertLight}
                    href="/studios"
                    sizes="180px"
                    fallback={<span className="lname">{studio.wallName}</span>}
                  />
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="p" className="logo-note">
              <Link href="/about#join">Add your studio</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GAMES SHOWCASE */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow">
                Made in Ghana
              </Reveal>
              <Reveal as="h2" className="h2 balance" delay={0.06}>
                The creativity, on screen.
              </Reveal>
            </div>
            <Reveal delay={0.06}>
              <Link href="/games" className="link-arrow">
                Explore all games
                <ArrowIcon />
              </Link>
            </Reveal>
          </div>
          <Stagger className="games-grid" stagger={0.08}>
            {featuredGames.map((game) => (
              <GameCard key={game.title} game={game} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* WARPED ATLAS BAND */}
      <section className="section">
        <div className="container">
          <Reveal className="band band--ink">
            <div className="grid cols-2" style={{ alignItems: 'center', gap: 44 }}>
              <div>
                <Image
                  src={warpedAtlasLogo}
                  alt="Warped Atlas"
                  className="wa-logo"
                  sizes="150px"
                  style={{ height: 34, width: 'auto', display: 'block', marginBottom: 20 }}
                />
                <p className="eyebrow eyebrow--gold">In collaboration with Warped Atlas</p>
                <h2 className="h2 balance" style={{ margin: '16px 0 18px' }}>
                  Putting Ghana on the map.
                </h2>
                <p className="lead">
                  Warped Atlas is the public record of Africa&apos;s game-development and interactive-media ecosystem:{' '}
                  <strong>57+ studios across 12+ countries</strong>, documented and searchable. GAG works with Warped
                  Atlas to keep Ghana&apos;s chapter accurate, complete and visible to the world.
                </p>
                <div style={{ marginTop: 26, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/about#warped" className="btn btn--primary">
                    The collaboration
                  </Link>
                  <a
                    href="https://warpedatlas.com/countries/ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost"
                    style={{ borderColor: 'color-mix(in oklab,currentColor 40%,transparent)', color: 'currentColor' }}
                  >
                    Ghana on Warped Atlas ↗
                  </a>
                </div>
              </div>
              <Stagger
                className="grid cols-2"
                stagger={0.08}
                style={{
                  gap: 1,
                  background: 'color-mix(in oklab,currentColor 16%,transparent)',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                }}
              >
                {atlasStats.map((item) => (
                  <StaggerItem
                    key={item.label}
                    style={{ padding: '26px 22px', background: 'color-mix(in oklab,currentColor 7%,transparent)' }}
                  >
                    <div className="stat">
                      <div className="n" style={item.tintNumber ? { color: item.color } : undefined}>
                        <CountUp to={item.n} />
                        {item.suffix && <b style={{ color: item.color }}>{item.suffix}</b>}
                      </div>
                      <div className="l" style={{ color: 'color-mix(in oklab,currentColor 66%,transparent)' }}>
                        {item.label}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow eyebrow--green">
                The community, in the room
              </Reveal>
              <Reveal as="h2" className="h2 balance" delay={0.06}>
                Game jams, showcases &amp; meetups.
              </Reveal>
            </div>
            <Reveal delay={0.06}>
              <Link href="/events" className="link-arrow">
                All events &amp; gallery
                <ArrowIcon />
              </Link>
            </Reveal>
          </div>
          <Stagger stagger={0.09}>
            {eventTeasers.map((event, i) => (
              <StaggerItem key={event.title} className="event-row" style={i === 0 ? { borderTop: 0 } : undefined}>
                <div className="date">{event.date}</div>
                <div>
                  <h3>{event.title}</h3>
                  <p>
                    {event.body} {event.em && <em>{event.em}</em>}
                  </p>
                </div>
                <span className={`status-pill ${event.status}`}>{event.statusLabel}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section className="section">
        <div className="container">
          <Stagger stagger={0.08} style={{ textAlign: 'center', maxWidth: 760, marginInline: 'auto' }}>
            <StaggerItem>
              <Glyphs style={{ justifyContent: 'center', marginBottom: 26 }} />
            </StaggerItem>
            <StaggerItem as="p" className="eyebrow" style={{ justifyContent: 'center' }}>
              For investors &amp; partners
            </StaggerItem>
            <StaggerItem as="h2" className="h2 balance" style={{ margin: '18px 0 20px' }}>
              The momentum is here. Get in early.
            </StaggerItem>
            <StaggerItem as="p" className="lead" style={{ marginInline: 'auto', textAlign: 'center' }}>
              Ghana has the talent, the culture and the ambition to lead African game development. What the industry
              needs now is capital, distribution and belief. That&apos;s where you come in.
            </StaggerItem>
            <StaggerItem className="hero-cta" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Link href="/about#partner" className="btn btn--primary">
                Partner with GAG
                <ArrowIcon />
              </Link>
              <Link href="/studios" className="btn btn--ghost">
                Browse the studios
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  );
}
