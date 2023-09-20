import styled from "styled-components";

const Container = styled.div`
  min-width: 365px;

  & > div:nth-child(1) {
    width: 100%;
    height: 65px;

    background-color: var(--color-primary);
    border-radius: var(--border-radius) var(--border-radius) 0px 0px;

    padding: 22px 20px 13px 20px;

    & > h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: var(--white);
    }
  }

  @media (max-width: 1300px) {
    padding-top: 20px;
    margin: 0 auto;

    min-width: unset;
    width: 100%;
    max-width: 365px;
  }
`;

export { Container };
