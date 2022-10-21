import React from "react";
import WhyDypCard from "../../../components/DypPage/WhyDypCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import purpleBg from '../assets/purpleBackground.svg'
import "./_whydypius.scss";
import sphere from '../../../assets/newsSphere.png'

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
        icon: 'uniqueSolutions'
    },
    {
      title: "Adaptability",
      description:
        "Dypius prides itself in its ability to quickly adapt to the new and emerging market trends. Dypius flexibility and expertise allows for pioneering in the market space in a quick and unparalleled innovative way.",
        icon: 'adaptability'
    },
    {
      title: "Extended product catalogue",
      description:
        "Dypius offers a large diversity of products on the platform that generates value to users like Staking, Farming, Vault, Buyback, CAWS NFT, DYP Governance and much more.",
        icon: 'extendedProduct'
    },
    {
      title: "Market consistency",
      description:
        "Dypius has a very well-known, trusted, and stable history in the market which is reflected on its outstanding statistics and users feedback.",
        icon: 'marketConsistency'
    },
    {
      title: "Trusted partner",
      description:
        "Dypius is proud of its growing list of trusted and secure partners and all smart contracts audited and monitored 24/7 by the best companies in the business.",
        icon: 'trustedPartner'
    },
    {
      title: "Education and protection",
      description:
        "Dypius helps, educate, and protect every user by giving them the right information, data analytics, and new trends through our unique solutions safety measures.",
        icon: 'educationProtection'
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
                  loading="lazy"
                />
                <div className="orange-card text-white p-3 position-relative">
                  <img
                    className="divider"
                    src={require(`../assets/orangeDivider.svg`).default}
                    alt=""
                    loading="lazy"
                  />
                  <div className="child-1 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h5 style={{fontSize: '32px', fontWeight: '275'}}>42</h5>
                    <p style={{fontSize: '12px', fontWeight: '400'}}>Active pools</p>
                  </div>
                  <div className="child-2 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h5 style={{fontSize: '32px', fontWeight: '275'}}>12</h5>
                    <p style={{fontSize: '12px', fontWeight: '400'}}>DYP Products</p>
                  </div>
                  <div className="child-3 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h5 style={{fontSize: '32px', fontWeight: '275'}}>70%</h5>
                    <p style={{fontSize: '12px', fontWeight: '400'}}>DYP Locked</p>
                  </div>
                  <div className="child-4 d-flex flex-column justify-content-start justify-content-center mx-auto">
                    <h5 style={{fontSize: '32px', fontWeight: '275'}}>5M+</h5>
                    <p style={{fontSize: '12px', fontWeight: '400'}}>DYP Burned</p>
                  </div>
                </div>
                
              </div>
             <div className="position-relative">
              <img src={sphere} alt="" className="why-sphere" loading="lazy"/>
             <img src={purpleBg} alt="" className="purple-background" loading="lazy"/>
             <div className="purple-card position text-white position-relative p-3">
                <div className="d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h5 style={{fontWeight: '275', fontSize: '32px'}}>$42B+</h5>
                    <p className="mb-0" style={{fontSize: '12px', fontWeight: '400'}}>All time volume</p>
                  </div>
                <div className="d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h5 style={{fontWeight: '275', fontSize: '32px'}}>$43M+</h5>
                    <p className="mb-0" style={{fontSize: '12px', fontWeight: '400'}}>All time paid</p>
                  </div>
                <div className="d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h5 style={{fontWeight: '275', fontSize: '32px'}}>2.5K+</h5>
                    <p className="mb-0" style={{fontSize: '12px', fontWeight: '400'}}>Liquidity Providers</p>
                  </div>
                </div>
             </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 card-wrapper d-grid ">
            <img
              className="ring"
              loading="lazy"
              src={require(`../../../assets/tokenCircle.png`)}
            />
            {windowSize.width <= 786 ? (
              <>
                {cards.slice(0, 3).map((card, index) => (
                  <WhyDypCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                  />
                ))}
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

