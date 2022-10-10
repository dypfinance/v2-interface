import React, { useState } from "react";
import "./_roadmap.scss";
import filledLeft from "../assets/filledLeft.svg";
import emptyRight from "../assets/emptyRight.svg";
import selectedRoadmap from "../assets/selectedRoadmap.svg";
import uncompletedIcon from "../assets/uncompletedIcon.svg";
import RoadmapCard from "../../../components/RoadmapCard/RoadmapCard";
import Slider from "react-slick";
import { useRef } from "react";

const Roadmap = () => {
  const roadmap2020 = [
    {
      date: "2020 Q3",
      name: [
        "Creation of DeFi Yield Protocol",
        "DeFi Yield Protocol Documentation Release",
        "Building DYP ERC-20 Token Smart Contract",
        "DeFi Yield Protocol Community Marketing",
      ],
    },
    {
      date: "2020 Q4",
      name: [
        "Token Crowdsale",
        "Uniswap Listing",
        "Liquidity Lock",
        "Building Smart Contract for Uniswap LP",
        "Smart Contract Security Audit",
        "Launch Yield Farming Pools on Ethereum",
        "Development of New Smart Contracts",
        "Launch Governance",
        "Launch Referral",
      ],
    },
  ];

  const roadmap2021 = [
    {
      date: "2021 Q1",
      name: [
        "Launch Stake V1 on Ethereum",
        "Launch Yield Farming on Binance Smart Chain",
        "Launch DYP Vault V1 on Ethereum",
        "Building DYP Tools V1",
        "Building Bridge for Binance Smart Chain",
        "Partnerships and Integrations",
        "DeFi Yield Protocol Dapps Development",
      ],
    },
    {
      date: "2021 Q2",
      name: [
        "Release New UI Design for Main Website and Dapps",
        "Launch NFT Dapp V1 on Ethereum",
        "Launch Yield Farming on Avalanche Chain",
        "Bridge for Binance Smart Chain and Avalanche",
        "Launch DYP Tools V1 on Ethereum",
        "Launch Buyback Pools",
        "Integrating Chainlink Price Feeds",
        "Building DYP Launchpad with DYP Tools Safety Features Integrated",
      ],
    },
    {
      date: "2021 Q3",
      name: [
        "Launch DYP Tools V1 on Avalanche Chain",
        "Integration with Pangolin DEX, Coin98 Wallet, and Kyber Network",
        "Integration for Wallet Connect",
        "Building New Smart Contract for Farm, Stake, Buyback, and Governance",
        "Launch New Smart Contract for Farm, Stake, Buyback, and Governance",
        "Launch iDYP Token as part of the New Smart Contracts",
      ],
    },
    {
      date: "2021 Q4",
      name: [
        "Launch DYP Launchpad with DYP Tools Safety Features integrated",
        "Building New UI Design for Dapps",
        "Building New UI Design for Main Website",
        "Building New Smart Contract for DYP Vault",
        "Integration with Crypto.com RSS News Feed",
      ],
    },
  ];

  const roadmap2022 = [
    {
      date: "2022 Q1",
      name: [
        "Launch Cats and Watches Society NFT",
        "Launch New Smart Contract for DYP Vault",
        "Building CAWS Adventures 2D Game",
        "Building CAWS Staking Smart Contract",
        "Building New Smart Contract for DYP Staking",
      ],
    },
    {
      date: "2022 Q2",
      name: [
        "Launch New Smart Contract for DYP Staking",
        "Launch Cats and Watches Society Staking Pool",
        "Launch New UI Design for Main Website",
        "Launch New UI Design for Dapps",
        "Launch CAWS Adventures 2D Game",
        "Play to Earn NFT Concept becomes active for CAWS Holders",
      ],
    },
  ];

  const [roadmap, setRoadmap] = useState(roadmap2022);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: roadmap.length - 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <div className="container-lg roadmap-wrapper overflow-hidden" id="roadmap">
      <div className="row flex-column gap-1 p-5 roadmap-title">
        <h1 className="text-white text-center text-lg-start">Dypius roadmap</h1>
        <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-center">
          <p>Our journey to success</p>
          <div className="d-flex flex-row gap-4">
            <div className="years-wrapper d-flex flex-row px-2 gap-5 justify-content-center align-items-center">
              <p className={`${JSON.stringify(roadmap) === JSON.stringify(roadmap2020) && 'selected-year'}`} onClick={() => setRoadmap(roadmap2020)}>2020</p>
              <p className={`${JSON.stringify(roadmap) === JSON.stringify(roadmap2021) && 'selected-year'}`} onClick={() => setRoadmap(roadmap2021)}>2021</p>
              <p className={`${JSON.stringify(roadmap) === JSON.stringify(roadmap2022) && 'selected-year'}`} onClick={() => setRoadmap(roadmap2022)}>2022</p>
            </div>
            <div
              className={`left-button d-flex justify-content-center align-items-center ${JSON.stringify(roadmap) === JSON.stringify(roadmap2021) && 'enabled'}`}
              onClick={previous}
            >
              <img src={filledLeft} alt="left arrow" className="p-2" />
            </div>
            <div
              className={`right-button d-flex justify-content-center align-items-center ${JSON.stringify(roadmap) === JSON.stringify(roadmap2021) && 'enabled'}`}
              onClick={next}
            >
              <img src={emptyRight} alt="rightArrow" className="p-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly position-relative carousel-wrapper">
        <hr />
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {roadmap.map((item, index) => (
            <RoadmapCard key={index} data={item} />
          ))}
          {JSON.stringify(roadmap) === JSON.stringify(roadmap2022) && (
            <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
              <div className="date-card selected d-flex flex-column align-items-center">
                <img src={selectedRoadmap} alt="" />
                <h2 style={{ color: "#EFF0F6" }}>2022 Q3/Q4</h2>
                <div className="outer-circle d-flex justify-content-center align-items-center">
                  <div className="inner-circle"></div>
                </div>
              </div>
              <div className="roadmap-items highlight d-flex flex-column gap-3 p-4">
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Metaverse Research and Launch of Different Products</p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Metaverse Begins for the CAWS</p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Rebranding Process</p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Building Extra Features for DYP Tools</p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>
                    Incorporation of a Legal Entity for upcoming Regulation For
                    Decentralized Finance
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Expanding our Products to other Chains</p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Launch App for iOS and Android</p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Launch Multi-Chain DEX</p>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img src={uncompletedIcon} alt="" />
                  <p>Further Extension and Project Growth in Different Areas</p>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Roadmap;
