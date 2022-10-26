import React, { useState } from "react";
import SolutionsCard from "../../../components/SolutionsCard/SolutionsCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import PurpleArrowDown from "../../../assets/DypAssets/purpleArrow-down.svg";
import "./_solutions.scss";

const Solutions = () => {
  const windowSize = useWindowSize();

  const [solutionLength, setSolutionLength] = useState(2);

  const solutions = [
    {
      title: "DYP Tools",
      image: 'dyptools',
    },
    {
      title: "Governance",
      image: 'governance'

    },
    {
      title: "Stake",
      image: 'stake'

    },
    {
      title: "Farm",
      image: 'farm'

    },
    {
      title: "Vault",
      image: 'vault'

    },
    {
      title: "Buyback",
      image: 'buyback'

    },
    {
      title: "Bridge",
      image: 'bridge'

    },
    {
      title: "CAWS NFT",
      image: 'caws'

    },
    {
      title: "Launchpad",
      image: 'launchpad'

    },
    {
      title: "Metaverse",
      image: 'metaverse'

    },
    {
      title: "DYP Locker",
      image: 'dyplocker'

    }, 
    {
      title: "CAWS Adventure",
      image: 'cawsadventure'

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
        <div className="row" style={{ marginTop: "150px" }}>
          <Title top="Our" bottom="Solutions"  animation="fade-up" duration="1000"/>
        </div>
        <div className="row d-grid px-3 solutions-card-container">
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
