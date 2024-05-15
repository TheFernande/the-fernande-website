import { css, styled } from "styled-components";

const buttonStyles = css`
  max-width: 200px;
  padding: 10px 15px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ButtonStyled = styled.button`
  ${buttonStyles}
`;

export { ButtonStyled };
