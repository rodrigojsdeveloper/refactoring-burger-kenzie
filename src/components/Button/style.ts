import styled, { css } from "styled-components";
import { IButtonStyle } from "../../interfaces";

const Container = styled.button<IButtonStyle>`
  width: 100%;
  height: 60px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-white);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: var(--border-radius);

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case "106px":
        return css`
          max-width: 106px;
          height: 40px;
        `;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "green":
        return css`
          border: 1px solid var(--color-primary);
          background-color: var(--color-primary);

          &:hover {
            border-color: var(--color-primary-50);
            background-color: var(--color-primary-50);
          }

          &:active {
            border-color: var(--color-primary-75);
            background-color: var(--color-primary-75);
          }
        `;

      case "grey":
        return css`
          color: var(--grey-2);
          border: 1px solid var(--grey-5);
          background-color: var(--grey-5);

          &:hover {
            border-color: var(--grey-4);
            background-color: var(--grey-4);
          }

          &:active {
            border-color: var(--grey-3);
            background-color: var(--grey-3);
          }
        `;

      case "grey-green":
        return css`
          font-size: 14px;
          line-height: 16.94px;

          border-color: var(--grey-3);
          background-color: var(--grey-3);
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
