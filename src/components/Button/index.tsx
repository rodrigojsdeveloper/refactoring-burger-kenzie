import { IButtonProps } from "../../interfaces";
import { PropsWithChildren } from "react";
import { Container } from "./style";

const Button = ({
  children,
  color,
  size,
  onClick,
  type,
  disabled,
}: PropsWithChildren<IButtonProps>) => {
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
