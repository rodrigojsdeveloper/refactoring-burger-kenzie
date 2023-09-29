import { IButtonProps } from "../../interfaces";
import { Container } from "./style";

const Button = ({
  children,
  color,
  size,
  onClick,
  type,
  disabled,
}: IButtonProps) => {
  return (
    <Container
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </Container>
  );
};

export { Button };
