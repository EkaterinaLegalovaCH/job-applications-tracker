import React from "react";
import { NavLink } from "react-router-dom";
import { SignIn } from "./SignInForm";
import { SignUp } from "./SignUpForm";

export const Navbar:React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <span className="navbar-brand">Love 2 Build</span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/applications">
              Applications
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item m-1">
            <NavLink className="nav-link" to="/login">
              Sign In
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
