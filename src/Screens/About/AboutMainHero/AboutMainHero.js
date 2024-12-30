import React from "react";
import "./_aboutmainhero.scss";
import Title from "../../../components/Title/Title";



const AboutMainHero = () => {
  return (
    <div className="container-fluid about-main-hero d-flex flex-column justify-content-lg-end justify-content-xl-end justify-content-center" id="aboutmain">
      <div className="container-lg d-flex flex-column flex-lg-row flex-md-row justify-content-between mt-5 mt-lg-0 align-items-md-baseline align-items-sm-center px-0 px-lg-3">
        <div className="col-12 col-lg-5 col-md-5 mt-5 mt-lg-0 px-0 px-lg-2">
          <Title top="About" bottom="us" align="d-flex flex-row gap-2" />
          <p className="text-secondary">
          Dypius is a powerful, decentralized ecosystem with a focus on scalability, security, and global adoption through next-gen infrastructure.  We offer a variety of products and services that cater to both beginners and advanced users in the crypto space including Earn solutions, analytical tools, NFTs, Metaverse and more!
          </p>
        </div>
        <div className="col-12 col-lg-5 col-md-5 image-container position-relative">
          <img src={"https://cdn.worldofdypians.com/dypius/aboutCollage.png"} alt="" className="about-collage" />
        </div>
      </div>
      <div
        className="row pt-5 p-4 justify-content-center gap-5 submenu-container"
        style={{ zIndex: 5 }}
      >
        <a href="#ourteam" className="text-decoration-none submenu-link">
          Our team
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className='submenu-indicator'  alt=""  />
        </a>
        <a href="#roadmap" className="text-decoration-none submenu-link">
          Roadmap
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className='submenu-indicator'  alt=""  />
        </a>
        <a href="#brand" className="text-decoration-none submenu-link">
          Brand
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className='submenu-indicator'  alt=""  />
        </a>
        <a href="#security" className="text-decoration-none submenu-link">
          Security
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"}  className='submenu-indicator' alt=""  />
        </a>
        <a href="#tokenomics" className="text-decoration-none submenu-link">
          Tokenomics
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className='submenu-indicator'  alt=""  />
        </a>
        <a href="#contactus" className="text-decoration-none submenu-link">
          Contact us
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className='submenu-indicator'  alt=""  />
        </a>
      </div>
    </div>
  );
};

export default AboutMainHero;
