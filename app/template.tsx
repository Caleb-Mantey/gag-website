'use client';

import { motion } from 'motion/react';

import { EASE } from '@/components/motion/config';

/**
 * Runs on every route change (templates remount, layouts don't), so each page
 * eases in rather than snapping into place.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
