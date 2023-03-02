import logo from "../../assets/LogoKenzieBurguer.svg";
import { Container } from "./style";
import { Button } from "../Button";

const Header = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="burger kenzie" />

        <div>
          <input placeholder="Digitar Pesquisa" />
          <Button size="medium" color="green">
            Pesquisar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { Header };
