import CategoryCard from "../../components/category-card/category-card";

import { type CategoriesShowcaseI } from "./categories-showcase.types";

import BlockLayout from "@/layouts/block-layout/block-layout";

const CategoriesShowcase = (props: CategoriesShowcaseI) => {
  const { left, right } = props;

  return (
    <BlockLayout
      left={
        <CategoryCard
          imageSrc={left.imageSrc}
          imageSize={left.imageSize}
          imageAlt={left.imageAlt}
          title={left.title}
          buttonLabel={left.buttonLabel}
          link={left.link}
        />
      }
      right={
        <CategoryCard
          imageSrc={right.imageSrc}
          imageSize={right.imageSize}
          imageAlt={right.imageAlt}
          title={right.title}
          buttonLabel={right.buttonLabel}
          link={right.link}
        />
      }
    />
  );
};

export default CategoriesShowcase;
