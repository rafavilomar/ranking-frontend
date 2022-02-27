import React from "react";
import { Switch } from "react-router-dom";

// CONTAINERS
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Home from "../containers/Home";
import MyProfile from "../containers/MyProfile";
import TeacherProfile from "../containers/TeacherProfile";
import TeacherList from "../containers/TeacherList";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import SchoolList from "../containers/SchoolList";

function App() {
  return (
    <Switch>
      <ProtectedRoute requireLogin={false} exact path="/" component={Home} />
      <ProtectedRoute
        requireLogin={false}
        exact
        path="/login"
        component={Login}
      />
      <ProtectedRoute
        requireLogin={false}
        exact
        path="/signup"
        component={Signup}
      />
      <ProtectedRoute exact path="/my-profile" component={MyProfile} />
      <ProtectedRoute
        exact
        path="/teacher/:teacherId"
        component={TeacherProfile}
      />
      <ProtectedRoute
        exact
        path="/search/:teacherName"
        component={TeacherList}
      />
      <ProtectedRoute exact path="/schools" component={SchoolList} />
    </Switch>
  );
}

export default App;
