import CategoryCard from "../category-card/category-card";

import { type CategoriesShowcaseProps } from "./categories-showcase-block.types";

import BlockLayout from "@/layouts/block-layout/block-layout";

const CategoriesShowcase = (props: CategoriesShowcaseProps) => {
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
