import React, { useState } from "react";
import WhyDypCard from "../../../components/DypPage/WhyDypCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import purpleBg from "../assets/purpleBackground.svg";
import "./_whydypius.scss";
import sphere from "../../../assets/newsSphere.png";
import PurpleArrowDown from "../../../assets/DypAssets/purpleArrow-down.svg";

const WhyDypius = () => {
  const windowSize = useWindowSize();
  const [whyCardSlice, setWhyCardSlice] = useState(3);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const viewMore = () => {
    setWhyCardSlice(whyCardSlice + 3);
  };

  const cards = [
    {
      title: "Unique solutions",
      description:
        "Dypius offers unique features in the DeFi space like our innovative anti-manipulation feature that protects users and their funds.",
      icon: "uniqueSolutions",
    },
    {
      title: "Adaptability",
      description:
        "Dypius possesses the expertise and flexibility to quickly adapt to new and emerging market trends.",
      icon: "adaptability",
    },
    {
      title: "Wide variety of products",
      description:
        "Dypius offers many products that generate value to our users like Staking, Farming, Vault, Buyback, NFTs, DYP Governance and more.",
      icon: "extendedProduct",
    },
    {
      title: "Commitment to Security",
      description:
        "Our smart contracts are audited and monitored by the industry's best companies 24 hours a day, 7 days a week.",
      icon: "marketConsistency",
    },
    {
      title: "Trusted partner",
      description:
        "Dypius is committed to partner  with teams that are dedicated to providing a secure and trustworthy service.",
      icon: "trustedPartner",
    },
    {
      title: "Education and protection",
      description:
        "Dypius empowers users with the information they need to make informed decisions. We provide competitive data analytics, unique safety measures, and fresh market trends.",
      icon: "educationProtection",
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column justify-content-center why-dypius mt-n5" style={{zIndex: '-1'}}>
      <div className="container-lg mt-5">
        <div className="row">
          <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column gap-5 title-container mt-5 mt-lg-0">
              <Title top="Why" bottom="Dypius?" />
              <div className="d-flex flex-column flex-md-row flex-lg-column gap-5">
                <div className="position-relative">
                  <img
                    className="orange-border"
                    src={require(`../assets/orangeBorder.svg`).default}
                    alt=""
                  />
                  <div className="orange-card text-white p-3 position-relative">
                    <img
                      className="divider"
                      src={require(`../assets/orangeDivider.svg`).default}
                      alt=""
                    />
                    <div className="child-1 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                      <h5 style={{ fontSize: "32px", fontWeight: "275" }}>
                        25
                      </h5>
                      <p style={{ fontSize: "12px", fontWeight: "400" }}>
                        Active pools
                      </p>
                    </div>
                    <div className="child-2 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                      <h5 style={{ fontSize: "32px", fontWeight: "275" }}>
                        12
                      </h5>
                      <p style={{ fontSize: "12px", fontWeight: "400" }}>
                        DYP Products
                      </p>
                    </div>
                    <div className="child-3 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                      <h5 style={{ fontSize: "32px", fontWeight: "275" }}>
                        40%
                      </h5>
                      <p style={{ fontSize: "12px", fontWeight: "400" }}>
                        DYP Locked
                      </p>
                    </div>
                    <div className="child-4 d-flex flex-column justify-content-start justify-content-center mx-auto">
                      <h5 style={{ fontSize: "32px", fontWeight: "275" }}>
                        5M+
                      </h5>
                      <p style={{ fontSize: "12px", fontWeight: "400" }}>
                        DYP Burned
                      </p>
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  {/* <img src={sphere} alt="" className="why-sphere"  /> */}
                  <img src={purpleBg} alt="" className="purple-background"  />
                  <div className="purple-card position text-white position-relative p-3">
                    <div className="d-flex flex-column justify-content-start justify-content-center mx-auto ">
                      <h5 style={{ fontWeight: "275", fontSize: "32px" }}>
                        $42B+
                      </h5>
                      <p
                        className="mb-0"
                        style={{ fontSize: "12px", fontWeight: "400" }}
                      >
                        All time volume
                      </p>
                    </div>
                    <div className="d-flex flex-column justify-content-start justify-content-center mx-auto ">
                      <h5 style={{ fontWeight: "275", fontSize: "32px" }}>
                        $43M+
                      </h5>
                      <p
                        className="mb-0"
                        style={{ fontSize: "12px", fontWeight: "400" }}
                      >
                        All time paid
                      </p>
                    </div>
                    <div className="d-flex flex-column justify-content-start justify-content-center mx-auto ">
                      <h5 style={{ fontWeight: "275", fontSize: "32px" }}>
                        25K+
                      </h5>
                      <p
                        className="mb-0"
                        style={{ fontSize: "12px", fontWeight: "400" }}
                      >
                        Token Holders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 card-wrapper d-grid ">
            {/* <img
              className="ring"
               
              src={require(`../../../assets/tokenCircle.png`)}
            /> */}
            {windowSize.width <= 786 ? (
              <>
                {cards.slice(0, whyCardSlice).map((card, index) => (
                  <WhyDypCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                  />
                ))}
                <div className={`row justify-content-center my-5  ${whyCardSlice < cards.length ? "d-flex" : "d-none"}`}>
                  <button
                    onClick={viewMore}
                    className={`btn outline-btn d-lg-none d-xl-none justify-content-center align-items-center`}
                  >
                    Load More
                    <img src={PurpleArrowDown} alt="" className="ml-2" />
                  </button>
                </div>
              </>
            ) : (
              <>
                {cards.map((card, index) => (
                  <WhyDypCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDypius;
