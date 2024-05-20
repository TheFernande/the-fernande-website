import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const productsListingContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: ${theme.spacings.m};
  background-color: ${theme.colors.blue.light};
`;

const titleStyles = css`
  margin: 0 0 ${theme.spacings.m} 0;
  padding: 0;
  font-size: ${theme.fontSizes.xxl};
  line-height: ${theme.lineHeights.l};
  text-align: center;
`;

const listingContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacings.m};
  width: 100%;
  height: 100%;
`;

const buttonStyles = css`
  margin: ${theme.spacings.m} 0 0 0;
  padding: ${theme.spacings.xxs} ${theme.spacings.s};
  border: none;
  border-radius: ${theme.borderRadiuses.s};
  background: ${theme.colors.blue.darker};
  color: ${theme.colors.base.white};
  font-size: ${theme.fontSizes.xs};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.blue.dark};
    color: ${theme.colors.base.black};
  }
`;

const ProductsListingContainer = styled.div`
  ${productsListingContainerStyles}
`;

const Title = styled.h2`
  ${titleStyles}
`;

const ListingContainer = styled.div`
  ${listingContainerStyles}
`;

const ButtonStyled = styled.button`
  ${buttonStyles}
`;

export { ButtonStyled, ListingContainer, ProductsListingContainer, Title };
