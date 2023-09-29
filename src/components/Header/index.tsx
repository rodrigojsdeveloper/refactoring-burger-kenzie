import { ProductContext } from "../../contexts/ProductContext";
import logo from "../../assets/LogoKenzieBurguer.svg";
import { ModalBackground } from "../ModalBackground";
import { useContext, useState } from "react";
import { ModalCart } from "../ModalCart";
import { Container } from "./style";

const Header = () => {
  const { cartProducts } = useContext(ProductContext);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const totalItemsInCart = cartProducts.reduce(
    (total, product) => total + product.count,
    0
  );

  return (
    <>
      {openModal ? (
        <ModalBackground>
          <ModalCart setModal={setOpenModal} />
        </ModalBackground>
      ) : null}
      <Container>
        <div>
          <img src={logo} alt="burger kenzie" />

          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              onClick={() => setOpenModal(true)}
            >
              <path
                d="M22.6875 13.7266L24.707 4.78906C24.8359 4.14453 24.3633 3.5 23.6758 3.5H6.83203L6.44531 1.60938C6.31641 1.13672 5.88672 0.75 5.41406 0.75H1.03125C0.429688 0.75 0 1.22266 0 1.78125V2.46875C0 3.07031 0.429688 3.5 1.03125 3.5H3.99609L7.04688 18.2812C6.31641 18.7109 5.84375 19.4844 5.84375 20.3438C5.84375 21.6758 6.91797 22.75 8.25 22.75C9.53906 22.75 10.6562 21.6758 10.6562 20.3438C10.6562 19.6992 10.3555 19.0977 9.92578 18.625H18.9062C18.4766 19.0977 18.2188 19.6992 18.2188 20.3438C18.2188 21.6758 19.293 22.75 20.625 22.75C21.9141 22.75 23.0312 21.6758 23.0312 20.3438C23.0312 19.3984 22.4727 18.582 21.6562 18.1953L21.8711 17.1641C22.043 16.5195 21.5273 15.875 20.8828 15.875H9.36719L9.06641 14.5H21.6562C22.1289 14.5 22.5586 14.1992 22.6875 13.7266Z"
                fill="#BDBDBD"
              />
            </svg>

            <span>{totalItemsInCart}</span>
          </div>
        </div>
      </Container>
    </>
  );
};

export { Header };
