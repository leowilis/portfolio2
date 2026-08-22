import { gsap } from '@/src/lib/gsap';

import {
  TECH_HEADER_END,
  TECH_HEADER_ROTATE,
  TECH_HEADER_SCALE,
  TECH_HEADER_SCRUB,
  TECH_HEADER_START,
  TECH_HEADER_TRANSFORM_PERSPECTIVE,
  TECH_HEADER_Y,
} from './constants';

type Params = {
  wrapper: HTMLDivElement;
};

export function createTechHeaderTimeline({ wrapper }: Params) {
  if (!wrapper) return null;

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: wrapper.parentElement,
        start: TECH_HEADER_START,
        end: TECH_HEADER_END,
        scrub: TECH_HEADER_SCRUB,
        invalidateOnRefresh: true,
      },
    })
    .to(wrapper, {
      y: TECH_HEADER_Y,
      scale: TECH_HEADER_SCALE,
      rotateX: TECH_HEADER_ROTATE,
      transformPerspective: TECH_HEADER_TRANSFORM_PERSPECTIVE,
      ease: 'none',
    });
}
