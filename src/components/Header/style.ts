import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  background-color: var(--white);

  &::placeholder {
    color: var(--grey-20);
  }

  &:focus {
    & ~ div {
      border-color: var(--color-black);
    }
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 365px;
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: var(--white);
  border: 2px solid var(--grey-20);
  border-radius: var(--border-radius);

  padding: 10px 10px 10px 15px;

  &:focus-within {
    border-color: var(--color-black);
  }
`;

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

    & > div {
      ${SearchContainer};
      ${Input};
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

export { Container, Input, SearchContainer };
