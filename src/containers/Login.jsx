import React from "react";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import TextInput from "../components/forms/TextInput";
import Branch from "../components/layout/Branch";

const Login = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <Branch />
      <div className="mt-2 bg-white shadow-md rounded-md w-80 px-6 py-4 overflow-hidden">
        <form className="gap-4 flex flex-col" action="/" method="post">
          <TextInput name="username" label="Usuario" type="text" />
          <TextInput name="password" label="Contraseña" type="password" />
          <Button type="submit" value="Iniciar Sesión" style="primary" />
        </form>
      </div>
      <LinkButton value="Crear cuenta" style="tertiary" href="/signup" />
    </div>
  );
};

export default Login;
