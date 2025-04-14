import React from "react";

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
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Applications
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item m-1">
            <a type="button" className="btn btn-outline-light" href="#">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
