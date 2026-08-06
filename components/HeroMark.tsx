'use client';

import { motion } from 'motion/react';

const float = (delay: number) => ({
  animate: { y: [0, -11, 0] },
  transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' as const, delay },
});

/**
 * The four face buttons, drifting. Two pairs move in counterphase so the mark
 * never feels like a single rigid object.
 */
export default function HeroMark() {
  return (
    <svg className="mark mark-lg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <motion.g {...float(0)}>
        <circle className="g-circle" cx="25" cy="25" r="16" strokeWidth="6" />
        <path className="g-circle" d="M25 25 H41" strokeWidth="6" strokeLinecap="round" />
      </motion.g>
      <motion.g {...float(-3.2)}>
        <path className="g-tri" d="M75 8 L94 42 H56 Z" strokeWidth="5.4" strokeLinejoin="round" />
      </motion.g>
      <motion.g {...float(-1.6)}>
        <path className="g-x" d="M12 63 L40 91 M40 63 L12 91" strokeWidth="6" strokeLinecap="round" />
      </motion.g>
      <motion.g {...float(-4.8)}>
        <rect className="g-square" x="57" y="57" width="35" height="35" rx="3" strokeWidth="6" />
        <path className="g-square" d="M74.5 74.5 H92" strokeWidth="6" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}
