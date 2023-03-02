import { IListProducts, IProduct } from "../../interfaces";
import { Product } from "../Product";
import { Container } from "./style";

const ListProducts = ({ products, handleListCartProducts }: IListProducts) => {
  return (
    <Container>
      {products.map((product: IProduct) => (
        <Product
          product={product}
          key={product.id}
          handleListCartProducts={handleListCartProducts}
        />
      ))}
    </Container>
  );
};

export { ListProducts };
