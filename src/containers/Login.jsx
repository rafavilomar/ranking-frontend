import React from "react";
import LinkButton from "../components/buttons/LinkButton";
import TextInput from "../components/forms/TextInput";
import Branch from "../components/layout/Branch";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <Branch/>
      <div className="mt-2 bg-white shadow-md rounded-md p-2 gap-3 flex flex-col overflow-hidden">
        <TextInput name="username" label="Usuario" type="text" />
        <TextInput name="password" label="Contraseña" type="password" />
        <LinkButton value="Iniciar Sesión" type="primary" /> {/*//todo: replace for Button*/}
      </div>
      <LinkButton value="Crear cuenta" type="tertiary" />
    </div>
  );
};

export default Login;
