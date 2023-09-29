import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export { Container };
