import icon from "../../assets/Icon.svg";
import { Container } from "./style";

const MiniDetails = () => {
  return (
    <Container>
      <figure>
        <img src={icon} alt="icon" />
      </figure>

      <p>
        A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
        ingredientes.
      </p>
    </Container>
  );
};

export { MiniDetails };
