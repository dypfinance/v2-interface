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
      className="dyp-page main-wrapper container-fluid pl-0 pr-0 d-flex flex-column align-items-center pb-0"
      style={{overflowX: 'hidden'}}
    >
      <IDypHero />
      <BuyIDyp />
      <IDypToken/>
        <Tokenomics bottom={55} showBtn={false} isDyp={false} />
    </div>
  );
};

export default IDyp;
