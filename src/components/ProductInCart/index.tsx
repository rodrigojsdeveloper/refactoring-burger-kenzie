import { ProductContext } from "../../contexts/product.context";
import { IProduct } from "../../interfaces";
import { Container } from "./style";
import { useContext } from "react";

const ProductInCart = ({ product }: IProduct) => {
  const { handleClickCartProduct, handleRemoveFromCart, handleAddToCart } =
    useContext(ProductContext);

  return (
    <Container>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>

      <div className="product-info">
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
        </div>

        <div className="product-actions">
          <p onClick={() => handleClickCartProduct(product)}>Remover</p>

          <div className="product-quantity">
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
