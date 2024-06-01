import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";

import {
  ButtonStyled,
  ListingContainer,
  ProductsListingContainer,
  Title
} from "./products-listing.styles";

import { ProductCardListing } from "@/components/product-card-listing/product-card-listing";
import { type ProductCardListingI } from "@/components/product-card-listing/product-card-listing.types";

const ProductsListing = (props: {
  title: string;
  productsListing: ProductCardListingI[];
}) => {
  const { title, productsListing } = props;

  const [visibleProducts, setVisibleProducts] = useState<number>(6);

  // If we are on a mopbile device large enough we increment by 2, if we are on a smaller device we increment by 1
  const step = 3;

  const animationTrigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationTrigger.current) {
      autoAnimate(animationTrigger.current);
    }
  }, []);

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + step);
  };

  return (
    <ProductsListingContainer>
      <Title>{title}</Title>

      <ListingContainer ref={animationTrigger}>
        {productsListing
          .slice(0, visibleProducts)
          .map((product: ProductCardListingI) => (
            <ProductCardListing
              key={product.title}
              image={product.image}
              imageAlt={product.imageAlt}
              title={product.title}
              buttonLabel={product.buttonLabel}
              link={product.link}
            />
          ))}
      </ListingContainer>

      {visibleProducts < productsListing.length ? (
        <ButtonStyled onClick={handleShowMore}>Show more</ButtonStyled>
      ) : null}
    </ProductsListingContainer>
  );
};

export { ProductsListing };
