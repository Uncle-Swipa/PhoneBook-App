import React from "react";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
          <nav>
            <ul className="navBar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/all-contact">AllContacts</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
      </>
    );
}
 
export default Layout;
<>
</>