import { ProductContext } from "../../contexts/product.context";
import { IProduct } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";
import { useContext } from "react";

const Product = ({ product }: IProduct) => {
  const { handleAddToCart } = useContext(ProductContext);

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
          size="106px"
          color="grey-green"
          onClick={() => handleAddToCart(product)}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  );
};

export { Product };
