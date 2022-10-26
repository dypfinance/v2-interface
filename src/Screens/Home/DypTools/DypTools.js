import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ListCard from "../../../components/ListCard/ListCard";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";
import Laptop from "../../../assets/laptop2.png";
import dots from "../../../assets/dots.png";
import Triangle from "../../../assets/purple-triangle.png";
import useWindowSize from "../../../hooks/useWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";

const DypTools = () => {
  const windowSize = useWindowSize();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-lg d-flex justify-content-center">
      <div className="row dyp-tools">
        <div className={`col-12 col-lg-5 `}>
          <div className="gap-5 d-flex align-items-start justify-content-center flex-column pl-5 pt-5 pb-5 leftcol">
            <div className="gap-3 d-grid m-md-auto m-sm-auto m-lg-0">
              <Title
                top="DYP Tools"
                bottom="Powerful dApps"
                //  animation='fade-up' duration='1000'
              />
              <ListCard
                content="A wide range of impressive decentralized applications"
                image={"layers.svg"}
              />
              <ListCard
                content="Interactive platform with real-time data analytics "
                image={"graph.svg"}
              />
              <ListCard
                content="Support promising crypto tokens from various projects "
                image={"token.svg"}
              />
            </div>
            <a
              href={"https://tools.dyp.finance"}
              target={"_blank"}
              rel="noreferrer"
              className="btn d-flex align-items-center justify-content-center outline-btn m-md-auto m-sm-auto m-lg-0"
              // data-aos="fade-up"
              // data-aos-delay="500"
              // data-aos-duration="1000"
            >
              Go to DYP Tools <img src={filledArrow} alt="" className="ml-2" />
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center position-relative">
          <div
            // className={`${
              // windowSize.width < 786 ? "pulse" : `rotate-scale-up`
            // }`}
          >
            {/* <img className="iphoneBackground" src={iphoneBg} alt="" /> */}
          </div>
          {/* <img src={Triangle} className="triangle" /> */}
          {/* <img className="iphone" src={Laptop} alt="" /> */}
          {/* <img className="dots2" src={dots} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default DypTools;
