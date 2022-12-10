import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import EmptyProposalCard from "../../../components/ProposalCard/EmptyProposalCard";
import ProposalCard from "../../../components/ProposalCard/ProposalCard";
import "./_proposals.scss";

const Proposals = () => {


  const [proposals, setProposals] = useState()

  const fetchProposals = async() => {
    await axios.get('https://api.dyp.finance/api/gov-stats').then((res) => {
      setProposals(res.data.proposals)
    }).catch((err) => {
      console.error(err);
    })
  }


  useEffect(() => {
    
    fetchProposals();
    
  }, [])
  


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


const recentProposalGroups = [
    {
        title: 'ETH',
        content: [
            {   
                title: 'ETH Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg'
            },
            {   
                title: 'ETH Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg'
            },
            {   
                title: 'ETH Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg'
            },
        ]
    },
    {
        title: 'BNB',
        content: [
            {   
                title: 'BNB Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg'
            },
            {   
                title: 'BNB Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg'
            },
            {   
                title: 'BNB Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg'
            },
        ]
    },
    {
        title: 'AVAX',
        content: [
            {   
                title: 'AVAX Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg'
            },
            {   
                title: 'AVAX Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg'
            },
            {   
                title: 'AVAX Pools',
                icon: 'https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg'
            },
        ]
    },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'button__bar',
    arrows: false
  };


  return (
    <div className="container-lg proposals-wrapper">
      
      <div className="row align-items-end">
        <div className="col-12 col-lg-7 pb-2">
        <h4 className="mb-5" style={{ color: "#554FD8", fontSize: '20px' }}>
        Lifetime proposals
      </h4>
          <div className="proposal-container justify-content-center align-items-center gap-5">
          {totalProposals.map((proposal, index) => (
            <div className="proposal-card d-flex flex-column justify-content-center justify-content-lg-between align-items-center py-0 py-md-5 position-relative" key={index}>
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
            <div className="row justify-content-between align-items-center mb-4">
              <h4 className="mb-0" style={{ color: "#554FD8", fontSize: '20px' }}>Recent proposals</h4>
              <p className="inactive-pools mb-0">No proposals available</p>
            </div>
            <div className="row recents-container">
                <Slider {...settings}>
                    {recentProposalGroups.map((proposal, index) => (
                        <div key={index}>
                            {proposal.content.map((item, index) => (
                                <EmptyProposalCard title={item.title} icon={item.icon} key={index}/>
                            ))}
                        </div>
                    ))}
                </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposals;
