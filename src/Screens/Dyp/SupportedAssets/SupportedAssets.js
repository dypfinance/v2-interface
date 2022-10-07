import React, { useState } from "react";
import SupAssetCard from "../../../components/SupAssetCard/SupAssetCard";
import Title from "../../../components/Title/Title";
import ethDropdown from "../assets/ethereumDropdown.svg";
import bnbDropdown from "../assets/bnbDropdown.svg";
import avaDropdown from "../assets/avaDropdown.svg";
import dropdownIndicator from "../assets/dropdownIndicator.svg";

import Spiral from "../../../assets/DypAssets/spiral.svg";

const SupportedAssets = () => {
  const [ethState, setEthState] = useState(true);
  const [bnbState, setBnbState] = useState(false);
  const [avaxState, setAvaxState] = useState(false);
  const types = ["Stake", "Yield", "Buyback"];
  const [activeType, setActiveType] = useState(types[0]);

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
      <div className="supportedAssets-wrapper px-4">
        <div className="col-12 col-lg-5 mb-5 mb-lg-0">
          <Title top="Supported Assets" />
          <p>We support the most popular coins on three different chains</p>
        </div>

        <div className="d-flex flex-column gap-4">
            <div className="types-wrapper px-2">
              <div class="dropdown">
                <p className="mb-0 select-chain" style={{color: ethState === true ? '#566FCE' : bnbState === true ? '#D5A404' : '#E84142'}}>
                  Select Chain
                </p>
                <div
                  class="coins d-flex justify-content-around align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{borderColor: ethState === true ? '#566FCE' : bnbState === true ? '#D5A404' : '#E84142'}}
                >
                  {ethState === true ? (
                    <div
                      className="d-flex flex-row align-items-center justify-content-start gap-2"
                      style={{ cursor: "pointer", color: '#566FCE', fontSize: 12 }}
                    >
                      <img src={ethDropdown}  alt="" />
                      Ethereum
                    </div>
                  ) : bnbState === true ? (
                    <div
                      className="d-flex flex-row align-items-center justify-content-start gap-2"
                      style={{ cursor: "pointer", color: '#D5A404', fontSize: 12 }}
                    >
                      <img src={bnbDropdown}  alt="" />
                      BNB Chain
                    </div>
                  ) : (
                    <div
                      className="d-flex flex-row align-items-center justify-content-start gap-2"
                      style={{ cursor: "pointer", color: '#E84142', fontSize: 12 }}
                    >
                      <img src={avaDropdown}  alt="" />
                      Avalanche
                    </div>
                  )}
                  <img src={dropdownIndicator}  alt="" />
                </div>
                <ul class="dropdown-menu coin-menu p-1">
                  <li
                    className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                    onClick={() => handleEthPool()}
                  >
                    <img src={ethDropdown}  alt="" /> Ethereum
                  </li>
                  <li
                    className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                    onClick={() => handleBnbPool()}
                  >
                    <img src={bnbDropdown}  alt="" /> BNB Chain
                  </li>
                  <li
                    className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                    onClick={() => handleAvaxPool()}
                  >
                    <img src={avaDropdown}  alt="" /> Avalanche
                  </li>
                </ul>
              </div>
              <div className="type-wrapper d-flex flex-row gap-5 justify-content-center align-items-center">
                <p
                  className={`${activeType === "Stake" && "active"}`}
                  onClick={() => setActiveType(types[0])}
                >
                  Stake
                </p>
                <p
                  className={`${activeType === "Yield" && "active"}`}
                  onClick={() => setActiveType(types[1])}
                >
                  Yield
                </p>
                <p
                  className={`${activeType === "Buyback" && "active"}`}
                  onClick={() => setActiveType(types[2])}
                >
                  Buyback
                </p>
              </div>
            </div>
          <div
            className="row gap-4 px-4 position-relative justify-content-center justify-content-lg-between justify-content-xl-between"
            style={{ paddingBottom: "4rem", zIndex: 1 }}
          >
            {/* {windowSize.width < 786 ? (
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
            ) : null} */}
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
            <img className="spiral2" src={Spiral} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedAssets;
