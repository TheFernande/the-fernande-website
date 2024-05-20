import Link from "next/link";
import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${theme.spacings.xs};
  height: 568px;
  margin: 0 auto;
  padding: ${theme.spacings.s};
  background: ${theme.colors.pink.light};
`;

const titleStyles = css`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.xl};
  text-align: left;
`;

const textStyles = css`
  width: 100%;
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
  font-size: ${theme.fontSizes.xs};
  text-decoration: none;
  cursor: pointer;
  appearance: none;
`;

const Container = styled.div`
  ${containerStyles}
`;

const Title = styled.h2`
  ${titleStyles}
`;

const Text = styled.span`
  ${textStyles}
`;

const ButtonStyled = styled(Link)`
  ${buttonStyles}
`;

export { ButtonStyled, Container, Text, Title };
