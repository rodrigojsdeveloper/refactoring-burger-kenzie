import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { CustomInput } from "../Input";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import * as yup from "yup";

const FormSignIn = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setIsLoading(true);

    api
      .post("login", data)
      .then((res) => {
        localStorage.setItem("Burger Kenzie: token", res.data.accessToken);

        reset();
        navigate("/dashboard");
      })
      .catch((error) => console.error("error", error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Login</h2>

      <div>
        <div>
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
        </div>

        <div className="divButtons">
          <Button type="submit" color="green" size="large" disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Button color="grey" size="large" onClick={() => navigate("/signup")}>
            Cadastrar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { FormSignIn };
