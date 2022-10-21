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
    <div className="container-fluid about-main-hero d-flex flex-column justify-content-lg-end justify-content-xl-end justify-content-center" id="aboutmain">
      <div className="container-lg d-flex flex-column flex-lg-row flex-md-row justify-content-between mt-5 mt-lg-0 align-items-md-baseline align-items-sm-center">
        <div className="col-12 col-lg-5 col-md-5 mt-5 mt-lg-0">
          <Title top="About" bottom="us" align="d-flex flex-row gap-2" />
          <p className="text-secondary">
          Dypius was created with the goal of bringing a powerful decentralized ecosystem that faces the future. We offer a variety of products and services that cater to both beginners and advanced users in the digital space, including yield farming, staking, DeFi tools, NFTs, and Metaverse gaming.
          </p>
        </div>
        <div className="col-12 col-lg-5 col-md-5 image-container position-relative">
          <img src={bull} className="bull" alt="" loading="lazy"/>
          <img src={flower} className="flower" alt="" loading="lazy"/>
          <div className="painting-container d-flex justify-content-center align-items-center">
            <img
              src={painting}
              className="painting"
              alt=""
              loading="lazy"
              style={{ borderRadius: "28px" }}
            />
          </div>
          <img src={bluehero} className="bluehero" alt="" loading="lazy"/>
        </div>
      </div>
      <div
        className="row pt-5 p-4 justify-content-center gap-5"
        style={{ zIndex: 5 }}
      >
        <a href="#ourteam" className="text-decoration-none submenu-link">
          Our team
          <img src={indicator} className='submenu-indicator'  alt="" loading="lazy"/>
        </a>
        <a href="#roadmap" className="text-decoration-none submenu-link">
          Roadmap
          <img src={indicator} className='submenu-indicator'  alt="" loading="lazy"/>
        </a>
        <a href="#brand" className="text-decoration-none submenu-link">
          Brand
          <img src={indicator} className='submenu-indicator'  alt="" loading="lazy"/>
        </a>
        <a href="#security" className="text-decoration-none submenu-link">
          Security
          <img src={indicator}  className='submenu-indicator' alt="" loading="lazy"/>
        </a>
        <a href="#tokenomics" className="text-decoration-none submenu-link">
          Tokenomics
          <img src={indicator} className='submenu-indicator'  alt="" loading="lazy"/>
        </a>
        <a href="#contactus" className="text-decoration-none submenu-link">
          Contact Us
          <img src={indicator} className='submenu-indicator'  alt="" loading="lazy"/>
        </a>
      </div>
    </div>
  );
};

export default AboutMainHero;
