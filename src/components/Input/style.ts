import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  max-width: 421px;
  height: 60px;

  position: relative;
  margin-bottom: 10px;

  input:focus + label {
    transform: translate(-0.5rem, -1.7rem) scale(0.8);
    color: var(--color-primary);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 55px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  border: 1px solid var(--grey-5);
  border-radius: var(--border-radius);

  padding: 12px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-width: 2px;
    border-color: var(--color-primary);
  }

  &:placeholder-shown + label {
    transform: translate(0, 0) scale(1);
    color: var(--grey-2);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 20px;
  left: 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  color: var(--grey-2);
  background-color: var(--color-white);

  padding: 0 5px;
  pointer-events: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
    font-size 0.2s ease-in-out, top 0.2s ease-in-out;

  &.has-value {
    transform: translate(-0.5rem, -1.7rem) scale(0.8);
    color: var(--grey-2);
  }
`;

export { InputContainer, Input, Label };
