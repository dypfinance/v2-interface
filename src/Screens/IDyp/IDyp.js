import React from "react";
import IDypHero from "./IDypHero/IDypHero";
import Tokenomics from "../Dyp/Tokenomics/Tokenomics";
import BuyIDyp from "./BuyIDyp/BuyIDyp";


const IDyp = () => {
  return (
    <div className="dyp-page main-wrapper container-fluid p-0 d-flex flex-column align-items-center">
      <IDypHero/>
      <BuyIDyp/>
      <div className="container-lg pl-xl-5 pl-lg-5 pl-md-5 pl-0 pr-xl-5 pr-lg-5 pr-md-5 px-0 ">
      <Tokenomics bottom={55} showBtn={false} isDyp={false} />
          </div>
    </div>
  );
};

export default IDyp;
