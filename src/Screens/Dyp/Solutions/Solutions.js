import React, { useState } from "react";
import SolutionsCard from "../../../components/SolutionsCard/SolutionsCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import PurpleArrowDown from "../../../assets/DypAssets/purpleArrow-down.svg";
import "./_solutions.scss";

const Solutions = () => {
  const windowSize = useWindowSize();

  const [solutionLength, setSolutionLength] = useState(6);

  const solutions = [
    {
      title: "DYP Tools",
      image: 'dyptools.png'
    },
    {
      title: "Governance",
      image: 'governance.png'

    },
    {
      title: "Stake",
      image: 'stake.png'

    },
    {
      title: "Farm",
      image: 'farm.png'

    },
    {
      title: "Vault",
      image: 'vault.png'

    },
    {
      title: "Buyback",
      image: 'buyback.png'

    },
    {
      title: "Bridge",
      image: 'bridge.png'

    },
    {
      title: "CAWS NFT",
      image: 'caws.png'

    },
    {
      title: "Launchpad",
      image: 'launchpad.png'

    },
    {
      title: "Metaverse",
      image: 'metaverse.png'

    },
    {
      title: "DYP Locker",
      image: 'locker.png'

    }, 
    {
      title: "CAWS Adventure",
      image: 'adventure.png'

    },
  ];

  const loadMore = () => {
    setSolutionLength(solutionLength + 3);
  };

  return (
    <div className="container-fluid position-relative">
      <img
        className="rings"
        src={require(`../assets/solutionRings.svg`).default}
        alt=""
      />

      <div className="container-lg position-relative" id="solutions">
        <div className="row px-5" style={{ marginTop: "150px" }}>
          <Title top="Our" bottom="Solutions"  animation="fade-up" duration="1000"/>
        </div>
        <div className="row d-grid px-5 solutions-card-container">
          {windowSize.width < 786
            ? solutions
                .slice(0, solutionLength)
                .map((solution, index) => (
                  <SolutionsCard key={index} title={solution.title} image={solution.image}/>
                ))
            : solutions.map((solution, index) => (
                <SolutionsCard key={index} title={solution.title}  image={solution.image}/>
              ))}
        </div>
        <div className="row justify-content-center my-5">
          <button
            onClick={loadMore}
            className={`btn outline-btn ${solutionLength < 12 ? 'd-flex' : 'd-none'} d-lg-none d-xl-none justify-content-center align-items-center`}
          >
            Load More  <img
              src={PurpleArrowDown}
              alt=""
              className="ml-2"
            />
          </button>
        </div>
      </div>
      <img
        className="bluehero-solutions"
        src={require(`../../../assets/metaverse-blueHero.svg`).default}
        alt=""
      />
    </div>
  );
};

export default Solutions;
