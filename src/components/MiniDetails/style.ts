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

  border: 1.5px solid var(--grey-20);

  & > figure {
    width: 60px;
    height: 60px;

    border-radius: 4px;
    background-color: var(--color-primary-100);
  }

  & > p {
    padding-left: 15px;

    font-size: 14px;
    font-weight: 400;
    line-height: 25px;

    width: 100%;
    max-width: 348px;

    @media (max-width: 425px) {
      line-height: 20px;
    }

    @media (max-width: 375px) {
      font-size: 12px;
    }
  }
`;

export { Container };
