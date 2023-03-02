import { Link } from "react-router-dom";
import { CustomInput } from "../Input";
import { Container } from "./style";
import { Button } from "../Button";

const FormSignUp = () => {
  return (
    <Container>
      <div>
        <h2>Cadastro</h2>

        <Link to="/">Retornar para login</Link>
      </div>

      <div>
        <CustomInput label="Name" type="text" />
        <CustomInput label="Email" type="email" />
        <CustomInput label="Senha" type="password" />

        <Button size="large" color="grey" type="submit">
          Cadastrar
        </Button>
      </div>
    </Container>
  );
};

export { FormSignUp };
