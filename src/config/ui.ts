/**
 * UI configuration constants
 * Centralized styling and animation settings
 */

export const ANIMATION_CONFIG = {
  compass: {
    initialVelocity: 20 as number,
    dampening: 0.97 as number,
    velocityThreshold: 0.01 as number,
    dragMomentum: 0.8 as number,
    dragInfluence: 0.2 as number
  },
  transitions: {
    default: 'duration-300',
    fast: 'duration-200', 
    slow: 'duration-500',
    extraSlow: 'duration-700'
  }
} as const;

export const RESPONSIVE_BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px'
} as const;

export const COMPASS_CONFIG = {
  size: {
    container: 'clamp(250px,30vw,350px)',
    inner: '80%',
    icon: 'clamp(18px,2.5vw,28px)'
  },
  positions: {
    topLeft: 'top-[25.3%] left-[25.3%]',
    topRight: 'top-[25.3%] left-[74.7%]', 
    bottomLeft: 'top-[74.7%] left-[25.3%]',
    bottomRight: 'top-[74.7%] left-[74.7%]'
  },
  labelPositions: {
    topLeft: 'top-[15%] left-[15%]',
    topRight: 'top-[15%] left-[85%]',
    bottomLeft: 'top-[85%] left-[15%]',
    bottomRight: 'top-[85%] left-[85%]'
  },
  icons: ['diamond', 'star', 'burst', 'petal'] as const
} as const;

export const LAYOUT_SPACING = {
  section: 'py-32 px-[5%]',
  container: 'px-8 pb-8 pt-4 md:px-12 md:pb-12 md:pt-6',
  component: 'p-5',
  nav: 'space-x-6'
} as const;