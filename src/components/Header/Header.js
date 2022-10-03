import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div>
      <header className="fixed-top">
        <div className="navbar p-4 header-wrapper">
          <Logo />
          <div className="d-flex gap-3">
            <NavLink to="/dyp"  className="nav-link">
              Dyp
            </NavLink>
            <NavLink to="/metaverse" className="nav-link">
              Metaverse
            </NavLink>
            <NavLink to="/dyp-tools" className="nav-link">
              Dyp Tools
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About us
            </NavLink>
            <NavLink to="/e-shop" className="nav-link">
              Eshop
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
