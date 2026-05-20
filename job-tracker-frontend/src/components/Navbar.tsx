import React from "react";
import { NavLink, useHistory } from "react-router-dom";


export const Navbar:React.FC = () => {
  const navigate = useHistory();
  const isLoggedIn = !!localStorage.getItem("user");

  const handleLogOut = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout failed", error)
    }

    localStorage.removeItem("user");
    navigate.push("/login");
  };

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
          {!isLoggedIn ? (
            <>
              <li className="nav-item m-1">
              <NavLink className="nav-link" to="/login">
                Sign In
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Sign Up
              </NavLink>
              </li>
            </>
          ) : (
            <li className="nav-item m-1">
              <button 
                className="btn btn-outline-light btn-sm" 
                onClick={handleLogOut}
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
