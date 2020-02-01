import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/layout/NavBar";
import ProjectDetails from "./component/project/ProjectDetails";
import Dashboard from "./component/dashboard/Dashboard";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateProject from "./component/project/CreateProject";
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createProject" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
