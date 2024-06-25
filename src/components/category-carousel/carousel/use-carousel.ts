import { useState } from "react";

import { type useCarouselI } from "./carousel.types";

const useCarousel = (props: useCarouselI) => {
  const { children } = props;

  // [0, 1, 2] - [3, 4, 5] - [6, 7, 8] - [9, 10, 11]
  // On a un array de 12 éléments qui donc indexé de 0 à 11 dans l'array
  const [activeIndexes, setActiveIndexes] = useState<number[]>([0, 1, 2]);

  const canScrollPrevious = activeIndexes[0] > 0;
  const canScrollNext =
    Array.isArray(children) && activeIndexes[2] < children.length - 1;

  const handleNext = () => {
    if (Array.isArray(children) && canScrollNext) {
      setActiveIndexes(prevIndexes => prevIndexes.map(index => index + 1));
    }
  };
  const handlePrev = () => {
    if (Array.isArray(children) && canScrollPrevious) {
      setActiveIndexes(prevIndexes => prevIndexes.map(index => index - 1));
    }
  };

  return {
    activeIndexes,
    handleNext,
    handlePrev,
    canScrollPrevious,
    canScrollNext
  };
};

export { useCarousel };
