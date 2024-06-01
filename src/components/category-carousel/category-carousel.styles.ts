import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.m};
  max-width: 100%;
  padding: ${theme.spacings.m};
  border-radius: ${theme.borderRadiuses.s};
  overflow: hidden;
`;

const headingStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const titleStyles = css`
  margin-left: 16px;
  color: ${theme.colors.base.black};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.m};
  letter-spacing: 0.5px;
`;

const Container = styled.div`
  ${containerStyles}
`;

const Heading = styled.div`
  ${headingStyles}
`;

const Title = styled.h2`
  ${titleStyles}
`;

export const DummyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 357.333px;
  min-height: 420px;
  border-radius: ${theme.borderRadiuses.s};
`;

export { Container, Heading, Title };
