import Image from "next/image";

import {
  ButtonStyled,
  Container,
  ImageContainer,
  Title
} from "./product-card-listing.styles";
import { type ProductCardListingI } from "./product-card-listing.types";

const ProductCardListing = (props: ProductCardListingI) => {
  const { image, imageAlt, title, buttonLabel, link } = props;

  return (
    <Container>
      <ImageContainer>
        <Image
          src={image.src}
          placeholder='blur'
          blurDataURL={image.blurDataURL}
          alt={imageAlt}
          width={320}
          height={460}
        />
      </ImageContainer>
      <Title>{title}</Title>

      {/* <Subtitle>{subtitle}</Subtitle> */}

      {/* <Price>{price}</Price> */}

      {/* Logic for the button -> addToCart or addToWishlist */}
      <ButtonStyled href={link}>{buttonLabel}</ButtonStyled>
    </Container>
  );
};

export { ProductCardListing };
