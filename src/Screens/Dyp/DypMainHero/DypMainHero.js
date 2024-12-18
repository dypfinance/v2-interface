import React from "react";
import './_dypmainhero.scss'


const DypMainHero = () => {
  return (
    <div className="container-fluid dyp-main-hero d-flex flex-column justify-content-end position-relative overflow-hidden" style={{zIndex: 1}}>
      <img
        className="waves"
        src={`https://cdn.worldofdypians.com/dypius/wavesTop.svg`}
        alt=""
         

      />
      <img
        className="waves d-none d-lg-block"
        src={`https://cdn.worldofdypians.com/dypius/wavesBottom.svg`}
        alt=""
         
      />
      <img
        className="mobile-waves d-block d-lg-none"
        src={`https://cdn.worldofdypians.com/dypius/mobileWaves.svg`}
         

      />
      <img
        className="ring d-none d-lg-block"
        src={require(`../../../assets/tokenCircle.png`)}
         

      />
      <div className="container-lg d-flex justify-content-between">
      <div className="row justify-content-between px-0 px-lg-3">
      <div className="col-12 col-sm-6 col-lg-7 text-white d-flex flex-column gap-3 justify-content-lg-end justify-content-xl-end px-0 px-lg-3">
          <h1>DYP Token</h1>
          <p>
          DYP is a utility token that provides the foundation for the Dypius ecosystem within a decentralized platform that focuses on scalability, security, and global adoption.
          <br/>
          <br/>
          <br/>
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 position-relative dyp-coin-wrapper">
          <img
            className="coin"
            src={require(`../../../assets/coin.png`)}
            alt=""
          />
          <img
            className="coin"
            src={"https://cdn.worldofdypians.com/dypius/dypcoinbackground.png"}
            alt=""
          />
        </div>
      </div>
      </div>
      <div
        className="row pt-5 p-4 justify-content-center gap-5 dyp-submenu-container"
        style={{ zIndex: 1 }}
      >
        <a
          href="#solutions"
          className="text-decoration-none text-white submenu-link"
        >
          Solutions
          <img
            src={`https://cdn.worldofdypians.com/dypius/accordionIndicator.svg`}
            alt="indicator"
            className="submenu-indicator"
          />
        </a>
        <a
          href="#ourTokens"
          className="text-decoration-none text-white submenu-link"
        >
          Token
          <img
            src={`https://cdn.worldofdypians.com/dypius/accordionIndicator.svg`}
            alt="indicator"
            className="submenu-indicator"
          />
        </a>
        <a
          href="#vault"
          className="text-decoration-none text-white submenu-link"
        >
          Vault
          <img
            src={`https://cdn.worldofdypians.com/dypius/accordionIndicator.svg`}
            alt="indicator"
            className="submenu-indicator"
          />
        </a>
        <a
          href="#learn"
          className="text-decoration-none text-white submenu-link"
        >
          Learn
          <img
            src={`https://cdn.worldofdypians.com/dypius/accordionIndicator.svg`}
            alt="indicator"
            className="submenu-indicator"
          />
        </a>
      </div>
    </div>
  );
};

export default DypMainHero;
