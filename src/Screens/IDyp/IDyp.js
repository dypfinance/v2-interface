import React, { useEffect } from "react";
import IDypHero from "./IDypHero/IDypHero";
import Tokenomics from "../Dyp/Tokenomics/Tokenomics";
import BuyIDyp from "./BuyIDyp/BuyIDyp";
import IDypToken from './IDypToken/IDypToken'

const IDyp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="dyp-page main-wrapper container-fluid pl-0 pr-0 d-flex flex-column align-items-center"
      style={{overflowX: 'hidden'}}
    >
      <IDypHero />
      <BuyIDyp />
      <IDypToken/>
      <div className="container-lg pl-xl-5 pl-lg-5 pl-md-5 pl-0 pr-xl-5 pr-lg-5 pr-md-5 px-0 ">
        <Tokenomics bottom={135} showBtn={false} isDyp={false} />
      </div>
    </div>
  );
};

export default IDyp;
