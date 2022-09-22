import React from "react";
import ChainlinkData from "../ChainlinkData/ChainlinkData";
import DypSystem from "../../../components/DypSystem/DypSystem";

const MainHero = () => {
  return (
    <div className="container-fluid">
    <div className="container-fluid main-hero">
      <div className="container-lg">
    <div className="heading row">
      <div className="col-5 d-flex justify-content-center flex-column text-white ml-4">
        <div>
          <h1>DYP Lorem</h1>
          <h1>ipsum dolor sit amet</h1>
        </div>
        <p className="text-white">
          The Defi Yield Protocol Referral Program is our way of thanking
          and rewarding you for being an active member of the community and
          for sharing and promoting our products.
        </p>
        <button type="button" className="btn outline-btn">
          Explore More
        </button>
      </div>
      <div className="col-5 d-flex justify-content-center flex-column text-white ml-4">
        <DypSystem/>
      </div>
    </div>
    </div>
  </div>
  <ChainlinkData/>
  </div>
  );
};

export default MainHero;