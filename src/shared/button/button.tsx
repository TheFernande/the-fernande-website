import { ButtonStyled } from "./button.styles";
import { type ButtonProps } from "./button.types";

const Button = ({ label }: ButtonProps) => <ButtonStyled>{label}</ButtonStyled>;

export default Button;
