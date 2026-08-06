'use client';

import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

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

  /**
   * The pill behind the active link is placed from the link's offset *inside the
   * nav*, not with a shared `layoutId`. A layoutId animates between measurements
   * taken in page coordinates, and on a route change the scroll position jumps at
   * the same moment — which threw the pill hundreds of pixels down the document
   * and stretched the scrollable area well past the footer.
   */
  const navRef = useRef<HTMLElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  const placePill = useCallback(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>('a.active');
    setPill(active ? { left: active.offsetLeft, width: active.offsetWidth } : null);
  }, []);

  useLayoutEffect(placePill, [placePill, pathname]);

  useEffect(() => {
    window.addEventListener('resize', placePill);
    // webfonts land after first paint and change the link widths
    document.fonts?.ready.then(placePill).catch(() => {});
    return () => window.removeEventListener('resize', placePill);
  }, [placePill]);

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

        <nav
          className={['nav-links', menuOpen && 'open'].filter(Boolean).join(' ')}
          aria-label="Primary"
          ref={navRef}
        >
          {pill && (
            <motion.span
              className="nav-pill"
              aria-hidden="true"
              initial={false}
              animate={{ x: pill.left, width: pill.width }}
              transition={{ type: 'spring', stiffness: 420, damping: 36 }}
            />
          )}
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? 'active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
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
