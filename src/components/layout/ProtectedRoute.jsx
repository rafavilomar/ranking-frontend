import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import GeneralContext from "../../context/context";

const ProtectedRoute = ({
  exact = true,
  path,
  component,
  requireLogin = true,
}) => {
  const [show, setShow] = useState(false);

  const { token } = useContext(GeneralContext);
  const history = useHistory();

  useEffect(() => {
    if (requireLogin && !token) {
      history.push("/login");
    }
    setShow(true);
  }, []);

  return <Route exact={exact} path={path} component={show && component} />;
};
export default ProtectedRoute;
