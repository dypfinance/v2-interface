import React from "react";
import EthPool from "../../assets/DypAssets/ethpool.svg";
import rightArrow from "../../assets/right-arrow.svg";

const VaultCards = ({ pool, apr, link, top_tick, icon }) => {
  return (
    <div className={`vaultWrapper bg-white ${top_tick ? "top-tick" : ""}`}>
      <div className="purplediv"></div>
      <div className="d-flex flex-column gap-3">
        <div className="row justify-content-between gap-2 m-0">
          <div className="row gap-1 align-items-center">
            <img src={require(`./Tokens/${icon}`) } alt="pool" style={{width: 65, height:65}}/>
            <span className="poolTitle p-0">{pool}</span>
          </div>
          <span className="aprTitle p-0">
            {apr}
            <span className="aprText ml-2">APR</span>
          </span>
        </div>
        <div className="row justify-content-between gap-2 m-0">
          <div className="d-flex flex-column gap-1">
            <span className="locktime-subtitle">Lock Time</span>
            <span className="lock-title">No Lock</span>
          </div>
          <a
            className="btn filled-btn d-flex align-items-center"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Supply <img src={rightArrow} alt="" className="ml-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VaultCards;
