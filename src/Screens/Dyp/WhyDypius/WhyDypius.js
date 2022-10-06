import React, { useEffect, useState } from "react";
import WhyDypCard from "../../../components/DypPage/WhyDypCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import Slider from "react-slick";
import "./_whydypius.scss";

const WhyDypius = () => {
  const windowSize = useWindowSize();

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

  const cards = [
    {
      title: "Unique solutions",
      description:
        "Dypius offers unique solutions in the DeFi space like Anti-Manipulation, so that users can benefit from even on simpliest daily operations.",
    },
    {
      title: "Adaptability",
      description:
        "Dypius prides itself in its ability to quickly adapt to the new and emerging market trends. Dypius flexibility and expertise allow for pioneering in the DeFi space in a quick and unparalleled innovative way.",
    },
    {
      title: "Extended product catalogue",
      description:
        "Dypius offers a large diversity of products on the platform that generates value to users like Farming, Staking, Vault, Buyback, CAWS NFT, DYP Governance and much more. ",
    },
    {
      title: "Market consistency",
      description:
        "Dypius has a very well-known, trusted, and stable history in the DeFi market which is reflected on its outstanding statistics and users feedback.",
    },
    {
      title: "Trusted partner",
      description:
        "Dypius is proud of its growing list of trusted and secure partners and all smart contracts audited and monitored 24/7 by the best companies in the business.",
    },
    {
      title: "Education and protection",
      description:
        "Dypius help, educate, and protect every user by giving them the right information, data analytics, and new trends through our unique solutions safety measures.",
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column justify-content-center why-dypius mt-n5">
      <div className="container-lg mt-5">
        <div className="row">
          <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column gap-5 title-container mt-5 mt-lg-0">
              <Title top="Why" bottom="Dypius?" />
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
                    <h1 className="fw-light">42</h1>
                    <p className="fw-lighter">Active pools</p>
                  </div>
                  <div className="child-2 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h1 className="fw-light">12</h1>
                    <p className="fw-lighter">DYP Products</p>
                  </div>
                  <div className="child-3 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h1 className="fw-light">70%</h1>
                    <p className="fw-lighter">DYP Locked</p>
                  </div>
                  <div className="child-4 d-flex flex-column justify-content-start justify-content-center mx-auto">
                    <h1 className="fw-light">5M+</h1>
                    <p className="fw-lighter">DYP Burned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 card-wrapper d-flex align-items-center justify-content-end flex-column flex-lg-row">
            <img
              className="ring"
              src={require(`../../../assets/tokenCircle.png`)}
            />
            {windowSize.width <= 786 ? (
              <>
                {cards.slice(0, 3).map((card, index) => (
                  <WhyDypCard
                    key={index}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </>
            ) : (
              <>
                <Slider {...settings}>
                  {cards.map((card, index) => (
                    <WhyDypCard
                      key={index}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </Slider>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDypius;

{
  /* <div className="d-flex flex-column gap-5 title-container mt-5 mt-lg-0">
               <Title top="Why" bottom="Dypius?" />
              <div className="position-relative">
              <img className='orange-border' src={require(`../assets/orangeBorder.svg`).default} alt="" />
                <div className="orange-card text-white p-3 position-relative">
                    <img className='divider' src={require(`../assets/orangeDivider.svg`).default} alt="" />
                    <div className="child-1 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                        <h1 className="fw-light">42</h1>
                        <p className='fw-lighter'>Active pools</p>
                    </div>
                    <div className="child-2 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h1 className="fw-light">12</h1>
                        <p className='fw-lighter'>DYP Products</p>
                    </div>
                    <div className="child-3 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h1 className="fw-light">70%</h1>
                        <p className='fw-lighter'>DYP Locked</p>
                    </div>
                    <div className="child-4 d-flex flex-column justify-content-start justify-content-center mx-auto">
                    <h1 className="fw-light">5M+</h1>
                        <p className='fw-lighter'>DYP Burned</p>
                    </div>
                </div>
              </div>
               </div> */
}
