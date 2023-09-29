import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px 118px;

  background-color: var(--grey-6);

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

    .cart {
      position: relative;

      & > svg {
        cursor: pointer;
      }

      & > span {
        width: 24px;
        height: 24px;

        position: absolute;
        top: -15px;
        right: -15px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 900;
        font-size: 14px;
        color: var(--color-white);

        border-radius: 7px;
        background-color: var(--color-primary);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 14px 25px;
  }
`;

export { Container };
