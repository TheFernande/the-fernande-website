import { useState } from "react";

import { type useCarouselI } from "./carousel.types";

const useCarousel = (props: useCarouselI) => {
  const { children } = props;

  // [0, 1, 2] - [3, 4, 5] - [6, 7, 8] - [9, 10, 11]
  // On a un array de 12 éléments qui donc indexé de 0 à 11 dans l'array
  const [activeIndex, setActiveIndex] = useState<number[]>([0, 1, 2]);

  const canScrollPrevious = activeIndex[0] > 0;
  const canScrollNext =
    Array.isArray(children) && activeIndex[2] < children.length - 1;

  const handleNext = () => {
    if (Array.isArray(children) && canScrollNext) {
      setActiveIndex(prevIndex => prevIndex.map(index => index + 1));
    }
  };
  const handlePrev = () => {
    if (Array.isArray(children) && canScrollPrevious) {
      setActiveIndex(prevIndex => prevIndex.map(index => index - 1));
    }
  };

  return {
    activeIndex,
    handleNext,
    handlePrev,
    canScrollPrevious,
    canScrollNext
  };
};

export { useCarousel };
