import React from "react";
import {Route, Switch} from "react-router-dom";

// CONTAINERS
import Home from "../containers/Home";
import Profile from "../containers/Profile";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/my-profile" component={Profile}/>
    </Switch>
  );
}

export default App;
