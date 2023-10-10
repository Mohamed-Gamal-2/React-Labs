import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./images/logo300.png";
import { JWTcontext } from "../../Contexts/JWTcontext";

export default function Navbar() {
  let { JWT, setJWT } = useContext(JWTcontext);
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userToken");
    setJWT(null);
    navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-expand bg-dark navbar-dark ">
        <div className="container">
          {JWT ? (
            <img src={logo} alt="logo" height={"30px"} className="my-1" />
          ) : (
            <NavLink className="navbar-brand" to={""}>
              <img src={logo} alt="logo" height={"30px"} />
            </NavLink>
          )}

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {JWT ? (
                <>
                  <li className="nav-item">
                    <NavLink className={`${styles.links}`} to={"profile"}>
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item" onClick={logout}>
                    <NavLink className={`${styles.links}`} to={"profile"}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className={`${styles.links}`} to={"register"}>
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`${styles.links}`} to={"Login"}>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
