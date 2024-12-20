import React from "react";



const IDypHero = () => {
  return (
    <div className="container-fluid idypmainhero d-flex flex-column justify-content-center position-relative overflow-hidden">
      <img
        className="idypring d-none d-lg-block"
        src={`https://cdn.worldofdypians.com/dypius/tokenCircle.png`}
      />
            <img
        className="idypheroimg"
        src={'https://cdn.worldofdypians.com/dypius/idypmainhero.png'}
        alt=""
      />
      <img
        className="sphere-2 d-none d-lg-block"
        src={"https://cdn.worldofdypians.com/dypius/newsSphere.png"}
        alt=""
        style={{ position: "absolute", left: "2%", top: "70%" }}
      />

      <div className="container-lg px-0 px-lg-3">
        <div className="row mx-0 w-100 d-flex flex-column flex-lg-row justify-content-between gap-5 gap-lg-0 idyp-row-wrapper">
        <div className="col-12 col-lg-6 px-0 px-lg-3 text-white d-flex flex-column gap-3 justify-content-lg-end justify-content-xl-end">
          <h1>iDYP Token</h1>
          <p> 
          iDYP is part of the Dypius dual token economy and is used as a component of smart contract strategies. It is available on Ethereum, BNB and Avalanche chains.
          </p>
        </div>
        <div className="col-12 col-lg-3 position-relative d-lg-block d-xl-block idyp-hero-images">
          <img
            className="idypcoin"
            src={"https://cdn.worldofdypians.com/dypius/idypCoin.png"}
            alt=""
          />
          <img
            className="backgroundbuydyp"
            src={`https://cdn.worldofdypians.com/dypius/idyp_purplebg.png`}
            alt=""
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default IDypHero;
