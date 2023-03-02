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

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required(""),
    email: yup.string().required(""),
    password: yup.string().required(""),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    api
      .post("users", data)
      .then(() => navigate("/"))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <div>
        <h2>Cadastro</h2>

        <Link to="/">Retornar para login</Link>
      </div>

      <div>
        <CustomInput label="Name" type="text" register={register} name="name" />
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

        <Button size="large" color="grey" type="submit" disabled={load}>
          {load ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </div>
    </Container>
  );
};

export { FormSignUp };
