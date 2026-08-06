'use client';

import { useEffect, useState } from 'react';

/**
 * True on pointer devices that can actually hover. Touch screens report false,
 * so hover-only affordances can be shown outright instead of hidden forever.
 * Starts as `true` so server and client markup agree on first paint.
 */
export default function useCanHover() {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover)');
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return canHover;
}
