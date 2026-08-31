'use client';

import { useLayoutEffect } from 'react';

const SCROLL_STORAGE_KEY = 'portfolio-scroll-y';

export default function ScrollRestoration() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.history.scrollRestoration = 'manual';

    const navigationEntry = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;

    const isReload = navigationEntry?.type === 'reload';

    if (isReload) {
      const savedScrollY = sessionStorage.getItem(SCROLL_STORAGE_KEY);

      if (savedScrollY !== null) {
        const scrollY = Number(savedScrollY);

        if (Number.isFinite(scrollY)) {
          window.scrollTo({
            top: scrollY,
            left: 0,
            behavior: 'auto',
          });
        }
      }
    }

    const saveScrollPosition = () => {
      sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
    };

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  return null;
}
