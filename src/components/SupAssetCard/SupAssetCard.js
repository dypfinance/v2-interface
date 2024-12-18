import React, { useEffect, useState } from "react";

import rightArrow from "../../assets/right-arrow.svg";



const SupAssetCard = ({
  pool,
  apr,
  link,
  tvl,
  lockTime,
  chain,
  listType,
  chainType,
  logo,
  commingSoon,
}) => {
  const ethCoins = ["ethereum", "wbtc", "usdc", "usdt"];
  const bscCoins = [
    "bsc",
    "btcb",
    "ethereum",
    "busd",
    "pancakeswap",
    "idypius",
  ];
  const avaxCoins = [
    "avax",
    "ethereum",
    "wbtc",
    "usdt",
    "usdc",
    "dai",
    "idypius",
    "pangolinSupport",
    "benqi",
    "xava",
    "link",
  ];

  const wodcawscoins = ["wod.png", "caws.svg"];

  const [coins, setCoins] = useState(ethCoins);

  useEffect(() => {
    if (chainType === "eth") {
      setCoins(ethCoins);
    } else if (chainType === "bnb") {
      setCoins(bscCoins);
    } else {
      setCoins(avaxCoins);
    }
  }, [chainType]);

  return (
    <div className={`vaultWrapper bg-white ${chain}`}>
      <div className="purplediv"></div>
      <div className="d-flex flex-column gap-3">
        <div className="row justify-content-between gap-2 m-0 align-items-center">
          {listType !== "Stake" ? (
            <div className="coins-container px-0">
              {coins.slice(0, 5).map((coin) => (
                <img
                  src={`https://cdn.worldofdypians.com/dypius/${coin}.svg`}
                  className="list-coin"
                  alt=""
                />
              ))}
            </div>
          ) : (
            <div
              className={`row ${
                pool !== "WoD + CAWS" && "gap-2"
              } align-items-center`}
            >
              {pool === "WoD + CAWS" ? (
                <>
                  <img
                    src={"https://cdn.worldofdypians.com/dypius/wod.png"}
                    className="pool-coins p-0"
                    width={40}
                    height={40}
                  />
                  <img
                    src={"https://cdn.worldofdypians.com/dypius/caws.svg"}
                    className="pool-coins p-0"
                    width={40}
                    height={40}
                  />
                </>
              ) : (
                <img
                  src={
                    pool === "CAWS"
                      ? "https://cdn.worldofdypians.com/dypius/caws.svg"
                      : pool === "iDYP"
                      ? "https://cdn.worldofdypians.com/dypius/iDYP.svg"
                      : pool === "WoD"
                      ? "https://cdn.worldofdypians.com/dypius/wod.png"
                      : pool === 'AVAX'
                      ? "https://cdn.worldofdypians.com/dypius/avax.svg"
                      : pool === 'BNB'
                      ? "https://cdn.worldofdypians.com/dypius/bsc.svg"
                      : "https://cdn.worldofdypians.com/dypius/DYP.svg"
                  }
                  alt="eth_pool"
                  width={40}
                  height={40}
                  className="p-0"
                />
              )}
              <span className="poolTitle p-0">{pool}</span>
            </div>
          )}
          <span className="aprTitle p-0">
            {apr}
            <span className="aprText ml-2">APR</span>
          </span>
        </div>
        <div className="row justify-content-between gap-2 m-0">
          <div className="d-flex flex-column gap-1 pl-0">
            <span className="locktime-subtitle">Total Value Locked</span>
            <span className="lock-title" style={{ fontWeight: 500 }}>
              {tvl}
            </span>
          </div>
          <div className="d-flex flex-column gap-1 pr-0">
            <span className="locktime-subtitle">Lock Time</span>
            <span className="lock-title">{lockTime}</span>
          </div>
        </div>
        <a
          className="btn filled-btn d-flex align-items-center justify-content-center"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {commingSoon ? "Coming Soon" : "Deposit now"}
          {!commingSoon && <img src={rightArrow} alt="" className="ml-3" />}
        </a>
      </div>
    </div>
  );
};

export default SupAssetCard;
