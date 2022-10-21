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
  const [logo, setLogo] = useState(false)

  const showNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    setLastScrollY(window.scrollY);

    if (window.location.href.includes("dyp") && !window.location.href.includes("dyp")) {
      if (window.scrollY >= 500) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    } else if (
      window.location.href.includes("about") ||
      window.location.href.includes("disclaimer") ||
      window.location.href.includes("governance") ||
      window.location.href.includes("support") ||
      window.location.href.includes("news")  ||
      window.location.href.includes("buydyp")
    ) {
      setLogo(true);
    } else {
      if (window.scrollY >= 800) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    }
  };

  const bgmenu = document.querySelector("#bgmenu");
  const hamburger = document.querySelector('#hamburgermenu')
  const html = document.querySelector("html");

  useEffect(() => {
    if (openMenu === true) {
      html.style.pointerEvents = "none";
      html.style.overflow = 'hidden'
      bgmenu.style.pointerEvents = "auto";
      hamburger.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      html.style.overflow = "auto";
      html.style.pointerEvents = "auto";
    }
  }, [openMenu]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showNavbar);
      window.addEventListener("click", showNavbar);
    }

    return () => {
      window.removeEventListener("scroll", showNavbar);
      window.removeEventListener("click", showNavbar);
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
          className={`container-fluid mobile-navbar ${logo && 'white-navbar'} py-3 d-flex justify-content-between align-items-center d-lg-none ${
            show ? "hide-nav" : ""
          }`}
        >
          <NavLink to="/">
            <img src={logo ? dypiusLogoPurple : dypiusLogo} alt="" loading="lazy"/>
          </NavLink>
          <div
            id="hamburgermenu"
            className={`d-block ${logo && 'white-burger'} d-lg-none d-xl-none ${
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
