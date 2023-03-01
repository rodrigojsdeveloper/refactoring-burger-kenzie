import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  max-width: 421px;
  height: 60px;

  position: relative;
  margin-bottom: 15px;

  &:focus-within label,
  &:not(:placeholder-shown) + label {
    transform: translate(-0.5rem, -1.6rem) scale(0.8);
    color: var(--color-primary);
  }
`;

const Input = styled.input`
  width: 100%;

  font-weight: 500;
  font-size: 16px;

  padding: 18px;
  border: 1px solid var(--grey-20);
  outline: none;

  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-width: 2px;
    border-color: var(--color-primary);
  }

  &:placeholder-shown + label {
    transform: translate(0, 0) scale(1);
    color: var(--grey-50);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 18px;
  left: 15px;
  font-size: 18px;
  color: var(--grey-50);
  background-color: var(--white);
  padding: 0 5px;
  pointer-events: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
    font-size 0.2s ease-in-out, top 0.2s ease-in-out;
`;

export { InputContainer, Input, Label };
