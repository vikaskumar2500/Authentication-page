import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import AuthForm from "./components/Auth/AuthForm";
import ProfileForm from "./components/Profile/ProfileForm";
import AuthContext from "./store/AuthContext";
import StartingPage from "./components/StartingPage/StartingPage";

const App = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;

  // we can handling the after refreshing the page.
  useEffect(() => {
    const [existToken] = Object.keys(localStorage);
    if (existToken) {
      authCtx.login(existToken);
    }
  });
  // after 5mins we clear out the localstorage so that user automatic logout.
  setTimeout(()=> {localStorage.clear()}, 3e+5);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <StartingPage />
        </Route>
        {!isLoggedIn && (
          <Route path="/login" exact>
            <AuthForm />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/login" exact>
            <Redirect to="/" />
          </Route>
        )}
        <Route path="/profile">
          {isLoggedIn && <ProfileForm />}
          {!isLoggedIn && <AuthForm />}
        </Route>
        {/* global/ path */}
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
