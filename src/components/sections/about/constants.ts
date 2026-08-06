// About Bio
export const ABOUT_BIO_REVEAL_X = -40;
export const ABOUT_BIO_REVEAL_OPACITY = 1;
export const ABOUT_BIO_REVEAL_DURATION = 0.7;
export const ABOUT_BIO_REVEAL_EASE = 'easeOut' as const;
export const ABOUT_BIO_VIEWPORT_AMOUNT = 0.3;
export const ABOUT_BIO_INVIEW_OPACITY = 1;
export const ABOUT_BIO_VIEWPORT_ONCE = true;

// About Content
export const ABOUT_CONTENT_REVEAL_Y = 40;
export const ABOUT_CONTENT_REVEAL_DELAY = 0.12;

// About Details
export const ABOUT_DETAILS_STAGGER = 0.08;
export const ABOUT_DETAILS_ITEM_X = 24;
export const ABOUT_DETAILS_ITEM_DURATION = 0.45;
export const ABOUT_DETAILS_VIEWPORT_AMOUNT = 0.3;
export const ABOUT_DETAILS_ORB_Y = 8;
export const ABOUT_DETAILS_ORB_DURATION = 5;
export const ABOUT_DETAILS_VIEWPORT_ONCE = true;
export const ABOUT_DETAILS_CONTAINER_VARIANTS = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: ABOUT_DETAILS_STAGGER,
    },
  },
} as const;

export const ABOUT_DETAILS_ITEM_VARIANTS = {
  hidden: {
    opacity: 0,
    x: ABOUT_DETAILS_ITEM_X,
  },
  show: {
    opacity: 1,
    x: 0,
  },
} as const;

// About I Bring
export const ABOUT_WHAT_I_BRING_REVEAL_X = 20;
export const ABOUT_WHAT_I_BRING_REVEAL_ONCE = true;
export const ABOUT_WHAT_I_BRING_REVEAL_OPACITY = 1;
export const ABOUT_WHAT_I_BRING_REVEAL_AMOUNT = 0.3;
export const ABOUT_WHAT_I_BRING_REVEAL_DURATION = 0.6;
export const ABOUT_WHAT_I_BRING_REVEAL_DELAY = 0.08;
export const ABOUT_WHAT_I_BRING_REVEAL_EASE = 'easeOut' as const;

// About Focus
export const ABOUT_FOCUS_REVEAL_Y = 20;
export const ABOUT_FOCUS_REVEAL_OPACITY = 1;
export const ABOUT_FOCUS_REVEAL_AMOUNT = 0.3;
export const ABOUT_FOCUS_REVEAL_DURATION = 0.6;
export const ABOUT_FOCUS_REVEAL_DELAY = 0.08;
export const ABOUT_FOCUS_HOVER_Y = -4;
export const ABOUT_FOCUS_HOVER_DURATION = 0.3;
export const ABOUT_FOCUS_REVEAL_ONCE = true;
export const ABOUT_FOCUS_INITIAL_FILTER = 'blur(6px)';
export const ABOUT_FOCUS_INVIEW_FILTER = 'blur(0px)';
export const ABOUT_FOCUS_REVEAL_EASE = 'easeOut' as const;
export const ABOUT_FOCUS_ACCENT_SCALEX = 1;

// About Orb
export const ABOUT_ORB_OUTER_ROTATION_DURATION = 12;
export const ABOUT_ORB_INNER_ROTATION_DURATION = 8;
export const ABOUT_ORB_CORE_ROTATION_DURATION = 10;
export const ABOUT_ORB_ROTATION_DEGREES = 360;
export const ABOUT_ORB_ROTATION_MIN_DEGREES = -360;
export const ABOUT_ORB_EASE = 'linear';
export const ABOUT_ORB_REPEAT = Infinity;

// Stat Card
export const STAT_CARD_HOVER_Y = -4;
export const STAT_CARD_HOVER_SCALE = 1.02;
export const STAT_CARD_HOVER_DURATION = 0.25;