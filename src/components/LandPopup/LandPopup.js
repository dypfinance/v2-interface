import React, { useEffect, useState, useRef } from "react";
import "./_landpopup.scss";
import landPopup from "./landPopup.webp";
import closePopup from "./closePopup.svg";
import migrationPopup from "./migrationPopup2.webp";
import baseBg from "./baseBg.png";
import Slider from "react-slick";
import OutsideClickHandler from "react-outside-click-handler";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes }) => {
  return (
    <h6 className="d-none">
      {days}d : {hours}h : {minutes}m
    </h6>
  );
};

const LandPopup = () => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [expired, setisExpired] = useState(false);

  setTimeout(() => {
    if (count === 0) {
      setActive(true);
      setCount(1);
    }
  }, 500);

  const popup = document.querySelector("#popup");
  const html = document.querySelector("html");
  const slider = useRef();
  let loyaltyCd = new Date("2024-09-16T12:59:59.000+02:00");

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    if (active === true) {
      html.classList.add("hidescroll");
    } else {
      html.classList.remove("hidescroll");
    }
  }, [active]);

  return (
    <OutsideClickHandler onOutsideClick={() => setActive(false)}>
      <div
        id="popup"
        className={`popup-wrapper ${active && "popup-active"} p-3`}
      >
        <Countdown
          renderer={renderer}
          date={loyaltyCd}
          onComplete={() => {
            setisExpired(true);
          }}
        />

        <div className="d-flex pt-3 pe-3 align-items-center justify-content-end w-100 close-wrapper">
          <img
            src={closePopup}
            onClick={() => setActive(false)}
            width={20}
            height={20}
            alt="close"
            style={{ cursor: "pointer" }}
          />
        </div>
        <Slider {...settings} ref={slider}>
           
            <div className="d-flex flex-column gap-3 justify-content-center align-items-center px-4">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center mb-2 popup-title-wrapper gap-2 p-2 px-4">
                  <h6 className="popup-title d-flex align-items-center gap-2 mb-0">
                  Games on</h6>
                  <h6 className="popup-title metaverse mb-0">Base</h6>
                </div>
                <span className="popup-span mb-0">
                Enjoy the ultimate gaming experience on Base and earn tailored rewards!
                </span>
              </div>
              <img
                src={baseBg}
                className="land-nft-image basepopup"
                alt="land nft"
              />
              <a
                href="https://app.dypius.com/games"
                target={"_blank"}
                onClick={() => setActive(false)}
              >
                <button className="btn filled-btn m-3">Play</button>
              </a>
            </div>
       

          <div className="d-flex flex-column gap-3 justify-content-center align-items-center px-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center mb-2 popup-title-wrapper gap-2 p-2 px-4">
                <h6 className="popup-title d-flex align-items-center gap-2 mb-0">
                  DYP Token migration is now
                </h6>
                <h6 className="popup-title metaverse mb-0">Live</h6>
              </div>
              <span className="popup-span mb-0">
                Easily migrate your old DYP tokens from Ethereum, BNB Chain, and
                Avalanche to the new DYP v2 token on Ethereum.
              </span>
            </div>
            <img
              src={migrationPopup}
              className="land-nft-image basepopup"
              alt="land nft"
            />
            {/* <span className="popup-content">
          Total Genesis land supply limited to 1,000 plots
        </span> */}
            <a
              href="https://app.dypius.com/migration"
              target={"_blank"}
              onClick={() => setActive(false)}
            >
              <button className="btn filled-btn m-3">Migrate</button>
            </a>
          </div>
          {/* <div className="d-flex flex-column gap-3 justify-content-center align-items-center px-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center mb-2 popup-title-wrapper gap-2 p-2 px-4">
              <h6 className="popup-title d-flex align-items-center gap-2 mb-0">
              Dypius Expands to 
              </h6>
              <h6 className="popup-title metaverse mb-0">Base</h6>
            </div>
            <span className="popup-span mb-0">
            Seamlessly bridge DYP to Base via the official Base SuperBridge
            </span>
          </div>
          <img src={dypBaseBg} className="land-nft-image" alt="land nft" />
    
          <a
            href="https://superbridge.app/base"
            target={"_blank"}
            onClick={() => setActive(false)}
          >
            <button className="btn filled-btn m-3">Bridge DYP on Base</button>
          </a>
        </div> */}
        </Slider>
      </div>
    </OutsideClickHandler>
  );
};

export default LandPopup;
