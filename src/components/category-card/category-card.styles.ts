import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacings.xs};

  /* height: 568px; */

  /* margin: 0 auto; */

  /* padding: ${theme.spacings.s}; */
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
  cursor: pointer;
`;

const Container = styled.div`
  ${containerStyles}
`;

const Title = styled.h3`
  ${titleStyles}
`;

const ButtonStyled = styled.button`
  ${buttonStyles}
`;

export { ButtonStyled, Container, Title };
