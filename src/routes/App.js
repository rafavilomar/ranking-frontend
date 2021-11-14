import React from "react";
import {Route, Switch} from "react-router-dom";

// CONTAINERS
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Home from "../containers/Home";
import MyProfile from "../containers/MyProfile";
import TeacherProfile from "../containers/TeacherProfile";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/my-profile" component={MyProfile}/>
      <Route exact path="/teacher" component={TeacherProfile}/>
    </Switch>
  );
}

export default App;
