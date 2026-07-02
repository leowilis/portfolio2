'use client';

import { animate, motion, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

type CountUpProps = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export default function CountUp({
  from = 0,
  to,
  duration = 1.6,
  suffix = '',
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const value = useMotionValue(from);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(value, to, {
      duration,
      ease: 'easeOut',
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent =
            Math.round(latest).toLocaleString() + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, to, duration, suffix]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {from}
      {suffix}
    </motion.span>
  );
}