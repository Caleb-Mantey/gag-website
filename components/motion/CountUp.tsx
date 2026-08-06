'use client';

import { animate, useInView, useReducedMotion } from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';

import { EASE } from '@/components/motion/config';

type Props = {
  to: number;
  /** Rendered after the number, e.g. "+". */
  suffix?: string;
  duration?: number;
};

/**
 * Counts a stat up when it scrolls into view.
 * Server-renders the final value, so the number is correct with JS off and
 * there's no flash before the animation arms.
 */
export default function CountUp({ to, suffix, duration = 1.3 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(to);

  // drop to zero before the browser paints, so the count-up has somewhere to start
  useLayoutEffect(() => {
    if (!reduceMotion) setValue(0);
  }, [reduceMotion]);

  useLayoutEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
