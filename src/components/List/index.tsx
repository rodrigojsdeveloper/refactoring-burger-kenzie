import { ProductContext } from "../../contexts/product.context";
import { useContext, useEffect, useState } from "react";
import { Product } from "../Product";
import { Loading } from "../Loading";
import { Container } from "./style";

const List = () => {
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
        filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))
      )}
    </Container>
  );
};

export { List };
