import type { Game } from '@/lib/games';

export default function GameCard({
  game,
  className,
  hidden,
}: {
  game: Game;
  className?: string;
  /** Filtered out — kept mounted (and so keeps its reveal state) but hidden. */
  hidden?: boolean;
}) {
  return (
    <article className={['game-card', className].filter(Boolean).join(' ')} hidden={hidden}>
      <div className="art" style={{ background: game.art }}>
        <span className="studio-tag">
          {game.studio}
          {game.tagSuffix ? ` ${game.tagSuffix}` : ''}
        </span>
      </div>
      <div className="body">
        <p className="genre">{game.kicker}</p>
        <h3>{game.title}</h3>
        <p>{game.blurb}</p>
      </div>
    </article>
  );
}
