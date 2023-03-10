import { ProductContext } from "../../context/ProductContext";
import { ListProducts } from "../../components/ListProducts";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../components/Cart";
import { Container } from "./style";

const Dashboard = () => {
  const { products } = useContext(ProductContext);

  const navigate = useNavigate();

  const token = sessionStorage.getItem("Burger Kenzie: token");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Burger Kenzie" />
      </HelmetProvider>
      <Container>
        <Header products={products} />
        <div>
          <div>
            <ListProducts />
            <Cart />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Dashboard };
