import Image from 'next/image';

import { formatNewsDate, newsSources, type NewsItem } from '@/lib/news';

type Props = {
  item: NewsItem;
  /** The big horizontal treatment for the top story. */
  lead?: boolean;
};

/** One story. The whole card links out — the full article lives on the source's site. */
export default function NewsCard({ item, lead }: Props) {
  const publisher = item.via ?? newsSources[item.source];

  return (
    <a
      className={['news-card', lead && 'news-card--lead'].filter(Boolean).join(' ')}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="news-card__media" style={item.image ? undefined : { background: item.art }}>
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes={
              lead
                ? '(min-width:1180px) 625px, (min-width:860px) 55vw, 100vw'
                : '(min-width:1180px) 365px, (min-width:940px) 33vw, (min-width:600px) 50vw, 100vw'
            }
            preload={lead}
          />
        ) : (
          <span className="news-card__mark" aria-hidden="true">
            {newsSources[item.source]}
          </span>
        )}
      </div>
      <div className="news-card__body">
        <p className="news-card__meta">
          <span>{newsSources[item.source]}</span>
          <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
        </p>
        <h3>{item.title}</h3>
        <p className="news-card__summary">{item.summary}</p>
        <span className="news-card__source">Read on {publisher} ↗</span>
      </div>
    </a>
  );
}
