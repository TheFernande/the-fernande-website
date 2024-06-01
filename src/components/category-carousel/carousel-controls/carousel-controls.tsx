import { ArrowButton } from "../arrow-button/arrow-button";

import { ControlsStyled } from "./carousel-controls.styles";
import { type ControlsI } from "./carousel-controls.types";

const Controls = (props: ControlsI) => {
  const { handleNext, handlePrev, canScrollPrevious, canScrollNext } = props;

  return (
    <ControlsStyled>
      <ArrowButton
        direction='previous'
        onClick={handlePrev}
        disabled={!canScrollPrevious}
      />
      <ArrowButton
        direction='next'
        onClick={handleNext}
        disabled={!canScrollNext}
      />
    </ControlsStyled>
  );
};

export { Controls };
