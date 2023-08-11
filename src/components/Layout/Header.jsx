import React, { useContext } from "react";

import "./Header.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;
  console.log(isLoggedIn);

  return (
    <header className="header">
      <h1 className="title">Authentication</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          {!isLoggedIn && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/#logout">Logout</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
