import styled from "styled-components";

const Container = styled.div`
  & > main {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 17px 8px;

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
