import React, { useEffect, useState } from "react";
import "./_landpopup.scss";
import landPopup from "./landPopup.webp";
import closePopup from "./closePopup.svg";
import migrationPopup from "./migrationPopup.webp";
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
        className={`popup-wrapper ${
          active && "popup-active"
        } p-3`}
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
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center mb-2 popup-title-wrapper gap-2 p-2 px-4">
          <h6 className="popup-title d-flex align-items-center gap-2 mb-0">DYP Token migration is now</h6>
          <h6 className="popup-title metaverse mb-0">Live</h6>
          </div>
          <span className="popup-span mb-0">
          Easily migrate your old DYP tokens from Ethereum, BNB Chain, and Avalanche to the new DYP v2 token on Ethereum. 
          </span>
        </div>
        <img src={migrationPopup} className="land-nft-image" alt="land nft" />
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
      </div>
    </OutsideClickHandler>
  );
};

export default LandPopup;
