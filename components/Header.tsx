'use client';

import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ThemeToggle from '@/components/ThemeToggle';
import { BurgerIcon, CloseIcon, GagMark } from '@/components/icons';
import { EASE } from '@/components/motion/config';

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

  // reading progress along the bottom edge of the header
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 38, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile drawer whenever the route changes
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <motion.header
      className={['site-header', scrolled && 'scrolled'].filter(Boolean).join(' ')}
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container nav">
        <Link className="brand" href="/" aria-label="GAG home">
          <motion.span whileHover={{ rotate: 8, scale: 1.06 }} transition={{ duration: 0.4, ease: EASE }}>
            <GagMark />
          </motion.span>
          <span className="wordmark">
            GAG<small>Game Developers · Ghana</small>
          </span>
        </Link>

        <nav className={['nav-links', menuOpen && 'open'].filter(Boolean).join(' ')} aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? 'active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {/* one pill that slides from item to item as you navigate */}
                {active && (
                  <motion.span
                    className="nav-pill"
                    layoutId="nav-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/about#join" className="btn btn--primary btn--sm nav-cta-desktop">
            Join GAG
          </Link>
          <motion.button
            className="nav-burger"
            aria-label={menuOpen ? 'Close menu' : 'Menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'grid', placeItems: 'center' }}
              >
                {menuOpen ? <CloseIcon /> : <BurgerIcon />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    </motion.header>
  );
}
