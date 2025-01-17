import React, { useEffect, useState, useRef } from "react";
import "./_landpopup.scss";
import Slider from "react-slick";
import OutsideClickHandler from "react-outside-click-handler";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="d-flex flex-column align-items-center justify-content-center unit">
        <h6 className="time-big-number">{days < 10 ? "0" + days : days}</h6>
        <h6 className="time-small-number">Days</h6>
      </div>
      <h6 className="timer-separator">:</h6>
      <div className="d-flex flex-column align-items-center justify-content-center unit">
        <h6 className="time-big-number">{hours < 10 ? "0" + hours : hours}</h6>
        <h6 className="time-small-number">Hours</h6>
      </div>
      <h6 className="timer-separator">:</h6>
      <div className="d-flex flex-column align-items-center justify-content-center unit">
        <h6 className="time-big-number">
          {minutes < 10 ? "0" + minutes : minutes}
        </h6>
        <h6 className="time-small-number">Minutes</h6>
      </div>
    </div>
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
  let loyaltyCd = new Date("2025-01-08T12:59:59.000+02:00");

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
        <div className="d-flex pt-3 pe-3 align-items-center justify-content-end w-100 close-wrapper">
          <img
            src={"https://cdn.worldofdypians.com/dypius/closePopup.svg"}
            onClick={() => setActive(false)}
            width={20}
            height={20}
            alt="close"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="d-flex flex-column gap-3 justify-content-center align-items-center px-4">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center mb-2 popup-title-wrapper gap-2 p-2 px-4">
              <h6 className="popup-title mb-0 text-center">
              Midle Token Whitelist
                
              </h6>
            </div>
            <span className="popup-span mb-0">
         Secure your spot now as we are offering early access to the exclusive $MIDLE token sale through a Whitelist for our members. 
            </span>
          </div>
          <img
            src={"https://cdn.worldofdypians.com/tools/midlePopupHero.png"}
            className="land-nft-image basepopup"
            alt="land nft"
          />

          <a
            href="https://app.dypius.com/launchpad/midle"
            target={"_blank"}
            onClick={() => setActive(false)}
          >
            <button className="btn filled-btn m-3">Explore</button>
          </a>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default LandPopup;
