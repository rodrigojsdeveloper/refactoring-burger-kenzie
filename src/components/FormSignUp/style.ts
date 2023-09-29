import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 455.81px;
  height: 400px;

  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border: 1.5px solid var(--grey-5);
  border-radius: var(--border-radius);

  & > .div-container {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > a {
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;

      color: var(--grey-2);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > .div-content {
    width: 100%;
  }

  @media (max-width: 375px) {
    height: 425px;

    & > .div-container {
      height: 50px;

      flex-direction: column;
    }
  }
`;

export { Container };
