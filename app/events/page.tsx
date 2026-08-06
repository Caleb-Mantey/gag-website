import type { Metadata } from 'next';

import NotifyForm from '@/components/NotifyForm';
import { FlagRule, Glyphs } from '@/components/icons';

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

const gallery = [
  { label: 'Global Game Jam · Accra ’24', span: 'tall', art: 'linear-gradient(150deg, oklch(58% 0.19 27), oklch(32% 0.1 20))' },
  { label: 'Studio showcase', span: '', art: 'linear-gradient(150deg, oklch(80% 0.15 88), oklch(52% 0.13 55))' },
  { label: 'Dev workshop', span: '', art: 'linear-gradient(150deg, oklch(60% 0.15 150), oklch(38% 0.1 168))' },
  { label: 'Inaugural gathering · 2022', span: 'wide', art: 'linear-gradient(120deg, oklch(20% 0.01 60), oklch(40% 0.06 30))' },
  { label: 'Community meetup', span: '', art: 'linear-gradient(150deg, oklch(64% 0.17 35), oklch(45% 0.14 300))' },
  { label: 'XR demo day', span: '', art: 'linear-gradient(150deg, oklch(70% 0.14 150), oklch(80% 0.15 88))' },
  { label: 'Investor & partner mixer', span: 'wide', art: 'linear-gradient(120deg, oklch(58% 0.19 27), oklch(80% 0.15 88))' },
  { label: 'Student game day', span: '', art: 'linear-gradient(150deg, oklch(52% 0.15 250), oklch(40% 0.12 300))' },
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
        <div className="container">
          <FlagRule className="reveal" />
          <p className="eyebrow reveal d1" style={{ marginTop: 20 }}>
            The community, in the room
          </p>
          <h1 className="balance reveal d1">Where Ghana&apos;s game makers meet.</h1>
          <p className="lead pretty reveal d2">
            Game jams, studio showcases, workshops and investor nights. The association&apos;s events are where talent
            connects, projects get made and partners see the industry up close.
          </p>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="section--tight">
        <div className="container">
          <p className="eyebrow eyebrow--green reveal" style={{ marginBottom: 22 }}>
            Upcoming &amp; planned
          </p>
          <div className="grid cols-3">
            {upcoming.map((event, i) => (
              <article
                key={event.title}
                className={`card reveal${i ? ` d${i}` : ''}`}
                style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                <span className={`status-pill ${event.status}`} style={{ alignSelf: 'flex-start' }}>
                  {event.pill}
                </span>
                <h3 className="h3">{event.title}</h3>
                <p className="text-muted" style={{ fontSize: 15 }}>
                  {event.body}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '.04em',
                    color: 'var(--faint)',
                    marginTop: 'auto',
                  }}
                >
                  {event.when}
                </p>
              </article>
            ))}
          </div>
          
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow reveal">From the community</p>
              <h2 className="h2 balance reveal d1">The gallery.</h2>
            </div>
          
          </div>
          <div className="gallery reveal">
            {gallery.map((tile) => (
              <div key={tile.label} className={`gtile ${tile.span}`.trim()} style={{ background: tile.art }}>
                <span>{tile.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST TIMELINE */}
      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow eyebrow--gold reveal" style={{ marginBottom: 8 }}>
            Milestones
          </p>
          <h2 className="h2 balance reveal d1" style={{ marginBottom: 30 }}>
            How we got here.
          </h2>
          <div className="reveal">
            {milestones.map((item, i) => (
              <div className="event-row" key={item.title} style={i === 0 ? { borderTop: 0 } : undefined}>
                <div className="date">{item.date}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span className="status-pill past">Past</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAY IN THE LOOP */}
      <section className="section">
        <div className="container">
          <div className="band band--ink reveal" style={{ textAlign: 'center' }}>
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
          </div>
        </div>
      </section>
    </>
  );
}
