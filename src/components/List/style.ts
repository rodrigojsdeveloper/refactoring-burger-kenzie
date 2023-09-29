import styled from "styled-components";

const Container = styled.menu`
  width: 100%;
  max-width: 1368px;

  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 300px));
  grid-gap: 56px;

  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0px, 300px));
    grid-gap: 36px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0px, 300px));
    grid-gap: 26px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export { Container };
