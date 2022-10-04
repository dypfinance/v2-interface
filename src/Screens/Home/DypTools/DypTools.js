import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ListCard from "../../../components/ListCard/ListCard";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";
import Laptop from "../../../assets/laptop.png";
import iphoneBg from "../../../assets/laptopbg.svg";
import dots from "../../../assets/dots.png";
import { tada } from "react-animations";
import Triangle from "../../../assets/purple-triangle.svg";


const taDa = keyframes`${tada}`;
const TadaDiv = styled.span`
  animation: 4s ${taDa} infinite;
`;

const DypTools = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className="container-lg d-flex justify-content-center">
      <div className="row dyp-tools">
        <div
          className={`col-12 col-lg-5 fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
          ref={domRef}
        >
          <div className="gap-5 d-flex align-items-start justify-content-center flex-column pl-5 pt-4 leftcol">

            <div className='gap-3 d-grid m-md-auto m-sm-auto m-lg-0'>
            <Title top="DYP Tools" bottom="Powerful dApps" />
            <ListCard content='A wide range of impressive decentralized applications'  />
            <ListCard content='Interactive platform with real-time data analytics ' />
            <ListCard content='Support promising crypto tokens from various projects ' />

            </div>
            <button className="btn outline-btn m-md-auto m-sm-auto m-lg-0">
              Go to DYP Tools <img src={filledArrow} alt="" className="ml-2" />
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center position-relative">
          <div className="rotate-scale-up">
            {/* <img className="iphoneBackground" src={iphoneBg} alt="" /> */}
          </div>
          <img src={Triangle} className="triangle" />
          <img className="iphone" src={Laptop} alt="" />
          <img className="dots" src={dots} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DypTools;
