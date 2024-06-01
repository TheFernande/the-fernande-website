import Image from "next/image";

import { Carousel } from "./carousel/carousel";
import {
  Container,
  DummyCard,
  Heading,
  Title
} from "./category-carousel.styles";
import { type CategoryCarouselI } from "./category-carousel.types";

const CategoryCarousel = (props: CategoryCarouselI) => {
  const { cardsToRender, title } = props;

  return (
    <Container>
      <Heading>
        <Title>{title}</Title>
      </Heading>
      <Carousel>
        {Object.entries(cardsToRender).map(([key, value]) => (
          <DummyCard key={key}>
            <Image
              src={value.image.src}
              placeholder='blur'
              blurDataURL={value.image.blurDataURL}
              alt={value.imageAlt}
              width={320}
              height={460}
            />
          </DummyCard>
        ))}
      </Carousel>
    </Container>
  );
};

export { CategoryCarousel };
