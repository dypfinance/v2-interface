import React, { useEffect, useState } from "react";
import DypPool from "../../assets/DypAssets/dypPool.svg";
import rightArrow from "../../assets/right-arrow.svg";

const SupAssetCard = ({ pool, apr, link, tvl, lockTime, chain, listType, chainType }) => {

  const ethCoins = ["ethereum", "wbtc", "usdc", "usdt"];
  const bscCoins = ["bsc", "btcb", "ethereum", "busd", "pancakeswap", "idypius" ]
  const avaxCoins = ["avax", "ethereum", "wbtc", "usdt", "usdc", "dai", "idypius", "pangolin", "benqi", "xava", "link"]

  const [coins, setCoins] = useState(ethCoins)
  

  useEffect(() => {
    if(chainType === "eth"){
      setCoins(ethCoins)
    }else if(chainType === "bnb"){
      setCoins(bscCoins)
    }else{
      setCoins(avaxCoins)
    }
  }, [chainType])
  


  return (
    <div className={`vaultWrapper bg-white ${chain}`}>
      <div className="purplediv"></div>
      <div className="d-flex flex-column gap-3">
        <div className="row justify-content-between gap-2 m-0 align-items-center">
          {listType !== "Stake" ?
          <div className="coins-container px-0">
            {coins.slice(0,5).map((coin) => (
            <img src={require(`./assets/${coin}.svg`)} className="list-coin" alt="" />
          ))}
          </div>
          :
          <div className="row gap-1 align-items-center">
          <img src={DypPool} alt="eth_pool" className="pl-0"  />
          <span className="poolTitle p-0">{pool}</span>
        </div>  
        }
          <span className="aprTitle p-0">
            {apr}
            <span className="aprText ml-2">APR</span>
          </span>
        </div>
        <div className="row justify-content-between gap-2 m-0">
          <div className="d-flex flex-column gap-1 pl-0">
            <span className="locktime-subtitle">Total Value Locked</span>
            <span className="lock-title" style={{fontWeight: 500}}>{tvl}</span>
          </div>
          <div className="d-flex flex-column gap-1 pr-0">
            <span className="locktime-subtitle">Lock Time</span>
            <span className="lock-title">{lockTime}</span>
          </div>
        </div>
        <a
          className="btn filled-btn d-flex align-items-center justify-content-center"
          href='https://betatools.dyp.finance/earn'
          target="_blank"
          rel="noreferrer"
        >
          Deposit now <img src={rightArrow} alt="" className="ml-3"  />
        </a>
      </div>
    </div>
  );
};

export default SupAssetCard;
