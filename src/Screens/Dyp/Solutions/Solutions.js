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
      image: "dyptools",
      link: 'https://betatools.dyp.finance/'
    },
    {
      title: "Governance",
      image: "governance",
      link: 'https://betatools.dyp.finance/governance'

    },
    {
      title: "Stake",
      image: "stake",
      link: 'https://betatools.dyp.finance/earn'

    },
    {
      title: "Farm",
      image: "farm",
      link: 'https://betatools.dyp.finance/earn'

    },
    {
      title: "Vault",
      image: "vault",
      link: 'https://betatools.dyp.finance/earn'

    },
    {
      title: "Buyback",
      image: "buyback",
      link: 'https://betatools.dyp.finance/earn'

    },
    {
      title: "Bridge",
      image: "bridge",
      link: 'https://betatools.dyp.finance/bridge'

    },
    {
      title: "CAWS NFT",
      image: "caws",
      link: 'https://betatools.dyp.finance/earn'

    },
    {
      title: "Launchpad",
      image: "launchpad",
      link: 'https://betatools.dyp.finance/launchpad'

    },
    {
      title: "Metaverse",
      image: "metaverse",
      link: '#'

    },
    {
      title: "DYP Locker",
      image: "dyplocker",
      link: 'https://betatools.dyp.finance/locker'

    },
    {
      title: "CAWS Adventure",
      image: "cawsadventure",
      link: '#'

    },
  ];

  const loadMore = () => {
    setSolutionLength(solutionLength + 3);
  };

  return (
    <div className="container-fluid position-relative">
      {/* <img
        className="rings"
        src={require(`../assets/solutionRings.svg`).default}
        alt=""
      /> */}

      <div className="container-lg position-relative" id="solutions">
        <div className="row" style={{ marginTop: "150px" }}>
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
                  />
                ))
            : solutions.map((solution, index) => (
                <SolutionsCard
                  key={index}
                  title={solution.title}
                  image={solution.image}
                  link={solution.link}

                />
              ))}
        </div>
        <div className="row justify-content-center my-5">
          <button
            onClick={loadMore}
            className={`btn outline-btn ${
              solutionLength < 12 ? "d-flex" : "d-none"
            } d-lg-none d-xl-none justify-content-center align-items-center`}
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
  );
};

export default Solutions;
