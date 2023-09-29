import { ProductContext } from "../../contexts/product.context";
import { CartWithProducts } from "../CartWithProducts";
import { IModalCart } from "../../interfaces";
import { CartEmpty } from "../CartEmpty";
import { Container } from "./style";
import { useContext } from "react";

const ModalCart = ({ setModal }: IModalCart) => {
  const { cartProducts } = useContext(ProductContext);

  return (
    <Container>
      <div className="div-cart">
        <h2>Carrinho de compras</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          onClick={() => setModal(false)}
        >
          <path
            d="M11.088 11.668C11.244 11.836 11.322 12.022 11.322 12.226C11.322 12.454 11.232 12.658 11.052 12.838C10.872 13.006 10.668 13.09 10.44 13.09C10.188 13.09 9.972 12.982 9.792 12.766L5.886 7.85197L1.962 12.766C1.782 12.982 1.572 13.09 1.332 13.09C1.104 13.09 0.900001 13.006 0.720001 12.838C0.540001 12.658 0.450001 12.454 0.450001 12.226C0.450001 12.034 0.522001 11.848 0.666001 11.668L4.806 6.53797L0.864001 1.64197C0.720001 1.48597 0.648001 1.29997 0.648001 1.08397C0.648001 0.85597 0.732001 0.65797 0.900001 0.48997C1.08 0.309971 1.284 0.219971 1.512 0.219971C1.764 0.219971 1.98 0.327971 2.16 0.543971L5.886 5.24197L9.612 0.543971C9.78 0.327971 9.996 0.219971 10.26 0.219971C10.488 0.219971 10.692 0.309971 10.872 0.48997C11.052 0.65797 11.142 0.85597 11.142 1.08397C11.142 1.28797 11.064 1.47397 10.908 1.64197L6.966 6.53797L11.088 11.668Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
      </div>

      {cartProducts.length > 0 ? (
        <CartWithProducts setModal={setModal} />
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export { ModalCart };
