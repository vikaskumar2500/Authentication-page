import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import AuthForm from "./components/Auth/AuthForm";
import ProfileForm from "./components/Profile/ProfileForm";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <AuthForm />
        </Route>
        <Route path="/profile">
          <ProfileForm />
        </Route>
        {/* <Route path="/profile" exact>
          <ProfileForm />
        </Route> */}
      </Switch>
    </Layout>
  );
};

export default App;
