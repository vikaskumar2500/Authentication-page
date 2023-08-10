import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import AuthForm from "./components/Auth/AuthForm";
import Profile from "./components/Profile/Profile";

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <AuthForm />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
