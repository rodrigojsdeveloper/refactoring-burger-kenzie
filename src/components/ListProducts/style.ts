import styled from "styled-components";

const Container = styled.menu`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  padding-right: 10px;

  @media (max-width: 1300px) {
    margin: 0 auto;
  }
`;

export { Container };
