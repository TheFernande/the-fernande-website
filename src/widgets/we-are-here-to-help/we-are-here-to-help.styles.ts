import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding: ${theme.spacings.xxxl};
  background: ${theme.colors.blue.light};
`;

const headingStyles = css`
  width: 100%;
  font-size: ${theme.fontSizes.xl};
  line-height: ${theme.lineHeights.xl};
  text-align: center;
`;

const buttonStyles = css`
  padding: ${theme.spacings.xxs} ${theme.spacings.xs};
  border: 1px solid black;
  border-radius: ${theme.borderRadiuses.s};
  background: transparent;
  color: ${theme.colors.base.black};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
`;

const Container = styled.div`
  ${containerStyles}
`;

const Heading = styled.h4`
  ${headingStyles}
`;

const ButtonStyled = styled.button`
  ${buttonStyles}
`;

export { ButtonStyled, Container, Heading };
