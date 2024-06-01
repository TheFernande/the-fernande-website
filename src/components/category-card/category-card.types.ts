import { type StaticImageData } from "next/image";

interface CategoryCardI {
  imageSrc: StaticImageData;
  imageSize: { width: number; height: number };
  imageAlt: string;
  title: string;
  buttonLabel: string;
  link?: string; // ! Optional property for the moment, as the buttons are linked to nothing
}

export { type CategoryCardI };
