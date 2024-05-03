import { hexToRGBA } from "./colors-utils";

const colors = {
  base: {
    black: "#000000",
    darkest: "#4E5556",
    darker: "#848F90",
    dark: "#B4C5C7",
    light: "#EFF6F6",
    lighter: "#F3F3F3",
    white: "#FFFFFF"
  },
  blue: {
    darker: "#00004F",
    dark: "#110D76",
    light: "#332CCD",
    lighter: "#645CFF",
    lightest: "#EDF1FD"
  },
  green: {
    darker: "#138460",
    dark: "#25CD98",
    light: "#46C5D2",
    lightest: "#EFF6F7"
  },
  red: {
    darker: "#A9334C",
    dark: "#CC5C63",
    light: "#E87766"
  },
  gradient: {
    elyssio: "linear-gradient(175deg, #25CD98 -33%, #00004F 85%)"
  }
} as const;

const spacings = {
  xxxxs: "0.125rem", // 2px
  xxxs: "0.25rem", // 4px
  xxs: "0.5rem", // 8px
  xs: "1rem", // 16px
  s: "1.5rem", // 24px
  m: "2rem", // 32px
  l: "2.5rem", // 40px
  xl: "3rem", // 48px
  xxl: "3.5rem", // 56px
  xxxl: "4rem", // 64px
  xxxxl: "4.5rem", // 72px
  xxxxxl: "5rem" // 80px
} as const;

const fontFamilies = {
  inter: "Inter, sans-serif"
} as const;

const fontSizes = {
  xxxs: "0.75rem", // 12px
  xxs: "0.875rem", // 14px
  xs: "1rem", // 16px
  s: "1.125rem", // 18px
  m: "1.25rem", // 20px
  l: "1.375rem", // 22px
  xl: "1.625rem", // 26px
  xxl: "1.875rem", // 30px
  xxxl: "2.375rem", // 38px
  xxxxl: "2.875rem" // 46px
} as const;

const fontWeights = {
  extralight: 300,
  light: 400,
  regular: 500,
  semibold: 600,
  bold: 700
} as const;

const lineHeights = {
  s: "1.5",
  m: "1.625",
  l: "1.75",
  xl: "1.875",
  xxl: "2"
} as const;

const elevations = {
  1: `0px 8px 8px 0px ${hexToRGBA(colors.blue.darker, 8)}, 0px 6px 10px 4px ${hexToRGBA(
    colors.blue.darker,
    4
  )}`,
  2: `0px 12px 6px -6px ${hexToRGBA(colors.blue.darker, 8)}, 0px 0px 0px 0px ${hexToRGBA(
    colors.blue.darker,
    4
  )}`
} as const;

const borderRadiuses = {
  s: "8px",
  m: "16px",
  l: "24px"
} as const;

const transitions = {
  fast: "0.1s ease-in-out",
  medium: "0.2s ease-in-out",
  slow: "0.3s ease-in-out"
} as const;

export const theme = {
  colors,
  spacings,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  elevations,
  borderRadiuses,
  transitions
} as const;
