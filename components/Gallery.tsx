'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon, ExpandIcon } from '@/components/icons';
import { Stagger } from '@/components/motion/Stagger';
import { EASE, staggerCard } from '@/components/motion/config';
import { galleryTiles, type GalleryTile } from '@/lib/gallery';

/** Each span's real width, capped by the 1180px container, so a tile only fetches what it shows. */
const TILE_SIZES: Record<GalleryTile['span'], string> = {
  hero: '(min-width:1180px) 750px, (min-width:720px) 64vw, 50vw',
  wide: '(min-width:1180px) 560px, (min-width:720px) 48vw, 100vw',
  tall: '(min-width:1180px) 370px, (min-width:720px) 32vw, 50vw',
  '': '(min-width:1180px) 370px, (min-width:720px) 32vw, 50vw',
};

export default function Gallery({ tiles = galleryTiles }: { tiles?: GalleryTile[] }) {
  // keeps the shared-element ids apart when a page shows more than one wall
  const wall = useId();
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

  const activeTile = active === null ? null : tiles[active];

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
            layoutId={`${wall}-${active}`}
            style={activeTile.image ? undefined : { background: activeTile.art }}
            onClick={(e) => e.stopPropagation()}
          >
            {activeTile.image && (
              <Image src={activeTile.image} alt={activeTile.label} fill sizes="(min-width:1000px) 1000px, 100vw" />
            )}
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
        {tiles.map((tile, i) => (
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
              layoutId={`${wall}-${i}`}
              style={tile.image ? undefined : { background: tile.art }}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {tile.image && (
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes={TILE_SIZES[tile.span]}
                  style={tile.position ? { objectPosition: tile.position } : undefined}
                />
              )}
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
