import styled from "styled-components";

const Container = styled.div`
  & > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 26px 115px 0px 109.19px;

    & > div {
      width: 100%;
      max-width: 1375.82px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    @media (max-width: 1300px) {
      padding: 15px 18.09px 42px 16px;

      & > div {
        flex-direction: column;
      }
    }
  }
`;

export { Container };
