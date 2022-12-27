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
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
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
              <img src={selectedRoadmap} alt=""   />
              <h2 style={{ color: "#EFF0F6" }}>2022 Q3/Q4</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div className="accordion accordion-flush roadmap-items highlight d-flex flex-column p-4" id="roadmapAccordion">
             
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aroa-aria-controls="collapseOne">
                <img src={completedIcon} alt=""   />
                <p>Building Extra Features for DYP Tools</p>
              </div>
              <div id="collapseOne" className="accordion-collapse collapse" aria-aria-labelledby="headingOne" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item">News Section available on Ethereum, BNB Chain, and Avalanche</li>
                  <li className="accordion-list-item">Yields Section on BNB Chain</li>
                  <li className="accordion-list-item">DYP Locker on BNB Chain</li>
                  <li className="accordion-list-item">New benefits on DYP Tools Premium subscription</li>
                  <li className="accordion-list-item">Improved voting system</li>
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aroa-aria-controls="collapseTwo">
                <img src={completedIcon} alt=""   />
                <p>Rebranding Process</p>
              </div>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item">A brand-new and improved UI/UX</li>
                  <li className="accordion-list-item">Enhanced dApps on DYP Tools</li>
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aroa-aria-controls="collapseThree">
                <img src={completedIcon} alt=""   />
                <p>Metaverse Research and Launch of Different Products</p>
              </div>
              <div id="collapseThree" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item">Deep analysis on Metaverse platforms</li>
                  <li className="accordion-list-item">Dypius product integration</li>
                  <li className="accordion-list-item">Partners areas development</li>
                  <li className="accordion-list-item">Navigation, looting, and fighting systems</li>
                  <li className="accordion-list-item">Character classes, abilities, tools, and gears</li>
                  <li className="accordion-list-item">Talent tree</li>
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aroa-aria-controls="collapseFour">
                <img src={completedIcon} alt=""   />
                <p>Metaverse Begins for the CAWS</p>
              </div>
              <div id="collapseFour" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item">CAWS NFT integration on World of Dypians</li>
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aroa-aria-controls="collapseFive">
                <img src={completedIcon} alt=""   />
                <p>Further Extension and Project Growth in Different Areas</p>

              </div>
              <div id="collapseFive" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item">Multiple Partners integrations on World of Dypians</li>
               
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aroa-aria-controls="collapseSix">
                <img src={completedIcon} alt=""   />
                <p>
                  Incorporation of a Legal Entity for upcoming Regulation For
                  Decentralized Finance
                </p>

              </div>
              <div id="collapseSix" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item"><a href="https://drive.google.com/file/d/16-aemFDx8ozgerUze6uMMKmAygTNWn0c/view?usp=sharing" target={"_blank"}>DYP Finance LTD registration certificate</a></li>
            
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aroa-aria-controls="collapseSeven">
                <img src={completedIcon} alt=""   />
                <p>Expanding our Products to other Chains</p>
              </div>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item">Multichain integration on World of Dypians</li>
              
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aroa-aria-controls="collapseEight">
                <img src={completedIcon} alt=""   />
                <p>Launch App for iOS and Android</p>
              </div>
              <div id="collapseEight" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item"> App approval pending (expected approval and release time estimated on Q1 2023)</li>
                
                </ul>
              </div>
             </div>
             <div className="accordion-item">
             <div className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aroa-aria-controls="collapseNine">
                <img src={completedIcon} alt=""   />
                <p>Launch Multi-Chain DEX</p>
              </div>
              <div id="collapseNine" className="accordion-collapse collapse" aria-aria-labelledby="headingTwo" data-bs-parent="#roadmapAccordion">
                <ul className="mb-0 py-2">
                  <li className="accordion-list-item">Token Swaps with 1inch Plugin on DYP Tools</li>
                </ul>
              </div>
             </div>
             
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Roadmap;
