'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import { VIEWPORT, staggerCard, staggerContainer, staggerItem } from '@/components/motion/config';

type StaggerProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Gap between each child, in seconds. */
  stagger?: number;
  /** Hold before the first child plays. */
  delayChildren?: number;
  id?: string;
};

/** Wraps a list/grid so its children animate in one after another. */
export function Stagger({ children, className, style, stagger, delayChildren, id }: StaggerProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

const ITEM_TAGS = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  h2: motion.h2,
} as const;

type ItemProps = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof typeof ITEM_TAGS;
  /** Cards get a touch of scale on the way in. */
  variant?: 'item' | 'card';
};

/** A direct child of <Stagger>. */
export function StaggerItem({ children, className, style, as = 'div', variant = 'item' }: ItemProps) {
  const Tag = ITEM_TAGS[as];
  return (
    <Tag className={className} style={style} variants={variant === 'card' ? staggerCard : staggerItem}>
      {children}
    </Tag>
  );
}
