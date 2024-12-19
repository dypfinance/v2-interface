import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import EmptyProposalCard from "../../../components/ProposalCard/EmptyProposalCard";
import ProposalCard from "../../../components/ProposalCard/ProposalCard";
import getFormattedNumber from "../../../hooks/getFormattedNumber";
import "./_proposals.scss";

const Proposals = () => {
  const [proposals, setProposals] = useState();
  const [totalVotes, setTotalVotes] = useState();
  const [activeProposals, setactiveProposals] = useState([]);

  const fetchProposals = async () => {
    await axios
      .get("https://api.dyp.finance/api/gov-stats")
      .then((res) => {
        setProposals(res.data.proposals);
        setTotalVotes(res.data.totalVotes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchActiveProposals = async () => {
    const oldGovs = await axios
      .get("https://api.dyp.finance/api/get_proposals_info")

      .catch((err) => {
        console.error(err);
      });

    if (oldGovs && oldGovs.status === 200) {
      const ethProposals = oldGovs.data.ProposalsInfoETH;
      const bnbProposals = oldGovs.data.ProposalsInfoBSC;
      const avaxProposals = oldGovs.data.ProposalsInfoAVAX;

      const ethProposals_active = ethProposals.filter((item) => {
        return item.status === "Active";
      });

      const bnbProposals_active = bnbProposals.filter((item) => {
        return item.status === "Active";
      });
      const avaxProposals_active = avaxProposals.filter((item) => {
        return item.status === "Active";
      });

      const allProposals = [
        ...ethProposals_active,
        ...bnbProposals_active,
        ...avaxProposals_active,
      ];
      setactiveProposals(allProposals);
    }
  };

  useEffect(() => {
    fetchProposals();
    fetchActiveProposals();
  }, []);

  const totalProposals = [
    {
      chain: "Ethereum",
      total: proposals?.eth,
      icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg",
    },
    {
      chain: "BNB Chain",
      total: proposals?.bsc,
      icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg",
    },
    {
      chain: "Avalanche",
      total: proposals?.avax,
      icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg",
    },
  ];

  const proposalICons = [
    {
      icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg",
    },
    {
      icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg",
    },
    {
      icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg",
    },
  ];

  const recentProposalGroups = [
    {
      title: "ETH",
      content: [
        {
          title: "ETH Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg",
        },
        {
          title: "ETH Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg",
        },
        {
          title: "ETH Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg",
        },
      ],
    },
    {
      title: "BNB",
      content: [
        {
          title: "BNB Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg",
        },
        {
          title: "BNB Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg",
        },
        {
          title: "BNB Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg",
        },
      ],
    },
    {
      title: "AVAX",
      content: [
        {
          title: "AVAX Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg",
        },
        {
          title: "AVAX Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg",
        },
        {
          title: "AVAX Pools",
          icon: "https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg",
        },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    arrows: false,
  };

  return (
    <div className="container-lg proposals-wrapper position-relative">
      <div className="row align-items-end">
        <div className="col-12 col-lg-5 total-proposals-wrapper">
          <div className="total-proposals position-relative p-3 d-flex align-items-center justify-content-between">
            <span className="proposal-span" />
            <div className="d-flex align-items-center gap-2">
              <img src={"https://cdn.worldofdypians.com/dypius/totalProposalsIcon.svg"} alt="propsals icon" />
              <span className="total-votes-text">Total Governance votes</span>
            </div>
            <h6 className="total-votes-amount mb-0">
              {getFormattedNumber(totalVotes)}
            </h6>
          </div>
        </div>
        <div className="col-12 col-lg-7 pb-2">
          <h4 className="mb-5" style={{ color: "#554FD8", fontSize: "20px" }}>
            Lifetime proposals
          </h4>
          <div className="proposal-container justify-content-center align-items-center gap-5">
            {totalProposals.map((proposal, index) => (
              <div
                className="proposal-card d-flex flex-column justify-content-center justify-content-lg-between align-items-center py-0 py-md-5 position-relative"
                key={index}
              >
                <img className="chain-icon" src={proposal.icon} alt="" />
                <h5 className="chain mb-0">{proposal.chain}</h5>
                <p className="proposals mb-0">{proposal.total}</p>
                <p className="total mb-0">Total proposals</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div className="recent-proposals p-4 position-relative">
            <span className="proposal-span" />
            <div className="row justify-content-between align-items-center mb-4 gap-3 gap-lg-0">
              <h4
                className="mb-0 ms-1 ms-lg-0"
                style={{ color: "#554FD8", fontSize: "20px" }}
              >
                Recent proposals
              </h4>
              {activeProposals.length > 0 ? (
                <p className="active-pools mb-0 ms-3 ms-lg-0">
                  {activeProposals.length} Active
                </p>
              ) : (
                <p className="inactive-pools mb-0 ms-3 ms-lg-0">
                  No proposals available
                </p>
              )}
            </div>
            {activeProposals.length > 0 ? (
              <div className="recents-container w-100">
                <Slider {...settings}>
                  <div className="d-flex flex-column gap-3 w-100">
                    {activeProposals && activeProposals.length >= 3 ? (
                      activeProposals.slice(0, 3).map((item, index) => (
                        <div key={index}>
                          <ProposalCard
                            title={item.title}
                            key={index}
                            type={item.type}
                            date={item.date}
                            icon={proposalICons[index].icon}
                          />
                        </div>
                      ))
                    ) : (
                      <>
                        {activeProposals.map((item, index) => (
                          <div key={index}>
                            <ProposalCard
                              title={item.title}
                              key={index}
                              type={item.type}
                              date={item.date}
                              icon={proposalICons[index].icon}
                            />
                          </div>
                        ))}
                        {recentProposalGroups
                          .slice(0, 3 - activeProposals.length)
                          .map((proposal, index) => (
                            <div key={index}>
                              {proposal.content.slice(0, 2 - activeProposals.length).map((item, index) => (
                                <EmptyProposalCard
                                  title={item.title}
                                  icon={item.icon}
                                  key={index}
                                />
                              ))}
                            </div>
                          ))}
                      </>
                    )}
                  </div>
                </Slider>
              </div>
            ) : (
              <div className="row recents-container">
                <Slider {...settings}>
                  {recentProposalGroups.map((proposal, index) => (
                    <div key={index}>
                      {proposal.content.map((item, index) => (
                        <EmptyProposalCard
                          title={item.title}
                          icon={item.icon}
                          key={index}
                        />
                      ))}
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposals;
