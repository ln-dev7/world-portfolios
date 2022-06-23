import React from "react";
import "./../styles/navbar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="nav-container-logo">
          <img src="assets/images/logo.svg" alt="logo" />
        </a>
        <a href="#" className="nav-container-link">
          Add your portfolio
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
