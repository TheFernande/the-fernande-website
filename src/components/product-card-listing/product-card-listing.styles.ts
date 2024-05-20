import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacings.xs};
  width: 320px;
  height: 480px;
  padding: ${theme.spacings.xs};
  border-radius: ${theme.borderRadiuses.m};
  background: ${theme.colors.base.white};
`;

const imageContainerStyles = css`
  width: 100%;
  height: 320px;
  border-radius: ${theme.borderRadiuses.s};
  overflow: hidden;

  & > img {
    position: relative;
    top: 12.5%;
    left: 50%;
    transition: transform ${theme.transitions.fast};
    transform: translate(-50%, -12.5%);

    &:hover {
      transform: translate(-50%, -12.5%) scale(1.1);
    }
  }
`;

const titleStyles = css`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.l};
  text-align: left;
`;

const buttonStyles = css`
  padding: ${theme.spacings.xxs} ${theme.spacings.xs};
  border: none;
  border-radius: ${theme.borderRadiuses.s};
  background: ${theme.colors.base.black};
  color: ${theme.colors.base.white};
  font-size: ${theme.fontSizes.xxs};
  text-decoration: none;
  cursor: pointer;
  appearance: none;
`;

const Container = styled.div`
  ${containerStyles}
`;

const ImageContainer = styled.div`
  ${imageContainerStyles}
`;

const Title = styled.h3`
  ${titleStyles}
`;

const ButtonStyled = styled.a`
  ${buttonStyles}
`;

export { ButtonStyled, Container, ImageContainer, Title };
