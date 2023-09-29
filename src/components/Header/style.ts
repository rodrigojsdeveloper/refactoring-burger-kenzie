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
    max-width: 1440px;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 158.94px;
      height: 36.83px;
    }

    & > svg {
      cursor: pointer;
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
