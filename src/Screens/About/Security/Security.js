import React from "react";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";
import link from "./assets/link.svg";
import github from './assets/github.svg'

const Security = () => {

  const auditedByArray = [
    {
      img: "peckshield.svg",
      name: "PeckShield",
      link: "https://peckshield.com/",
    },
    {
      img: "blockchain-consilium.svg",
      name: "Blockchain <br/> Consilium",
      link: "https://www.blockchainconsilium.com/",
    },
    {
      img: "certik.svg",
      name: "CertiK <br/> Security",
      link: "https://www.certik.com/",
    },
  ];

  const auditItems = [


    {
      subtitle: "Security",
      title: "New Contracts for Farm, Stake, Buyback and Governance",
      link: "https://github.com/dypfinance/Buyback-Farm-Stake-Governance-V2/tree/main/Audit",
    },
    {
      subtitle: "Security",
      title: "Token Lock Vesting",
      link: "https://github.com/dypfinance/token-lock-vesting-contracts/",
    },
    {
      subtitle: "Security",
      title: "Dypius Earn Vault",
      link: "https://github.com/dypfinance/dyp-earn-vault",
    },

    {
      subtitle: "Security",
      title: "Token Smart Contract",
      link: "https://github.com/dypfinance/contract-security-audit",
    },
    {
      subtitle: "Security",
      title: "Certik Security Oracle",
      link: "https://www.certik.com/projects/dypfinance",
    },
    {
      subtitle: "Security",
      title: "Farming, Staking and <br/> Governance on Ethereum Network",
      link: "https://github.com/dypfinance/staking-governance-security-audits",
    },

    {
      subtitle: "Security",
      title: "Farming, Bridge and Governance <br/> on BNB Smart Chain",
      link: "https://github.com/dypfinance/DYP-Bridge-and-Staking-on-Binance-Smart-Chain",
    },



  ];

  return (
    <div className="container-fluid mb-5 " id="security" style={{ marginTop: '7rem' }}>
      <div className="container-lg">

        <div className="row m-0 justify-content-between gap-3 align-items-start">
          <div className="col-lg-5 col-xl-5 p-0">
            <Title top={"Security"} align="d-flex flex-row gap-2" />
            <p className="security-desc">
              DeFi Yield Protocol unquestionably values your security. This is
              why we have chosen three reputable security audit companies:
              <b> Blockchain Consilium, CertiK, and PeckShield,</b> to provide
              their services in an effort to avoid any vulnerabilities in the
              development of our smart contracts.
              <br /> In addition, all of our smart contracts are monitored{" "}
              <b>24/7</b> through a Security Oracle, powered by CertiK.<br /><br />
            </p>
          </div>
          <div className="col-lg-4 col-xl-4 p-0 auditedwrapper">
            <div className="row flex-column m-0 justify-content-center">
            </div>
            <div className="d-flex flex-column" style={{ margin: '1rem' }}>
              {auditedByArray.length > 0 &&
                auditedByArray.map((item, index) => {
                  return (
                    <div key={index} className="audited-item">
                      <a href={item.link} target={'_blank'} rel="noreferrer">
                        <div className="row m-0 gap-3 justify-content-between align-items-center">
                          <div className="d-flex m-0 p-0 align-items-center">
                            <img
                              src={require(`../../../assets/AuditedBy/${item.img}`)}
                              alt=""
                              style={{ width: 60, height: 25 }}
                            />
                            <p className="audited-by-section-item-text p-0" dangerouslySetInnerHTML={{ __html: item.name }} style={{ textAlign: 'left', fontSize: 11 }}>

                            </p>
                          </div>
                          <span className="viewsite">
                            View site <img src={filledArrow} alt="" />
                          </span>
                        </div></a>
                    </div>
                  );
                })}
            </div>
            <div className="repowrapper w-100">
              <a href="https://github.com/dypfinance/"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-between gap-2"
              >
                <p>
                  You may
                  find our audit results stored in our
                  repository!
                </p>
                <img src={github} alt='' className="github-logo" />
              </a>
            </div>

          </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-between m-0 gap-3">
            {auditItems.length > 0 &&
              auditItems.slice(0, 1).map((item, index) => {
                return (
                  <div key={index} className="security-item mb-lg-4 mb-xl-4 mt-5" style={{ width: '66%' }}>
                    <a href={item.link} target={'_blank'} rel='noreferrer'>
                      <div className="d-flex m-0 justify-content-between gap-2 align-items-center">
                        <span>{item.title}</span>
                        <div className="github-btn">
                          <span>Github <img src={link} alt="" style={{ height: 25 }} /></span>
                        </div>

                      </div>
                    </a>
                  </div>

                );
              })}
            {auditItems.length > 0 &&
              auditItems.slice(1, 2).map((item, index) => {
                return (
                  <div key={index} className="security-item mt-lg-5 mt-xl-5 mb-4">
                    <a href={item.link} target={'_blank'} rel='noreferrer'>
                      <div className="d-flex m-0 justify-content-between gap-2 align-items-center">
                        <span
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></span>
                        <div className="github-btn">
                          <span>Github <img src={link} alt="" style={{ height: 25 }} /></span>
                        </div>
                      </div>
                    </a>
                  </div>

                );
              })}
          </div>
          <div className="row gap-3 m-0 justify-content-between">
            {auditItems.length > 0 &&
              auditItems.slice(2, auditItems.length - 2).map((item, index) => {
                return (
                  <div key={index} className="security-item">
                    <a href={item.link} target={'_blank'} rel='noreferrer'>
                      <div className="d-flex m-0 justify-content-between gap-2 align-items-center">
                        <span
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></span>
                      <div className="github-btn">
                          <span>Github <img src={link} alt="" style={{ height: 25 }} /></span>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>

          <div className="row gap-3 ml-0 mr-0 mt-4 justify-content-between">
            {auditItems.length > 0 &&
              auditItems.slice(auditItems.length - 2, auditItems.length - 1).map((item, index) => {
                return (
                  <div key={index} className="security-item " style={{ width: '48%' }}>
                    <a href={item.link} target={'_blank'} rel='noreferrer'>
                      <div className="d-flex m-0 justify-content-between gap-2 align-items-center">
                        <span
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></span>
                        <div className="github-btn">
                          <span>Github <img src={link} alt="" style={{ height: 25 }} /></span>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            {auditItems.length > 0 &&
              auditItems.slice(auditItems.length - 1, auditItems.length).map((item, index) => {
                return (
                  <div key={index} className="security-item w-50">
                    <a href={item.link} target={'_blank'} rel='noreferrer'>
                      <div className="d-flex m-0 justify-content-between gap-2 align-items-center">
                        <span
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></span>
                         <div className="github-btn">
                          <span>Github <img src={link} alt="" style={{ height: 25 }} /></span>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <img className='bluehero-solutions' src={require(`../../../assets/metaverse-blueHero.svg`).default} alt="" style={{ bottom: '-186px', right: 0 }} />

      </div>
    </div>
  );
};

export default Security;
