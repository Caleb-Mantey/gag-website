import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import type { StudioLogo as StudioLogoAsset } from '@/lib/studios';

type Props = {
  slug: string;
  name: string;
  logo?: StudioLogoAsset;
  /** Invert the light-theme artwork (mono white-on-black marks, e.g. Dusu). */
  invertLight?: boolean;
  /** Extra classes on the tile — e.g. "directory-logo" or "visual". */
  className?: string;
  /** Rendered inside .logo-type when the studio has no artwork. */
  fallback: ReactNode;
  /** Rendering the tile as a link (home logo wall) instead of a plain tile. */
  href?: string;
  /** Opens `href` in a new tab — for partners linking off-site. */
  external?: boolean;
  /** CSS `sizes` hint so Next serves an appropriately small image. */
  sizes: string;
  /** Load without waiting for the viewport (above-the-fold tiles). */
  priority?: boolean;
};

/**
 * One studio tile. When artwork exists both theme variants are rendered and CSS
 * shows whichever matches the active theme — that keeps the theme swap instant
 * and free of any client-side JS.
 */
export default function StudioLogo({
  slug,
  name,
  logo,
  invertLight,
  className,
  fallback,
  href,
  external,
  sizes,
  priority,
}: Props) {
  const classes = ['studio-logo', className, logo && 'has-img', invertLight && 'inv']
    .filter(Boolean)
    .join(' ');

  const body = logo ? (
    <>
      <Image className="logo-img light" src={logo.light} alt="" sizes={sizes} priority={priority} />
      <Image className="logo-img dark" src={logo.dark} alt="" sizes={sizes} priority={priority} />
    </>
  ) : (
    <span className="logo-type">{fallback}</span>
  );

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        data-slug={slug}
        aria-label={name}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {body}
      </Link>
    );
  }

  return (
    <div className={classes} data-slug={slug}>
      {body}
    </div>
  );
}
