'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

import GameCard from '@/components/GameCard';
import { Stagger } from '@/components/motion/Stagger';
import { EASE } from '@/components/motion/config';
import { gameFilters, games, type GameGenre } from '@/lib/games';

type Filter = GameGenre | 'all';

export default function GamesGrid() {
  const [filter, setFilter] = useState<Filter>('all');
  const matches = (genres: GameGenre[]) => filter === 'all' || genres.includes(filter);

  return (
    <>
      <motion.div
        className="pill-tabs"
        role="group"
        aria-label="Filter games by category"
        style={{ marginBottom: 30 }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {gameFilters.map((tab) => (
          <button key={tab.value} aria-pressed={filter === tab.value} onClick={() => setFilter(tab.value)}>
            {/* one shared element that slides between tabs */}
            {filter === tab.value && (
              <motion.span
                className="tab-fill"
                layoutId="games-tab-fill"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* cards stay mounted and re-flow with layout animation, so filtering
          rearranges the grid instead of blinking it in and out */}
      <Stagger className="games-grid" stagger={0.06}>
        {games.map((game, i) => (
          <GameCard key={game.title} game={game} hidden={!matches(game.genres)} priority={i < 3} />
        ))}
      </Stagger>
    </>
  );
}
