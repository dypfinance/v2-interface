import React, { useEffect, useState } from "react";
import dypiusIcon from "../../assets/dyptoolsIcon.svg";
import OutsideClickHandler from "react-outside-click-handler";
import toolsLogo from "../../assets/dypToolsLogo.svg";
import { NavLink } from "react-router-dom";
import dypiusLogo from "../../assets/dypiusLogo.svg";
import dypiusLogoPurple from "../../assets/dypius-purple.svg";
import mobileNavArrow from "../../assets/mobileNavArrow.svg";
import toolsBorder from "../../assets/toolsBorder.svg";
import Title from "../Title/Title";


const HamburgerMenu = ({showFlyout}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [logo, setLogo] = useState(false);
  const [metaverse, setMetaverse] = useState(false);

  const showNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 300) {
        setShow(false);
      } else {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }

    setLastScrollY(window.scrollY);

    if (
      window.location.href.includes("dyp") &&
      !window.location.href.includes("dyp")
    ) {
      if (window.scrollY >= 500) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    } else if (
      window.location.href.includes("about") ||
      window.location.href.includes("terms-of-service") ||
      window.location.href.includes("governance") ||
      window.location.href.includes("support") ||
      window.location.href.includes("news") ||
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
  const hamburger = document.querySelector("#hamburgermenu");
  const html = document.querySelector("html");
  const metaverseModalIndicator = document.querySelector(
    ".metaverse-modal-wrapper"
  );

  useEffect(() => {
    if (openMenu === true || metaverse === true) {
      html.classList.add("hidescroll");
      bgmenu.style.pointerEvents = "auto";
      metaverseModalIndicator.style.pointerEvents = "auto";
      hamburger.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      html.classList.remove("hidescroll");
    }
  }, [openMenu, metaverse]);

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
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenMenu(false);
        }}
      >
        <>
          <div
            className={`container-fluid mobile-navbar ${
              logo && "white-navbar"
            } py-3 d-flex justify-content-between align-items-center d-lg-none ${
              show ? "" : ""
            }`}
            style={{top: showFlyout ? '40px' : 0}}
          >
            <NavLink to="/">
              <img src={logo ? dypiusLogoPurple : dypiusLogo} alt="" />
            </NavLink>
            <div
              id="hamburgermenu"
              className={`d-block ${
                logo && "white-burger"
              } d-lg-none d-xl-none ${openMenu && "hamburgermenu open"}`}
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
              openMenu === true && showFlyout === true ? 'openMenu-withFlyout' : openMenu === true && showFlyout === false ? "openMenu" : ''
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
                <a
                  className="text-decoration-none d-flex justify-content-between align-items-center"
                  href="https://www.worldofdypians.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
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
            <div className="col-12 d-flex justify-content-center position-relative">
              <a
                className="d-flex text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://app.dypius.com/"
              >
                {/* <button className="btn tools-btn text-white">
              <img src={toolsLogo} className="pe-2" alt=""  />
              DYP Tools
            </button> */}
                <img src={"https://cdn.worldofdypians.com/dypius/toolsBtn.svg"} className="tools-btn" alt="" />
              </a>
          
            </div>
          </div>
        </>
      </OutsideClickHandler>
      <OutsideClickHandler onOutsideClick={() => setMetaverse(false)}>
        <div
          className={`metaverse-modal-wrapper ${
            metaverse && "metaverse-active"
          } flex-column p-5 d-flex gap-3 align-items-center justify-content-center`}
        >
          <img
            src={"https://cdn.worldofdypians.com/dypius/xMark.svg"}
            alt=""
            className="x-mark"
            onClick={() => setMetaverse(false)}
          />
          <img src={"https://cdn.worldofdypians.com/dypius/metaverseModal.svg"} alt="" className="metaverse-title" />
          <img src={"https://cdn.worldofdypians.com/dypius/comingSoon.png"} alt="" width={400} className="comming-soon" />
          <Title
            top="Stay"
            bottom="tuned"
            align="d-flex flex-row align-items-center gap-2"
          />
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default HamburgerMenu;
