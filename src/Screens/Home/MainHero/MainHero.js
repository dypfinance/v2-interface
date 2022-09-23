import React, { useState } from "react";
import ChainlinkData from "../ChainlinkData/ChainlinkData";
import DypSystem from "../../../components/DypSystem/DypSystem";

const MainHero = () => {
  const [showDesc, setShowDesc] = useState("");

  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <div className="container-fluid main-hero">
        <div className="container-lg">
          <div className="heading row">
            <div className="col-5 d-flex justify-content-center flex-column text-white ml-4">
              <div>
                <div>
                  <h1>DYP Lorem</h1>
                  <h1>ipsum dolor sit amet</h1>
                </div>
                <p className="text-white">
                  The Defi Yield Protocol Referral Program is our way of
                  thanking and rewarding you for being an active member of the
                  community and for sharing and promoting our products.
                </p>
                <button type="button" className="btn outline-btn">
                  Explore More
                </button>
              </div>
              <div className="d-flex flex-column h-25 justify-content-end">
                {showDesc === "first" ? (
                  <p className="">
                    1The Defi Yield Protocol Referral Program is our way of
                    thanking and rewarding you for being an active member of the
                    community and for sharing and promoting our products.
                  </p>
                ) : showDesc === "sec" ? (
                  <p className="">
                    2The Defi Yield Protocol Referral Program is our way of
                    thanking and rewarding you for being an active member of the
                    community and for sharing and promoting our products.
                  </p>
                ) : showDesc === "third" ? (
                  <p className="">
                    3The Defi Yield Protocol Referral Program is our way of
                    thanking and rewarding you for being an active member of the
                    community and for sharing and promoting our products.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-5 d-flex justify-content-center flex-column text-white ml-4">
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
