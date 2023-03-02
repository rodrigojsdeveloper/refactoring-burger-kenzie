import { IProductComponent } from "../../interfaces";
import { Container } from "./style";

const ProductInCart = ({
  product,
  handleClickCartProduct,
  handleListCartProducts,
  handleRemoveCartProducts,
}: IProductComponent) => {
  return (
    <Container>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>

      <div>
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>

        <div>
          <p onClick={() => handleClickCartProduct(product)}>Remover</p>

          <div>
            <button
              className="botaoMais"
              onClick={() => handleListCartProducts(product)}
            >
              +
            </button>
            <span>{product.count}</span>
            <button
              className="botaoMenos"
              onClick={() => handleRemoveCartProducts(product)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ProductInCart };
