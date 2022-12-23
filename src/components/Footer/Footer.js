import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import "./_footer.scss";
import logo from "../../assets/dypiusLogo.svg";
import coinmarketcap from "../../assets/coinMarketCap.svg";
import coinGecko from "../../assets/coinGecko.svg";
import contactUs from "../../assets/contactUs.svg";
import disclaimer from "../../assets/disclaimer.svg";
import { HashLink as Link } from "react-router-hash-link";
import metaverseModal from "../Navbar/assets/metaverseModal.svg";
import commingSoon from "../Navbar/assets/commingSoon.png";
import xMark from "../Navbar/assets/xMark.svg";
import Title from "../Title/Title";
import OutsideClickHandler from "react-outside-click-handler";

const Footer = () => {
  const windowSize = useWindowSize();

  const [metaverse, setMetaverse] = useState(false);

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
      link: "mailto:business@dypius.com",
    },
  ];

  const about = [
    {
      title: "Our team",
      link: "/about#ourteam",
    },
    {
      title: "Our partners",
      link: "/about#our-partners",
    },
    {
      title: "Brand",
      link: "/about#brand",
    },
    {
      title: "Roadmap",
      link: "/about#roadmap",
    },
    {
      title: "Security",
      link: "/about#security",
    },
    {
      title: "Tokenomics",
      link: "/about#tokenomics",
    },

    {
      title: "Contact us",
      link: "/about#contactus",
    },
  ];

  const products = [
    {
      title: "Earn",
      link: "https://app.dypius.com/earn",
    },
    {
      title: "DYP Tools",
      link: "https://app.dypius.com",
    },
    {
      title: "Governance",
      link: "/governance",
    },
    {
      title: "Bridge",
      link: "https://app.dypius.com/bridge",
    },
    {
      title: "Buy DYP",
      link: "/buydyp",
    },
    {
      title: "iDYP Token",
      link: "/idyp",
    },
    {
      title: "Metaverse",
      link: "https://www.worldofdypians.com/",
    },
  ];

  const announcements = [
    {
      title: "Latest anouncements",
      link: "/news",
      props: "announcements",
    },

    {
      title: "Latest events",
      link: "/news",
      props: "events",
    },
    {
      title: "Press",
      link: "/news#press",
    },
  ];

  const learn = [
    {
      title: "How to buy DYP",
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPmcjxnKg6SgP2B1rCtBMld",
    },
    {
      title: "How to Stake",
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPAbzuedp9ii6OszPT1STy8",
    },
    {
      title: "How to Farm",
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPKtu_gWiu7vm73k_TnZOs4",
    },
    {
      title: "How to use Buyback",
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPJ7CX0lKPaXS_ELKCk7FnW",
    },
    {
      title: "How to use the Vault",
      link: "https://www.youtube.com/watch?v=t8Yr3ZIxHJA",
    },
    {
      title: "How to use DYP Tools",
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVNMvlnKe8ouT9Ma_UE_WBx2",
    },
    {
      title: "How to Bridge",
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPmVy8aBOZratFGWKIBbthl",
    },
  ];

  const year = new Date();

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

  const html = document.querySelector("html");
  const metaverseModalIndicator = document.querySelector(
    ".metaverse-modal-wrapper"
  );

  useEffect(() => {
    if (metaverse === true) {
      html.classList.add("hidescroll");
      metaverseModalIndicator.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      html.classList.remove("hidescroll");
    }
  }, []);

  return (
    <>
      <div className="container-fluid p-0 footer">
        <div className="socials container-fluid">
          <div className="container-lg socials-container d-grid align-items-center">
            {socials.map((social, index) => (
              <div key={index} className="col-4 col-lg">
                <a
                  target="_blank"
                  rel="noreferrer"
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
          <div className="container-lg d-flex mt-0 mt-lg-4 footer-blocks w-100 position-relative align-items-baseline justify-content-between py-4 py-lg-1">
            {windowSize.width < 821 ? (
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
                      <h4 className="fw-normal">About Us</h4>
                      <img
                        className={
                          indicators.about ? `indicator turn` : "indicator"
                        }
                        src={
                          require(`../../assets/accordionIndicator2.svg`)
                            .default
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
                        <Link
                          key={index}
                          to={item.link}
                          className="text-white text-decoration-none footer-type-link"
                        >
                          <h5>{item.title}</h5>
                        </Link>
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
                      <h4 className="fw-normal">Solutions</h4>
                      <img
                        className={
                          indicators.products ? `indicator turn` : "indicator"
                        }
                        src={
                          require(`../../assets/accordionIndicator2.svg`)
                            .default
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
                      <div className="col-12 d-flex flex-column gap-3">
                        {products.slice(0, 2).map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            className="text-white text-decoration-none footer-type-link"
                          >
                            <h5>{item.title}</h5>
                          </a>
                        ))}

                        {products.slice(2, 3).map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            className="text-white text-decoration-none footer-type-link"
                          >
                            <h5>{item.title}</h5>
                          </Link>
                        ))}
                        {products.slice(3, 4).map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            className="text-white text-decoration-none footer-type-link"
                          >
                            <h5>{item.title}</h5>
                          </a>
                        ))}

                        {products.slice(4, 6).map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            className="text-white text-decoration-none footer-type-link"
                          >
                            <h5>{item.title}</h5>
                          </Link>
                        ))}
                        {products
                          .slice(products.length - 1, products.length)
                          .map((item, index) => (
                            <a
                              className="text-white text-decoration-none footer-type-link"
                              href={item.link}
                              target='_blank'
                      rel='noreferrer'
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
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    <div
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => openAccordion(4)}
                    >
                      <h4 className="fw-normal">Learn</h4>
                      <img
                        className={
                          indicators.learn ? `indicator turn` : "indicator"
                        }
                        src={
                          require(`../../assets/accordionIndicator2.svg`)
                            .default
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
                          rel="noreferrer"
                          target="_blank"
                          className="text-white text-decoration-none footer-type-link"
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
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    <div
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => openAccordion(3)}
                    >
                      <h4 className="fw-normal">Anouncements</h4>
                      <img
                        className={
                          indicators.announcements
                            ? `indicator turn`
                            : "indicator "
                        }
                        src={
                          require(`../../assets/accordionIndicator2.svg`)
                            .default
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
                        <Link
                          key={index}
                          to={item.link}
                          className="text-white text-decoration-none footer-type-link"
                          state={{ newsType: item.props }}
                        >
                          <h5>{item.title}</h5>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-row gap-3 position-relative mt-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://coinmarketcap.com/currencies/defi-yield-protocol/"
                  >
                    <img src={coinmarketcap} alt="" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.coingecko.com/en/coins/defi-yield-protocol"
                  >
                    <img src={coinGecko} alt="" />
                  </a>

                  <Link to="/disclaimer">
                    <img src={disclaimer} alt="" />
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <Link to="/">
                  <img src={logo} alt="" width={160} height={90} />
                </Link>
                <div className="col-2 text-white d-flex flex-column gap-3">
                  <h4 className="fw-normal">About Us</h4>
                  {about.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="text-white text-decoration-none footer-type-link"
                    >
                      <h5>{item.title}</h5>
                    </Link>
                  ))}
                </div>
                <div className="col-2 text-white d-flex flex-column gap-3">
                  <h4 className="fw-normal">Solutions</h4>

                  {products.slice(0, 2).map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      className="text-white text-decoration-none footer-type-link"
                    >
                      <h5>{item.title}</h5>
                    </a>
                  ))}

                  {products.slice(2, 3).map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="text-white text-decoration-none footer-type-link"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <h5>{item.title}</h5>
                    </Link>
                  ))}
                  {products.slice(3, 4).map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      className="text-white text-decoration-none footer-type-link"
                    >
                      <h5>{item.title}</h5>
                    </a>
                  ))}

                  {products.slice(4, 6).map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="text-white text-decoration-none footer-type-link"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <h5>{item.title}</h5>
                    </Link>
                  ))}
                  {products.slice(6, 7).map((item, index) => (
                    <a
                      className="text-white text-decoration-none footer-type-link"
                      href={item.link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <h5>{item.title}</h5>
                    </a>
                  ))}
                </div>
                <div className="col-2 text-white d-flex flex-column gap-3">
                  <h4 className="fw-normal">Learn</h4>
                  {learn.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-decoration-none footer-type-link"
                    >
                      <h5>{item.title}</h5>
                    </a>
                  ))}
                </div>
                <div className="col-2 text-white d-flex flex-column gap-3">
                  <h4 className="fw-normal">Anouncements</h4>
                  <div className="d-flex flex-column gap-3">
                    {announcements.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className="text-white text-decoration-none footer-type-link"
                        state={{ newsType: item.props }}
                      >
                        <h5>{item.title}</h5>
                      </Link>
                    ))}
                  </div>
                  <div
                    className="d-flex flex-row gap-3 position-relative"
                    style={{ bottom: "-90px" }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://coinmarketcap.com/currencies/defi-yield-protocol/"
                    >
                      <img src={coinmarketcap} alt="" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.coingecko.com/en/coins/defi-yield-protocol"
                    >
                      <img src={coinGecko} alt="" />
                    </a>

                    <Link
                      to="/disclaimer"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img src={disclaimer} alt="" />
                    </Link>
                  </div>
                </div>
              </>
            )}
            {/* <img
            className="sphere"
            src={require(`../../assets/footerSphere.png`)}
            alt=""
          /> */}
          </div>
          <hr className="d-none d-lg-block" />

          <div className="row w-100 justify-content-center align-items-center py-3 m-0">
            <p
              className="mb-0 text-white fw-light"
              style={{ fontSize: "12px" }}
            >
              Copyright © Dypius {year.getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => setMetaverse(false)}>
        <div
          className={`metaverse-modal-wrapper ${
            metaverse && "metaverse-active"
          } flex-column p-5 d-flex gap-3 align-items-center justify-content-center`}
        >
          <img
            src={xMark}
            alt=""
            className="x-mark"
            onClick={() => setMetaverse(false)}
          />
          <img src={metaverseModal} alt="" />
          <img src={commingSoon} alt="" width={400} />
          <Title
            top="Stay"
            bottom="tuned"
            align="d-flex flex-row align-items-center gap-2"
          />
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Footer;
