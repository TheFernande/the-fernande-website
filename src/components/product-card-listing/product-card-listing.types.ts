import { type StaticImageData } from "next/image";

interface ProductCardListingProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  buttonLabel: string;
  link: string;
}

export { type ProductCardListingProps };
