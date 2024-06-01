import { Children, cloneElement, type ReactElement } from "react";

import { Controls } from "../carousel-controls/carousel-controls";

import { CarouselStyled, Viewport } from "./carousel.styles";
import { ControlsPosition, type CarouselI } from "./carousel.types";
import { useCarousel } from "./use-carousel";

import { theme } from "@/styles/theme";

const Carousel = (props: CarouselI) => {
  const { children, controlsPosition = ControlsPosition.Bottom } = props;

  const {
    activeIndex,
    handleNext,
    handlePrev,
    canScrollPrevious,
    canScrollNext
  } = useCarousel({
    children
  });

  const areControlsBefore =
    controlsPosition === ControlsPosition.Left ||
    controlsPosition === ControlsPosition.Top;

  const areControlsAfter =
    controlsPosition === ControlsPosition.Right ||
    controlsPosition === ControlsPosition.Bottom;

  return (
    <CarouselStyled>
      {areControlsBefore ? (
        <Controls
          handleNext={handleNext}
          handlePrev={handlePrev}
          canScrollPrevious={canScrollPrevious}
          canScrollNext={canScrollNext}
        />
      ) : null}

      <Viewport activeIndex={activeIndex}>
        {Children.map(children, (child, index) =>
          cloneElement(child as ReactElement, {
            style: {
              opacity: activeIndex.includes(index) ? 1 : 0,
              transition: `opacity ${theme.transitions.xslow}`
            }
          })
        )}
      </Viewport>

      {areControlsAfter ? (
        <Controls
          handleNext={handleNext}
          handlePrev={handlePrev}
          canScrollPrevious={canScrollPrevious}
          canScrollNext={canScrollNext}
        />
      ) : null}
    </CarouselStyled>
  );
};

export { Carousel };
