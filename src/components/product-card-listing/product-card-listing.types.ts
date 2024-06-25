import { type StaticImageData } from "next/image";

interface ProductCardListingI {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  buttonLabel: string;
  link: string;
  features?: Record<string, string>;
  tabs?: Array<{ title: string; text: string }>;
  formats?: Array<{ size: string; price: number }>;
}

export { type ProductCardListingI };
