import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
