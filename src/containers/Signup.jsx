import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import TextInput from "../components/forms/TextInput";
import Branch from "../components/layout/Branch";
import GeneralContext from "../context/context";
import AuthService from "../fetcher/services/AuthService";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const service = new AuthService();
  const { setContext } = useContext(GeneralContext);
  let history = useHistory();

  const clearForm = () => {
    setUsername("");
    setPassword("");
    setPasswordRepeat("");
    setEmail("")
  }

  const register = async (event) => {
    event.preventDefault();

    if (password == passwordRepeat) {
      const registerData = {
        username: username,
        password: password,
        email: email
      }
      const loginData = {
        username: username,
        password: password
      }

      await service.register(registerData)
      const response = await service.login(loginData)

      if (response) {
        setContext(response);
        history.push("/");
      } else {
        clearForm();
      }
    }

  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <Branch />
      <div className="mt-2 bg-white shadow-md rounded-md w-80 px-6 py-4 overflow-hidden">
        <form className="gap-4 flex flex-col" onSubmit={register}>
          <TextInput value={username} onChange={(e) => setUsername(e.target.value)} name="username" label="Usuario" type="text" required />
          <TextInput value={email} onChange={(e) => setEmail(e.target.value)} name="email" label="Correo electrónico" type="email" required />
          <TextInput value={password} onChange={(e) => setPassword(e.target.value)} name="password" label="Contraseña" type="password" required />
          <TextInput
            value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}
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
