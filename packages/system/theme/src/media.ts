/** Breakpoints */
export const breakpoints = {
  /**
   * @breakpoint 375
   */
  PHONE: 375,
  /**
   * @breakpoint 600
   */
  PHONE_LARGE: 600,
  /**
   * @breakpoint 784
   */
  TABLET: 784,
  /**
   * @breakpoint 1024
   */
  TABLET_LARGE: 1024,
  /**
   * @breakpoint 1920
   */
  DESKTOP: 1920,
  /**
   * @breakpoint 2560
   */
  DESKTOP2K: 2560,
  /**
   * @breakpoint 3840
   */
  DESKTOP4K: 3840,
};

/** Breakpoint types */
export type BreakpointsKeys = keyof typeof breakpoints;

/** Media queries */
export const media = {
  /**
   * @media (min-width: 375px)
   */
  forPhone: `@media (min-width: ${breakpoints.PHONE}px)`,
  /**
   * @media (min-width: 600px)
   */
  forPhoneLarge: `@media (min-width: ${breakpoints.PHONE_LARGE}px)`,
  /**
   * @media (min-width: 784px)
   */
  forTablet: `@media (min-width: ${breakpoints.TABLET}px)`,
  /**
   * @media (min-width: 1024px)
   */
  forTabletLarge: `@media (min-width: ${breakpoints.TABLET_LARGE}px)`,
  /**
   * @media (min-width: 1280px)
   */
  forDesktop: `@media (min-width: ${breakpoints.DESKTOP}px)`,
  /**
   * @media (min-width: 1366px)
   */
  forDesktop2k: `@media (min-width: ${breakpoints.DESKTOP2K}px)`,
  /**
   * @media (min-width: 1920px)
   */
  forDesktop4k: `@media (min-width: ${breakpoints.DESKTOP4K}px)`,
};
