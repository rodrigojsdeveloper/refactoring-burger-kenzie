import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  IProduct,
  IProductContextData,
  IProductContextProvider,
} from "../../interfaces";

export const ProductContext = createContext({} as IProductContextData);

export const ProductContextProvider = ({
  children,
}: IProductContextProvider) => {
  const token = sessionStorage.getItem("Burger Kenzie: token");

  const [products, setProducts] = useState<IProduct[]>([]);

  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, [token]);

  const handleAddToCart = (product: IProduct) => {
    const findProduct = cartProducts.find((p) => p.id === product.id);

    if (!findProduct) {
      const newProduct = { ...product, count: 1 };

      setCartProducts([...cartProducts, newProduct]);
    } else {
      const indexProduct = cartProducts.indexOf(findProduct);

      const newCurrentSale = [...cartProducts];

      newCurrentSale[indexProduct].count++;

      setCartProducts(newCurrentSale);
    }
  };

  const handleRemoveFromCart = (product: IProduct) => {
    if (product.count > 1) {
      const indexProduct = cartProducts.indexOf(product);

      const newCurrentSale = [...cartProducts];

      newCurrentSale[indexProduct].count--;

      setCartProducts(newCurrentSale);
    } else {
      const newCurrentSale = cartProducts.filter((p) => p.id !== product.id);

      setCartProducts(newCurrentSale);
    }
  };

  const handleClickCartProduct = (product: IProduct) =>
    setCartProducts(cartProducts.filter((p) => p.id !== product.id));

  const handleClearCart = () => setCartProducts([]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        filteredProducts,
        setFilteredProducts,
        handleAddToCart,
        handleRemoveFromCart,
        handleClickCartProduct,
        handleClearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
