import styled from "styled-components";

const Container = styled.div`
  width: 365px;
  height: 223px;

  & > div:nth-child(1) {
    width: 100%;
    height: 65px;

    border-radius: 5px 5px 0px 0px;
    background-color: var(--color-primary);

    padding: 22px 20px 13px 20px;

    & > h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: var(--white);
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 158px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;

    border-radius: 0px 0px 5px 5px;
    background-color: var(--grey-0);

    & > b {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      padding-bottom: 15px;
    }

    & > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

      color: var(--grey-50);
    }
  }
`;

export { Container };
