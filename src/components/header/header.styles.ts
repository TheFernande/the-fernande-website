import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6rem;
  max-width: calc(1200px - 4rem);
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const subContainerStyles = css`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18rem;
  max-width: calc(1200px - 4rem);
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const navigationStyles = css`
  display: flex;
  align-items: center;
  gap: 2rem;
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
  cursor: pointer;
`;

const Navigation = styled.nav`
  ${navigationStyles}
`;

const Container = styled.div`
  ${containerStyles}
`;

const SubContainer = styled.div`
  ${subContainerStyles}
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

export { ButtonStyled, Container, Navigation, SubContainer, Text, Title };
