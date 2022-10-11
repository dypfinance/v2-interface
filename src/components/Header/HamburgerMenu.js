import React, { useState } from "react";
import dypiusIcon from "../../assets/dyptoolsIcon.svg";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpenMenu(false);
      }}
    >
      <>
        <div
          id="hamburgermenu"
          className={`d-block d-lg-none d-xl-none ${
            openMenu && "hamburgermenu open"
          }`}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`col-8 bg-white d-flex d-lg-none d-xl-none justify-content-around align-items-center py-3 links menu ${
            openMenu === true && "openMenu"
          }`}
        >
          <ul>
            <li>
              <NavLink
                className="text-decoration-none"
                to="/dyp"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                DYP
              </NavLink>
            </li>
            <li>
              <a className="text-decoration-none" href="#metaverse">
                Metaverse World
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#gov">
                Governance
              </a>
            </li>
            <li>
              <NavLink
                className="text-decoration-none"
                to="/support"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-decoration-none"
                to="/about"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <button className="btn text-white py-2">
                <img src={dypiusIcon} className="pe-2" />
                DYP Tools
              </button>
            </li>
          </ul>
        </div>
      </>{" "}
    </OutsideClickHandler>
  );
};

export default HamburgerMenu;
