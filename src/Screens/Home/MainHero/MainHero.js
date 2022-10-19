import React, { useState, useRef } from "react";
import ChainlinkData from "../ChainlinkData/ChainlinkData";
import DypSystem from "../../../components/DypSystem/DypSystem";
import CometBg from "../../../components/CometBg/CometBg";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const MainHero = () => {
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    arrows: false,
  };

  const slickref = useRef();

  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <div className="container-fluid main-hero">
        <CometBg />
        <div className="container-lg">
          <div className="heading row">
            <div className="col-12 col-lg-5 d-flex justify-content-lg-evenly justify-content-xl-evenly justify-content-inherit flex-column text-white ml-lg-4 pt-5">
              <div className="d-flex flex-column gap-4">
                <div>
                  <h1>Welcome</h1>
                  <h1>to the future</h1>
                </div>
                <p className="text-white">
                  Dypius is a powerful decentralized ecosystem that faces the
                  future. A new era with special focus on scalability, security,
                  and global adoption. Powered by a next-gen infrastructure
                  through our strong foundation, and much more!
                </p>
                <NavLink type="button" className="btn filled-orange-btn d-flex align-items-center justify-content-center" to='/dyp'>
                  Explore
                </NavLink>
              </div>
              <div className="sliderwrapper  d-flex flex-column mt-3 pl-0">
                <Slider {...settings} ref={slickref}>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Earn</b>
                    </p>
                    <p style={{fontSize: 13}}>
                      Start earning high value rewards by depositing assets on
                      our immersive Dypius products and solutions
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Governance</b>
                    </p>
                    <p style={{fontSize: 13}}>
                      DYP holders can vote on whether to add more pools, burn
                      tokens, allocate DYP toward grants, strategic
                      partnerships, and different initiatives.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>DYP Tools</b>
                    </p>
                    <p style={{fontSize: 13}}>
                      An advanced analytics data tools that provides easier
                      navigation to decentralized networks, new trends,
                      protection, support for new projects and much more.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Bridge</b>
                    </p>
                    <p style={{fontSize: 13}}>
                      Powerful dApp that allows to swap tokens between Ethereum
                      to Binance, Avalanche and many more to come. Instant and
                      secure transactions.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Launchpad</b>
                    </p>
                    <p style={{fontSize: 13}}>
                      Support new projects to raise capital in a decentralized
                      environment by bringing token offerings to the market in
                      the highest secure way.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>CAWS NFT</b>
                    </p>
                    <p style={{fontSize: 13}}>
                      A limited Cat and Watches Society NFT collection of 10,000
                      randomly generated, hand-drawn utility NFTs developed by
                      Dypius. These unique NFTs consist of over 235 different
                      traits, each outfitted with its own luxury watch of
                      various rarities.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-0 rowwrapper">
                    <p>
                      <b>Metaverse</b>
                    </p>
                    <p style={{fontSize: 13}}>
                      An innovative metaverse platform that redefines the gaming
                      industry and digital currency services. Platform utilizes
                      cutting-edge blockchain technology, giving an unique
                      experience.
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
                  slickref.current.innerSlider.slickPlay();
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
