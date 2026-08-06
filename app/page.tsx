import Image from 'next/image';
import Link from 'next/link';

import warpedAtlasLogo from '@/assets/warped-atlas-white.png';
import GameCard from '@/components/GameCard';
import StudioLogo from '@/components/StudioLogo';
import { ArrowIcon, FlagRule, GagMarkLarge, Glyphs, StudioPlaceholderMark } from '@/components/icons';
import { featuredGames } from '@/lib/games';
import { foundingStudios, memberStudios, studioCount } from '@/lib/studios';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <FlagRule className="reveal" />
            <p className="eyebrow reveal d1" style={{ marginTop: 22 }}>
              Gamers · Est. Accra 2022
            </p>
            <h1 className="display balance reveal d1">Ghana is building Africa&apos;s next great games industry.</h1>
            <p className="lead pretty reveal d2">
              The Game Developers Association of Ghana unites the studios, creators and titles turning a young scene
              into a serious industry and putting Ghana on the map as a powerhouse of African game development.
            </p>
            <div className="hero-cta reveal d3">
              <Link href="/studios" className="btn btn--primary">
                Meet the studios
                <ArrowIcon />
              </Link>
              <Link href="/about#partner" className="btn btn--ghost">
                Partner &amp; invest
              </Link>
            </div>
          </div>
          <div className="hero-visual reveal d2" aria-hidden="true">
            <div className="hero-glow" />
            <GagMarkLarge />
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="container" style={{ marginBottom: 'clamp(40px,6vw,80px)' }}>
        <div className="stat-band reveal">
          <div className="stat">
            <div className="n">{studioCount}</div>
            <div className="l">Studios in the network</div>
          </div>
          <div className="stat">
            <div className="n">
              20<b>+</b>
            </div>
            <div className="l">Games &amp; interactive titles</div>
          </div>
          <div className="stat">
            <div className="n">44</div>
            <div className="l">Ghana records on Warped Atlas</div>
          </div>
          <div className="stat">
            <div className="n">’22</div>
            <div className="l">Association founded, Accra</div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section section--alt">
        <div className="container grid cols-2" style={{ alignItems: 'center', gap: 56 }}>
          <div>
            <p className="eyebrow reveal">The mission</p>
            <h2 className="h2 balance reveal d1" style={{ margin: '16px 0 22px' }}>
              One voice for the people who make games in Ghana.
            </h2>
            <div className="prose reveal d2">
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
            </div>
            <div className="reveal d3" style={{ marginTop: 26 }}>
              <Link href="/about" className="link-arrow">
                Read our story
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="reveal d2">
            <blockquote className="pull">
              Africa doesn&apos;t need permission to make world-class games. We just need to build together.
              <cite>The GAG charter · Accra, 2022</cite>
            </blockquote>
            <Glyphs style={{ marginTop: 34 }} />
          </div>
        </div>
      </section>

      {/* STUDIOS — FOUNDING + MEMBERS (logo walls) */}
      <section className="section" id="studios">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--green reveal">The founding studios</p>
              <h2 className="h2 balance reveal d1">The four studios that started the movement.</h2>
            </div>
            <Link href="/studios" className="link-arrow reveal d1">
              All {studioCount} studios
              <ArrowIcon />
            </Link>
          </div>

          <div className="logo-wall founding reveal">
            {foundingStudios.map((studio) => (
              <StudioLogo
                key={studio.slug}
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
            ))}
          </div>

          <div className="studios-split">
            <p className="eyebrow reveal" style={{ marginBottom: 30 }}>
              Member studios · the wider network
            </p>
            <div className="logo-wall members reveal">
              {memberStudios.map((studio) => (
                <StudioLogo
                  key={studio.slug}
                  slug={studio.slug}
                  name={studio.name}
                  logo={studio.logo}
                  invertLight={studio.invertLight}
                  href="/studios"
                  sizes="180px"
                  fallback={<span className="lname">{studio.wallName}</span>}
                />
              ))}
            </div>
            <p className="logo-note reveal">
              <Link href="/about#join">Add your studio </Link>
            </p>
          </div>
        </div>
      </section>

      {/* GAMES SHOWCASE */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow reveal">Made in Ghana</p>
              <h2 className="h2 balance reveal d1">The creativity, on screen.</h2>
            </div>
            <Link href="/games" className="link-arrow reveal d1">
              Explore all games
              <ArrowIcon />
            </Link>
          </div>
          <div className="grid cols-3">
            {featuredGames.map((game, i) => (
              <GameCard key={game.title} game={game} className={`reveal${i > 0 ? ` d${i}` : ''}`} />
            ))}
          </div>
        </div>
      </section>

      {/* WARPED ATLAS BAND */}
      <section className="section">
        <div className="container">
          <div className="band band--ink reveal">
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
              <div
                className="grid cols-2"
                style={{
                  gap: 1,
                  background: 'color-mix(in oklab,currentColor 16%,transparent)',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                }}
              >
                {[
                  { n: '44', accent: undefined, label: 'Ghana records mapped', color: 'var(--gold)' },
                  { n: '12', accent: '+', label: 'Countries covered', color: 'var(--gold)' },
                  { n: '57', accent: '+', label: 'Studios continent-wide', color: 'var(--green)' },
                  { n: '94', accent: '+', label: 'Projects documented', color: 'var(--gold)' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{ padding: '26px 22px', background: 'color-mix(in oklab,currentColor 7%,transparent)' }}
                  >
                    <div className="stat">
                      <div className="n" style={item.accent ? undefined : { color: item.color }}>
                        {item.n}
                        {item.accent && <b style={{ color: item.color }}>{item.accent}</b>}
                      </div>
                      <div className="l" style={{ color: 'color-mix(in oklab,currentColor 66%,transparent)' }}>
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--green reveal">The community, in the room</p>
              <h2 className="h2 balance reveal d1">Game jams, showcases &amp; meetups.</h2>
            </div>
            <Link href="/events" className="link-arrow reveal d1">
              All events &amp; gallery
              <ArrowIcon />
            </Link>
          </div>
          <div className="reveal">
            <div className="event-row" style={{ borderTop: 0 }}>
              <div className="date">Q4 2026</div>
              <div>
                <h3>GAG Showcase &amp; Investor Night</h3>
                <p>
                  Ghana&apos;s studios present their latest titles to partners, publishers and investors.{' '}
                  <em>Details coming soon.</em>
                </p>
              </div>
              <span className="status-pill up">Upcoming</span>
            </div>
            <div className="event-row">
              <div className="date">2024</div>
              <div>
                <h3>Global Game Jam · Accra</h3>
                <p>
                  Ghanaian developers joined the world&apos;s largest game-creation event, building playable games in 48
                  hours.
                </p>
              </div>
              <span className="status-pill past">Past</span>
            </div>
            <div className="event-row">
              <div className="date">Aug 2022</div>
              <div>
                <h3>GAG Inaugural Gathering</h3>
                <p>
                  The founding of the association, convened by the community and chaired by Eyram Tawia of Leti Arts.
                </p>
              </div>
              <span className="status-pill past">Past</span>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 760, marginInline: 'auto' }}>
            <Glyphs style={{ justifyContent: 'center', marginBottom: 26 }} />
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              For investors &amp; partners
            </p>
            <h2 className="h2 balance" style={{ margin: '18px 0 20px' }}>
              The momentum is here. Get in early.
            </h2>
            <p className="lead" style={{ marginInline: 'auto', textAlign: 'center' }}>
              Ghana has the talent, the culture and the ambition to lead African game development. What the industry
              needs now is capital, distribution and belief. That&apos;s where you come in.
            </p>
            <div className="hero-cta" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Link href="/about#partner" className="btn btn--primary">
                Partner with GAG
                <ArrowIcon />
              </Link>
              <Link href="/studios" className="btn btn--ghost">
                Browse the studios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
