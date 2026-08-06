/** Shared inline SVG bits. Everything here is presentational and colour-agnostic
 *  (stroke:currentColor) so it inherits from whatever it sits in. */

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg className="moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}

export function BurgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
      <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

/** The GAG mark: the four face buttons (○ △ ✕ □) in Ghana's colours. */
export function GagMark({ size = 40 }: { size?: number }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle className="g-circle" cx="26" cy="26" r="15" strokeWidth="7.5" />
      <path className="g-circle" d="M26 26 H41" strokeWidth="7.5" strokeLinecap="round" />
      <path className="g-tri" d="M74 10 L91 40 H57 Z" strokeWidth="6.5" strokeLinejoin="round" />
      <path className="g-x" d="M15 66 L37 88 M37 66 L15 88" strokeWidth="7.5" strokeLinecap="round" />
      <rect className="g-square" x="58" y="58" width="32" height="32" rx="2" strokeWidth="7.5" />
      <path className="g-square" d="M74 74 H90" strokeWidth="7.5" strokeLinecap="round" />
    </svg>
  );
}

/** Hero-sized mark with the two floating groups. */
export function GagMarkLarge() {
  return (
    <svg className="mark mark-lg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <g className="floaty">
        <circle className="g-circle" cx="25" cy="25" r="16" strokeWidth="6" />
        <path className="g-circle" d="M25 25 H41" strokeWidth="6" strokeLinecap="round" />
      </g>
      <g className="floaty-2">
        <path className="g-tri" d="M75 8 L94 42 H56 Z" strokeWidth="5.4" strokeLinejoin="round" />
      </g>
      <g className="floaty-2">
        <path className="g-x" d="M12 63 L40 91 M40 63 L12 91" strokeWidth="6" strokeLinecap="round" />
      </g>
      <g className="floaty">
        <rect className="g-square" x="57" y="57" width="35" height="35" rx="3" strokeWidth="6" />
        <path className="g-square" d="M74.5 74.5 H92" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** The ○ △ ✕ □ glyph row used as a section flourish. */
export function Glyphs({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={['glyphs', className].filter(Boolean).join(' ')} style={style} aria-hidden="true">
      <span className="gl-circle" />
      <span className="gl-tri" />
      <span className="gl-x" />
      <span className="gl-square" />
    </div>
  );
}

/** A single face-button glyph, used as a card bullet. */
export function Glyph({
  shape,
  className,
  style,
}: {
  shape: 'circle' | 'tri' | 'x' | 'square';
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={['glyphs', className].filter(Boolean).join(' ')} style={style} aria-hidden="true">
      <span className={`gl-${shape}`} />
    </div>
  );
}

/** Red / gold / green rule that opens every hero. */
export function FlagRule({ className }: { className?: string }) {
  return (
    <div className={['flag-rule', className].filter(Boolean).join(' ')} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}

/** Monochrome placeholder mark for a founding studio with no logo file yet. */
export function StudioPlaceholderMark({ shape }: { shape: 'circle' | 'square' | 'x' | 'triangle' }) {
  return (
    <svg className="lmark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {shape === 'circle' && <circle cx="20" cy="20" r="13" stroke="var(--accent)" strokeWidth="4.5" />}
      {shape === 'square' && <rect x="8" y="8" width="24" height="24" rx="2" stroke="var(--green)" strokeWidth="4.5" />}
      {shape === 'x' && <path d="M10 10 L30 30 M30 10 L10 30" stroke="var(--fg)" strokeWidth="4.5" strokeLinecap="round" />}
      {shape === 'triangle' && <path d="M20 6 L34 32 H6 Z" stroke="var(--gold)" strokeWidth="4" strokeLinejoin="round" />}
    </svg>
  );
}
