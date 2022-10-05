import React from "react";
import "./_roadmap.scss";
import filledLeft from "../assets/filledLeft.svg";
import emptyRight from "../assets/emptyRight.svg";
import selectedRoadmap from "../assets/selectedRoadmap.svg";
import completedIcon from '../assets/completedIcon.svg';
import uncompletedIcon from '../assets/uncompletedIcon.svg';

const Roadmap = () => {

  return (
    <div className="container-lg roadmap-wrapper">
      <div className="row flex-column gap-1 p-5 roadmap-title">
        <h1 className="text-white">Dypius roadmap</h1>
        <div className="d-flex flex-row w-100 justify-content-between">
          <p>Our journey to success</p>
          <div className="d-flex flex-row gap-4">
            <div
              className="left-button d-flex justify-content-center align-items-center"
            >
              <img src={filledLeft} alt="left arrow" />
            </div>
            <div
              className="right-button d-flex justify-content-center align-items-center"
            >
              <img src={emptyRight} alt="rightArrow" />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-evenly">
        <div
          className="col-3 date-card d-flex flex-column align-items-center justify-content-end"
        >
          <h2 style={{ color: "#EFF0F6" }}>2022 Q1</h2>
          <div className="outer-circle d-flex justify-content-center align-items-center">
            <div className="inner-circle"></div>
          </div>
        </div>
        <div
          className="col-3 date-card d-flex flex-column align-items-center justify-content-end"
        >
          <h2 style={{ color: "#EFF0F6" }}>2022 Q2</h2>
          <div className="outer-circle d-flex justify-content-center align-items-center">
            <div className="inner-circle"></div>
          </div>
        </div>
        <div
          className="col-3 selected date-card d-flex flex-column align-items-center justify-content-end"
        >
          <img src={selectedRoadmap} alt="" />
          <h2 className="text-white">2022 Q3/Q4</h2>
          <div className="outer-circle d-flex justify-content-center align-items-center">
            <div className="inner-circle"></div>
          </div>
        </div>
      </div>
      <hr />
        <div className="row justify-content-evenly mt-5">
          <div className="col-3 roadmap-items d-flex flex-column gap-3 py-4 h-100">
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Launch Cats and Watches Society NFT</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Launch New Smart Contract for DYP Vault</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Building CAWS Adventures 2D Game</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Building CAWS Staking Smart Contract</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Building New Smart Contract for DYP Staking</p>
            </div>
          </div>
          <div className="col-3 roadmap-items d-flex flex-column gap-3 py-4 h-100"> 
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Launch New Smart Contract for DYP Staking</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Launch Cats and Watches Society Staking Pool</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Launch New UI Design for Main Website</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Launch New UI Design for Dapps</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={completedIcon} alt="" />
              <p>Play to Earn NFT Concept becomes active for CAWS Holders</p>
            </div>
          </div>
          <div className="col-3 highlight roadmap-items d-flex flex-column gap-3 py-4 h-100">
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Metaverse Research and Launch of Different Products</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Metaverse Begins for the CAWS</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Rebranding Process</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Building Extra Features for DYP Tools</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Incorporation of a Legal Entity for upcoming Regulation For Decentralized Finance</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Expanding our Products to other Chains</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Launch App for iOS and Android</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Launch Multi-Chain DEX</p>
            </div>
            <div className="d-flex flex-row align-items-center gap-2">
              <img src={uncompletedIcon} alt="" />
              <p>Further Extension and Project Growth in Different Areas</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Roadmap;
