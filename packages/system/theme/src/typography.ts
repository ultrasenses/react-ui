declare class BaseTypography<N extends string> {
  protected nominal: N;
}

type TypographyType<T, N extends string> = T & BaseTypography<N>;

export type TypographyModel = TypographyType<"TypographyType", string>;

const baseFontFamily = "Roboto, sans-serif";

const createStyleTypography = (
  fontFamily: string,
  size: number,
  lineHeight: number,
  weight: string | number = 400,
  letterSpacing = 0,
) =>
  `font: ${weight} ${size}px/${lineHeight}px ${fontFamily};
  ${letterSpacing ? `letter-spacing: ${letterSpacing}px;` : ""}
  `.trim();

const useTypography = createStyleTypography.bind(null, baseFontFamily);

const useAdaptive = (
  desktop: string,
  tablet: string,
  mobile: string,
): TypographyModel =>
  `
  ${`@media (min-width: 1024px) {${tablet || desktop}}`}
  ${`@media (min-width: 600px) {${mobile || tablet || desktop}}`}
  ${mobile}
  `.trim() as TypographyModel;

const text = {
  bold64: useTypography(64, 72, 700),
  medium64: useTypography(64, 72, 500),
  regular64: useTypography(64, 72, 400),

  bold52: useTypography(52, 64, 700),
  medium52: useTypography(52, 64, 500),
  regular52: useTypography(52, 64, 400),

  bold40: useTypography(40, 48, 700),
  medium40: useTypography(40, 48, 500),
  regular40: useTypography(40, 48, 400),

  bold32: useTypography(32, 40, 700),
  medium32: useTypography(32, 40, 500),
  regular32: useTypography(32, 40, 400),

  bold24: useTypography(24, 32, 700),
  medium24: useTypography(24, 32, 500),
  regular24: useTypography(24, 32, 400),

  bold20: useTypography(20, 28, 700),
  medium20: useTypography(20, 28, 500),
  regular20: useTypography(20, 28, 400),

  bold18: useTypography(18, 22, 700),
  medium18: useTypography(18, 22, 500),
  regular18: useTypography(18, 22, 400),

  bold16: useTypography(16, 24, 700),
  medium16: useTypography(16, 24, 500),
  regular16: useTypography(16, 24, 400),

  bold14: useTypography(14, 20, 700),
  medium14: useTypography(14, 20, 500),
  regular14: useTypography(14, 20, 400),

  bold12: useTypography(12, 20, 700),
  medium12: useTypography(12, 20, 500),
  regular12: useTypography(12, 20, 400),

  bold10: useTypography(10, 20, 700),
  medium10: useTypography(10, 20, 500),
  regular10: useTypography(10, 20, 400),
};

export const typography = {
  ...text,

  head: {
    bold: useAdaptive(text.bold64, text.bold52, text.bold40),
    medium: useAdaptive(text.medium64, text.medium52, text.medium40),
    regular: useAdaptive(text.regular64, text.regular52, text.regular40),
  },

  subhead1: {
    bold: useAdaptive(text.bold32, text.bold32, text.bold24),
    medium: useAdaptive(text.medium32, text.medium32, text.medium24),
    regular: useAdaptive(text.regular32, text.regular32, text.regular24),
  },

  subhead2: {
    bold: useAdaptive(text.bold24, text.bold24, text.bold20),
    medium: useAdaptive(text.medium24, text.medium24, text.medium20),
    regular: useAdaptive(text.regular24, text.regular24, text.regular20),
  },

  body1: {
    bold: useAdaptive(text.bold20, text.bold20, text.bold18),
    medium: useAdaptive(text.medium20, text.medium20, text.medium18),
    regular: useAdaptive(text.regular20, text.regular20, text.regular18),
  },

  body2: {
    bold: useAdaptive(text.bold16, text.bold16, text.bold14),
    medium: useAdaptive(text.medium16, text.medium16, text.medium14),
    regular: useAdaptive(text.regular16, text.regular16, text.regular14),
  },

  caption1: {
    bold: useAdaptive(text.bold14, text.bold14, text.bold12),
    medium: useAdaptive(text.medium14, text.medium14, text.medium12),
    regular: useAdaptive(text.regular14, text.regular14, text.regular12),
  },

  caption2: {
    bold: useAdaptive(text.bold12, text.bold12, text.bold10),
    medium: useAdaptive(text.medium12, text.medium12, text.medium10),
    regular: useAdaptive(text.regular12, text.regular12, text.regular10),
  },

  button: {
    L: useAdaptive(text.medium16, text.medium16, text.medium16),
    M: useAdaptive(text.medium14, text.medium14, text.medium14),
    S: useAdaptive(text.medium12, text.medium12, text.medium12),
  },
};
