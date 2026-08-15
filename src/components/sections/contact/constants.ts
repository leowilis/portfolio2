// Layout
export const CONTACT_MAX_WIDTH = 1440;
export const CONTACT_CONTENT_MAX_WIDTH = 1100;

// Globe
export const GLOBE_DESKTOP_SIZE = 680;
export const GLOBE_TABLET_SIZE = 460;
export const GLOBE_MOBILE_SIZE = 300;
export const GLOBE_ROTATION_X = -12;
export const GLOBE_ROTATION_Y = -22;
export const GLOBE_DRAG_SPEED = 0.35;
export const GLOBE_AUTO_ROTATE_SPEED = 0.025;
export const GLOBE_BORDER_OPACITY = 0.14;
export const GLOBE_GRID_OPACITY = 0.12;
export const GLOBE_ATMOSPHERE_OPACITY = 0.18;

// Globe Marker
export const GLOBE_MARKER_SIZE = 2.2;
export const GLOBE_MARKER_GLOW_SIZE = 5;
export const GLOBE_MARKER_OFFSET = 3;
export const GLOBE_MARKER_COLOR = '#c4b5fd';
export const GLOBE_MARKER_GLOW_COLOR = '#8b5cf6';
export const GLOBE_MARKER_LINE_COLOR = '#a78bfa';
export const GLOBE_MARKER_GLOW_OPACITY = 0.14;
export const GLOBE_MARKER_LINE_OPACITY = 0.45;
export const GLOBE_MARKER_LINE_WIDTH = 0.7;
export const GLOBE_MARKER_LABEL_POSITION: [number, number, number] = [10, 8, 0];
export const GLOBE_MARKER_LABEL_DISTANCE_FACTOR = 170;

// Globe Marker Geometry
export const GLOBE_MARKER_GEOMETRY_WIDTH_SEGMENTS = 24;
export const GLOBE_MARKER_GEOMETRY_HEIGHT_SEGMENTS = 24;

// Globe Marker Connector
export const GLOBE_MARKER_CONNECTOR_ORIGIN: [number, number, number] = [
  0, 0, 0,
];

// Globe Marker HTML
export const GLOBE_MARKER_HTML_Z_INDEX_RANGE: [number, number] = [100, 0];

// Globe Lights
export const GLOBE_LIGHTS = {
  KEY: {
    POSITION: [-300, 200, 400] as [number, number, number],
    INTENSITY: 2.8,
    COLOR: '#ffffff',
  },

  FILL: {
    POSITION: [300, 100, 200] as [number, number, number],
    INTENSITY: 1.2,
    COLOR: '#c4b5fd',
  },

  ACCENT: {
    POSITION: [0, 100, 300] as [number, number, number],
    INTENSITY: 1.5,
    COLOR: '#a78bfa',
  },
} as const;

// Globe Canvas
export const GLOBE_CANVAS_DESKTOP_SIZE = 840;
export const GLOBE_CANVAS_TABLET_SIZE = 620;
export const GLOBE_CANVAS_MOBILE_SIZE = 450;

// Globe Canvas Rendering
export const GLOBE_CANVAS_DPR_MIN = 1;
export const GLOBE_CANVAS_DPR_MAX = 1.5;
export const GLOBE_CANVAS_PERFORMANCE_MIN = 0.6;

// GLobe Camera
export const GLOBE_CAMERA_POSITION: [number, number, number] = [0, 0, 290];
export const GLOBE_CAMERA_FOV = 49;
export const GLOBE_CAMERA_NEAR = 1;
export const GLOBE_CAMERA_FAR = 1200;

// Globe WebGL
export const GLOBE_ANTIALIAS = true;
export const GLOBE_ALPHA = true;
export const GLOBE_POWER_PREFERENCE = 'default' as const;

// Globe Animation
export const GLOBE_FLOAT_DURATION = 8;
export const GLOBE_CORE_DURATION = 4;

// Typography
export const CONTACT_BADGE_TRACKING = '0.45em';
export const CONTACT_TITLE_TRACKING = '-0.05em';
export const CONTACT_CTA_TRACKING = '0.22em';
export const CONTACT_SOCIAL_TRACKING = '0.2em';

// Contact Animation
export const CONTACT_AMOUNT = 0.5;
export const CONTACT_REVEAL_DURATION = 0.75;
export const CONTACT_REVEAL_Y = 20;
export const CONTACT_TITLE_DELAY = 0.05;
export const CONTACT_TITLE_SECOND_DELAY = 0.2;
export const CONTACT_TITLE_STAGGER = 0.075;
export const CONTACT_TITLE_DURATION = 0.6;
export const CONTACT_TITLE_Y = 30;
export const CONTACT_TITLE_BLUR = 8;
export const CONTACT_CONTENT_DELAY = 0.4;
export const CONTACT_CTA_DELAY = 0.55;
export const CONTACT_CTA_HOVER_Y = -2;
export const CONTACT_CTA_ARROW_X = 5;
export const CONTACT_SOCIAL_DELAY = 0.7;
export const CONTACT_SOCIAL_STAGGER = 0.08;

// Contact Social
export const CONTACT_SOCIAL_ITEM_Y = 8;
export const CONTACT_SOCIAL_ITEM_DURATION = 0.5;
export const CONTACT_SOCIAL_UNDERLINE_OFFSET = -1;

// Ambient
export const CONTACT_GLOW_DURATION = 8;
export const CONTACT_GLOW_OPACITY = 0.12;
export const CONTACT_GLOW_BLUR = 120;
export const CONTACT_EASE: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

// Contact Section Animation
export const CONTACT_GLOBE_INITIAL_OPACITY = 0;
export const CONTACT_GLOBE_INITIAL_SCALE = 0.96;
export const CONTACT_GLOBE_REVEAL_AMOUNT = 0.2;
export const CONTACT_GLOBE_REVEAL_DURATION = 1.1;
export const CONTACT_GLOBE_EASE = [0.22, 1, 0.36, 1] as const;

// Icon
export const CONTACT_CTA_ARROW_UP = 18;
export const CONTACT_CTA_MAIL = 15;
