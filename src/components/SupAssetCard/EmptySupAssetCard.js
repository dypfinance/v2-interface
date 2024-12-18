import React, { useEffect, useState } from "react";

const EmptySupAssetCard = ({ pool, apr, link, tvl, lockTime, chain, listType, chainType, logo, commingSoon }) => {

  const ethCoins = ["ethereum", "wbtc", "usdc", "usdt"];
  const bscCoins = ["bsc", "btcb", "ethereum", "busd", "pancakeswap", "idypius" ]
  const avaxCoins = ["avax", "ethereum", "wbtc", "usdt", "usdc", "dai", "idypius", "pangolin", "benqi", "xava", "link"]

  const wodcawscoins = ['wod.png', 'caws.svg']

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
          {/* {listType !== "Stake" ?
          <div className="coins-container px-0">
            {coins.slice(0,5).map((coin) => (
            <img src={require(`./assets/${coin}.svg`)} className="list-coin" alt="" />
          ))}
          </div>
          :
          <div className={`row ${pool !== "WoD + CAWS" && "gap-2"} align-items-center`}>
          {pool === "WoD + CAWS" ?
          <>
          <img src={wod} className="pool-coins p-0" width={40} height={40}  />
          <img src={caws} className="pool-coins p-0" width={40} height={40}  />
          </>
          :
          <img src={pool === "CAWS" ? caws : pool === "iDYP" ? idyp : pool === "WoD" ? wod : dyp} alt="eth_pool" width={40} height={40} className="p-0"  />  
        }
        </div>  
        } */}
        <span className="poolTitle p-0">Coming Soon</span>
          {/* <span className="aprTitle p-0">
            {apr}
            <span className="aprText ml-2">APR</span>
          </span> */}
          <div className="gray-box-large"></div>
        </div>
        {/* <div className="row justify-content-between gap-2 m-0">
          <div className="d-flex flex-column gap-1 pl-0">
            <span className="locktime-subtitle">Total Value Locked</span>
            <span className="lock-title" style={{fontWeight: 500}}>{tvl}</span>
          </div>
          <div className="d-flex flex-column gap-1 pr-0">
            <span className="locktime-subtitle">Lock Time</span>
            <span className="lock-title">{lockTime}</span>
          </div>
        </div> */}
        <div className="d-flex flex-column justify-content-between gap-4 h-100">
        <div className="gray-box-large w-100"></div>
        <div className="gray-box-large w-100"></div>
        </div>
        {/* <a
          className="btn filled-btn d-flex align-items-center justify-content-center"
          href='https://app.dypius.com/earn'
          target="_blank"
          rel="noreferrer"
        >
          {commingSoon ? "Coming Soon" : "Deposit now"}
          {!commingSoon && 
          <img src={rightArrow} alt="" className="ml-3"  />
          }
        </a> */}
      </div>
    </div>
  );
};

export default EmptySupAssetCard;
