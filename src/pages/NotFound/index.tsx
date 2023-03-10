import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "../../assets/LogoKenzieBurguer.svg";
import { Link } from "react-router-dom";
import { Container } from "./style";
import React from "react";

const NotFound = () => {
  const token = sessionStorage.getItem("Burger Kenzie: token");

  const currentUrl = window.location.href.split("/")[3];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Página não encontrada | Burger Kezie" />
      </HelmetProvider>
      <Container>
        <div>
          <div>
            <Link to={token ? "/dashboard" : "/"}>
              <img src={logo} alt="burger kezie" />
            </Link>

            <p>
              <b>404.</b> Isso é um erro.
            </p>

            <p>
              A URL solicitada /{currentUrl} não foi encontrada neste servidor.
            </p>
            <p>Isso é tudo que sabemos.</p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { NotFound };
