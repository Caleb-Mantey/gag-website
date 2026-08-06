'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import { EASE, VIEWPORT } from '@/components/motion/config';

const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  li: motion.li,
  blockquote: motion.blockquote,
} as const;

type Props = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Seconds to hold before playing — use to cascade a few sibling elements. */
  delay?: number;
  /** Travel distance in px. 0 gives a pure fade. */
  y?: number;
  /** Element to render. Defaults to a div. */
  as?: keyof typeof TAGS;
  id?: string;
};

/**
 * Fade-and-rise as the element scrolls into view. The workhorse of the site —
 * everything that isn't part of a stagger group uses this.
 */
export default function Reveal({ children, className, style, delay = 0, y = 20, as = 'div', id }: Props) {
  const Tag = TAGS[as];

  return (
    <Tag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}
