import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import GeneralContext from "../../context/context";

const ProtectedRoute = ({ exact, path, component, requireLogin }) => {
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

ProtectedRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  requireLogin: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  exact: true,
  requireLogin: true,
};
