import { ProductContextProvider } from "./product.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export { Providers };
