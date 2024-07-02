import React, { Suspense, useEffect, useState } from "react";
import MainHero from "./MainHero/MainHero";
import DypMetaverse from "./DypMetaverse/DypMetaverse";
import DypTools from "./DypTools/DypTools";
import DypToken from "./DypToken/DypToken";
import DypNews from "./DypNews/DypNews";
import DypPartners from "./DypPartners/DypPartners";
import "./DypNews/_dypnews.scss";
import LandPopup from "../../components/LandPopup/LandPopup";
import OutsideClickHandler from "react-outside-click-handler";
import { isMobile, MobileView, BrowserView } from "react-device-detect";
import xMark from "../../components/Navbar/assets/xMark.svg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPopup, setshowPopup] = useState(false);

  return (
    <div className="homepage main-wrapper container-fluid pl-0 pr-0 d-flex flex-column align-items-center">
      <MainHero />
      <DypMetaverse />
      <DypTools
        onDownloadClick={() => {
          setshowPopup(true);
        }}
      />
      <DypToken />
      <Suspense fallback={<div>Loading</div>}>
        <DypPartners />
      </Suspense>
      <DypNews topTitle="Announcements" bottomTitle="Stay tuned" />
      <LandPopup />
      <OutsideClickHandler onOutsideClick={() => setshowPopup(false)}>
        <div
          className={`metaverse-modal-wrapper2 ${
            showPopup && "metaverse-active"
          } flex-column p-4 d-flex gap-3 align-items-center justify-content-center`}
        >
          <img
            src={xMark}
            alt=""
            className="x-mark"
            onClick={() => setshowPopup(false)}
          />
          <h4 className="mobile-app-title">Dypius Mobile App</h4>
          <div className="mobile-popup-wrapper p-3">
            <ul className="mobile-content-list">
              <li className="text-secondary">
                Available exclusively in APK format for Android devices.
              </li>
              <li className="text-secondary">
                Early release with some fully functional features.
              </li>
              <li className="text-secondary">
                Other features are in view-only mode, relying on the MetaMask
                Unity SDK.
              </li>
              <li className="text-secondary">
                MetaMask-related issues are beyond our control; we're seeking
                support to resolve them.
              </li>
              <li className="text-secondary">
                Your feedback is valuable as we continue to improve the app.
              </li>
              <li className="text-secondary">
                Thank you for your understanding and patience.
              </li>
            </ul>
          </div>
          <div className="separator2 w-100"></div>
          <div className="d-flex justify-content-center">
            <MobileView>
              <button className={`filled-btn btn `}>Download on mobile</button>
            </MobileView>
            <BrowserView>
              <button className={`btn-secondary btn `} disabled={!isMobile}>
                Download on mobile
              </button>
            </BrowserView>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Home;
