import React, { useEffect, useState } from "react";
import dypiusIcon from "../../assets/dyptoolsIcon.svg";
import OutsideClickHandler from "react-outside-click-handler";
import toolsLogo from "../../assets/dypToolsLogo.svg";
import { NavLink } from "react-router-dom";
import dypiusLogo from "../../assets/dypiusLogo.svg";
import dypiusLogoPurple from "../../assets/dypius-purple.svg";

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);

  const showNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    setLastScrollY(window.scrollY);
  };

  const bgmenu = document.querySelector("#bgmenu");
  const body = document.querySelector("body");

  useEffect(() => {
    if (openMenu === true) {
      body.style.pointerEvents = "none";
      bgmenu.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
      body.style.pointerEvents = "auto";
    }
  }, [openMenu]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showNavbar);
    }

    return () => {
      window.removeEventListener("scroll", showNavbar);
    };
  }, [lastScrollY]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpenMenu(false);
      }}
    >
      <>
        <div
          className={`container-fluid mobile-navbar py-3 d-flex justify-content-between align-items-center d-lg-none ${
            show ? "hide-nav" : ""
          }`}
        >
          <NavLink to="/">
            <img src={dypiusLogo} alt="" loading="lazy"/>
          </NavLink>
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
        <div
          id="bgmenu"
          className={`bg-white d-flex d-lg-none d-xl-none justify-content-around align-items-center py-3 links menu ${
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
                <img src={toolsLogo} className="pe-2" loading="lazy"/>
                DYP Tools
              </button>
            </li>
          </ul>
        </div>
      </>
    </OutsideClickHandler>
  );
};

export default HamburgerMenu;
