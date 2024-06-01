import { type StaticImageData } from "next/image";

interface ProductCardListingI {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  buttonLabel: string;
  link: string;
}

export { type ProductCardListingI };
