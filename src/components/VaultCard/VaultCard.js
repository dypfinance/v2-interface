import React from "react";


const VaultCards = ({ pool, apr, link, top_tick, icon }) => {
  return (
    <div className={`vaultWrapper bg-white ${top_tick ? "top-tick" : ""}`}>
      <div className="purplediv"></div>
      <div className="d-flex flex-column gap-3">
        <div className="row justify-content-between gap-2 m-0 align-items-center">
          <div className="row gap-1 align-items-center">
            <img src={`https://cdn.worldofdypians.com/dypius/${icon}`} alt="pool" className="pl-0"/>
            <span className="poolTitle p-0">{pool}</span>
          </div>
          <span className="aprTitle p-0">
            {apr}%
            <span className="aprText ml-2">APR</span>
          </span>
        </div>
        <div className="row justify-content-between gap-2 m-0 align-items-center">
          <div className="d-flex flex-column gap-1 pl-0">
            <span className="locktime-subtitle">Lock Time</span>
            <span className="lock-title">No Lock</span>
          </div>
          <a
            className="btn filled-btn d-flex align-items-center"
            href="https://app.dypius.com/earn"
            target="_blank"
            rel="noreferrer"
          >
            Supply <img src={"https://cdn.worldofdypians.com/dypius/right-arrow.svg"} alt="" className="ml-3"  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VaultCards;
