import { useNavigate } from "react-router-dom";
import { CustomInput } from "../Input";
import { Container } from "./style";
import { Button } from "../Button";

const FormSignIn = () => {
  const navigate = useNavigate();

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
          <Button color="grey" size="large" onClick={() => navigate("/signup")}>
            Cadastrar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { FormSignIn };
