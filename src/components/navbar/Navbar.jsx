import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"} className="nav__head">Task Board</Link>
      </h2>
      <ul className="nav__list">
        <li className="nav__products">
          <Link to="/register" className="link">
            SignUp
          </Link>
          <div className="hover"></div>
        </li>

        <li className="nav__cart">
          <Link to="/login" className="link">
            LogIn
          </Link>
          <div className="hover"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
