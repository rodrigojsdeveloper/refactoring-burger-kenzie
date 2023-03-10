import { Helmet, HelmetProvider } from "react-helmet-async";
import { LogoDetails } from "../../components/LogoDetails";
import { FormSignIn } from "../../components/FormSignIn";
import { Container } from "./style";
import React from "react";

const SignIn = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Iniciar Sessão | Burger Kenzie" />
      </HelmetProvider>
      <Container>
        <LogoDetails />
        <FormSignIn />
      </Container>
    </React.Fragment>
  );
};

export { SignIn };
