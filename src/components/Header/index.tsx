import { Container, Input, SearchContainer } from "./style";
import logo from "../../assets/LogoKenzieBurguer.svg";
import { IHeader } from "../../interfaces";
import { Button } from "../Button";
import { useState } from "react";

const Header = ({ products, setFilteredProducts }: IHeader) => {
  const [valueInput, setValueInput] = useState<string>("");

  return (
    <Container>
      <div>
        <img src={logo} alt="burger kenzie" />

        <SearchContainer>
          <Input
            type="text"
            placeholder="Digitar Pesquisa"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <Button
            size="medium"
            color="green"
            onClick={() =>
              setFilteredProducts(
                products.filter(
                  (product) =>
                    product.category
                      .toLowerCase()
                      .includes(valueInput.toLowerCase()) ||
                    product.name
                      .toLowerCase()
                      .includes(valueInput.toLowerCase())
                )
              )
            }
          >
            Pesquisar
          </Button>
        </SearchContainer>
      </div>
    </Container>
  );
};

export { Header };
