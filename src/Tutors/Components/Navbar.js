import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Auth from "../Auth";

const Navbar = () => {
  let navigate = useNavigate();

  const authHandler = () => {
    if (Auth.isAuthenticated()) {
      Auth.logout(() => {
        navigate("/");
      });
    } else {
      Auth.login(() => {
        navigate("/about");
      });
    }
  };

  const authText = Auth.isAuthenticated() ? "logout" : "login";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link class="navbar-brand" to="/">
          ReactJS Tutor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="nav nav-tabs me-auto">
            <li>
              <NavLink className="nav-item nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <span
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Demo
              </span>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/demo-context">
                    Demo Context
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-context-reducer">
                    Demo Context Reducer
                  </NavLink>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-reducer">
                    Demo Reducer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-reducer-effect">
                    Demo Reducer Effect
                  </NavLink>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-memo">
                    Demo Memo
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-use-hook">
                    Demo Use Hook
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-use-ref">
                    Demo Use Ref
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-redux">
                    Demo Redux
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/demo-redux-toolkit">
                    Demo Redux Toolkit
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-success navbar-btn" onClick={authHandler}>
            {authText}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
