import { ListProducts } from "../../components/ListProducts";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../components/Cart";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("Burger Kenzie: token");

  const [products, setProducts] = useState([]);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    api
      .get("products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, [token]);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);

  const handleListCartProducts = (product: any) =>
    setCartProducts([product, ...cartProducts]);

  return (
    <Container>
      <Header />
      <div>
        <div>
          <ListProducts
            products={products}
            handleListCartProducts={handleListCartProducts}
          />
          <Cart cartProducts={cartProducts} />
        </div>
      </div>
    </Container>
  );
};

export { Dashboard };
