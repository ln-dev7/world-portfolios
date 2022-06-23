import React from "react";
import "./../styles/navbar.scss";

const NavBar = () => {
  return (
    <nav className="nav" id="#nav">
      <div className="nav-container">
        <a
          href="https://cameroon-porfolios.vercel.app/"
          className="nav-container-logo"
        >
          <img src="assets/images/logo.svg" alt="logo" />
        </a>
        <div className="nav-container-menu">
          <div className="nav-container-menu-search">
            <input type="text" placeholder="Search a portfolio ..." />
            <button>
              <img src="assets/images/search-eye-line.svg" alt="search" />
            </button>
          </div>
          <a
            href="https://github.com/ln-dev7/cameroon-porfolios/blob/master/CONTRIBUTING.md"
            className="nav-container-menu-link"
          >
            <span>Add your portfolio</span>
            <span> + </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
