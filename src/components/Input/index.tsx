import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer, Input, Label } from "./style";

interface InputProps {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}

const CustomInput = ({ label, type, register, name }: InputProps) => {
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(Boolean(event.target.value));
  };

  return (
    <InputContainer>
      <Input
        type={type}
        {...register(name)}
        autoComplete="off"
        onChange={handleInputChange}
        className={hasValue ? "has-value" : ""}
      />
      <Label className={hasValue ? "has-value" : ""}>{label}</Label>
    </InputContainer>
  );
};

export { CustomInput };
