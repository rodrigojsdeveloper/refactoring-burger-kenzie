import styled from "styled-components";

const Container = styled.main`
  & > .div-container {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 17px;

    & > .div-content {
      width: 100%;
      max-width: 1440px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`;

export { Container };
