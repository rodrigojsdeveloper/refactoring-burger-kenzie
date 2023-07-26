import styled, { css } from "styled-components";
import { IButtonStyle } from "../../interfaces";

const Container = styled.button<IButtonStyle>`
  width: 100%;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  transition: 0.5s;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case "default":
        return css`
          max-width: 343px;
          height: 60px;
        `;

      case "large":
        return css`
          max-width: 421px;
          height: 60px;
        `;

      case "medium":
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
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--white);

          :hover {
            background-color: var(--color-primary-50);
            border-color: var(--color-primary-50);
          }
        `;

      case "grey":
        return css`
          background-color: var(--grey-20);
          border-color: var(--grey-20);
          color: var(--grey-50);

          :hover {
            background-color: var(--grey-50);
            border-color: var(--grey-50);
            color: var(--grey-20);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
