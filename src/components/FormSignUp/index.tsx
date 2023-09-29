import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { CustomInput } from "../Input";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import * as yup from "yup";

const FormSignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setIsLoading(true);

    api
      .post("users", data)
      .then(() => {
        reset();
        navigate("/");
      })
      .catch((error) => console.error("error", error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <div>
        <h2>Cadastro</h2>

        <Link to="/">Retornar para login</Link>
      </div>

      <div>
        <CustomInput label="Nome" type="text" register={register} name="name" />
        <CustomInput
          label="Email"
          type="email"
          register={register}
          name="email"
        />
        <CustomInput
          label="Senha"
          type="password"
          register={register}
          name="password"
        />

        <Button type="submit" size="large" color="grey" disabled={isLoading}>
          {isLoading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </div>
    </Container>
  );
};

export { FormSignUp };
