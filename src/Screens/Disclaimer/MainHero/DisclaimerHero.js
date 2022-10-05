import React from "react";
import DisclaimerContent from "../DisclaimerContent/DisclaimerContent";
const DisclaimerHero = () => {
  return (
    <div className="container-fluid">
      <div className="container-fluid disclaimer-hero">
        <img
          className="bluehero-solutions"
          src={require(`../../../assets/metaverse-blueHero.svg`).default}
          alt=""
          style={{ bottom: "0px", left: '20%', transform: 'rotate(230deg)' }}
        />
         <img
          className="bluehero-solutions"
          src={require(`../../../assets/metaverse-blueHero.svg`).default}
          alt=""
          style={{ bottom: "-100px", right: '10%', transform: 'rotate(230deg)' }}
        />
      </div>
      <DisclaimerContent/>

    </div>
  );
};

export default DisclaimerHero;
