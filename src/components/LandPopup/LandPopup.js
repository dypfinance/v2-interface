import React, { useEffect, useState, useRef } from "react";
import "./_landpopup.scss";
import landPopup from "./landPopup.webp";
import closePopup from "./closePopup.svg";
import migrationPopup from "./migrationPopup.webp";
import dypBaseBg from "./dypBaseBg.webp";
import Slider from "react-slick";
import OutsideClickHandler from "react-outside-click-handler";

const LandPopup = () => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  setTimeout(() => {
    if (count === 0) {
      setActive(true);
      setCount(1);
    }
  }, 500);

  const popup = document.querySelector("#popup");
  const html = document.querySelector("html");
  const slider = useRef();

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
        <div className="d-flex pt-3 pe-3 align-items-center justify-content-end w-100">
          <img
            src={closePopup}
            onClick={() => setActive(false)}
            width={20}
            height={20}
            alt="close"
            style={{ cursor: "pointer" }}
          />
        </div>
        <Slider {...settings} ref={slider} >
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center px-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center mb-2 popup-title-wrapper gap-2 p-2 px-4">
              <h6 className="popup-title d-flex align-items-center gap-2 mb-0">
                WOD Token
              </h6>
              <h6 className="popup-title metaverse mb-0">Whitelist</h6>
            </div>
            <span className="popup-span mb-0">
              As part of the Dypius ecosystem, we’re enhancing our user
              utilities with the upcoming WOD Token launch. Secure your spot now
              as we are offering early access to the exclusive WOD token sale
              through a Whitelist for our members.
            </span>
          </div>
          <img src={migrationPopup} className="land-nft-image w-100" alt="land nft" />
          {/* <span className="popup-content">
          Total Genesis land supply limited to 1,000 plots
        </span> */}
          <a
            href="https://app.dypius.com/launchpad"
            target={"_blank"}
            onClick={() => setActive(false)}
          >
            <button className="btn filled-btn m-3">Join the whitelist</button>
          </a>
        </div>
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center px-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center mb-2 popup-title-wrapper gap-2 p-2 px-4">
              <h6 className="popup-title d-flex align-items-center gap-2 mb-0">
              Dypius Expands to 
              </h6>
              <h6 className="popup-title metaverse mb-0">Base</h6>
            </div>
            <span className="popup-span mb-0">
            Seamlessly bridge DYP to Base via the official Base Super Bridge
            </span>
          </div>
          <img src={dypBaseBg} className="land-nft-image" alt="land nft" />
          {/* <span className="popup-content">
          Total Genesis land supply limited to 1,000 plots
        </span> */}
          <a
            href="https://superbridge.app/base"
            target={"_blank"}
            onClick={() => setActive(false)}
          >
            <button className="btn filled-btn m-3">Bridge DYP on Base</button>
          </a>
        </div>
        </Slider>
      </div>
    </OutsideClickHandler>
  );
};

export default LandPopup;
