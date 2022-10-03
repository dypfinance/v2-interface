import React, { useState } from "react";
import dypiusLogo from "../../assets/dypiusLogo.svg";
import dypiusLogoPurple from "../../assets/dypius-purple.svg";
import dypiusIcon from "../../assets/dyptoolsIcon.svg";
import { NavLink } from "react-router-dom";
import "./_navbar.scss";

const Navbar = () => {
  const [opacity, setOpacity] = useState(false);
  const [logo, setLogo] = useState(false);
  const [highlight, setHighlight] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 75) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }

    if (window.location.href.includes("dyp")) {
      if (window.scrollY >= 500) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    } else {
      if (window.scrollY >= 800) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={`row d-none d-lg-flex pt-4 justify-content-between page-navigation ${
        opacity ? "opacity" : null
      }`}
      id="navbar"
    >
      <div className="col-2 d-flex justify-content-center">
        <NavLink
          onClick={() => {
            setHighlight("");
            window.scrollTo("0,0");
          }}
          className="d-flex"
          to="/"
        >
          <img src={logo ? dypiusLogoPurple : dypiusLogo} />
        </NavLink>
      </div>
      <div className="col-6 bg-white d-flex justify-content-around align-items-center py-3 links">
        <NavLink
          onClick={() => setHighlight("highlight")}
          className={`text-decoration-none ${highlight}`}
          to="/dyp"
        >
          DYP
        </NavLink>
        <a className="text-decoration-none" href="#metaverse">
          Metaverse World
        </a>
        <a className="text-decoration-none" href="#metaverse">
          Governance
        </a>
        <a className="text-decoration-none" href="#metaverse">
          Support
        </a>
        <a className="text-decoration-none" href="#metaverse">
          About Us
        </a>
      </div>
      <div className="col-2 d-flex justify-content-center">
        <a
          className="d-flex text-decoration-none"
          target="_blank"
          href="https://tools.dyp.finance/news"
        >
          <button className="btn text-white py-2">
            <img src={dypiusIcon} className="pe-2" />
            Dyp Tools
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
