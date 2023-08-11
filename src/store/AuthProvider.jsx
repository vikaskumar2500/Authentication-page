import AuthContext from "./AuthContext";
import React, { useState } from "react";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);

  const isLoggedIn = !!token;

  const loginHandler = (idToken) => {
    setToken(idToken);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  // console.log('AuthProvider Runnning');
  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
