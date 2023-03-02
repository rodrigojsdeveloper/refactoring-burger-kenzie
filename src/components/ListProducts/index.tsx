import { Product } from "../Product";
import { Container } from "./style";

interface IListProducts {
  products: any;
  handleListCartProducts: (product: any) => any[];
}

const ListProducts = ({ products, handleListCartProducts }: IListProducts) => {
  return (
    <Container>
      {products.map((product: any) => (
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
