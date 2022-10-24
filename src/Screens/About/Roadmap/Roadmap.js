import React, { useEffect, useState } from "react";
import "./_roadmap.scss";
import filledLeft from "../assets/filledLeft.svg";
import emptyRight from "../assets/emptyRight.svg";
import selectedRoadmap from "../assets/selectedRoadmap.svg";
import uncompletedIcon from "../assets/uncompletedIcon.svg";
import completedIcon from "../assets/completedOrangeIcon.svg";
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

  const roadmap = [
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

  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(6);
  const [activeSlide2, setActiveSlide2] = useState(6);

  const [activeYear, setActiveYear] = useState({
    roadmap2020: false,
    roadmap2021: false,
    roadmap2022: true,
  });

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: roadmap.length - 2,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => {
      setActiveSlide2(current);
    },

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
          initialSlide: roadmap.length,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: roadmap.length,
        },
      },
    ],
  };

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
    if (activeYear.roadmap2022 === true) {
      setActiveYear({
        roadmap2020: true,
        roadmap2021: false,
        roadmap2022: false,
      });
      slider.current.innerSlider.slickGoTo(0);
      setActiveSlide2(0);
    }

    if (activeSlide2 === 1) {
      setActiveYear({
        roadmap2020: false,
        roadmap2021: true,
        roadmap2022: false,
      });

      slider.current.innerSlider.slickGoTo(2);
    }

    if (activeSlide2 === 5) {
      setActiveYear({
        roadmap2020: false,
        roadmap2021: false,
        roadmap2022: true,
      });

      slider.current.innerSlider.slickGoTo(6);
    }
  };
  const previous = () => {
    slider.current.slickPrev();
    if (activeYear.roadmap2022 === true) {
      if (activeSlide2 < 5) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: true,
          roadmap2022: false,
        });
      }
    }
    if (activeSlide2 === 2) {
      setActiveYear({
        roadmap2020: true,
        roadmap2021: false,
        roadmap2022: false,
      });
    }

    if(activeSlide2 === 0) {
      setActiveYear({
        roadmap2020: false,
        roadmap2021: false,
        roadmap2022: true,
      });
    slider.current.innerSlider.slickGoTo(6);

    }
  };

  const goto2020 = () => {
    slider.current.innerSlider.slickGoTo(0);
    setActiveYear({
      roadmap2020: true,
      roadmap2021: false,
      roadmap2022: false,
    });
  };
  const goto2021 = () => {
    slider.current.innerSlider.slickGoTo(2);
    setActiveYear({
      roadmap2020: false,
      roadmap2021: true,
      roadmap2022: false,
    });
  };
  const goto2022 = () => {
    slider.current.innerSlider.slickGoTo(6);
    setActiveYear({
      roadmap2020: false,
      roadmap2021: false,
      roadmap2022: true,
    });
  };

  useEffect(() => {
    goto2022();
  }, []);

  return (
    <div className="container-lg roadmap-wrapper overflow-hidden" id="roadmap">
      <div className="row flex-column gap-1 p-5 roadmap-title">
        <h1 className="text-white text-center text-lg-start">Dypius roadmap</h1>
        <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-center">
          <p>Our journey to success</p>
          <div className="d-flex flex-row gap-lg-4 gap-xl-4 gap-md-4 gap-3">
            <div className="years-wrapper d-flex flex-row px-2 gap-1 justify-content-center align-items-center">
              <p
                className={`${activeYear.roadmap2020 && "selected-year"}`}
                onClick={goto2020}
              >
                2020
              </p>
              <p
                className={`${activeYear.roadmap2021 && "selected-year"}`}
                onClick={goto2021}
              >
                2021
              </p>
              <p
                className={`${activeYear.roadmap2022 && "selected-year"}`}
                onClick={goto2022}
              >
                2022
              </p>
            </div>
            <div
              className={`left-button d-flex justify-content-center align-items-center enabled`}
              onClick={previous}
            >
              <img
                src={filledLeft}
                alt="left arrow"
                className="p-4"
                loading="lazy"
              />
            </div>
            <div
              className={`right-button d-flex justify-content-center align-items-center enabled`}
              onClick={next}
            >
              <img
                src={emptyRight}
                alt="rightArrow"
                className="p-4"
                loading="lazy"
              />
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

          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img src={selectedRoadmap} alt="" loading="lazy" />
              <h2 style={{ color: "#EFF0F6" }}>2022 Q3/Q4</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div className="roadmap-items highlight d-flex flex-column gap-3 p-4">
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={completedIcon} alt="" loading="lazy" />
                <p>Metaverse Research and Launch of Different Products</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={completedIcon} alt="" loading="lazy" />
                <p>Building Extra Features for DYP Tools</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={completedIcon} alt="" loading="lazy" />
                <p>Rebranding Process</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={completedIcon} alt="" loading="lazy" />
                <p>Metaverse Begins for the CAWS</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={completedIcon} alt="" loading="lazy" />
                <p>Further Extension and Project Growth in Different Areas</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={uncompletedIcon} alt="" loading="lazy" />
                <p>
                  Incorporation of a Legal Entity for upcoming Regulation For
                  Decentralized Finance
                </p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={uncompletedIcon} alt="" loading="lazy" />
                <p>Expanding our Products to other Chains</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={uncompletedIcon} alt="" loading="lazy" />
                <p>Launch App for iOS and Android</p>
              </div>
              <div className="d-flex flex-row align-items-center gap-2">
                <img src={uncompletedIcon} alt="" loading="lazy" />
                <p>Launch Multi-Chain DEX</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Roadmap;
