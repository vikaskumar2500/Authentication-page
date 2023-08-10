import React from "react";

import "./Layout.css";
import Header from "./Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="layout">{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
