import React, { useEffect } from "react";
import Title from "../../components/Title/Title";
import rightArrow from "../../assets/right-arrow.svg";
import GovCards from "../../components/GovCards/GovCards";
import purplelink from "./assets/purplelink.svg";
import purplelinkmd from "./assets/purplelink-md.svg";

import useWindowSize from "../../hooks/useWindowSize";

const Governance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const govcards = [
    {
      title: "Connect wallet",
      description:
        "Dypius Governance runs on Ethereum, BNB Chain, and Avalanche. Connect your wallet to get started.",
      number: "1",
      step: 'one'
    },
    {
      title: "Create proposal",
      description:
        "The proposal can be related to disbursing/burning tokens, or other suggestions.",
      number: "2",
      step: 'two'

    },
    {
      title: "Submit",
      description:
        "Submitting a proposal requires a minimum of 5000 DYP Governance token balance.",
      number: "3",
      step: 'three'

    },
  ];

  const windowSize = useWindowSize();

  return (
    <div className="container-fluid px-0">
      <div className="container-fluid d-flex justify-content-center align-items-center gov-main-wrapper flex-column">
        <div className="container-lg">
          <div
            className="col-lg-7 col-xl-7 ml-lg-5 ml-xl-5 mr-auto"
            style={{ marginTop: windowSize.width < 786 ? "6rem" : "10rem" }}
          >
            <Title top={"Dypius"} bottom={"Governance"} />
            <p className="text-secondary" style={{ fontSize: 14 }}>
              DYP tokens represent voting shares in Dypius Governance. The
              introduction of DYP tokens enables shared community ownership of a
              vibrant, diverse, and dedicated governance system which will
              actively guide the protocol toward the future.
            </p>
            <p className="text-secondary" style={{ fontSize: 14 }}>
              Through governance, DYP holders can vote to add more pools, burn
              tokens, or allocate DYP toward grants, strategic partnerships,
              governance initiatives, and other programs.
            </p>
            <button className="filled-btn btn">
              View more <img src={rightArrow} alt="" className="ml-2" />
            </button>
          </div>
          <div className="row m-0 justify-content-between gap-4 mt-4 position-relative">
            <img
              src={purplelink}
              className="purplelink"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1000"
            />

            <img
              src={purplelinkmd}
              className="purplelinkmd"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            {govcards.length > 0 &&
              govcards.map((item, index) => {
                return (
                  <GovCards
                    key={index}
                    title={item.title}
                    description={item.description}
                    number={item.number}
                    step={item.step}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;