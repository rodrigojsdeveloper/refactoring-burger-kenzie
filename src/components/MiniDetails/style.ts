import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 465px;
  height: 102px;

  padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1.5px solid var(--grey-5);
  border-radius: var(--border-radius);

  & > figure {
    width: 60px;
    height: 60px;

    border-radius: var(--border-radius);
    background-color: var(--color-primary-100);
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    width: 100%;
    max-width: 348px;
  }

  @media (max-width: 640px) {
    height: auto;
    flex-direction: column;
    row-gap: 12.5px;

    text-align: center;
  }
`;

export { Container };
