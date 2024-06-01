import { ArrowButtonStyled } from "./arrow-button.styles";
import { type ArrowButtonI } from "./arrow-button.types";

import { theme } from "@/styles/theme";

const ArrowButton = (props: ArrowButtonI) => {
  const { direction, onClick, disabled } = props;
  return (
    <ArrowButtonStyled
      onClick={onClick}
      direction={direction}
      disabled={disabled}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke={!disabled ? "#949999" : theme.colors.base.dark}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='15 18 9 12 15 6'></polyline>
      </svg>
    </ArrowButtonStyled>
  );
};

export { ArrowButton };
