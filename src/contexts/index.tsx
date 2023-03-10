import { ProductContextProvider } from "./ProductContext";
import { IProductContextProvider } from "../interfaces";

const Providers = ({ children }: IProductContextProvider) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export { Providers };
