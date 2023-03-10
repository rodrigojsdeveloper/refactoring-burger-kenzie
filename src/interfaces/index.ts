import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IButton {
  children: React.ReactNode;
  color: "green" | "grey";
  size: "default" | "large" | "medium";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface IButtonStyle {
  color: "green" | "grey";
  size: "default" | "large" | "medium";
}

export interface InputProps {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}

export interface IProduct {
  id: string;
  img: string;
  name: string;
  description: string;
  category: string;
  price: number;
  count: number;
}

export interface IProductComponent {
  product: IProduct;
}
