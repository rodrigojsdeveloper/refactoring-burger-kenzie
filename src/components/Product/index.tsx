import { Container } from "./style";
import { Button } from "../Button";

interface IProduct {
  product: any;
}

const Product = ({ product }: IProduct) => {
  return (
    <Container>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>

      <div>
        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>

        <Button size="medium" color="green">
          Adicionar
        </Button>
      </div>
    </Container>
  );
};

export { Product };
