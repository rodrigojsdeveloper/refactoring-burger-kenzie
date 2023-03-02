import { Container } from "./style";
import { Button } from "../Button";

interface IProduct {
  product: any;
  handleListCartProducts: (product: any) => any[];
}

const Product = ({ product, handleListCartProducts }: IProduct) => {
  return (
    <Container>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>

      <div>
        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>

        <Button
          size="medium"
          color="green"
          onClick={() => handleListCartProducts(product)}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  );
};

export { Product };
