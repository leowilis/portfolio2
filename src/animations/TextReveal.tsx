'use client';

import { ElementType } from 'react';
import { motion, type Variants } from 'framer-motion';

const MotionComponents = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  div: motion.div,
  span: motion.span,
} as const;

type Segment = {
  text: string;
  className?: string;
};

type TextRevealProps = {
  text: Segment[];
  className?: string;
  id?: string;
  as?: keyof typeof MotionComponents;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TextReveal({
  text,
  className,
  id,
  as = 'div',
}: TextRevealProps) {
  const Component = MotionComponents[as] as ElementType;

  return (
    <Component
      id={id}
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className={className}
    >
      {text.map((segment, segmentIndex) => {
        const wordsArray = segment.text.split(' ');

        return wordsArray.map((wordText, wordIndex) => {
          const isLastWord = wordIndex === wordsArray.length - 1;

          return (
            <motion.span
              key={`segment-${segmentIndex}-word-${wordIndex}`}
              variants={word}
              className={[
                'inline-block',
                !isLastWord ? 'mr-[0.24em]' : '',
                segment.className ?? '',
              ]
                .join(' ')
                .trim()}
            >
              {wordText}
            </motion.span>
          );
        });
      })}
    </Component>
  );
}
