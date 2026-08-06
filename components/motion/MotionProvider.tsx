'use client';

import { MotionConfig } from 'motion/react';

/**
 * One place to set global motion behaviour.
 * `reducedMotion="user"` makes every motion component honour the OS
 * "reduce motion" setting automatically — transforms are dropped, opacity kept.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
