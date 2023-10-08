//using inline style here
import React from "react";
import Logo from "./images/header-logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{
        backgroundColor: "#2c0047",
        fontSize: "30px",
        zIndex: 9999,
      }} //Inline style
    >
      <div className="container">
        <NavLink className="navbar-brand" to={""}>
          <img src={Logo} />{" "}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={""}
                style={{ color: "#fff" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"about"}
                style={{ color: "#fff" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"Artist"}
                style={{ color: "#fff" }}
              >
                Artist
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"Contact"}
                style={{ color: "#fff" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
