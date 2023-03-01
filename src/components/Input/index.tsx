import { InputContainer, Input, Label } from "./style";

interface InputProps {
  label: string;
  type: string;
}

const CustomInput = ({ label, type }: InputProps) => {
  return (
    <InputContainer>
      <Input type={type} />
      <Label>{label}</Label>
    </InputContainer>
  );
};

export { CustomInput };
