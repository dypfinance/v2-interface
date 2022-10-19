import React, { useState } from "react";
import dypiusIcon from "../../assets/dyptoolsIcon.svg";
import OutsideClickHandler from "react-outside-click-handler";
import toolsLogo from "../../assets/dypToolsLogo.svg";
import { NavLink } from "react-router-dom";
import dypiusLogo from "../../assets/dypiusLogo.svg";
import dypiusLogoPurple from "../../assets/dypius-purple.svg";

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpenMenu(false);
      }}
    >
      <>
      <div className="container-fluid mobile-navbar py-3 d-flex justify-content-between align-items-center d-lg-none">
          <img src={dypiusLogo} alt="" />
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
        </div>
        {/* <div
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
        </div> */}
        {/* <div
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
            <NavLink
                className="text-decoration-none"
                to="/governance"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                Governance
              </NavLink>
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
                <img src={toolsLogo} className="pe-2" />
                DYP Tools
              </button>
            </li>
          </ul>
        </div> */}
      </>{" "}
    </OutsideClickHandler>
  );
};

export default HamburgerMenu;
