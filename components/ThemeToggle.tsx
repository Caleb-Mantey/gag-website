'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@/components/icons';
import { EASE } from '@/components/motion/config';

type Theme = 'light' | 'dark';

/**
 * The theme itself is applied to <html data-theme> before first paint by the
 * blocking snippet in ThemeScript, so this button only has to flip it and
 * remember the choice. Which icon shows is pure CSS; the spin is the flourish.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // read the theme the pre-paint script already applied (after hydration, so
  // server and client markup match)
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('gag-theme', next);
    } catch {
      /* private mode — the choice just won't persist */
    }
    setTheme(next);
  }

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme` : 'Switch theme'}
      animate={{ rotate: theme === 'dark' ? 180 : 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <SunIcon />
      <MoonIcon />
    </motion.button>
  );
}
