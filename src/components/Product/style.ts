import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 280px;

  background-color: var(--color-white);
  border: 2px solid var(--grey-5);
  border-radius: var(--border-radius);

  transition: 0.5s;

  &:hover {
    border-color: var(--color-primary);

    button {
      border-color: var(--color-primary);
      background-color: var(--color-primary);

      &:active {
        border-color: var(--color-primary-75);
        background-color: var(--color-primary-75);
      }
    }
  }

  & > figure {
    width: 100%;
    height: 150px;

    background-color: var(--grey-6);
    border-radius: var(--border-radius) var(--border-radius) 0 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 20px;

    h3,
    span {
      line-height: 24px;
    }

    & > h3 {
      font-weight: 700;
      font-size: 18px;
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: var(--grey-2);

      padding-top: 14px;
    }

    & > span {
      font-weight: 600;
      font-size: 14px;

      color: var(--color-primary);

      padding: 14px 0;
    }
  }
`;

export { Container };
