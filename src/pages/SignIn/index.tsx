import { FormSignIn } from "../../components/FormSignIn";
import { LogoDetails } from "../../components/LogoDetails";
import { Container } from "./style";

const SignIn = () => {
  return (
    <Container>
      <LogoDetails />
      <FormSignIn />
    </Container>
  );
};

export { SignIn };
