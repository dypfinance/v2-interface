import React, { useEffect, useState } from "react";
import CoinCard from "../../../components/CoinCard/CoinCard";
import Title from "../../../components/Title/Title";
import "./_dyptoken.scss";
import { NavLink } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DypToken = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-lg d-flex justify-content-center mb-4 mb-lg-0">
      <div className="row dyp-token justify-content-between">
        <div className="col-6 col-lg-3 blue-half order-2 order-lg-1">
          <img src={"https://cdn.worldofdypians.com/dypius/coin.png"} className="coin" alt="" />
          <img src={"https://cdn.worldofdypians.com/dypius/coinbg.png"} className="coin" alt="" />
          <img
            className="ring-1"
            src={`https://cdn.worldofdypians.com/dypius/tokenCircle.png`}
          />
          <img
            className="ring-2"
            src={`https://cdn.worldofdypians.com/dypius/tokenCircle.png`}
          />
        </div>
        <div className="token-info col-12 col-lg-6 d-flex justify-content-center align-items-end flex-column pr-3 pr-lg-5 order-1 order-lg-2">
      
          <Title
            top="DYP Token"
            bottom="Empowering the future"
            align="text-end"
            animation="fade-up"
            duration="1000"
          />
          <p className="text-end" data-aos="fade-up" data-aos-duration="1000">
            Explore the multiple possibilites with our unique token
          </p>

          <div className="row">
           {/*  <div
              className="d-flex flex-row px-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            > */}
              <div className="" style={{width: '270px'}}>
                <Slider {...settings} >
                  <CoinCard
                    title="Dypius Vault"
                    stakeAmount="5%"
                    description="Earn rewards by securely depositing your assets into the vault smart contract"
                  />
                  <CoinCard
                    title="Dypius Stake"
                    stakeAmount="12.5%"
                    description="Earn rewards by securely depositing your assets into the staking smart contract"
                  />
                </Slider>
              </div>

              {/* <InfiniteCards /> */}
            {/* </div> */}
          </div>
          <NavLink
            to="/dyp"
            className="btn filled-btn d-flex align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ zIndex: 5 }}
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DypToken;
