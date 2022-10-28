import React, { useEffect, useState } from "react";
import dypiusIcon from "../../assets/dyptoolsIcon.svg";
import OutsideClickHandler from "react-outside-click-handler";
import toolsLogo from "../../assets/dypToolsLogo.svg";
import { NavLink } from "react-router-dom";
import dypiusLogo from "../../assets/dypiusLogo.svg";
import dypiusLogoPurple from "../../assets/dypius-purple.svg";
import mobileNavArrow from '../../assets/mobileNavArrow.svg';
import toolsBorder from "../../assets/toolsBorder.svg";


const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [logo, setLogo] = useState(false)

  const showNavbar = () => {
    if (typeof window !== "undefined") {
      if(window.scrollY < 300){
        setShow(false)
      }else{
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
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
      html.classList.add('hidescroll')
      bgmenu.style.pointerEvents = "auto";
      hamburger.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      html.classList.remove('hidescroll')
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
            <img src={logo ? dypiusLogoPurple : dypiusLogo} alt=""  />
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
          className={`bg-white d-flex flex-column d-lg-none d-xl-none justify-content-start align-items-center py-3 links menu ${
            openMenu === true && "openMenu"
          }`}
        >
          <ul className="w-100 px-0">
            <li className="mobile-navlink m-0 p-4">
              <NavLink
                className="text-decoration-none d-flex justify-content-between align-items-center"
                to="/dyp"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                DYP
                <img src={mobileNavArrow} alt="" />
              </NavLink>
            </li>
              <hr className="mobile-hr" />
            <li className="mobile-navlink m-0 p-4">
              <a className="text-decoration-none d-flex justify-content-between align-items-center" href="#metaverse">
                Metaverse World
                <img src={mobileNavArrow} alt="" />
              </a>
            </li>
              <hr className="mobile-hr" />
            <li className="mobile-navlink m-0 p-4">
              <NavLink
                className="text-decoration-none d-flex justify-content-between align-items-center"
                to="/governance"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                Governance
                <img src={mobileNavArrow} alt="" />

              </NavLink>
            </li>
              <hr className="mobile-hr" />
            <li className="mobile-navlink m-0 p-4">
              <NavLink
                className="text-decoration-none d-flex justify-content-between align-items-center"
                to="/support"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                Support
                <img src={mobileNavArrow} alt="" />

              </NavLink>
            </li>
              <hr className="mobile-hr" />
            <li className="mobile-navlink m-0 p-4">
              <NavLink
                className="text-decoration-none d-flex justify-content-between align-items-center"
                to="/about"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                About Us
                <img src={mobileNavArrow} alt="" />

              </NavLink>
            </li>
              <hr className="mobile-hr" />
          </ul>
            <a href="https://tools.dyp.finance/news" target="_blank" rel="noreferrer" className="p-4 position-relative">
            <button className="btn dyp-tools-btn text-white py-2 px-3">
                <img src={toolsLogo} className="pe-2"  />
                DYP Tools
              </button>
              <img src={toolsBorder} className="tools-border" alt="" />
            </a>
        </div>
      </>
    </OutsideClickHandler>
  );
};

export default HamburgerMenu;
