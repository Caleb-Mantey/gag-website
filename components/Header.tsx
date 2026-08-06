'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ThemeToggle from '@/components/ThemeToggle';
import { BurgerIcon, GagMark } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/studios', label: 'Studios' },
  { href: '/games', label: 'Games' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile drawer whenever the route changes
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={['site-header', scrolled && 'scrolled'].filter(Boolean).join(' ')}>
      <div className="container nav">
        <Link className="brand" href="/" aria-label="GAG home">
          <GagMark />
          <span className="wordmark">
            GAG<small>Game Developers · Ghana</small>
          </span>
        </Link>

        <nav className={['nav-links', menuOpen && 'open'].filter(Boolean).join(' ')} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : undefined}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/about#join" className="btn btn--primary btn--sm nav-cta-desktop">
            Join GAG
          </Link>
          <button
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <BurgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
