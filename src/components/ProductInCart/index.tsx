import { ProductContext } from "../../context/ProductContext";
import { IProductComponent } from "../../interfaces";
import { Container } from "./style";
import { useContext } from "react";

const ProductInCart = ({ product }: IProductComponent) => {
  const { handleClickCartProduct, handleRemoveFromCart, handleAddToCart } =
    useContext(ProductContext);

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
              onClick={() => handleAddToCart(product)}
            >
              +
            </button>
            <span>{product.count}</span>
            <button
              className="botaoMenos"
              onClick={() => handleRemoveFromCart(product)}
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
