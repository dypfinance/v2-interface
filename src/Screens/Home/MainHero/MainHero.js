import React, { useState, useRef, useEffect } from "react";
import ChainlinkData from "../ChainlinkData/ChainlinkData";
import DypSystem from "../../../components/DypSystem/DypSystem";
import CometBg from "../../../components/CometBg/CometBg";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import axios from "axios";
import getFormattedNumber from "../../../hooks/getFormattedNumber";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes }) => {
  return (
    <div className="d-flex align-items-start gap-2">
      <div className="d-flex flex-column align-items-center">
        <h6 className="migrated-tokens-amount mb-0">{days}</h6>
        <span className="migrated-tokens mb-0">Days</span>
      </div>
      <h6 className="migrated-tokens-amount mb-0">:</h6>

      <div className="d-flex flex-column align-items-center">
        <h6 className="migrated-tokens-amount mb-0">{hours}</h6>
        <span className="migrated-tokens mb-0">Hours</span>
      </div>
      <h6 className="migrated-tokens-amount mb-0">:</h6>
      <div className="d-flex flex-column align-items-center">
        <h6 className="migrated-tokens-amount mb-0">{minutes}</h6>
        <span className="migrated-tokens mb-0">Minutes</span>
      </div>
    </div>
  );
};

const MainHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    arrows: false,
  };

 
  const [migrationAmount, setMigrationAmount] = useState(0);
  const [migrationPercentage, setMigrationPercentage] = useState(0);

 


  const getMigrationData = async () => {
    const result = await axios.get(
      "https://api.dyp.finance/api/migratedTokens"
    );
    if (result && result.status === 200) {
      const tokenAmount = result.data.migratedTokens;
      const percentage = result.data.tokenPercentage;
      setMigrationAmount(tokenAmount);
      setMigrationPercentage(percentage);
    }
  };

  useEffect(() => {
    getMigrationData();
  }, []);

  const slickref = useRef();

  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <div className="container-fluid main-hero">
        <CometBg />
        <div className="container-lg">
          <div className="heading row">
            <div className="col-12 col-lg-5 d-flex justify-content-lg-center gap-5 justify-content-xl-center justify-content-inherit flex-column text-white ml-lg-4 pt-5 px-0 px-lg-2">
              <div className="d-grid gap-4 mt-0 mt-lg-5">
                <div>
                  <h1>Welcome 
                  to the future</h1>
                </div>
                <p className="text-white">
                Dypius is a powerful decentralized ecosystem that faces the future. A new era with special focus on scalability, security, and global adoption. Powered by a next-gen infrastructure through our strong foundation, and much more! 
                </p>
             

                <NavLink
                  to="/dyp"
                 
                  className="btn filled-orange-btn d-flex align-items-center justify-content-center"
                  style={{width: 'fit-content'}}
                >
                  Explore
                </NavLink>
              </div>
              <div className="sliderwrapper  d-flex flex-column mt-3 pl-0">
                <Slider {...settings} ref={slickref}>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Earn</b>
                    </p>
                    <p style={{ fontSize: 13 }}>
                      Make the most of your assets by embracing Dypius Earn
                      products.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Governance</b>
                    </p>
                    <p style={{ fontSize: 13 }}>
                      DYP holders can actively influence the future of the
                      ecosystem by voting to add more pools, burn tokens, and
                      create other unique proposals.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>DYP Tools</b>
                    </p>
                    <p style={{ fontSize: 13 }}>
                      Advanced analytic tools designed to provide accurate data,
                      news, project support, and much more.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Bridge</b>
                    </p>
                    <p style={{ fontSize: 13 }}>
                      Bridge tokens between Ethereum to BNB Chain, Avalanche and
                      many more to come. Instant and secure transactions.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Launchpad</b>
                    </p>
                    <p style={{ fontSize: 13 }}>
                      Support new projects in a decentralized and secure
                      environment.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>CAWS NFT</b>
                    </p>
                    <p style={{ fontSize: 13 }}>
                      The Cat and Watches Society NFT is a unique collection
                      developed by Dypius that offers multiple benefits,
                      including staking and metaverse integration.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Metaverse</b>
                    </p>
                    <p style={{ fontSize: 13 }}>
                      An innovative platform that redefines the gaming industry
                      by implementing cutting-edge technology.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center flex-column text-white ml-4">
              <DypSystem
                onShowFirstDesc={() => {
                  slickref.current.innerSlider.slickGoTo(0);
                }}
                onShowSecondDesc={() => {
                  slickref.current.innerSlider.slickGoTo(1);
                }}
                onShowThirdDesc={() => {
                  slickref.current.innerSlider.slickGoTo(2);
                }}
                onShowFourthDesc={() => {
                  slickref.current.innerSlider.slickGoTo(3);
                }}
                onShowFifthDesc={() => {
                  slickref.current.innerSlider.slickGoTo(4);
                }}
                onShowSixthDesc={() => {
                  slickref.current.innerSlider.slickGoTo(5);
                }}
                onShowSeventhDesc={() => {
                  slickref.current.innerSlider.slickGoTo(6);
                }}
                onRemoveDesc={() => {
                  // slickref.current.innerSlider.slickPlay();
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ChainlinkData />
    </div>
  );
};

export default MainHero;
