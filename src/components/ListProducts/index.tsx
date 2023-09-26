import { ProductContext } from "../../contexts/ProductContext";
import { IProduct } from "../../interfaces";
import { Product } from "../Product";
import { Loading } from "../Loading";
import { Container } from "./style";
import { useContext } from "react";

const ListProducts = () => {
  const { products, filteredProducts, loading } = useContext(ProductContext);

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
