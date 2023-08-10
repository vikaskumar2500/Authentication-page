import React from "react";

import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Authentication</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/#logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
