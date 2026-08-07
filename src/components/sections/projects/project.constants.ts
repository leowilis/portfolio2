// Stage
export const STAGE_PERSPECTIVE = 2600;
export const PROJECT_STAGE_MAX_WIDTH = 1800;

// Carousel
export const DRAG_LIMIT = 450;
export const DRAG_THRESHOLD = 180;

// Cards
export const FEATURED_CARD_WIDTH = 720;
export const SIDE_CARD_WIDTH = 450;

// Images
export const FEATURED_IMAGE_HEIGHT = 430;
export const SIDE_IMAGE_HEIGHT = 240;
export const PROJECT_IMAGE_QUALITY = 90;
export const PROJECT_PRIORITY_IMAGE_COUNT = 2;
export const FEATURED_IMAGE_SIZE = '560px';
export const SIDE_IMAGE_SIZE = '480px';

// Motion
export const FLOAT_DISTANCE = 10;
export const CARD_HOVER_SCALE = 1.015;
export const IMAGE_HOVER_SCALE = 1.03;
export const SIDE_CARD_HOVER_SCALE = 0.86;
export const SIDE_CARD_HOVER_Y = -8;

// Mobile Reveal
export const PROJECT_MOBILE_REVEAL_OPACITY = 1;
export const PROJECT_MOBILE_REVEAL_Y = 24;
export const PROJECT_MOBILE_REVEAL_DURATION = 0.6;
export const PROJECT_MOBILE_REVEAL_STAGGER_DELAY = 0.15;
export const PROJECT_MOBILE_REVEAL_VIEWPORT_AMOUNT = 0.25;

// Chevron Icon
export const PROJECT_CHEVRON_ICON = 24;

// Responsive
export const MOBILE_BREAKPOINT = 768;

// Shadows
export const CENTER_CARD_SHADOW = '0 80px 140px rgba(0,0,0,.85)' as const;
export const SIDE_CARD_SHADOW = '0 20px 40px rgba(0,0,0,.45)' as const;

// Indicator
export const TAB_NUMBER_OFFSET = 1;
export const TAB_INDEX_INACTIVE = -1;

// Project Links
export const PROJECT_LINK_ICON_SIZE = 12;

// Modal Animation
export const PROJECT_MODAL_ACTIVE_OPACITY = 1;
export const PROJECT_MODAL_BACKDROP_DURATION = 0.25;
export const PROJECT_MODAL_ENTER_SCALE = 0.96;
export const PROJECT_MODAL_ENTER_Y = 24;
export const PROJECT_MODAL_ACTIVE_SCALE = 1;
export const PROJECT_MODAL_EXIT_SCALE = 0.98;
export const PROJECT_MODAL_EXIT_Y = 12;
export const PROJECT_MODAL_FOCUS_TAB_INDEX = -1;
export const PROJECT_MODAL_SPRING_STIFFNESS = 280;
export const PROJECT_MODAL_SPRING_DAMPING = 26;
export const PROJECT_MODAL_SPRING_MASS = 0.9;

// Modal Content Motion
export const PROJECT_MODAL_CONTENT_ENTER_X = 24;
export const PROJECT_MODAL_CONTENT_EXIT_X = -24;
export const PROJECT_MODAL_CONTENT_OPACITY = 1;
export const PROJECT_MODAL_CONTENT_ENTER_DURATION = 0.35;
export const PROJECT_MODAL_INFO_ENTER_Y = 12;
export const PROJECT_MODAL_INFO_ENTER_DELAY = 0.06;
export const PROJECT_MODAL_INFO_ENTER_DURATION = 0.3;
export const PROJECT_MODAL_INFO_EASE = 'easeOut' as const;
export const PROJECT_MODAL_CONTENT_EASE: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

// Modal Image
export const PROJECT_MODAL_IMAGE_INITIAL_SCALE = 0.96;
export const PROJECT_MODAL_IMAGE_ENTER_DURATION = 0.45;
export const PROJECT_MODAL_IMAGE_OPACITY = 1;
export const PROJECT_MODAL_IMAGE_SCALE = 1;
export const PROJECT_MODAL_NAV_ICON_SIZE = 14;

// Card Layering
export const PROJECT_CARD_Z_INDEX_OFFSET = 10;

// Card Motion
export const PROJECT_CARD_HOVER_DURATION = 0.35;
export const PROJECT_IMAGE_HOVER_EASE: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

// Projects Header Motion
export const PROJECT_HEADER_INITIAL_Y = 30;
export const PROJECT_HEADER_INVIEW_OPACITY = 1;
export const PROJECT_HEADER_ENTER_DURATION = 0.7;
export const PROJECT_HEADER_VIEWPORT_ONCE = true;
export const PROJECT_HEADER_VIEWPORT_AMOUNT = 0.3;
export const PROJECT_HEADER_VIEWPORT_MARGIN = '-40px 0px';
export const PROJECT_HEADER_EASE: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

// Projects Header Layout
export const PROJECT_HEADER_MARGIN_BOTTOM = {
  DEFAULT: 16,
  MD: 20,
} as const;
export const PROJECT_HEADER_LABEL_TRACKING = 0.45;

// Project Navigation
export const PROJECT_DIRECTION_NEXT = 1;
export const PROJECT_DIRECTION_PREVIOUS = -1;

// Stage
export const PROJECT_STAGE_HEIGHT = 720;
export const PROJECT_STAGE_DRAG_ELASTIC = 0.08;

// Floor Light
export const PROJECT_FLOOR_TOP = 540;
export const PROJECT_FLOOR_HEIGHT = 180;
export const PROJECT_FLOOR_WIDTH = 980;
export const PROJECT_FLOOR_MIDDLE_TOP = 586;
export const PROJECT_FLOOR_MIDDLE_HEIGHT = 20;
export const PROJECT_FLOOR_MIDDLE_WIDTH = 620;
export const PROJECT_FLOOR_STRIP_TOP = 600;
export const PROJECT_FLOOR_STRIP_HEIGHT = 8;
export const PROJECT_FLOOR_STRIP_WIDTH = 480;
export const PROJECT_FLOOR_BLOOM_TOP = 600;
export const PROJECT_FLOOR_BLOOM_HEIGHT = 30;
export const PROJECT_FLOOR_BLOOM_WIDTH = 420;
