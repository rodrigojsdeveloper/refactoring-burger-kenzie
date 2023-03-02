import { FormSignUp } from "../../components/FormSignUp";
import { LogoDetails } from "../../components/LogoDetails";
import { Container } from "./style";

const SignUp = () => {
  return (
    <Container className="signup">
      <FormSignUp />
      <LogoDetails />
    </Container>
  );
};

export { SignUp };
