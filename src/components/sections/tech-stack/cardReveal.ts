import gsap from 'gsap';

import {
  CARD_REVEAL_DURATION,
  CARD_REVEAL_STAGGER,
  CARD_REVEAL_START_Y,
  TECH_CARD_REVEAL_START,
} from './constants';

export function createCardReveal(cards: HTMLElement[]) {
  if (!cards.length) return null;

  return gsap.from(cards, {
    y: CARD_REVEAL_START_Y,
    opacity: 0,
    duration: CARD_REVEAL_DURATION,
    stagger: CARD_REVEAL_STAGGER,
    ease: 'power3.out',
    force3D: true,
    scrollTrigger: {
      trigger: cards[0].parentElement,
      start: TECH_CARD_REVEAL_START,
      once: true,
    },
  });
}
