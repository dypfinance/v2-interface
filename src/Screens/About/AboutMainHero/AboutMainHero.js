import React from "react";
import "./_aboutmainhero.scss";
import Title from "../../../components/Title/Title";
import bull from "../assets/bull.png";
import flower from "../assets/aboutFlower.png";
import painting from "../assets/aboutPainting.png";
import bluehero from "../../../assets/metaverse-blueHero.svg";
import indicator from "../assets/aboutIndicator.svg";

const AboutMainHero = () => {
  return (
    <div className="container-fluid about-main-hero d-flex flex-column justify-content-end">
      <div className="container-lg d-flex justify-content-between">
        <div className="col-5">
          <Title top="About" bottom="us" align="d-flex flex-row gap-2" />
          <p>
            Through our strong foundation, we aim to bring you a powerful
            decentralized ecosystem that faces the future.
            <br />
            <br />
            In addition to a variety of products and services currently offered
            like yield farming and staking, we are constantly building and
            expanding our scope to include more advanced DeFi and educational
            tools, NFTs and even Metaverse gaming, making us accessible for both
            beginner and advanced users.
          </p>
        </div>
        <div className="col-5 position-relative">
          <img src={bull} className="bull" alt="" />
          <img src={flower} className="flower" alt="" />
          <div className="painting-container d-flex justify-content-center align-items-center">
            <img
              src={painting}
              className="painting"
              alt=""
              style={{ borderRadius: "28px" }}
            />
          </div>
          <img src={bluehero} className="bluehero" alt="" />
        </div>
      </div>
      <div
        className="row pt-5 p-4 justify-content-center gap-5"
        style={{ zIndex: 1 }}
      >
        <a href="#solutions" className="text-decoration-none submenu-link">
          Our team
          <img src={indicator} alt="" />
        </a>
        <a href="#ourTokens" className="text-decoration-none submenu-link">
          Roadmap
          <img src={indicator} alt="" />
        </a>
        <a href="#vault" className="text-decoration-none submenu-link">
          Brand
          <img src={indicator} alt="" />
        </a>
        <a href="#learn" className="text-decoration-none submenu-link">
          Tokenomics
          <img src={indicator} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AboutMainHero;
