import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import "./_footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  
  const windowSize = useWindowSize();


    const socials = [
    {
      name: "Twitter",
      link: "https://twitter.com/dypfinance",
    },
    {
      name: "Telegram",
      link: "https://t.me/dypfinance",
    },
    {
      name: "Discord",
      link: "https://discord.gg/dypcaws",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/dyp.finance/",
    },
    {
      name: "Medium",
      link: "https://medium.com/@dypfinance",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/c/DeFiYieldProtocol/featured",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/defi-yield-protocol",
    },
    {
      name: "Github",
      link: "https://github.com/dypfinance",
    },
    {
      name: "Email",
      link: "mailto:contact@dyp.finance",
    },
  ];

  const about = [
    {
      title: "Our team",
      link: "#",
    },
    {
      title: "Our partners",
      link: "#",
    },
    {
      title: "Roadmap",
      link: "#",
    },
    {
      title: "Security",
      link: "#",
    },
    {
      title: "Tokenomics",
      link: "#",
    },
    {
      title: "Brand",
      link: "#",
    },
    {
      title: "Contact Us",
      link: "#",
    },
  ];

  const products = [
    {
      title: "Buyback",
      link: "#",
    },
    {
      title: "Vault",
      link: "#",
    },
    {
      title: "Farm",
      link: "#",
    },
    {
      title: "Stake",
      link: "#",
    },
    {
      title: "Bridge",
      link: "#",
    },
    {
      title: "iDYP Token",
      link: "#",
    },
    {
      title: "CAWS NFT",
      link: "#",
    },
    {
      title: "Buy DYP",
      link: "#",
    },
    {
      title: "Buy iDYP",
      link: "#",
    },
    {
      title: "DYP Tools",
      link: "#",
    },
    {
      title: "Governance",
      link: "#",
    },
    {
      title: "Launchpad",
      link: "#",
    },
  ];

  const announcements = [
    {
      title: "Latest anouncements",
      link: "#",
    },

    {
      title: "Latest events",
      link: "#",
    },
    {
      title: "Press",
      link: "#",
    },
  ];

  const learn = [
    {
      title: "How to buy DYP",
      link: "#",
    },
    {
      title: "How to Stake",
      link: "#",
    },
    {
      title: "How to Farm",
      link: "#",
    },
    {
      title: "How to use Buyback",
      link: "#",
    },
    {
      title: "How to use the Vault",
      link: "#",
    },
    {
      title: "How to use DYP Tools",
      link: "#",
    },
    {
      title: "How to Bridge",
      link: "#",
    },
  ];

  const year = new Date()

  const [indicators, setIndicators] = useState({
    about: false,
    products: false,
    announcements: false,
    learn: false,
  });

  const openAccordion = (type) => {
    if (type === 1) {
      setIndicators({
        about: !indicators.about,
        products: false,
        announcements: false,
        learn: false,
      });
    }
    if (type === 2) {
      setIndicators({
        about: false,
        products: !indicators.products,
        announcements: false,
        learn: false,
      });
    }
    if (type === 3) {
      setIndicators({
        about: false,
        products: false,
        announcements: !indicators.announcements,
        learn: false,
      });
    }
    if (type === 4) {
      setIndicators({
        about: false,
        products: false,
        announcements: false,
        learn: !indicators.learn,
      });
    }
  };


  return (
    <div className="container-fluid p-0 footer">
      <div className="socials container-fluid ">
        <div className="container-lg socials-container d-grid align-items-center">
        {socials.map((social, index) => (
          <div key={index} className="col-4 col-lg">
            <a
              target="_blank"
              className="text-decoration-none"
              href={social.link}
            >
              <div
                className="d-flex flex-row justify-content-start justify-content-lg-center align-items-center"
                style={{ gap: "5px" }}
              >
                <img
                  src={require(`../../assets/${social.name.toLowerCase()}.svg`)}
                  alt=""
                />
                <p className="mb-0">{social.name}</p>
              </div>
            </a>
          </div>
        ))}
        </div>
      </div>
      <div className="container-fluid px-3 px-lg-5 py-0 footer-links justify-content-center">
        <div className="container-lg d-flex justify-content-between align-items-start align-items-lg-center flex-column flex-lg-row py-2 w-100 position-relative"
          style={{ zIndex: 2 }}
        >
          <a href="#">
            <img
              src={require(`../../assets/dypiusLogo.svg`).default}
              alt=""
              width={160}
              height={90}
            />
          </a>
          <div className='marketplaces d-flex justify-content-center justify-content-lg-end gap-5 flex-row'>
            <a
            target='_blank'
              href="https://coinmarketcap.com/currencies/defi-yield-protocol/"
              className="text-white text-decoration-none"
            >
              <h5>CoinMarketCap</h5>
            </a>
            <a
            target='_blank'
              href="https://www.coingecko.com/en/coins/defi-yield-protocol"
              className="text-white text-decoration-none"
            >
              <h5>CoinGecko</h5>
            </a>
            <NavLink to='/disclaimer' className="text-white text-decoration-none"> <h5>Disclaimer</h5></NavLink>
           
          </div>

          <img
          className="spiral"
          src={require(`../../assets/footerSpiral.png`)}
          alt=""
        />
        </div>
       
        <hr />
        <div className="container-lg d-flex mt-0 mt-lg-5 footer-blocks w-100 position-relative">
          {windowSize.width < 786 ? (
            <div className="accordion w-100" id="accordionFooter">
              <div className="col-12 col-lg-3 text-white d-flex flex-column gap-3 px-0 py-3">
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    onClick={() => openAccordion(1)}
                  >
                    <h4 className="fw-bold">About Us</h4>
                    <img
                      className={indicators.about ? `indicator turn` : "indicator"}
                      src={
                        require(`../../assets/accordionIndicator.svg`).default
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionFooter"
                >
                <div className="d-flex flex-column gap-3">
                  {about.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-white text-decoration-none"
                    >
                      <h5>{item.title}</h5>
                    </a>
                  ))}
                </div>
                </div>
              </div>
              <hr />

              <div className="col-12 col-lg-3 text-white d-flex flex-column gap-3 px-0 py-3">
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    onClick={() => openAccordion(2)}
                  >
                    <h4 className="fw-bold">Products and services</h4>
                    <img
                      className={indicators.products ? `indicator turn` : "indicator"}
                      src={
                        require(`../../assets/accordionIndicator.svg`).default
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionFooter"
                >
                  <div className="row">
                    <div className="col-6 d-flex flex-column gap-3">
                      {products.slice(0, 6).map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="text-white text-decoration-none"
                        >
                          <h5>{item.title}</h5>
                        </a>
                      ))}
                    </div>
                    <div className="col-6 d-flex flex-column gap-3">
                      {products.slice(7, products.length).map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="text-white text-decoration-none"
                        >
                          <h5>{item.title}</h5>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="col-12 col-lg-3 text-white d-flex flex-column gap-3 px-0 py-3">
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    onClick={() => openAccordion(3)}
                  >
                    <h4 className="fw-bold">Anouncements</h4>
                    <img
                      className={indicators.announcements ? `indicator turn` : "indicator "}
                      src={
                        require(`../../assets/accordionIndicator.svg`).default
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionFooter"
                >
                <div className="d-flex flex-column gap-3">
                  {announcements.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-white text-decoration-none"
                    >
                      <h5>{item.title}</h5>
                    </a>
                  ))}
                  </div>
                </div>
              </div>
              <hr />

              <div className="col-12 col-lg-3 text-white d-flex flex-column gap-3 px-0 py-3">
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    onClick={() => openAccordion(4)}
                  >
                    <h4 className="fw-bold">Learn</h4>
                    <img
                      className={indicators.learn ? `indicator turn` : "indicator"}
                      src={
                        require(`../../assets/accordionIndicator.svg`).default
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionFooter"
                >
                <div className="d-flex flex-column gap-3">
                  {learn.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-white text-decoration-none"
                    >
                      <h5>{item.title}</h5>
                    </a>
                  ))}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ) : (
            <>
              <div className="col-3 text-white d-flex flex-column gap-3">
                <h4 className="fw-bold">About Us</h4>
                {about.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-white text-decoration-none"
                  >
                    <h5>{item.title}</h5>
                  </a>
                ))}
              </div>
              <div className="col-3 text-white d-flex flex-column gap-3">
                <h4 className="fw-bold">Products and services</h4>
                <div className="row">
                  <div className="col-6 d-flex flex-column gap-3">
                    {products.slice(0, 6).map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="text-white text-decoration-none"
                      >
                        <h5>{item.title}</h5>
                      </a>
                    ))}
                  </div>
                  <div className="col-6 d-flex flex-column gap-3">
                    {products.slice(6, products.length).map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="text-white text-decoration-none"
                      >
                        <h5>{item.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-3 text-white d-flex flex-column gap-3">
                <h4 className="fw-bold">Anouncements</h4>
                {announcements.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-white text-decoration-none"
                  >
                    <h5>{item.title}</h5>
                  </a>
                ))}
              </div>
              <div className="col-3 text-white d-flex flex-column gap-3">
                <h4 className="fw-bold">Learn</h4>
                {learn.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-white text-decoration-none"
                  >
                    <h5>{item.title}</h5>
                  </a>
                ))}
              </div>
            </>
          )}
           <img
          className="sphere"
          src={require(`../../assets/footerSphere.png`)}
          alt=""
        />
        </div>
        <div className="row w-100 justify-content-end justify-content-lg-center align-items-center py-3">
          <p className="mb-0 text-white fw-light" style={{ fontSize: "12px" }}>
            Copyright © DeFi Yield Protocol {year.getFullYear()}. All rights reserved.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
