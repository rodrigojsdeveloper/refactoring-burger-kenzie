import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IButtonProps {
  color: "green" | "grey" | "grey-green";
  size?: "106px";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface IButtonStyle {
  color: "green" | "grey" | "grey-green";
  size?: "106px";
}

export interface InputProps {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}

export interface IProductProps {
  id: string;
  img: string;
  name: string;
  description: string;
  category: string;
  price: number;
  count: number;
}

export interface IProduct {
  product: IProductProps;
}

export interface IProductContextData {
  products: IProductProps[];
  setProducts: React.Dispatch<React.SetStateAction<IProductProps[]>>;
  cartProducts: IProductProps[];
  setCartProducts: React.Dispatch<React.SetStateAction<IProductProps[]>>;
  filteredProducts: IProductProps[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProductProps[]>>;
  fecthProducts: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    token: string | null
  ) => void;
  handleAddToCart: (product: IProductProps) => void;
  handleRemoveFromCart: (product: IProductProps) => void;
  handleClickCartProduct: (product: IProductProps) => void;
  handleClearCart: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export interface IModalCart {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
