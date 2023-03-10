import { ProductContext } from "../../context/ProductContext";
import { IProduct } from "../../interfaces";
import { Product } from "../Product";
import { Container } from "./style";
import { useContext } from "react";

const ListProducts = () => {
  const { products, filteredProducts } = useContext(ProductContext);

  return (
    <Container>
      {filteredProducts.length > 0
        ? filteredProducts.map((product: IProduct) => (
            <Product product={product} key={product.id} />
          ))
        : products.map((product: IProduct) => (
            <Product product={product} key={product.id} />
          ))}
    </Container>
  );
};

export { ListProducts };
