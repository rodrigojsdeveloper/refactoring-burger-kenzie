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

  border-radius: 4px;
  border: 1.5px solid var(--grey-20);

  & > div:nth-child(1) {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > a {
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;

      color: var(--grey-50);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > div:nth-child(2) {
    width: 100%;
  }
`;

export { Container };
