import React, { useEffect, useState } from "react";
import SolutionsCard from "../../../components/SolutionsCard/SolutionsCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import PurpleArrowDown from "../../../assets/DypAssets/purpleArrow-down.svg";
import metaverseModal from '../../../components/Navbar/assets/metaverseModal.svg'
import commingSoon from '../../../components/Navbar/assets/commingSoon.png'
import xMark from '../../../components/Navbar/assets/xMark.svg'
import "./_solutions.scss";
import OutsideClickHandler from "react-outside-click-handler";

const Solutions = () => {
  const windowSize = useWindowSize();

  const [solutionLength, setSolutionLength] = useState(2);
  const [metaverse, setMetaverse] = useState(false)


  const solutions = [
    {
      title: "DYP Tools",
      image: "dyptools",
      link: 'https://app.dypius.com/',
      arrow: true
    },
    {
      title: "Governance",
      image: "governance",
      link: 'https://app.dypius.com/governance',
      arrow: true

    },
    {
      title: "Stake",
      image: "stake",
      link: 'https://app.dypius.com/earn',
      arrow: true

    },
    {
      title: "Farm",
      image: "farm",
      link: 'https://app.dypius.com/earn',
      arrow: true

    },
    {
      title: "Vault",
      image: "vault",
      link: 'https://app.dypius.com/earn',
      arrow: true

    },
    // {
    //   title: "Buyback",
    //   image: "buyback",
    //   link: 'https://app.dypius.com/earn'

    // },
    {
      title: "Bridge",
      image: "bridge",
      link: 'https://app.dypius.com/bridge',
      arrow: true

    },
    {
      title: "CAWS NFT",
      image: "caws",
      link: '/caws',
      arrow: true

    },
    {
      title: "Launchpad",
      image: "launchpad",
      link: 'https://app.dypius.com/launchpad',
      arrow: true

    },
    {
      title: "Metaverse",
      image: "metaverse",
      link: '#',
      arrow: true

    },
    {
      title: "DYP Locker",
      image: "dyplocker",
      link: 'https://app.dypius.com/locker',
      arrow: true

    },
    {
      title: "CAWS Adventure",
      image: "cawsadventure",
      link: 'https://game.dypius.com',
      arrow: true
    },
    {
      title: "Referral",
      image: "referral",
      link: '#',
      arrow: false
    },
  ];

  const loadMore = () => {
    setSolutionLength(solutionLength + 3);
  };

  const onMetaverseOpen = () => {
    setMetaverse(true)
    console.log("hello");
  }


  const html = document.querySelector("html");
  const metaverseModalIndicator = document.querySelector('.metaverse-modal-wrapper')

  useEffect(() => {
    if (metaverse === true) {
      html.classList.add('hidescroll')
      metaverseModalIndicator.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      html.classList.remove('hidescroll')
    }
  
  }, [])
  

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
        <div className={`row justify-content-center my-5 ${
              solutionLength < 12 ? "d-flex" : "d-none"
            } d-lg-none d-xl-none`}>
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
   <div className={`metaverse-modal-wrapper ${metaverse && 'metaverse-active'} flex-column p-5 d-flex gap-3 align-items-center justify-content-center`}>
        <img src={xMark} alt="" className="x-mark" onClick={() => setMetaverse(false)} />
        <img src={metaverseModal} alt="" className="metaverse-title" />
        <img src={commingSoon} alt="" width={400} className="comming-soon" />
        <Title top="Stay" bottom="tuned" align="d-flex flex-row align-items-center gap-2" />
      </div>
   </OutsideClickHandler>
   </>
  );
};

export default Solutions;
