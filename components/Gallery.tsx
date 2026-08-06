'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon, ExpandIcon } from '@/components/icons';
import { Stagger } from '@/components/motion/Stagger';
import { EASE, staggerCard } from '@/components/motion/config';
import { galleryTiles } from '@/lib/gallery';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => setMounted(true), []);

  // escape to close, and hold the page still while the lightbox is up
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('overlay-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.classList.remove('overlay-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close]);

  const activeTile = active === null ? null : galleryTiles[active];

  const lightbox = (
    <AnimatePresence>
      {activeTile && active !== null && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={activeTile.label}
        >
          <motion.div
            className="lightbox__frame"
            layoutId={`gtile-${active}`}
            style={activeTile.image ? undefined : { background: activeTile.art }}
            onClick={(e) => e.stopPropagation()}
          >
            {activeTile.image && <Image src={activeTile.image} alt={activeTile.label} fill sizes="100vw" />}
            <motion.div
              className="lightbox__caption"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.35, ease: EASE }}
            >
              {activeTile.label}
            </motion.div>
          </motion.div>
          <motion.button
            className="lightbox__close"
            onClick={close}
            aria-label="Close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.1, duration: 0.35, ease: EASE }}
          >
            <CloseIcon />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Stagger className="gallery" stagger={0.07}>
        {galleryTiles.map((tile, i) => (
          <motion.button
            key={tile.label}
            type="button"
            className={`gtile ${tile.span}`.trim()}
            variants={staggerCard}
            whileHover="hover"
            initial="rest"
            animate="rest"
            onClick={() => setActive(i)}
            aria-label={`Open ${tile.label}`}
          >
            <motion.div
              className="gtile__art"
              layoutId={`gtile-${i}`}
              style={tile.image ? undefined : { background: tile.art }}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {tile.image && <Image src={tile.image} alt="" fill sizes="(min-width:720px) 45vw, 100vw" />}
            </motion.div>
            <div className="gtile__scrim" />
            <span className="gtile__expand">
              <ExpandIcon />
            </span>
            <motion.div
              className="gtile__label"
              variants={{ rest: { y: 0 }, hover: { y: -3 } }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <span>{tile.label}</span>
            </motion.div>
          </motion.button>
        ))}
      </Stagger>

      {/* portalled to <body>: the page-transition wrapper is its own stacking
          context, so a lightbox rendered inside it would sit under the header */}
      {mounted && createPortal(lightbox, document.body)}
    </>
  );
}
