import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { List } from "../../components/List";
import React, { useEffect } from "react";
import { Container } from "./style";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("Burger Kenzie: token");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Dashboard | Burger Kenzie" />
      </HelmetProvider>
      <Container>
        <Header />
        <main>
          <div className="div-content">
            <List />
          </div>
        </main>
      </Container>
    </React.Fragment>
  );
};

export { Dashboard };
