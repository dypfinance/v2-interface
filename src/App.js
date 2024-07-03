import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./Screens/Home/Home";
import Dyp from "./Screens/Dyp/Dyp";
import Footer from "./components/Footer/Footer";
import HamburgerMenu from "./components/Header/HamburgerMenu";
import Navbar from "./components/Navbar/Navbar";
import About from "./Screens/About/About";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Disclaimer from "./Screens/Disclaimer/Disclaimer";
import AOS from "aos";
import Support from "./Screens/Support/Support";
import Governance from "./Screens/Governance/Governance";
import IDyp from "./Screens/IDyp/IDyp";
import NewsPage from "./Screens/NewsPage/NewsPage";
import BuyDypScreen from "./Screens/BuyDyp/BuyDypScreen";
import Caws from "./Screens/Caws/Caws";
import MobileFlyout from "./components/MobileFlyout/MobileFlyout";
import OutsideClickHandler from "react-outside-click-handler";
import { isMobile, MobileView, BrowserView } from "react-device-detect";
import xMark from "./components/Navbar/assets/xMark.svg";


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [showFlyout, setshowFlyout] = useState(true);
  const [showPopup, setshowPopup] = useState(false);

  return (
    <BrowserRouter>
      <HamburgerMenu showFlyout={showFlyout}/>
      <Navbar />
      {showFlyout === true && (
        <MobileFlyout
          onClose={() => {
            setshowFlyout(false);
          }}
          onDownloadClick={()=>{ setshowPopup(true);}}
        />
      )}
      
        <Routes>
          <Route exact path="/" element={<Home onDownloadClick={()=>{ setshowPopup(true);}}/>} />
          <Route exact path="/dyp" element={<Dyp />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/governance" element={<Governance />} />
          <Route exact path="/buydyp" element={<BuyDypScreen />} />
          <Route exact path="/news" element={<NewsPage />} />
          <Route exact path="/idyp" element={<IDyp />} />
        </Routes>{" "}
      
      <ScrollTop />
      <Footer />
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
                Available exclusively in APK format for <b>Android</b> devices.
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
              <a href="https://drive.google.com/file/d/1EvPyW0YWYcMc_x6sWViGYJxMStbg13D5/view" target="_blank" rel="noreferrer"  className={` d-flex align-items-center filled-btn btn `}>Download on mobile</a>
            </MobileView>
            <BrowserView>
              <button className={`btn-secondary btn `} disabled={!isMobile}>
                Download on mobile
              </button>
            </BrowserView>
          </div>
        </div>
      </OutsideClickHandler>
    </BrowserRouter>
  );
}

export default App;
