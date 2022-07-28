import { ButtonProps } from "@src/types";
import { SButton } from "./Button.style";

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <SButton type={type} onClick={onClick}>
      {children}
    </SButton>
  );
};
export default Button;
