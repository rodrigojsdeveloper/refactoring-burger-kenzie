import { CartWithProducts } from "../CartWithProducts";
import { Container } from "./style";

const Cart = () => {
  return (
    <Container>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      <CartWithProducts />
    </Container>
  );
};

export { Cart };
