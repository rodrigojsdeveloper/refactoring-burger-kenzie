import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer, Input, Label } from "./style";

interface InputProps {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}

const CustomInput = ({ label, type, register, name }: InputProps) => {
  return (
    <InputContainer>
      <Input type={type} {...register(name)} />
      <Label>{label}</Label>
    </InputContainer>
  );
};

export { CustomInput };
