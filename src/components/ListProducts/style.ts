import styled from "styled-components";

const Container = styled.menu`
  width: 100%;
  max-width: 960px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: unset;
  }
`;

export { Container };
