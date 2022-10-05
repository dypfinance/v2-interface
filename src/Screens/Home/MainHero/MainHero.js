import React, { useState } from "react";
import ChainlinkData from "../ChainlinkData/ChainlinkData";
import DypSystem from "../../../components/DypSystem/DypSystem";
import CometBg from "../../../components/CometBg/CometBg";

const MainHero = () => {
  const [showDesc, setShowDesc] = useState("");


  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <div className="container-fluid main-hero">
        <CometBg />
        <div className="container-lg">
          <div className="heading row">
            <div className="col-12 col-lg-5 d-flex justify-content-center flex-column text-white ml-lg-4 pt-5">
              <div>
                <div>
                  <h1>Welcome</h1>
                  <h1>to the future</h1>
                </div>
                <p className="text-white">
                Dypius is a powerful decentralized ecosystem that faces the future. A new era with special focus on scalability, security, and global adoption. Powered by a next-gen infrastructure through our strong foundation, and much more! 
                </p>
                <button type="button" className="btn outline-btn">
                  Explore
                </button>
              </div>
              <div className="flex-column h-25 justify-content-end d-none">
                {showDesc === "first" ? (
                  <p className="">
                  Governance
                  DYP holders can vote on whether to add more pools, burn tokens, allocate DYP toward grants, strategic partnerships, and different initiatives. 
                  </p>
                ) : showDesc === "sec" ? (
                  <p className="">
                   Governance
                    DYP holders can vote on whether to add more pools, burn tokens, allocate DYP toward grants, strategic partnerships, and different initiatives. 
                  </p>
                ) : showDesc === "third" ? (
                  <p className="">
                    Governance
                    DYP holders can vote on whether to add more pools, burn tokens, allocate DYP toward grants, strategic partnerships, and different initiatives. 
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center flex-column text-white ml-4">
              <DypSystem
                onShowFirstDesc={() => {
                  setShowDesc("first");
                }}
                onShowSecondDesc={() => {
                  setShowDesc("sec");
                }}
                onShowThirdDesc={() => {
                  setShowDesc("third");
                }}
                onShowFourthDesc={() => {
                  setShowDesc("four");
                }}
                onShowFifthDesc={() => {
                  setShowDesc("five");
                }}
                onShowSixthDesc={() => {
                  setShowDesc("six");
                }}
                onShowSeventhDesc={() => {
                  setShowDesc("seven");
                }}
                onRemoveDesc={() => {
                  setShowDesc("");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ChainlinkData />
    </div>
  );
};

export default MainHero;
