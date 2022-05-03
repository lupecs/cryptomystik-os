import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/crypto_mystik-logo-small.png";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <img src={Logo} alt="" className="nav-logo" />
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/" className="btn">
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="hamburger">
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
