'use client';

import { useState } from 'react';

import GameCard from '@/components/GameCard';
import { gameFilters, games, type GameGenre } from '@/lib/games';

type Filter = GameGenre | 'all';

export default function GamesGrid() {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <>
      <div className="pill-tabs reveal" role="group" aria-label="Filter games by category" style={{ marginBottom: 30 }}>
        {gameFilters.map((tab) => (
          <button key={tab.value} aria-pressed={filter === tab.value} onClick={() => setFilter(tab.value)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid cols-3">
        {games.map((game, i) => (
          <GameCard
            key={game.title}
            game={game}
            className={`reveal${i % 3 ? ` d${i % 3}` : ''}`}
            hidden={filter !== 'all' && !game.genres.includes(filter)}
          />
        ))}
      </div>
    </>
  );
}
