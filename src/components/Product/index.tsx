import { Container } from "./style";
import { Button } from "../Button";

const Product = () => {
  return (
    <Container>
      <img />

      <div>
        <h3>X-Burgue</h3>

        <p>Sanduíches</p>

        <span>R$ 16.00</span>

        <Button size="medium" color="green">
          Adicionar
        </Button>
      </div>
    </Container>
  );
};

export { Product };
