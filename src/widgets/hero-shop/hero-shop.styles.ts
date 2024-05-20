import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.yellow.light};
`;

const ctaContainerStyles = css`
  display: flex;
  position: absolute;
  top: 407px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacings.m};
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: ${theme.spacings.m} ${theme.spacings.xs};
  border-radius: ${theme.borderRadiuses.m};
  background-color: ${theme.colors.pink.light};
  box-shadow: ${theme.elevations[1]};
`;

const titleStyles = css`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.xl};
  text-align: left;
`;

const textStyles = css`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes.xs};
  line-height: ${theme.lineHeights.m};
  text-align: left;
`;

const buttonStyles = css`
  padding: ${theme.spacings.xxs} ${theme.spacings.xs};
  border: none;
  border-radius: ${theme.borderRadiuses.s};
  background: ${theme.colors.base.black};
  color: ${theme.colors.base.white};
  cursor: pointer;
`;

const Container = styled.div`
  ${containerStyles}
`;

const CtaContainer = styled.div`
  ${ctaContainerStyles}
`;

const Title = styled.h2`
  ${titleStyles}
`;

const Text = styled.span`
  ${textStyles}
`;

const ButtonStyled = styled.button`
  ${buttonStyles}
`;

export { ButtonStyled, Container, CtaContainer, Text, Title };
