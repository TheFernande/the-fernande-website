import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const carouselStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.m};
`;

const viewportStyles = ({ activeIndex }: { activeIndex: number[] }) => css`
  display: flex;
  margin-left: 16px;
  transform: translateX(-${(activeIndex[0] * 100) / 3}%);
  transition: transform ${theme.transitions.xslow};
  transition-delay: 0.05s;
`;

const CarouselStyled = styled.div`
  ${carouselStyles}
`;

const Viewport = styled.div<{ activeIndex: number[] }>`
  ${viewportStyles}
`;

export { CarouselStyled, Viewport };
