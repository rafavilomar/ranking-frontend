import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import TextInput from "../components/forms/TextInput";
import Branch from "../components/layout/Branch";
import GeneralContext from "../context/context";
import AuthService from "../fetcher/services/AuthService";

const Login = () => {

  let history = useHistory();
  const {token, setContext} = useContext(GeneralContext)

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const service = new AuthService();

  const login = async () => {
    const data = {
      username: username,
      password: password
    }
    const response = await service.login(data);
    if (response) {
      setContext(response);
      history.push("/");
    }
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <Branch />
      <div className="mt-2 bg-white shadow-md rounded-md w-80 px-6 py-4 overflow-hidden">
        <div className="gap-4 flex flex-col">
          <TextInput name="username" label="Usuario" type="text" required onChange={(e) => setUsername(e.target.value)}/>
          <TextInput name="password" label="Contraseña" type="password" required onChange={(e) => setPassword(e.target.value)}/>
          <Button type="submit" value="Iniciar Sesión" style="primary" funtion={login}/>
        </div>
      </div>
      <LinkButton value="Crear cuenta" style="tertiary" href="/signup" />
    </div>
  );
};

export default Login;
