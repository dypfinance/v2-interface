import React from "react";
import uniswap from "../assets/uniswap.png";
import pancakeswap from "../assets/pancakeswap.png";
import pangolin from "../assets/pangolin.png";

const BuyIDyp = () => {
  return (
    <div className="container-lg buyidypsection d-flex justify-content-center">

      <div className="container row m-0 justify-content-between">
        <div className={`col-12 col-lg-5 `}>
          <div className="gap-5 d-flex align-items-start justify-content-center flex-column pl-2 pt-5 pb-5 leftcol">
            <div className="gap-3 d-grid m-md-auto m-sm-auto m-lg-0">
              <h1 className="metaverse">
                How can I get <br />
                iDYP tokens?
              </h1>
              <p className="text-secondary">
                The external market for iDYP emerged when a liquidity pool for
                iDYP was created on the decentralized exchanges (DEX) Uniswap,
                Pangolin, and PancakeSwap bringing iDYP out of the Dypius
                ecosystem and into the crypto market.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 row m-0 pb-5 justify-content-center align-items-center position-relative">
          <a
            href={
              "https://app.uniswap.org/#/swap?use=V2&inputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={uniswap} alt="" className="uni-card" />
          </a>
          <a
            href={
              "https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={pancakeswap} alt="" className="pancake-card" />
          </a>
          <a
            href={
              "https://app.pangolin.exchange/#/swap?&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={pangolin} alt="" className="pangolin-card" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyIDyp;
