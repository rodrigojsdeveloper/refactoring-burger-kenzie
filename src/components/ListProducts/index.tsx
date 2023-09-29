import { ProductContext } from "../../contexts/ProductContext";
import { useContext, useEffect, useState } from "react";
import { IProduct } from "../../interfaces";
import { Product } from "../Product";
import { Loading } from "../Loading";
import { Container } from "./style";

const ListProducts = () => {
  const token = localStorage.getItem("Burger Kenzie: token");

  const { products, filteredProducts, fecthProducts } =
    useContext(ProductContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fecthProducts(setLoading, token);
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product: IProduct) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        products.map((product: IProduct) => (
          <Product product={product} key={product.id} />
        ))
      )}
    </Container>
  );
};

export { ListProducts };
