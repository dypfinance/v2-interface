import React, { useEffect, useState, useRef } from "react";
import "./_migrationpopup.scss";
import Slider from "react-slick";
import OutsideClickHandler from "react-outside-click-handler";
import Countdown from "react-countdown";
import migrationBanner from './migrationBanner.png'
import { NavLink } from "react-router-dom";

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

const MigrationPopup = () => {
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
                DYP/iDYP migration is now <span className="popup-title mb-0" style={{color: "#7770E0"}}>Live</span>
              </h6>
            </div>
            <span className="popup-span mb-0">
              Easily migrate your DYP and iDYP tokens with premium rates available until the snapshot date.
            </span>
          </div>
          <img
            src={migrationBanner}
            className="land-nft-image basepopup"
            alt="land nft"
          />
          <div className="popup-second-wrapper d-flex align-items-center justify-content-center p-2">
            <h6 className="second-popup-desc mb-0">Premium migration rates until February 23, 2026</h6>
          </div>
          <a
            href="https://app.dypius.com/migration-portal"
            target={"_blank"}
            onClick={() => setActive(false)}
          >
            <button className="btn filled-btn m-3">Migrate</button>
          </a>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default MigrationPopup;
