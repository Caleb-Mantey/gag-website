'use client';

import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { ArrowIcon } from '@/components/icons';
import { EASE, VIEWPORT } from '@/components/motion/config';
import type { Engine } from '@/lib/engines';

/** Hero clip, playing only while its card is on screen. */
function EngineVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduceMotion) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [inView, reduceMotion]);

  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-hidden="true" />;
}

/** Sample-game stills, cross-fading, with whichever is showing named above. */
function EngineGallery({
  images,
  onChange,
}: {
  images: { src: string; label: string }[];
  onChange: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = setInterval(() => setI((n) => (n + 1) % images.length), 4200);
    return () => clearInterval(id);
  }, [inView, reduceMotion, images.length]);

  useEffect(() => onChange(i), [i, onChange]);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          style={{ position: 'absolute', inset: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <Image
            src={images[i].src}
            alt={images[i].label}
            fill
            sizes="(min-width:900px) 60vw, 100vw"
            priority={i === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function EngineCard({ engine, index }: { engine: Engine; index: number }) {
  const [shot, setShot] = useState(0);
  const onChange = useCallback((n: number) => setShot(n), []);
  const gallery = engine.media.type === 'gallery' ? engine.media.images : null;

  return (
    <article className="engine-card" style={{ ['--engine-accent' as string]: engine.accent }}>
      <div className="engine-card__media">
        {engine.media.type === 'video' ? (
          <EngineVideo src={engine.media.src} poster={engine.media.poster} />
        ) : (
          <EngineGallery images={engine.media.images} onChange={onChange} />
        )}
      </div>
      <span className="engine-card__scrim" aria-hidden="true" />

      <span className="engine-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {gallery && (
        <div className="engine-card__now">
          <AnimatePresence mode="wait">
            <motion.span
              key={shot}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {gallery[shot].label}
            </motion.span>
          </AnimatePresence>
          <span className="engine-card__ticks" aria-hidden="true">
            {gallery.map((img, n) => (
              <span key={img.src} className={n === shot ? 'on' : undefined} />
            ))}
          </span>
        </div>
      )}

      <div className="engine-card__content">
        <div className="engine-card__lockup">
          <span className="engine-card__mark">
            <Image src={engine.mark} alt="" sizes="40px" />
          </span>
          <h3 className="engine-card__name">{engine.name}</h3>
        </div>

        <p className="engine-card__blurb">{engine.blurb}</p>
        <p className="engine-card__meta">{engine.chips.join('  ·  ')}</p>

        <div className="engine-card__foot">
          <a className="engine-card__cta" href={engine.url} target="_blank" rel="noopener noreferrer">
            Explore {engine.name}
            <ArrowIcon />
          </a>
          <a className="engine-card__by" href={engine.creatorUrl} target="_blank" rel="noopener noreferrer">
            <span>Built by</span>
            {engine.creatorLogo ? (
              <Image className="engine-card__bylogo" src={engine.creatorLogo} alt={engine.creator} sizes="110px" />
            ) : (
              <strong>{engine.creator}</strong>
            )}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function EngineShowcase({ engines }: { engines: Engine[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const inView = useInView(wrapRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();

  /** Distance from one slide to the next, gap included. */
  const step = useCallback(() => {
    const rail = railRef.current;
    const slide = rail?.querySelector<HTMLElement>('.engine-slide');
    if (!rail || !slide) return 0;
    const gap = parseFloat(getComputedStyle(rail).columnGap || '20') || 20;
    return slide.offsetWidth + gap;
  }, []);

  /**
   * Whichever slide sits closest to the middle of the rail. Derived from
   * geometry rather than scrollLeft / step, because the last slide can't scroll
   * all the way to its own offset — the rail clamps first, and dividing would
   * then round to the wrong card.
   */
  const currentIndex = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return 0;
    const slides = [...rail.querySelectorAll<HTMLElement>('.engine-slide')];
    const middle = rail.scrollLeft + rail.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - middle);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    return best;
  }, []);

  const sync = useCallback(() => setActive(currentIndex()), [currentIndex]);

  const goTo = useCallback(
    (index: number) => {
      const rail = railRef.current;
      const width = step();
      if (!rail || !width) return;
      rail.scrollTo({ left: width * index, behavior: reduceMotion ? 'auto' : 'smooth' });
    },
    [step, reduceMotion],
  );

  useEffect(() => {
    sync();
    const rail = railRef.current;
    rail?.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      rail?.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  // advance on its own, but only while it's on screen and nobody's interacting
  useEffect(() => {
    if (paused || !inView || reduceMotion || engines.length < 2) return;
    const id = setInterval(() => {
      const rail = railRef.current;
      const width = step();
      if (!rail || !width) return;
      const next = (currentIndex() + 1) % engines.length;
      rail.scrollTo({ left: width * next, behavior: 'smooth' });
    }, 7000);
    return () => clearInterval(id);
  }, [paused, inView, reduceMotion, engines.length, step, currentIndex]);

  return (
    <motion.div
      className="engine-rail-wrap"
      ref={wrapRef}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.75, ease: EASE }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="engine-rail" ref={railRef}>
        {engines.map((engine, i) => (
          <div className="engine-slide" key={engine.slug}>
            <EngineCard engine={engine} index={i} />
          </div>
        ))}
      </div>

      <div className="engine-rail__dots">
        {engines.map((engine, i) => (
          <button
            key={engine.slug}
            className={i === active ? 'on' : undefined}
            style={i === active ? { background: engine.accent } : undefined}
            onClick={() => goTo(i)}
            aria-label={`Show ${engine.name}`}
            aria-current={i === active}
          />
        ))}
      </div>
    </motion.div>
  );
}
