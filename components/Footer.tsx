import Link from 'next/link';

import { GagMark } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link className="brand" href="/" style={{ marginBottom: 18 }}>
              <GagMark size={36} />
              <span className="wordmark">
                GAG<small>Game Developers · Ghana</small>
              </span>
            </Link>
            <p className="text-muted measure" style={{ fontSize: 15 }}>
              Uniting Ghana&apos;s game makers and putting Ghana on the map as a powerhouse of African game
              development.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/studios">Studios</Link>
            <Link href="/games">Games</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About GAG</Link>
          </div>

          <div className="footer-col">
            <h4>Get involved</h4>
            <Link href="/about#join">Join the association</Link>
            <Link href="/about#partner">Partner &amp; invest</Link>
            <Link href="/events">Attend an event</Link>
          </div>

          <div className="footer-col">
            <h4>Ecosystem</h4>
            <a href="https://warpedatlas.com/countries/ghana" target="_blank" rel="noopener noreferrer">
              Ghana on Warped Atlas ↗
            </a>
            <Link href="/about#warped">The Warped Atlas collab</Link>
            <a href="https://gasbrosgamingnetwork.com/" target="_blank" rel="noopener noreferrer">
              Gasbros Gaming Network ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Game Developers Association of Ghana</span>
          <span>Accra, Ghana · Built for the community 🇬🇭</span>
        </div>
      </div>
    </footer>
  );
}
