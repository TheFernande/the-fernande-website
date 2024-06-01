import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const controlsStyles = css`
  display: flex;
  gap: ${theme.spacings.m};
  width: 100%;
  margin-left: ${theme.spacings.xs};
`;

const ControlsStyled = styled.div`
  ${controlsStyles}
`;

export { ControlsStyled };
