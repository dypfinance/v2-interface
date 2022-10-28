import React from "react";
import sphere from "../../../assets/newsSphere.png";

const IDypHero = () => {
  return (
    <div className="container-fluid idypmainhero d-flex flex-column justify-content-center position-relative overflow-hidden">
      <img
        className="idypring d-none d-lg-block"
        src={require(`../../../assets/tokenCircle.png`)}
      />
            <img
        className="idypheroimg"
        src={require('../assets/idypmainhero.png')}
        alt=""
      />
      <img
        className="sphere-2"
        src={sphere}
        alt=""
        style={{ position: "absolute", left: "2%", top: "70%" }}
      />

      <div className="container-lg d-flex justify-content-between">
        <div className="col-12 col-lg-6 text-white d-flex flex-column gap-3 justify-content-lg-end justify-content-xl-end">
          <h1>iDYP Token</h1>
          <p> 
          iDYP is part of the Dypius dual token economy and is used as a compnent of smart contract strategies. It is available on Ethereum, BNB and Avlalanche chains.
          </p>
        </div>
        <div className="col-9 col-lg-3 position-relative d-lg-block d-xl-block d-none idyp-hero-images">
          <img
            className="idypcoin"
            src={require(`../../../assets/coin.png`)}
            alt=""
          />
          <img
            className="backgroundbuydyp"
            src={require(`../assets/idyp_purplebg.png`)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IDypHero;
