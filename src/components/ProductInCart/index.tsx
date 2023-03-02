import { Container } from "./style";

interface IProductInCart {
  product: any;
}

const ProductInCart = ({ product }: IProductInCart) => {
  return (
    <Container>
      <img src={product.img} alt={product.name} />

      <div>
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>

        <p>Remover</p>
      </div>
    </Container>
  );
};

export { ProductInCart };
