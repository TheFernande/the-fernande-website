"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { css, styled } from "styled-components";

import { abstractPaintings } from "../../page.data";

import { ProductFeatureList } from "@/app/test-page/components/product-description/product-feature-list/product-feature-list";
import { ProductFeatureTabs } from "@/app/test-page/components/product-description/product-feature-tabs/product-feature-tabs";
import { QuantitySelector } from "@/app/test-page/components/product-description/product-quantity-selector/product-quantity-selector";
import { ProductVariantSelector } from "@/app/test-page/components/product-description/product-variant-selector/product-variant-selector";
import { useFormat } from "@/hooks/product-page/use-format";
import { useQuantity } from "@/hooks/product-page/use-quantity";
import { theme } from "@/styles/theme";

const productData = (title: string) => {
  abstractPaintings.forEach((painting, index) => {
    console.log(painting.link.replace("paintings/", ""));
  });

  const data = abstractPaintings.find(
    painting => painting.link.replace("paintings/", "") === title
  );

  return data ?? abstractPaintings[0];
};

const styledProductCardStyles = css`
  display: flex;
  width: 100%;
  max-width: ${theme.maxWidths.desktop};
  gap: ${theme.spacings.m};
  margin: ${theme.spacings.xl} auto;
`;

const styledProductImageStyles = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledProductCard = styled.div`
  ${styledProductCardStyles}
`;

const StyledProductImage = styled.div`
  ${styledProductImageStyles}
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: ${theme.spacings.xs};
`;

const StyledCardTitle = styled.h1`
  margin: 0 0 ${theme.spacings.m} 0;
  padding: 0;
  font-size: ${theme.fontSizes.xxxxl};
`;

const StyledCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledCardSpan = styled.span`
  font-style: italic;
  letter-spacing: 0.5px;
  color: ${theme.colors.base.darkest};
  margin-top: ${theme.spacings.m};
`;

const StyledSeparator = styled.hr`
  width: 50%;
  color: ${theme.colors.base.darker};
  position: relative;
  left: -25%;
`;

const StyledCardPrice = styled.div`
  font-size: ${theme.fontSizes.xxxxl};
  font-weight: ${theme.fontWeights.bold};
  margin: ${theme.spacings.xs} 0 ${theme.spacings.m} 0;
`;

const StyledCardSelectors = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xs};
  align-items: flex-start;
  margin-bottom: ${theme.spacings.xl};
`;

const StyledCardQuantitySelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxs};
`;

const StyledCardButton = styled.button`
  border: 1px solid red;
  padding: ${theme.spacings.xxs} ${theme.spacings.xs};
  border: none;
  border-radius: ${theme.borderRadiuses.s};
  background: ${theme.colors.base.black};
  color: ${theme.colors.base.white};
  font-size: ${theme.fontSizes.m};
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  width: fit-content;
  margin-bottom: ${theme.spacings.xl};
`;

const ProductPage = () => {
  const path = usePathname();
  const title = path.replace("/shop/paintings/", "").slice(0, -1);
  const product = productData(title) ?? abstractPaintings[0];

  const initialFormat = product.formats[0] ?? { size: "30x40", price: 100 };

  const { quantity, handleQuantityChange } = useQuantity(1);
  const { selectedFormat, currentPrice, handleFormatChange } = useFormat(
    initialFormat,
    product?.formats ?? [],
    quantity
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, imageAlt, buttonLabel, features, tabs, formats } = product;

  return (
    <StyledProductCard>
      <StyledProductImage>
        <Image
          src={image.src}
          placeholder='blur'
          blurDataURL={image.blurDataURL}
          width={420}
          height={600}
          alt={imageAlt}
        />
      </StyledProductImage>

      <StyledCardContent>
        <StyledCardTitle>{product.title}</StyledCardTitle>

        <StyledCardDescription>
          <ProductFeatureList features={features} />
          <StyledCardSpan>Tirage limité à 100 exemplaires</StyledCardSpan>
          <StyledSeparator />
          <StyledCardPrice>{currentPrice} €</StyledCardPrice>
          <StyledCardButton>{buttonLabel}</StyledCardButton>

          <StyledCardSelectors>
            <ProductVariantSelector
              formats={formats}
              selectedFormat={selectedFormat}
              handleFormatChange={handleFormatChange}
            />
            <StyledCardQuantitySelector>
              <span>Quantité:</span>
              <QuantitySelector
                currentQuantity={quantity}
                handleQuantityChange={handleQuantityChange}
              />
            </StyledCardQuantitySelector>
          </StyledCardSelectors>
        </StyledCardDescription>

        <ProductFeatureTabs tabs={tabs} />
      </StyledCardContent>
    </StyledProductCard>
  );
};

export default ProductPage;
