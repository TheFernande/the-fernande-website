import Image from "next/image";

import HeroImage from "../../../public/images/homepage/hero-shop.webp";

import {
  ButtonStyled,
  Container,
  CtaContainer,
  Text,
  Title
} from "./hero-shop.styles";

const HeroShop = () => {
  return (
    <Container>
      {/* Fixme: We have an issue with the image being too wide */}
      <Image
        src={HeroImage.src}
        placeholder='blur'
        blurDataURL={HeroImage.blurDataURL}
        alt='hero-image'
        width={HeroImage.width}
        height={HeroImage.height}
      />
      <CtaContainer>
        <Title>You are on our Shop page</Title>
        <Text>You‘ll find the products listing</Text>
        <ButtonStyled>Mmehh</ButtonStyled>
      </CtaContainer>
    </Container>
  );
};

export default HeroShop;
