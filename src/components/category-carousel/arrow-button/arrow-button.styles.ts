import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const buttonStyles = ({
  direction,
  disabled
}: {
  direction: "previous" | "next";
  disabled: boolean;
}) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #949999;
  border-radius: 32px;
  background: transparent;
  font-size: ${theme.fontSizes.xl};
  transition: transform ${theme.transitions.medium};
  box-shadow: ${theme.elevations[2]};
  cursor: ${disabled ? "not-allowed" : "pointer"};
  appearance: none;

  & > svg {
    transform: rotate(${direction === "previous" ? 0 : 180}deg);

    &:hover {
      transform: scale(${disabled ? 1 : 1.05})
        rotate(${direction === "previous" ? 0 : 180}deg);
    }
  }

  &:hover&:not(:disabled) {
    border: 1px solid ${theme.colors.base.darkest};
    color: ${theme.colors.base.light};
    transform: scale(${disabled ? 1 : 1.05});
  }

  &:disabled {
    border: 1px solid ${theme.colors.base.dark};
    color: ${theme.colors.base.dark};
    filter: grayscale();
  }
`;

const ArrowButtonStyled = styled.button<{
  direction: "previous" | "next";
  disabled: boolean;
}>`
  ${buttonStyles}
`;

export { ArrowButtonStyled };
