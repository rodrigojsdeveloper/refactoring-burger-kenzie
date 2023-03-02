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

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required(""),
    password: yup.string().required(""),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    api
      .post("users/login", data)
      .then((res) => {
        sessionStorage.setItem("Burger Kenzie: token", res.data.token);

        navigate("/dashboard");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
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
          <Button color="green" size="large" type="submit" disabled={load}>
            {load ? "Entrando..." : "Entrar"}
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
