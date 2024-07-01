import React, { useEffect, useState } from "react";
import SolutionsCard from "../../../components/SolutionsCard/SolutionsCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import PurpleArrowDown from "../../../assets/DypAssets/purpleArrow-down.svg";
import metaverseModal from "../../../components/Navbar/assets/metaverseModal.svg";
import commingSoon from "../../../components/Navbar/assets/commingSoon.png";
import xMark from "../../../components/Navbar/assets/xMark.svg";
import "./_solutions.scss";
import OutsideClickHandler from "react-outside-click-handler";

const Solutions = () => {
  const windowSize = useWindowSize();

  const [solutionLength, setSolutionLength] = useState(2);
  const [metaverse, setMetaverse] = useState(false);

  const solutions = [
    {
      title: "DYP Tools",
      image: "dyptools",
      link: "https://app.dypius.com/",
      arrow: true,
    },
    {
      title: "Governance",
      image: "governance",
      link: "https://app.dypius.com/governance",
      arrow: true,
    },
    {
      title: "Stake",
      image: "stake",
      link: "https://app.dypius.com/earn",
      arrow: true,
    },
    {
      title: "Farm",
      image: "farm",
      link: "https://app.dypius.com/earn",
      arrow: true,
    },
    {
      title: "Vault",
      image: "vault",
      link: "https://app.dypius.com/earn",
      arrow: true,
    },
    // {
    //   title: "Buyback",
    //   image: "buyback",
    //   link: 'https://app.dypius.com/earn'

    // },
    {
      title: "Bridge",
      image: "bridge",
      link: "https://app.dypius.com/bridge",
      arrow: true,
    },
    {
      title: "CAWS NFT",
      image: "caws",
      link: "https://www.worldofdypians.com/caws",
      arrow: true,
    },
    {
      title: "Launchpad",
      image: "launchpad",
      link: "https://app.dypius.com/launchpad",
      arrow: true,
    },
    {
      title: "Metaverse",
      image: "metaverse",
      link: "https://www.worldofdypians.com/",
      arrow: true,
    },
    {
      title: "DYP Locker",
      image: "dyplocker",
      link: "https://app.dypius.com/locker",
      arrow: true,
    },
    {
      title: "CAWS Adventure",
      image: "cawsadventure",
      link: "https://game.dypius.com",
      arrow: true,
    },
    {
      title: "OpenFlux",
      image: "openflux",
      link: "https://www.openflux.com/",
      arrow: true,
    },
    {
      title: "Mobile App",
      image: "mobileApp",
      link: "",
      arrow: true,
    },
  ];

  const loadMore = () => {
    setSolutionLength(solutionLength + 3);
  };

  const onMetaverseOpen = () => {
    setMetaverse(true);
    console.log("hello");
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
      <div className="container-fluid position-relative">
        <img
          className="rings"
          src={require(`../assets/solutionRings.svg`).default}
          alt=""
        />

        <div className="container-lg position-relative" id="solutions">
          <div className="row" style={{ marginTop: "100px" }}>
            <Title
              top="Our"
              bottom="Solutions"
              animation="fade-up"
              duration="1000"
            />
          </div>
          <div className="row d-grid px-3 solutions-card-container">
            {windowSize.width < 786
              ? solutions
                  .slice(0, solutionLength)
                  .map((solution, index) => (
                    <SolutionsCard
                      key={index}
                      title={solution.title}
                      image={solution.image}
                      link={solution.link}
                      arrow={solution.arrow}
                      onMetaverseOpen={onMetaverseOpen}
                    />
                  ))
              : solutions.map((solution, index) => (
                  <SolutionsCard
                    key={index}
                    title={solution.title}
                    image={solution.image}
                    link={solution.link}
                    arrow={solution.arrow}
                    onMetaverseOpen={onMetaverseOpen}
                  />
                ))}
          </div>
          <div
            className={`row justify-content-center my-5 ${
              solutionLength < 12 ? "d-flex" : "d-none"
            } d-lg-none d-xl-none`}
          >
            <button
              onClick={loadMore}
              className={`btn outline-btn   justify-content-center align-items-center`}
            >
              Load More <img src={PurpleArrowDown} alt="" className="ml-2" />
            </button>
          </div>
        </div>
        {/* <img
        className="bluehero-solutions"
        src={require(`../../../assets/metaverse-blueHero.svg`).default}
        alt=""
      /> */}
      </div>
      <OutsideClickHandler onOutsideClick={() => setMetaverse(false)}>
        <div
          className={`metaverse-modal-wrapper2 ${
            metaverse && "metaverse-active"
          } flex-column p-4 d-flex gap-3 align-items-center justify-content-center`}
        >
          <img
            src={xMark}
            alt=""
            className="x-mark"
            onClick={() => setMetaverse(false)}
          />
          <h4 className="mobile-app-title">Dypius Mobile App</h4>
          <div className="mobile-popup-wrapper p-3">
            <div className="d-flex flex-column gap-2">
              <p className="text-secondary">
                We're happy to introduce the Dypius mobile app! Please note that
                the app is currently available exclusively in APK format,
                meaning it can only be installed on Android devices. At this
                time, there is no desktop version available; the app is
                specifically designed for mobile use to provide the best
                on-the-go experience.
              </p>
              <p className="text-secondary">
                In this early release, you'll find that some features are fully
                functional, allowing you to engage with various aspects of the
                Dypius ecosystem. However, please note that other features are
                in a view-only mode as we diligently work on further updates to
                enhance your experience.
              </p>
              <p className="text-secondary">
                Your feedback is incredibly valuable to us as we continue to
                develop and improve the app. We appreciate your understanding
                and patience as we work to bring you the best possible mobile
                experience.
              </p>
            </div>
          </div>
          <div className="separator2 w-100"></div>
          <div className="d-flex justify-content-center">
            <button className="filled-btn btn">Download</button>
          </div>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Solutions;
