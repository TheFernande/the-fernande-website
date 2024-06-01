import { type StaticImageData } from "next/image";

// Todo: Do not forget to define the correct type for this interface
interface CategoryCard {
  image: StaticImageData; // ! temporary
  imageAlt: string; // ! temporary
  title: string; // ! temporary
  buttonLabel?: string; // ! temporary
  link?: string; // ! temporary
}

interface CategoryCarouselI {
  cardsToRender: CategoryCard[];
  title?: string;
}

export type { CategoryCarouselI };
