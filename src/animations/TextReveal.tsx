'use client';

import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

type TextRevealTag = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  as?: TextRevealTag;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  blur?: number;
  once?: boolean;
  amount?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const createContainerVariants = (delay: number, stagger: number): Variants => ({
  hidden: {},

  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

const createWordVariants = (
  duration: number,
  y: number,
  blur: number,
): Variants => ({
  hidden: {
    opacity: 0,
    y,
    filter: blur > 0 ? `blur(${blur}px)` : 'none',
  },

  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration,
      ease: EASE,
    },
  },
});

function renderWords(children: ReactNode, variants: Variants) {
  if (typeof children !== 'string') {
    return children;
  }

  const words = children.split(' ');

  return words.map((word, index) => (
    <motion.span
      key={`${word}-${index}`}
      variants={variants}
      className='inline-block'
    >
      {word}
      {index < words.length - 1 && '\u00A0'}
    </motion.span>
  ));
}

export default function TextReveal({
  children,
  className,
  as = 'div',
  delay = 0,
  stagger = 0.08,
  duration = 0.55,
  y = 24,
  blur = 8,
  once = true,
  amount = 0.3,
}: TextRevealProps) {
  const containerVariants = createContainerVariants(delay, stagger);
  const wordVariants = createWordVariants(duration, y, blur);

  const content = renderWords(children, wordVariants);

  const viewport = {
    once,
    amount,
  };

  const props = {
    className,
    variants: containerVariants,
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport,
  };

  switch (as) {
    case 'h1':
      return <motion.h1 {...props}>{content}</motion.h1>;

    case 'h2':
      return <motion.h2 {...props}>{content}</motion.h2>;

    case 'h3':
      return <motion.h3 {...props}>{content}</motion.h3>;

    case 'h4':
      return <motion.h4 {...props}>{content}</motion.h4>;

    case 'span':
      return <motion.span {...props}>{content}</motion.span>;

    case 'p':
      return <motion.p {...props}>{content}</motion.p>;

    case 'div':
    default:
      return <motion.div {...props}>{content}</motion.div>;
  }
}
