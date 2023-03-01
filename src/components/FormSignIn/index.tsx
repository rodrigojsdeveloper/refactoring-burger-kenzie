import { Button } from "../Button";
import { CustomInput } from "../Input";
import { Container } from "./style";

const FormSignIn = () => {
  return (
    <Container>
      <h2>Login</h2>

      <div>
        <div>
          <CustomInput label="Email" type="email" />
          <CustomInput label="Senha" type="password" />
        </div>

        <div className="divButtons">
          <Button color="green" size="large">
            Entrar
          </Button>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Button color="grey" size="large">
            Cadastrar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { FormSignIn };
