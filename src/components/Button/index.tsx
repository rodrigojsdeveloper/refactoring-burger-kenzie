import { IButton } from "../../interfaces";
import { Container } from "./style";

const Button = ({
  children,
  color,
  size,
  onClick,
  type,
  disabled,
}: IButton) => {
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
