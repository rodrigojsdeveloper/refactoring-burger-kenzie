import { ldsRingAnimation } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 100px auto 0;

  .loading {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 5px solid var(--color-primary);
      border-radius: 50%;
      animation: ${ldsRingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--color-primary) var(--transparent) var(--transparent)
        var(--transparent);
    }

    div:nth-child(1) {
      animation-delay: -0.45s;
    }

    div:nth-child(2) {
      animation-delay: -0.3s;
    }

    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export { Container };
