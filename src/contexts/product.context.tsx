import { IProductProps, IProductContextData } from "../interfaces";
import { createContext, useState, PropsWithChildren } from "react";
import { api } from "../services/api";

const ProductContext = createContext({} as IProductContextData);

const ProductContextProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<IProductProps[]>([]);

  const [cartProducts, setCartProducts] = useState<IProductProps[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<IProductProps[]>([]);

  const fecthProducts = (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    token: string | null
  ) => {
    setLoading(true);

    api
      .get("products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleAddToCart = (product: IProductProps) => {
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

  const handleRemoveFromCart = (product: IProductProps) => {
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

  const handleClickCartProduct = (product: IProductProps) =>
    setCartProducts(cartProducts.filter((p) => p.id !== product.id));

  const handleClearCart = (
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setModal(false);
    setCartProducts([]);
  };

  const productContextData: IProductContextData = {
    products,
    setProducts,
    cartProducts,
    setCartProducts,
    filteredProducts,
    setFilteredProducts,
    fecthProducts,
    handleAddToCart,
    handleRemoveFromCart,
    handleClickCartProduct,
    handleClearCart,
  };

  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
