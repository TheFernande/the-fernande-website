import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const featureContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.xs};
  max-width: 200px;
  text-align: center;
`;

const titleStyles = css`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  margin: 0;
  padding: 0;
`;

const subtitleStyles = css`
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.base.darker};
  margin: 0;
  padding: 0;
`;

const FeatureContainer = styled.div`
  ${featureContainerStyles}
`;

const Title = styled.h3`
  ${titleStyles}
`;

const Subtitle = styled.span`
  ${subtitleStyles}
`;

export { FeatureContainer, Subtitle, Title };
