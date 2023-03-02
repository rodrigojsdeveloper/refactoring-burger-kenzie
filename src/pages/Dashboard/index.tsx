import { ListProducts } from "../../components/ListProducts";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { Container } from "./style";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <div>
        <div>
          <ListProducts />
          <Cart />
        </div>
      </div>
    </Container>
  );
};

export { Dashboard };
