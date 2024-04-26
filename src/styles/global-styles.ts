import { css } from "styled-components";

import { theme } from "./theme";

export const globalStyles = css`
  /* Global Resets and base styles */
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0 !important;
    background-color: ${theme.colors.base.white};
    color: ${theme.colors.base.black};
    font-family: ${theme.fontFamilies.inter};
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.regular};
    scroll-behavior: auto;
    appearance: none;
  }

  .blur-content {
    overflow: hidden;
    filter: blur(2px);
  }
`;
