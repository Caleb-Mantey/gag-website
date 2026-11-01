'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

import NewsCard from '@/components/NewsCard';
import { EASE } from '@/components/motion/config';
import { news, newsFilters, type NewsSource } from '@/lib/news';

type Filter = NewsSource | 'all';

export default function NewsGrid() {
  const [filter, setFilter] = useState<Filter>('all');
  const stories = news.filter((item) => filter === 'all' || item.source === filter);

  return (
    <>
      <motion.div
        className="pill-tabs"
        role="group"
        aria-label="Filter news by source"
        style={{ marginBottom: 30 }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {newsFilters.map((tab) => (
          <button key={tab.value} aria-pressed={filter === tab.value} onClick={() => setFilter(tab.value)}>
            {/* one shared element that slides between tabs */}
            {filter === tab.value && (
              <motion.span
                className="tab-fill"
                layoutId="news-tab-fill"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </motion.div>

      <div className="news-grid">
        {stories.map((item, i) => (
          <NewsCard key={item.slug} item={item} lead={i === 0} />
        ))}
      </div>
      <p className="logo-note">Images on linked stories come from each story&apos;s source.</p>
    </>
  );
}
