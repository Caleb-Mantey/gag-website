import type { Metadata } from 'next';
import Image from 'next/image';

import Gallery from '@/components/Gallery';
import NotifyForm from '@/components/NotifyForm';
import { FlagRule, Glyphs } from '@/components/icons';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { pastEvents, upcomingEvents, type PastEvent } from '@/lib/events';
import { mtnConferenceTiles, mtnContestTiles } from '@/lib/gallery';

export const metadata: Metadata = {
  title: 'Events',
  description:
    "Game jams, conferences, showcases and meetups from Ghana's games community: what's coming next, the MTN Gaming Conference and Game Developer Contest, and every past event on the record.",
};

const justWrapped = pastEvents.slice(0, 2);
const earlierEvents = pastEvents.slice(2);
const years = [...new Set(earlierEvents.map((event) => event.date.slice(0, 4)))];

function EventMedia({ event, sizes }: { event: PastEvent; sizes: string }) {
  return (
    <div className="event-media" style={event.image ? undefined : { background: event.art }}>
      {event.image ? (
        <Image src={event.image} alt={event.imageAlt ?? ''} fill sizes={sizes} />
      ) : (
        <span className="event-media__date" aria-hidden="true">
          {event.dateLabel}
        </span>
      )}
    </div>
  );
}

function EventLinks({ links }: { links: NonNullable<PastEvent['links']> }) {
  return (
    <div className="event-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <Stagger className="container" stagger={0.09}>
          <StaggerItem>
            <FlagRule />
          </StaggerItem>
          <StaggerItem as="p" className="eyebrow" style={{ marginTop: 20 }}>
            The community, in the room
          </StaggerItem>
          <StaggerItem>
            <h1 className="balance">Where Ghana&apos;s game makers meet.</h1>
          </StaggerItem>
          <StaggerItem as="p" className="lead pretty">
            Game jams, conferences, studio showcases and investor nights. These are the events where talent connects,
            projects get made and partners see the industry up close.
          </StaggerItem>
        </Stagger>
      </section>

      {/* UPCOMING */}
      <section className="section--tight">
        <div className="container">
          <Reveal as="p" className="eyebrow eyebrow--green" style={{ marginBottom: 22 }}>
            Upcoming &amp; planned
          </Reveal>
          <Stagger className="grid cols-3" stagger={0.09}>
            {upcomingEvents.map((event) => (
              <StaggerItem as="article" className="card event-card" variant="card" key={event.title}>
                <span className={`status-pill ${event.status}`} style={{ alignSelf: 'flex-start' }}>
                  {event.pill}
                </span>
                <h3 className="h3">{event.title}</h3>
                <p className="text-muted" style={{ fontSize: 15 }}>
                  {event.body}
                </p>
                <p className="when">{event.when}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* JUST WRAPPED */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow eyebrow--gold">
                Just wrapped
              </Reveal>
              <Reveal as="h2" className="h2 balance" delay={0.06}>
                A big October for Ghanaian games.
              </Reveal>
            </div>
          </div>
          <Stagger className="event-feature-grid" stagger={0.1}>
            {justWrapped.map((event) => (
              <StaggerItem as="article" className="event-feature" variant="card" key={event.slug}>
                <EventMedia event={event} sizes="(min-width:1180px) 550px, (min-width:900px) 48vw, 100vw" />
                <div className="event-feature__body">
                  <p className="event-meta">
                    <time dateTime={event.date}>{event.dateLabel}</time> · {event.place}
                  </p>
                  <h3 className="h3">{event.title}</h3>
                  <p className="event-host">Hosted by {event.host}</p>
                  <p className="text-muted" style={{ fontSize: 15.5 }}>
                    {event.body}
                  </p>
                  {event.results && (
                    <div className="event-results">
                      {event.results.map((group) => (
                        <div key={group.category}>
                          <h4>{group.category}</h4>
                          <ol>
                            {group.places.map((team) => (
                              <li key={team}>{team}</li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  )}
                  {event.highlights && (
                    <ul className="event-highlights">
                      {event.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {event.links && <EventLinks links={event.links} />}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="section">
        <div className="container">
          <Reveal as="p" className="eyebrow" style={{ marginBottom: 8 }}>
            Past events
          </Reveal>
          <Reveal as="h2" className="h2 balance" delay={0.06} style={{ marginBottom: 30 }}>
            How we got here.
          </Reveal>
          {years.map((year) => (
            <div className="event-year" key={year}>
              <Reveal as="p" className="event-year__label">
                {year}
              </Reveal>
              <Stagger className="event-year__list" stagger={0.08}>
                {earlierEvents
                  .filter((event) => event.date.startsWith(year))
                  .map((event) => (
                    <StaggerItem as="article" className="past-event" key={event.slug}>
                      <EventMedia event={event} sizes="(min-width:640px) 230px, 100vw" />
                      <div>
                        <p className="event-meta">
                          <time dateTime={event.date}>{event.dateLabel}</time> · {event.place}
                        </p>
                        <h3>{event.title}</h3>
                        <p className="event-host">Hosted by {event.host}</p>
                        <p className="past-event__body">{event.body}</p>
                        {event.links && <EventLinks links={event.links} />}
                      </div>
                    </StaggerItem>
                  ))}
              </Stagger>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow">
                From the community
              </Reveal>
              <Reveal as="h2" className="h2 balance" delay={0.06}>
                The gallery.
              </Reveal>
            </div>
          </div>
          <Reveal as="p" className="gallery-title">
            MTN DigiFest Game Developer Contest · Oct 2026
          </Reveal>
          <Gallery tiles={mtnContestTiles} />
          <Reveal as="p" className="logo-note" style={{ marginTop: 14 }}>
            Contest photos: Choice News Online.
          </Reveal>
          <Reveal as="p" className="gallery-title">
            MTN Gaming Conference · Oct 2026
          </Reveal>
          <Gallery tiles={mtnConferenceTiles} />
          <Reveal as="p" className="gallery-title">
            Gamescom · Aug 2025
          </Reveal>
          <Gallery />
        </div>
      </section>

      {/* STAY IN THE LOOP */}
      <section className="section">
        <div className="container">
          <Reveal className="band band--ink" style={{ textAlign: 'center' }}>
            <Glyphs style={{ justifyContent: 'center', marginBottom: 22 }} />
            <p className="eyebrow eyebrow--gold" style={{ justifyContent: 'center' }}>
              Don&apos;t miss the next one
            </p>
            <h2 className="h2 balance" style={{ margin: '14px auto 18px', maxWidth: '20ch' }}>
              Get event invites &amp; industry news.
            </h2>
            <NotifyForm />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.04em', marginTop: 14, opacity: 0.6 }}>
              No spam. Just jams, showcases and opportunities.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
