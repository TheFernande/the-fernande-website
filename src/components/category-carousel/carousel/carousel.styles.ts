import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const carouselStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.m};
`;

const viewportStyles = ({ activeIndexes }: { activeIndexes: number[] }) => css`
  display: flex;
  margin-left: 16px;
  transform: translateX(-${(activeIndexes[0] * 100) / 3}%);
  transition: transform ${theme.transitions.xslow};
  transition-delay: 0.05s;
`;

const CarouselStyled = styled.div`
  ${carouselStyles}
`;

const Viewport = styled.div<{ activeIndexes: number[] }>`
  ${viewportStyles}
`;

export { CarouselStyled, Viewport };
