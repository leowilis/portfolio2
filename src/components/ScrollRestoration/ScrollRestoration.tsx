'use client';

import { useLayoutEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const query = searchParams?.toString() || '';
    const storageKey = `scroll-y:${pathname}${query ? `?${query}` : ''}`;
    const savedScrollY = sessionStorage.getItem(storageKey);
    const targetY = savedScrollY !== null ? Number(savedScrollY) : 0;
    let restoreFrame = 0;
    let attempts = 0;

    const restoreScroll = () => {
      attempts += 1;
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;
      const canRestore = maxScrollY >= targetY;

      if (canRestore || targetY === 0 || attempts >= 20) {
        window.scrollTo(0, Math.min(targetY, Math.max(0, maxScrollY)));
        return;
      }

      restoreFrame = requestAnimationFrame(restoreScroll);
    };

    // Restore before browser has a chance to animate the position.
    restoreFrame = requestAnimationFrame(restoreScroll);

    const saveScrollPosition = () => {
      sessionStorage.setItem(storageKey, String(window.scrollY));
    };

    window.addEventListener('scroll', saveScrollPosition, {
      passive: true,
    });

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      cancelAnimationFrame(restoreFrame);

      window.removeEventListener('scroll', saveScrollPosition);
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [pathname, searchParams]);

  return null;
}
