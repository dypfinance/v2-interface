import React, { useEffect, useState } from "react";
import SupAssetCard from "../../../components/SupAssetCard/SupAssetCard";
import Title from "../../../components/Title/Title";




import axios from "axios";
import getFormattedNumber from "../../../hooks/getFormattedNumber";
import EmptySupAssetCard from "../../../components/SupAssetCard/EmptySupAssetCard";

const SupportedAssets = () => {
  const stake = [
    {
      apy: "1.1",
      tvl_usd: "43832.30",
      lockTime: "No lock",
      pool: "DYP",
    },
    {
      apy: "1.1",
      tvl_usd: "43832.30",
      lockTime: "No lock",
      pool: "DYP",
    },
    {
      apy: "1.1",
      tvl_usd: "43832.30",
      lockTime: "No lock",
      pool: "DYP",
    },
  ];
  const buyback = [
    {
      apy: "5.6",
      tvl_usd: "43832.30",
      lockTime: "No lock",
      pool: "DYP",
    },
    {
      apy: "5.6",
      tvl_usd: "43832.30",
      lockTime: "No lock",
      pool: "DYP",
    },
    {
      apy: "5.6",
      tvl_usd: "43832.30",
      lockTime: "No lock",
      pool: "DYP",
    },
  ];

  const [ethState, setEthState] = useState(true);
  const [bnbState, setBnbState] = useState(false);
  const [avaxState, setAvaxState] = useState(false);
  const [farmingItem, setFarmingItem] = useState([]);
  const [cards, setCards] = useState(stake);
  const types = ["Stake", "Yield", "Buyback"];
  const [activeType, setActiveType] = useState(types[0]);

  var farming = [];

  const handleEthPool = async () => {
    setAvaxState(false);
    setBnbState(false);
    setEthState(true);
  };

  const handleBnbPool = async () => {
    setAvaxState(false);
    setBnbState(true);
    setEthState(false);
  };

  const handleAvaxPool = async () => {
    setAvaxState(true);
    setBnbState(false);
    setEthState(false);
  };

  const fetchEthStaking = async () => {
    const eth_result = await axios
      .get(`https://api.dyp.finance/api/get_staking_info_eth`)
      .catch((err) => {
        console.log(err);
      });

    const eth_result2 = await axios
      .get(`https://api.dyp.finance/api/get_staking_info_eth_new`)
      .catch((err) => {
        console.log(err);
      });

    if (
      eth_result &&
      eth_result.status === 200 &&
      eth_result2 &&
      eth_result2.status === 200
    ) {
      const dypIdyp = eth_result.data.stakingInfoDYPEth.concat(
        eth_result.data.stakingInfoiDYPEth
      );

      const dypData = eth_result2.data.stakingInfoDYPEth;
      const object2 = dypData.map((item) => {
        return { ...item, tvl_usd: item.tvl_usd };
      });

      const activeEth2 = object2.filter((item) => {
        return item.expired !== "Yes";
      });

      const cleanCards = dypIdyp.filter((item) => {
        return item.expired !== "Yes";
      });
      const allActiveEth = [...cleanCards, ...activeEth2];

      const sortedAprs = allActiveEth.sort(function (a, b) {
        return b.tvl_usd - a.tvl_usd;
      });

      const cawsResult = eth_result.data.stakingInfoCAWS.find((obj) => {
        return obj.id === "0x097bB1679AC734E90907Ff4173bA966c694428Fc";
      });

      setCards([cawsResult, ...sortedAprs]);
    }
  };

  const fetchBnbStaking = async () => {
    const bnb_result = await axios
      .get(`https://api.dyp.finance/api/get_staking_info_bnb`)
      .catch((err) => {
        console.log(err);
      });

    const bnb_result2 = await axios
      .get(`https://api.dyp.finance/api/get_staking_info_bnb_new`)
      .catch((err) => {
        console.log(err);
      });

      const bnb_result3 = await axios
      .get(`https://dypiusstakingaggregator.azurewebsites.net/api/GetAggregatedPools?code=2qyv7kEpn13ZZUDkaU-f7U5YjiQLVAawRITtvj34rci0AzFuZp7JWQ%3D%3D`)
      .catch((err) => {
        console.log(err);
      });

    if (
      bnb_result &&
      bnb_result.status === 200 &&
      bnb_result2 &&
      bnb_result2.status === 200 &&
      bnb_result3 &&
      bnb_result3.status === 200
    ) {
      const dypIdypBnb = bnb_result.data.stakingInfoDYPBnb.concat(
        bnb_result.data.stakingInfoiDYPBnb
      );
      const pools = bnb_result3.data.stakingLists;
      const bnbAggregatorPools = pools.find((item)=>{return item.name.toLowerCase() === 'bnb'})
   
      const dypBnb = bnb_result2.data.stakingInfoDYPBnb;

      const object2 = dypBnb.map((item) => {
        return { ...item, tvl_usd: item.tvl_usd };
      });

      const activeBnb2 = object2.filter((item) => {
        return item.expired === "No";
      });

      const cleanCards = dypIdypBnb.filter((item) => {
        return item.expired !== "Yes";
      });

      const newPool = cleanCards.filter((item) => {
        return item.new_pool === "Yes";
      });

      const oldPool = cleanCards.filter((item) => {
        return item.new_pool !== "Yes";
      });

      const sortedAprs = oldPool.sort(function (a, b) {
        return b.tvl_usd - a.tvl_usd;
      });
      
      setCards([...sortedAprs.slice(0, 2), ...activeBnb2, bnbAggregatorPools]);
    }
  };
  const fetchAvaxStaking = async () => {
    const avax_result = await axios
      .get(`https://api.dyp.finance/api/get_staking_info_avax`)
      .catch((err) => {
        console.log(err);
      });

    const avax_result2 = await axios
      .get(`https://api.dyp.finance/api/get_staking_info_avax_new`)
      .catch((err) => {
        console.log(err);
      });

      const avax_result3 = await axios
      .get(`https://dypiusstakingaggregator.azurewebsites.net/api/GetAggregatedPools?code=2qyv7kEpn13ZZUDkaU-f7U5YjiQLVAawRITtvj34rci0AzFuZp7JWQ%3D%3D`)
      .catch((err) => {
        console.log(err);
      });

    if (
      avax_result &&
      avax_result.status === 200 &&
      avax_result2 &&
      avax_result2.status === 200
      &&
      avax_result3 &&
      avax_result3.status === 200
    ) {

      const pools = avax_result3.data.stakingLists;
      const avaxAggregatorPools = pools.find((item)=>{return item.name.toLowerCase() === 'avax'})
      const dypIdypAvax = avax_result.data.stakingInfoDYPAvax.concat(
        avax_result.data.stakingInfoiDYPAvax
      );

      const dypAvax = avax_result2.data.stakingInfoDYPAvax;
      const object2 = dypAvax.map((item) => {
        return { ...item, tvl_usd: item.tvl_usd };
      });

      const activeAvax2 = object2.filter((item) => {
        return item.expired !== "Yes";
      });

      const cleanCards = dypIdypAvax.filter((item) => {
        return item.expired !== "Yes";
      });

      const newPool = cleanCards.filter((item) => {
        return item.new_pool === "Yes";
      });

      const oldPool = cleanCards.filter((item) => {
        return item.new_pool !== "Yes";
      });

      const sortedAprs = oldPool.sort(function (a, b) {
        return b.tvl_usd - a.tvl_usd;
      });
      setCards([...sortedAprs.slice(0, 2), ...activeAvax2,avaxAggregatorPools]);
    }
  };

  useEffect(() => {
    if (ethState) {
      fetchEthStaking();
    } else if (bnbState) {
      fetchBnbStaking();
    } else if (avaxState) {
      fetchAvaxStaking();
    }

    // if(activeType === 'Stake'){
    //   setCards(stake)
    // }else if(activeType === 'Yield'){
    //   setCards(farming)
    // }else if(activeType === 'Buyback'){
    //   setCards(buyback)
    // }
  }, [ethState, bnbState, avaxState, activeType]);

  
  return (
    <div className="container-lg supportedAssets-wrapper">
      <div className="px-4">
        <div className="col-12 col-lg-6 mb-5 px-0 px-lg-auto">
          <Title
            top="Supported"
            bottom={"Assets"}
            align={
              "d-flex gap-2 justify-content-center justify-content-lg-start"
            }
          />
          <p
            style={{ color: "rgba(30, 32, 41, 0.6)" }}
            className="supported-description"
          >
            We support multiple tokens on the Ethereum, BNB, and Avalanche
            chains
          </p>
        </div>

        <div className="d-flex flex-column gap-5 position-relative">
          <div className="types-wrapper px-2">
            <Title top={"Staking"} />
            <div className="dropdown">
              <p
                className="mb-0 select-chain"
                style={{
                  color:
                    ethState === true
                      ? "#566FCE"
                      : bnbState === true
                      ? "#D5A404"
                      : "#E84142",
                }}
              >
                Select Chain
              </p>

              <div
                className="coins d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  borderColor:
                    ethState === true
                      ? "#566FCE"
                      : bnbState === true
                      ? "#D5A404"
                      : "#E84142",
                }}
              >
                {ethState === true ? (
                  <div
                    className="d-flex flex-row align-items-center justify-content-start gap-2"
                    style={{
                      cursor: "pointer",
                      color: "#566FCE",
                      fontSize: 12,
                    }}
                  >
                    <img src={"https://cdn.worldofdypians.com/dypius/ethereumDropdown.svg"} alt="" />
                    Ethereum
                  </div>
                ) : bnbState === true ? (
                  <div
                    className="d-flex flex-row align-items-center justify-content-start gap-2"
                    style={{
                      cursor: "pointer",
                      color: "#D5A404",
                      fontSize: 12,
                    }}
                  >
                    <img src={"https://cdn.worldofdypians.com/dypius/bnbDropdown.svg"} alt="" />
                    BNB Chain
                  </div>
                ) : (
                  <div
                    className="d-flex flex-row align-items-center justify-content-start gap-2"
                    style={{
                      cursor: "pointer",
                      color: "#E84142",
                      fontSize: 12,
                    }}
                  >
                    <img src={"https://cdn.worldofdypians.com/dypius/avaDropdown.svg"} alt="" />
                    Avalanche
                  </div>
                )}
                <img src={"https://cdn.worldofdypians.com/dypius/dropdownIndicator.svg"} alt="" />
              </div>
              <ul className="dropdown-menu coin-menu p-1">
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  onClick={() => handleEthPool()}
                  style={{ color: "#566FCE" }}
                >
                  <img src={"https://cdn.worldofdypians.com/dypius/ethereumDropdown.svg"} alt="" /> Ethereum
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  onClick={() => handleBnbPool()}
                  style={{ color: "#D5A404" }}
                >
                  <img src={"https://cdn.worldofdypians.com/dypius/bnbDropdown.svg"} alt="" /> BNB Chain
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  onClick={() => handleAvaxPool()}
                  style={{ color: "#E84142" }}
                >
                  <img src={"https://cdn.worldofdypians.com/dypius/avaDropdown.svg"} alt="" /> Avalanche
                </li>
              </ul>
            </div>
          </div>
          <div
            className="row gap-4 px-0 px-lg-4 position-relative justify-content-center justify-content-lg-between justify-content-xl-between assets-container"
            style={{ paddingBottom: "4rem", zIndex: 1 }}
          >
            <>
              {cards.slice(0, 3).map((card, index) => (
                <SupAssetCard
                  key={index}
                  pool={card.pair_name? card.pair_name : card.name}
                  apr={card.apy_percent ? (card.apy_percent + "%") : card.poolList ? (card.poolList[0].aprPercent + "%") : ''}
                  logo={card.pair_name ? card.pair_name : card.name}
                  tvl={"$" + (card.tvl_usd ? getFormattedNumber(card.tvl_usd) : card.poolList ? getFormattedNumber(card.poolList[0].tvl ,2) : '')}
                  lockTime={card.lock_time ? card.lock_time : card.poolList ? (card.poolList[0].lockTime + " days") : ''}
                  totalNfts={card.total_nfts_locked && card.total_nfts_locked}
                  chain={`supported-assets-card ${
                    ethState === true
                      ? "eth"
                      : bnbState === true
                      ? "bnb"
                      : "avax"
                  }`}
                  listType={activeType}
                  chainType={
                    ethState === true
                      ? "eth"
                      : bnbState === true
                      ? "bnb"
                      : "avax"
                  }
                  link={
                    card.pair_name === "CAWS"
                      ? "https://app.dypius.com/earn/nft-staking"
                      : card.name === "BNB" || card.name === 'AVAX'
                      ? "https://app.dypius.com/earn/defi-staking"
                      : "https://app.dypius.com/earn/dypius"
                  }
                />
              ))}
              {/* <SupAssetCard
                //  key={index}
                pool={"DYP"}
                apr={12.5 + "%"}
                logo={"dyp"}
                tvl={"N/A"}
                lockTime={"No Lock"}
                //  totalNfts={card.total_nfts_locked && card.total_nfts_locked}
                chain={`supported-assets-card ${
                  ethState === true ? "eth" : bnbState === true ? "bnb" : "avax"
                }`}
                listType={activeType}
                chainType={
                  ethState === true ? "eth" : bnbState === true ? "bnb" : "avax"
                }
                commingSoon={true}
              /> */}
             
            </>
       
            <a
              href="https://app.dypius.com/earn/dypius"
              target={"_blank"}
              rel="noreferrer"
              className="outline-btn position-absolute d-flex align-items-center viewmorebtn"
              style={{ bottom: "-19px", width: "fit-content" }}
            >
              View more <img src={"https://cdn.worldofdypians.com/dypius/filledArrow.svg"} alt="" className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedAssets;
