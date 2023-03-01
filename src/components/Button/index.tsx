import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  color: "green" | "grey";
  size: "default" | "medium";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

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
