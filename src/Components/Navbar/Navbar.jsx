import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <p>Logo</p>
        </div>
        <div className="dropdown">
          <span>Sections</span>
          <div className="dropdown-content">
            <Link to="/category1">Category 1</Link>
            <Link to="/category2">Category 2</Link>
            <Link to="/category3">Category 3</Link>
            <Link to="/category4">Category 4</Link>
            <Link to="/category5">Category 5</Link>
            <Link to="/category6">Category 6</Link>
          </div>
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav-menu">
          <li onClick={() => setMenu("Home")}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
            {menu === "Home" ? <hr /> : null}
          </li>
          <li onClick={() => setMenu("About")}>
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
            {menu === "About" ? <hr /> : null}
          </li>
        </ul>
        <div className="nav-login">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
