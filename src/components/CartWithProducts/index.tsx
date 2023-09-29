import { ProductContext } from "../../contexts/product.context";
import { ProductInCart } from "../ProductInCart";
import { Container } from "./style";
import { Button } from "../Button";
import { useContext } from "react";

const CartWithProducts = () => {
  const { cartProducts, handleClearCart } = useContext(ProductContext);

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

          <span>
            R${" "}
            {cartProducts
              .reduce(
                (valorAnterior, valorAtual) =>
                  valorAnterior + Number(valorAtual.price * valorAtual.count),
                0
              )
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>

        <Button color="grey" onClick={handleClearCart}>
          Remover todos
        </Button>
      </div>
    </Container>
  );
};

export { CartWithProducts };
