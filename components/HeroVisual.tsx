'use client';

import { motion } from 'motion/react';

import HeroMark from '@/components/HeroMark';
import { EASE } from '@/components/motion/config';

/** The mark plus its slowly breathing colour wash. */
export default function HeroVisual({ className }: { className?: string }) {
  return (
    <motion.div
      className={['hero-visual', className].filter(Boolean).join(' ')}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
    >
      <motion.div
        className="hero-glow"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <HeroMark />
    </motion.div>
  );
}
