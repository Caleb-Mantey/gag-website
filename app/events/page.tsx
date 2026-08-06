import type { Metadata } from 'next';

import Gallery from '@/components/Gallery';
import NotifyForm from '@/components/NotifyForm';
import { FlagRule, Glyphs } from '@/components/icons';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'Events',
  description:
    "Game jams, showcases, meetups and investor nights from the Game Developers Association of Ghana, past highlights, a community gallery, and what's coming next.",
};

const upcoming = [
  {
    pill: 'Upcoming · Q4 2026',
    status: 'up' as const,
    title: 'GAG Showcase & Investor Night',
    body: "Ghana's studios present their latest titles to publishers, partners and investors, the flagship moment to see the industry's momentum first-hand.",
    when: 'Accra · Date & venue TBA',
  },
  {
    pill: 'Planned · 2027',
    status: 'up' as const,
    title: 'Global Game Jam · Ghana',
    body: "GAG hosts Ghana's site for the world's largest game-creation event, 48 hours, one theme, dozens of new playable games.",
    when: 'Accra · January 2027',
  },
  {
    pill: 'Ongoing',
    status: 'live' as const,
    title: "Members' Meetups",
    body: 'Regular community gatherings for developers, artists and streamers to share work, find collaborators and learn.',
    when: 'Accra · Monthly',
  },
];

const milestones = [
  {
    date: '2024',
    title: 'Global Game Jam · Accra',
    body: 'Ghanaian developers took part in the global 48-hour jam, building playable games around a shared theme alongside thousands of teams worldwide.',
  },
  {
    date: '2023',
    title: 'Global Game Jam · East Legon site',
    body: 'Ghana hosted a Global Game Jam site in East Legon, Accra, a milestone in bringing the international event home to local developers.',
  },
  {
    date: 'Aug 2022',
    title: 'GAG Inaugural Gathering',
    body: 'The founding of the Game Developers Association of Ghana, convened by the community and chaired by Eyram Tawia, CEO of Leti Arts, with support from Ambitious Ghana.',
  },
];

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
            Game jams, studio showcases, workshops and investor nights. The association&apos;s events are where talent
            connects, projects get made and partners see the industry up close.
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
            {upcoming.map((event) => (
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

      {/* GALLERY */}
      <section className="section">
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
          <Gallery />
        </div>
      </section>

      {/* PAST TIMELINE */}
      <section className="section section--alt">
        <div className="container">
          <Reveal as="p" className="eyebrow eyebrow--gold" style={{ marginBottom: 8 }}>
            Milestones
          </Reveal>
          <Reveal as="h2" className="h2 balance" delay={0.06} style={{ marginBottom: 30 }}>
            How we got here.
          </Reveal>
          <Stagger stagger={0.09}>
            {milestones.map((item, i) => (
              <StaggerItem className="event-row" key={item.title} style={i === 0 ? { borderTop: 0 } : undefined}>
                <div className="date">{item.date}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span className="status-pill past">Past</span>
              </StaggerItem>
            ))}
          </Stagger>
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
