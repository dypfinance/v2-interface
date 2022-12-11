import React, { useEffect, useState } from "react";
import SupAssetCard from "../../../components/SupAssetCard/SupAssetCard";
import Title from "../../../components/Title/Title";
import ethDropdown from "../assets/ethereumDropdown.svg";
import bnbDropdown from "../assets/bnbDropdown.svg";
import avaDropdown from "../assets/avaDropdown.svg";
import dropdownIndicator from "../assets/dropdownIndicator.svg";
import Spiral from "../../../assets/DypAssets/spiral.png";
import rightArrow from "../../../assets/filledArrow.svg";
import axios from "axios";
import getFormattedNumber from '../../../hooks/getFormattedNumber'

const SupportedAssets = () => {

  const stake = [
    {
        apy: '1.1',
        tvl_usd: '43832.30',
        lockTime: 'No lock',
        pool: 'DYP'
    },
    {
        apy: '1.1',
        tvl_usd: '43832.30',
        lockTime: 'No lock',
        pool: 'DYP'
    },
    {
        apy: '1.1',
        tvl_usd: '43832.30',
        lockTime: 'No lock',
        pool: 'DYP'
    },
  ]
  const buyback = [
    {
        apy: '5.6',
        tvl_usd: '43832.30',
        lockTime: 'No lock',
        pool: 'DYP'
    },
    {
        apy: '5.6',
        tvl_usd: '43832.30',
        lockTime: 'No lock',
        pool: 'DYP'
    },
    {
        apy: '5.6',
        tvl_usd: '43832.30',
        lockTime: 'No lock',
        pool: 'DYP'
    },
  ]

  const [ethState, setEthState] = useState(true);
  const [bnbState, setBnbState] = useState(false);
  const [avaxState, setAvaxState] = useState(false);
  const [farmingItem, setFarmingItem] = useState([])
  const [cards, setCards] = useState(stake)
  const types = ["Stake", "Yield", "Buyback"];
  const [activeType, setActiveType] = useState(types[0]);
  var farming = []

 


  const handleEthPool = async() => {
    setAvaxState(false);
    setBnbState(false);
    setEthState(true);

  };

  const handleBnbPool = async() => {
    setAvaxState(false);
    setBnbState(true);
    setEthState(false);
  };

  const handleAvaxPool = async() => {
    setAvaxState(true);
    setBnbState(false);
    setEthState(false);
  };


  const fetchEthFarming = async() => {
    await axios
    .get("https://api.dyp.finance/api/the_graph_eth_v2")
    .then((res) => {
      let temparray = Object.entries(res.data.the_graph_eth_v2.lp_data);
      // let farming = [];
      temparray.map((item) => {
        farming.push(item[1]);
      });
      setFarmingItem(farming)
    })
    .catch((err) => console.error(err));
    
  }

  const fetchBscFarming = async() => {
  
    await axios
    .get("https://api.dyp.finance/api/the_graph_bsc_v2")
    .then((res) => {
      let temparray = Object.entries(res.data.the_graph_bsc_v2.lp_data);
      // let farming = [];
      temparray.map((item) => {
        farming.push(item[1]);
      });
      setFarmingItem(farming)
    })
    .catch((err) => console.error(err));
  }


    const fetchAvaxFarming = async() => {
      await axios
      .get("https://api.dyp.finance/api/the_graph_avax_v2")
      .then((res) => {
        let temparray = Object.entries(res.data.the_graph_avax_v2.lp_data);
        // let farming = [];
        temparray.map((item) => {
          farming.push(item[1]);
        });
        setFarmingItem(farming)
      })
      .catch((err) => console.error(err));
    }


    const fetchEthStaking = async () => {
      await axios
        .get(`https://api.dyp.finance/api/get_staking_info_eth`)
        .then((res) => {
          const dypIdyp = res.data.stakingInfoDYPEth.concat(
            res.data.stakingInfoiDYPEth
          );

          const cleanCards = dypIdyp.filter((item) => {
            return item.expired !== "Yes"
          })

          const sortedAprs = cleanCards.sort(function(a, b){return b.tvl_usd - a.tvl_usd}) 
          console.log(sortedAprs);
          const finalEthCards = res.data.stakingInfoCAWS.concat(sortedAprs.slice(0,2))
          setCards(finalEthCards);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const fetchBnbStaking = async () => {
      await axios
        .get(`https://api.dyp.finance/api/get_staking_info_bnb`)
        .then((res) => {
          const dypIdypBnb = res.data.stakingInfoDYPBnb.concat(
            res.data.stakingInfoiDYPBnb
          );
          const cleanCards = dypIdypBnb.filter((item) => {
            return item.expired !== "Yes"
          })

          const sortedAprs = cleanCards.sort(function(a, b){return b.tvl_usd - a.tvl_usd}) 
          setCards(sortedAprs);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const fetchAvaxStaking = async () => {
      await axios
        .get(`https://api.dyp.finance/api/get_staking_info_avax`)
        .then((res) => {
          const dypIdypAvax = res.data.stakingInfoDYPAvax.concat(
            res.data.stakingInfoiDYPAvax
          );
          const cleanCards = dypIdypAvax.filter((item) => {
            return item.expired !== "Yes"
          })
          const sortedAprs = cleanCards.sort(function(a, b){return b.tvl_usd - a.tvl_usd}) 
          setCards(sortedAprs);
        })
        .catch((err) => {
          console.log(err);
        });
    };



  useEffect(() => {
    if(ethState){
      fetchEthStaking();
    }else if(bnbState){
      fetchBnbStaking();
    }else if(avaxState){
      fetchAvaxStaking();
    }

    // if(activeType === 'Stake'){
    //   setCards(stake)
    // }else if(activeType === 'Yield'){
    //   setCards(farming)
    // }else if(activeType === 'Buyback'){
    //   setCards(buyback)
    // }

  }, [ethState, bnbState, avaxState, activeType])
  

  return (
    <div className="container-lg supportedAssets-wrapper">
      <div className="px-4">
        <div className="col-12 col-lg-6 mb-5 px-0 px-lg-auto">
          <Title top="Supported" bottom={"Assets"} align={"d-flex gap-2 justify-content-center justify-content-lg-start"} />
          <p style={{ color: "rgba(30, 32, 41, 0.6)" }} className='supported-description'>
          We support multiple tokens on the Ethereum, BNB, and Avalanche chains
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
                    <img src={ethDropdown} alt=""  />
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
                    <img src={bnbDropdown} alt=""  />
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
                    <img src={avaDropdown} alt=""  />
                    Avalanche
                  </div>
                )}
                <img src={dropdownIndicator} alt=""  />
              </div>
              <ul className="dropdown-menu coin-menu p-1">
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  onClick={() => handleEthPool()}
                  style={{ color: "#566FCE" }}
                >
                  <img src={ethDropdown} alt=""  /> Ethereum
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  onClick={() => handleBnbPool()}
                  style={{ color: "#D5A404" }}
                >
                  <img src={bnbDropdown} alt=""  /> BNB Chain
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  onClick={() => handleAvaxPool()}
                  style={{ color: "#E84142" }}
                >
                  <img src={avaDropdown} alt=""  /> Avalanche
                </li>
              </ul>
            </div>
            {/* <div
              className="type-wrapper d-flex flex-row justify-content-center align-items-center"
              style={{ gap: 8 }}
            >
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
            </div> */}
          </div>
          <div
            className="row gap-4 px-0 px-lg-4 position-relative justify-content-center justify-content-lg-between justify-content-xl-between assets-container"
            style={{ paddingBottom: "4rem", zIndex: 1 }}
          >
            {cards.slice(0,3).map((card, index) => (
                   <SupAssetCard
                   key={index}
                   pool={card.pair_name}
                   apr={card.apy_percent + "%"}
                   logo={card.pair_name && card.pair_name}
                   tvl={"$" + getFormattedNumber(card.tvl_usd)}
                   lockTime={card.lock_time && card.lock_time}
                   totalNfts={card.total_nfts_locked && card.total_nfts_locked}
                   chain={
                     `supported-assets-card ${ethState === true ? "eth" : bnbState === true ? "bnb" : "avax"}`
                   }
                   listType ={activeType}
                  chainType={ethState === true ? "eth" : bnbState === true ? "bnb" : "avax"}
                 />
            ))}
            {/* <img className="spiral2" src={Spiral} alt="" /> */}
            <a
            href='https://betatools.dyp.finance/earn' target={'_blank'} rel='noreferrer'
              className="outline-btn position-absolute d-flex align-items-center viewmorebtn"
              style={{ bottom: "-19px", width: 'fit-content'}}
            >
              View more <img src={rightArrow} alt="" className="ml-3"  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedAssets;
