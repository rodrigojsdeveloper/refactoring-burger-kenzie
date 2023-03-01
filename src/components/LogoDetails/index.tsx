import burgerkenzie from "../../assets/LogoKenzieBurguer.svg";
import balls from "../../assets/BallsIllustrations.svg";
import { MiniDetails } from "../MiniDetails";
import { Container } from "./style";

const LogoDetails = () => {
  return (
    <Container>
      <img src={burgerkenzie} alt="Burger Kenzie" />

      <MiniDetails />

      <img src={balls} alt="Balls" />
    </Container>
  );
};

export { LogoDetails };
