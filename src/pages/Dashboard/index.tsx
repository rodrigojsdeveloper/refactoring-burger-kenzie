import { ListProducts } from "../../components/ListProducts";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const Dashboard = () => {
  const token = sessionStorage.getItem("Burger Kenzie: token");

  const [products, setProducts] = useState([]);

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

  return (
    <Container>
      <Header />
      <div>
        <div>
          <ListProducts products={products} />
          <Cart />
        </div>
      </div>
    </Container>
  );
};

export { Dashboard };
