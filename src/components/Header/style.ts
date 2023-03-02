import styled from "styled-components";

const Container = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 10px 115px 10px 109.19px;

  background-color: var(--grey-0);

  & > div {
    width: 100%;
    max-width: 1375.82px;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 158.94px;
      height: 36.83px;
    }

    & > div {
      width: 100%;
      max-width: 365px;
      height: 60px;

      display: flex;
      flex-direction: row;
      align-items: center;

      border-radius: 8px;
      background-color: var(--white);
      border: 2px solid var(--grey-20);

      padding: 10px 10px 10px 15px;

      & > input {
        width: 100%;
        height: 100%;

        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        border: none;
        background-color: var(--white);

        &::placeholder {
          color: var(--grey-20);
        }
      }
    }
  }

  @media (max-width: 1300px) {
    padding: 14.28px 16px 14px 16px;

    & > div {
      height: 139px;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

export { Container };
