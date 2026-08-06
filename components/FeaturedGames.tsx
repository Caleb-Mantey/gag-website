'use client';

import { useEffect, useState } from 'react';

import GameCard from '@/components/GameCard';
import { Stagger } from '@/components/motion/Stagger';
import { games, type Game } from '@/lib/games';

/**
 * Three games, reshuffled on every visit.
 *
 * The page is statically prerendered, so the shuffle happens on mount rather
 * than on the server — the section sits well below the fold, so the swap has
 * always happened by the time it scrolls into view.
 */
export default function FeaturedGames({ initial }: { initial: Game[] }) {
  const [picks, setPicks] = useState(initial);

  useEffect(() => {
    const pool = [...games];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    setPicks(pool.slice(0, 3));
  }, []);

  return (
    <Stagger className="games-grid" stagger={0.08}>
      {picks.map((game) => (
        <GameCard key={game.title} game={game} />
      ))}
    </Stagger>
  );
}
