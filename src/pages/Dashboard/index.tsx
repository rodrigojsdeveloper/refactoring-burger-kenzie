import { ListProducts } from "../../components/ListProducts";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../components/Cart";
import { IProduct } from "../../interfaces";
import { api } from "../../services/api";
import { Container } from "./style";

const Dashboard = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
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
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Burger Kenzie" />
      </HelmetProvider>
      <Container>
        <Header setFilteredProducts={setFilteredProducts} products={products} />
        <div>
          <div>
            <ListProducts
              products={
                filteredProducts.length > 0 ? filteredProducts : products
              }
              handleListCartProducts={handleAddToCart}
            />
            <Cart
              cartProducts={cartProducts}
              handleClickCartProduct={handleClickCartProduct}
              handleRemoveCartProducts={handleRemoveFromCart}
              clearAllProducts={handleClearCart}
              handleListCartProducts={handleAddToCart}
            />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Dashboard };
