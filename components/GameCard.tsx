'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

import useCanHover from '@/components/motion/useCanHover';
import { EASE, staggerCard } from '@/components/motion/config';
import { PlayIcon } from '@/components/icons';
import type { Game } from '@/lib/games';

const CARD = {
  rest: { y: 0 },
  hover: { y: -8 },
};

const BLURB = {
  rest: { height: 0, opacity: 0 },
  hover: { height: 'auto', opacity: 1 },
};

/** Touch devices never hover, so the blurb just stays open. */
const BLURB_ALWAYS_OPEN = {
  rest: { height: 'auto', opacity: 1 },
  hover: { height: 'auto', opacity: 1 },
};

const LIFT = {
  rest: { y: 0 },
  hover: { y: -2 },
};

type Props = {
  game: Game;
  /** Filtered out — kept mounted so the grid can animate, but hidden. */
  hidden?: boolean;
  /** Image sizes hint for the responsive srcset. */
  sizes?: string;
  priority?: boolean;
};

/**
 * A game as a full-bleed poster: key art edge to edge, type sitting on it.
 * Hovering swaps in the second layer — gameplay footage if the title has any,
 * otherwise a second still — and opens up the blurb underneath the title.
 */
export default function GameCard({ game, hidden, sizes = '(min-width:940px) 33vw, (min-width:600px) 50vw, 100vw', priority }: Props) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const canHover = useCanHover();

  // keep motion in charge either way — handing back an unmanaged element would
  // strand the inline height:0 it set on the first render
  const blurbVariants = canHover ? BLURB : BLURB_ALWAYS_OPEN;
  const showHoverLayer = hovered && game.hover && !reduceMotion;

  // the <video> only mounts on hover, so it starts itself (muted autoplay is
  // always permitted) and is torn down again on leave — no manual play/pause
  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <motion.article variants={staggerCard} hidden={hidden} style={{ minWidth: 0 }}>
      <motion.div
        className="game-card"
        variants={CARD}
        initial="rest"
        animate={hovered ? 'hover' : 'rest'}
        onHoverStart={onEnter}
        onHoverEnd={onLeave}
        onFocusCapture={onEnter}
        onBlurCapture={onLeave}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {/* resting artwork */}
        <div className="game-card__layer">
          {game.poster ? (
            <Image src={game.poster} alt="" fill sizes={sizes} priority={priority} />
          ) : (
            <motion.div
              className="game-card__art"
              style={{ background: game.art }}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
              transition={{ duration: 0.7, ease: EASE }}
            />
          )}
        </div>

        {/* gameplay footage / second still */}
        <AnimatePresence>
          {showHoverLayer && game.hover && (
            <motion.div
              className="game-card__layer"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {game.hover.type === 'video' ? (
                <video
                  src={game.hover.src}
                  poster={game.hover.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                />
              ) : (
                <Image src={game.hover.src} alt="" fill sizes={sizes} />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="game-card__scrim" />

        <span className="game-card__tag">
          {game.studio}
          {game.tagSuffix ? ` ${game.tagSuffix}` : ''}
        </span>

        {game.hover?.type === 'video' && (
          <motion.span
            className="game-card__play"
            variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: 0, scale: 0.8 } }}
            transition={{ duration: 0.3, ease: EASE }}
            aria-hidden="true"
          >
            <PlayIcon />
          </motion.span>
        )}

        <div className="game-card__body">
          <motion.p className="game-card__kicker" variants={LIFT} transition={{ duration: 0.4, ease: EASE }}>
            {game.kicker}
          </motion.p>
          <motion.h3 className="game-card__title" variants={LIFT} transition={{ duration: 0.4, ease: EASE }}>
            {game.title}
          </motion.h3>
          <motion.div
            className="game-card__blurb"
            variants={blurbVariants}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p style={{ paddingTop: 8 }}>{game.blurb}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}
