import React, { useState } from "react";
import SupAssetCard from "../../../components/SupAssetCard/SupAssetCard";
import Title from "../../../components/Title/Title";
import AvaxActive from "../../../assets/DypAssets/avaxchain-active.svg";
import BnbActive from "../../../assets/DypAssets/bnbchain-active.svg";
import EthActive from "../../../assets/DypAssets/ethchain-active.svg";
import AvaxPassive from "../../../assets/DypAssets/avaxchain-passive.svg";
import BnbPassive from "../../../assets/DypAssets/bnbchain-passive.svg";
import EthPassive from "../../../assets/DypAssets/ethchain-passive.svg";
import spiral from "../../../assets/footerSpiral.png";
import useWindowSize from "../../../hooks/useWindowSize";

const SupportedAssets = () => {
  const [ethState, setEthState] = useState(false);
  const [bnbState, setBnbState] = useState(false);
  const [avaxState, setAvaxState] = useState(false);
  const types = ["Stake", "Yield", "Buyback"];
  const [activeType, setActiveType] = useState(types[0]);

  const windowSize = useWindowSize();

  const handleEthPool = () => {
    setAvaxState(false);
    setBnbState(false);
    setEthState(true);
  };

  const handleBnbPool = () => {
    setAvaxState(false);
    setBnbState(true);
    setEthState(false);
  };

  const handleAvaxPool = () => {
    setAvaxState(true);
    setBnbState(false);
    setEthState(false);
  };

  return (
    <div className="container-lg">
      <div className="supportedAssets-wrapper">
        <div className="col-12 col-lg-4 px-5 px-lg-3">
          <Title top="Supported Assets" />
          <p>We support the most popular coins on three different chains</p>
        </div>
        <div>
          {windowSize.width > 786 ? (
            <div className="types-wrapper">
              <div
                className={`actiontype ${activeType === "Stake" && "active"}`}
                onClick={() => {
                  setActiveType(types[0]);
                }}
              >
                <span>Stake</span>
                {activeType === "Stake" && (
                  <div className="activetype-dot"></div>
                )}
              </div>
              <div
                className={`actiontype ${activeType === "Yield" && "active"}`}
                onClick={() => {
                  setActiveType(types[1]);
                }}
              >
                <span>Yield</span>
                {activeType === "Yield" && (
                  <div className="activetype-dot"></div>
                )}
              </div>
              <div
                className={`actiontype ${activeType === "Buyback" && "active"}`}
                onClick={() => {
                  setActiveType(types[2]);
                }}
              >
                <span>Buyback</span>
                {activeType === "Buyback" && (
                  <div className="activetype-dot"></div>
                )}
              </div>
            </div>
          ) : null}
          <div className="row gap-4 m-auto p-4 position-relative">
            <div className="chain-wrapper">
              <img
                src={ethState === true ? EthActive : EthPassive}
                onClick={() => handleEthPool()}
              />
              <img
                src={bnbState === true ? BnbActive : BnbPassive}
                onClick={() => handleBnbPool()}
              />
              <img
                src={avaxState === true ? AvaxActive : AvaxPassive}
                onClick={() => handleAvaxPool()}
              />
            </div>

            {windowSize.width < 786 ? (
              <>
                <div className="types-wrapper w-100">
                  <div
                    className={`actiontype ${
                      activeType === "Stake" && "active"
                    }`}
                    onClick={() => {
                      setActiveType(types[0]);
                    }}
                  >
                    <span>Stake</span>
                    {activeType === "Stake" && (
                      <div className="activetype-dot"></div>
                    )}
                  </div>
                  <div
                    className={`actiontype ${
                      activeType === "Yield" && "active"
                    }`}
                    onClick={() => {
                      setActiveType(types[1]);
                    }}
                  >
                    <span>Yield</span>
                    {activeType === "Yield" && (
                      <div className="activetype-dot"></div>
                    )}
                  </div>
                  <div
                    className={`actiontype ${
                      activeType === "Buyback" && "active"
                    }`}
                    onClick={() => {
                      setActiveType(types[2]);
                    }}
                  >
                    <span>Buyback</span>
                    {activeType === "Buyback" && (
                      <div className="activetype-dot"></div>
                    )}
                  </div>
                </div>
                <hr />
              </>
            ) : null}
            <SupAssetCard
              pool={"DYP"}
              apr={"1.1%"}
              tvl={"$48,382.30"}
              lockTime={"No lock"}
            />
            <SupAssetCard
              pool={"DYP"}
              apr={"1.1%"}
              tvl={"$48,382.30"}
              lockTime={"No lock"}
            />
            <SupAssetCard
              pool={"DYP"}
              apr={"1.1%"}
              tvl={"$48,382.30"}
              lockTime={"No lock"}
            />
          </div>
        </div>
      </div>
      <img src={spiral} className='spiral' /> 
    </div>
  );
};

export default SupportedAssets;
