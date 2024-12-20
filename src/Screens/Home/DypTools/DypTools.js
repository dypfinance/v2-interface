import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ListCard from "../../../components/ListCard/ListCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";

const DypTools = ({onDownloadClick}) => {
  const windowSize = useWindowSize();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-lg d-flex justify-content-center px-0
    ">
      <div className="row dyp-tools">
        <div className={`col-12 col-lg-5 `}>
          <div className="gap-5 d-grid align-items-start justify-content-center pl-5 pt-5 pb-5 p-md-4 leftcol">
            <div className="gap-3 d-grid m-md-auto m-sm-auto m-lg-0">
              <Title
                top="DYP Tools"
                bottom="Powerful dApps"
                 animation='fade-up' duration='1000'
              />
              <ListCard
                content="A wide range of interactive, decentralized applications"
                image={"layersCard.svg"}
              />
              <ListCard
                content="Access to real-time data analytics"
                image={"graphCard.svg"}
              />
              <ListCard
                content="Review and support tokens from various promising projects"
                image={"tokenCard.svg"}
              />
            </div>
            <div className="d-flex flex-lg-row flex-column gap-2 align-items-center">
            <a
              href={"https://app.dypius.com/"}
              target={"_blank"}
              rel="noreferrer"
              className="btn d-flex w-100 align-items-center justify-content-center outline-btn m-md-auto m-sm-auto m-lg-0"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000" 
            >
              Go to DYP Tools <img src={"https://cdn.worldofdypians.com/dypius/filledArrow.svg"} alt="" className="ml-2" />
            </a>
            <button
            onClick={onDownloadClick}
              className="btn filled-btn w-100 d-flex align-items-center justify-content-center m-md-auto m-sm-auto m-lg-0"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
               Download Mobile App 
            </button></div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center position-relative">
          <div
            className={`${
              windowSize.width < 786 ? "pulse" : `rotate-scale-up`
            }`}
          >
           
          </div>
          <img src={"https://cdn.worldofdypians.com/dypius/purple-triangle.png"} className="triangle" />
          <img className="iphone" src={"https://cdn.worldofdypians.com/dypius/laptop.png"} alt="" />
          {/* <img className="dots2" src={dots} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default DypTools;
