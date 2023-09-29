import { Helmet, HelmetProvider } from "react-helmet-async";
import { LogoDetails } from "../../components/LogoDetails";
import { FormSignUp } from "../../components/FormSignUp";
import { Container } from "./style";
import React from "react";

const SignUp = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Cadastrar | Burger Kenzie" />
      </HelmetProvider>
      <Container className="signup">
        <FormSignUp />
        <LogoDetails />
      </Container>
    </React.Fragment>
  );
};

export { SignUp };
