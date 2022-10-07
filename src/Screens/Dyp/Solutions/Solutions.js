import React, { useState } from "react";
import SolutionsCard from "../../../components/SolutionsCard/SolutionsCard";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import dots from "../../../assets/dots.png";
import "./_solutions.scss";

const Solutions = () => {
  const windowSize = useWindowSize();

  const [solutionLength, setSolutionLength] = useState(6);

  const solutions = [
    {
      title: "DYP Tools",
    },
    {
      title: "Governance",
    },
    {
      title: "Stake",
    },
    {
      title: "Farm",
    },
    {
      title: "Vault",
    },
    {
      title: "Buyback",
    },
    {
      title: "Bridge",
    },
    {
      title: "CAWS NFT",
    },
    {
      title: "Launchpad",
    },
    {
      title: "iDYP",
    },
    {
      title: "DYP Locker",
    }, 
    {
      title: "CAWS Adventure",
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
                  <SolutionsCard key={index} title={solution.title} />
                ))
            : solutions.map((solution, index) => (
                <SolutionsCard key={index} title={solution.title} />
              ))}
        </div>
        <div className="row justify-content-center my-5">
          <button
            onClick={loadMore}
            className={`btn outline-btn ${solutionLength < 12 ? 'd-flex' : 'd-none'} d-lg-none justify-content-center align-items-center`}
          >
            Load More +
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
