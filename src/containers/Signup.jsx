import React from "react";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import TextInput from "../components/forms/TextInput";
import Branch from "../components/layout/Branch";

const Signup = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <Branch />
      <div className="mt-2 bg-white shadow-md rounded-md w-80 px-6 py-4 overflow-hidden">
        <form className="gap-4 flex flex-col" action="/" method="post">
          <TextInput name="username" label="Usuario" type="text" />
          <TextInput name="email" label="Correo electrónico" type="email" />
          <TextInput name="password" label="Contraseña" type="password" />
          <TextInput
            name="passwordRepeat"
            label="Repetir Contraseña"
            type="password"
          />
          <Button type="submit" value="Crear cuenta" style="primary" />
        </form>
      </div>
      <LinkButton value="Iniciar sesión" style="tertiary" href="/login" />
    </div>
  );
};

export default Signup;
