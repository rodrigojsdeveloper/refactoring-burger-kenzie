import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IButton {
  children: React.ReactNode;
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

export interface IProductContextData {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cartProducts: IProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  fecthProducts: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    token: string | null
  ) => void;
  handleAddToCart: (product: IProduct) => void;
  handleRemoveFromCart: (product: IProduct) => void;
  handleClickCartProduct: (product: IProduct) => void;
  handleClearCart: () => void;
}

export interface IProductContextProvider {
  children: React.ReactNode;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IModalCart {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
