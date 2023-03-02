import { Button } from "../Button";
import { ProductInCart } from "../ProductInCart";
import { Container } from "./style";

interface ICartWithProducts {
  cartProducts: any[];
}

const CartWithProducts = ({ cartProducts }: ICartWithProducts) => {
  return (
    <Container>
      <menu>
        {cartProducts.map((product) => (
          <ProductInCart product={product} key={product.id} />
        ))}
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
