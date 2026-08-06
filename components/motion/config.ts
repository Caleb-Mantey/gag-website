import type { Variants } from 'motion/react';

/** The site's easing curve — matches --ease in globals.css. */
export const EASE = [0.22, 0.61, 0.36, 1] as const;

/**
 * Play once, as the element crosses into the bottom tenth of the screen.
 * `amount: 'some'` rather than a fraction on purpose: an element taller than
 * ~6× the viewport (the games grid on a phone) can never satisfy a percentage
 * threshold, and a stagger group in that state would leave its children
 * invisible forever.
 */
export const VIEWPORT = { once: true, amount: 'some', margin: '0px 0px -10% 0px' } as const;

/** Parent of a stagger group: holds no animation of its own, just the timing. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Child of a stagger group. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/** Slightly heavier entrance for cards and media tiles. */
export const staggerCard: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};
