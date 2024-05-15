import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.xl};
  width: 100%;
  max-width: ${theme.maxWidths.desktop};

  /* 333px is the current height of the header and footer */
  min-height: calc(100vh - 333px);
  margin: 0 auto;
`;

const Container = styled.main`
  ${containerStyles}
`;

export { Container };
