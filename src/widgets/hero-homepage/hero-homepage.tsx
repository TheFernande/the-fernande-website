import Image from "next/image";

import HeroImage from "../../../public/images/homepage/hero-image.jpeg";

import { ButtonStyled, Container, Text, Title } from "./hero-homepage.styles";

import BlockLayout from "@/layouts/block-layout/block-layout";

const HeroHomepage = () => {
  return (
    <BlockLayout
      left={
        <Image
          src={HeroImage.src}
          placeholder='blur'
          blurDataURL={HeroImage.blurDataURL}
          alt='hero-image'
          width={568}
          height={568}
        />
      }
      right={
        <Container>
          <Title>Welcome to my website</Title>
          <Text>New collection is available now</Text>
          <ButtonStyled href='/shop'>Visit our Shop!</ButtonStyled>
        </Container>
      }
    />
  );
};

export default HeroHomepage;
