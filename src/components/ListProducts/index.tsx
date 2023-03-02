import { Product } from "../Product";
import { Container } from "./style";

interface IListProducts {
  products: any;
}

const ListProducts = ({ products }: IListProducts) => {
  return (
    <Container>
      {products.map((product: any) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export { ListProducts };
