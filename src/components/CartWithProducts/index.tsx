import { Button } from "../Button";
import { ProductInCart } from "../ProductInCart";
import { Container } from "./style";

const CartWithProducts = () => {
  return (
    <Container>
      <menu>
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
      </menu>

      <div>
        <div>
          <p>Total</p>

          <span>R$ 40,00</span>
        </div>

        <Button size="default" color="grey">
          Remover todos
        </Button>
      </div>
    </Container>
  );
};

export { CartWithProducts };
