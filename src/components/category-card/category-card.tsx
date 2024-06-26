import Image from "next/image";

import { ButtonStyled, Container, Title } from "./category-card.styles";
import { type CategoryCardI } from "./category-card.types";

const CategoryCard = (props: CategoryCardI) => {
  const { imageSrc, imageSize, imageAlt, title, buttonLabel } = props;

  return (
    <Container>
      <Image
        src={imageSrc.src}
        placeholder='blur'
        blurDataURL={imageSrc.blurDataURL}
        alt={imageAlt}
        width={imageSize.width}
        height={imageSize.height}
      />
      <Title>{title}</Title>
      <ButtonStyled>{buttonLabel}</ButtonStyled>
    </Container>
  );
};

export default CategoryCard;
