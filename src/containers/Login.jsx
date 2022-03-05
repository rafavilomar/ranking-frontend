import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import Alert from "../components/feedback/Alerts";
import TextInput from "../components/forms/TextInput";
import Branch from "../components/layout/Branch";
import GeneralContext from "../context/context";
import AuthService from "../fetcher/services/AuthService";

const Login = () => {
  const history = useHistory();
  const { token, setContext } = useContext(GeneralContext);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 5000);
  };

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      username,
      password,
    };
    const response = await AuthService.login(data);
    if (response) {
      setContext(response);
      history.push("/");
      setLoading(false);
    } else {
      showError();
      setLoading(false);
      setUsername("");
      setPassword("");
    }
  };

  useEffect(() => {
    if (token) {
      history.push("/");
    }
    document.title = "Ranking | Login";
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <Branch />
      <div className="w-80 flex flex-col gap-2">
        {error && (
          <Alert title="Error al intentar iniciar sesión" error>
            <p>
              {" "}
              <b>Usuario</b> o <b>contraseña</b> incorrectos. Por favor vuelva a
              intentarlo.
            </p>
          </Alert>
        )}
        <div className="mt-2 bg-white shadow-md rounded-md px-6 py-4 overflow-hidden">
          <form className="gap-4 flex flex-col" onSubmit={login}>
            <TextInput
              value={username}
              name="username"
              label="Usuario"
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              value={password}
              name="password"
              label="Contraseña"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              loading={loading}
              type="submit"
              value="Iniciar Sesión"
              style="primary"
            />
          </form>
        </div>
      </div>
      <LinkButton value="Crear cuenta" style="tertiary" href="/signup" />
    </div>
  );
};

export default Login;
