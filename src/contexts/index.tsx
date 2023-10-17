import { ProductContextProvider } from "./product.context";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export { Providers };
