import { animationCart } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 365px;

  display: flex;
  flex-direction: column;

  animation: ${animationCart} 1s;

  & > .div-cart {
    width: 100%;
    height: 57px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-primary);
    border-radius: var(--border-radius) var(--border-radius) 0px 0px;

    padding: 14px;

    & > h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: var(--color-white);
    }

    & > svg {
      cursor: pointer;
    }
  }
`;

export { Container };
