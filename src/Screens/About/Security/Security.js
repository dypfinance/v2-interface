import React from "react";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";
import link from "./link.svg";

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
      name: "CertiK Security",
      link: "https://www.certik.com/",
    },
  ];

  const auditItems = [
    {
      subtitle: "Security",
      title: "Token Smart Contract",
      link: "https://github.com/dypfinance/contract-security-audit",
    },

    {
      subtitle: "Security",
      title: "New Contracts for Farm,<br/> Stake, Buyback and Governance",
      link: "https://github.com/dypfinance/Buyback-Farm-Stake-Governance-V2/tree/main/Audit",
    },

    {
      subtitle: "Security",
      title: "Farming, Staking and <br/> Governance on Ethereum Network",
      link: "https://github.com/dypfinance/staking-governance-security-audits",
    },

    {
      subtitle: "Security",
      title: "Farming, Bridge and Governance <br/> on Binance Smart Chain",
      link: "https://github.com/dypfinance/DYP-Bridge-and-Staking-on-Binance-Smart-Chain",
    },

    {
      subtitle: "Security",
      title: "Defi Yield Protocol Earn Vault",
      link: "https://github.com/dypfinance/dyp-earn-vault",
    },

    {
      subtitle: "Security",
      title: "Token Lock Vesting",
      link: "https://github.com/dypfinance/token-lock-vesting-contracts/",
    },

    {
      subtitle: "Security",
      title: "Certik Security Oracle",
      link: "https://www.certik.com/projects/dypfinance",
    },
  ];

  return (
    <div className="container-fluid mb-5" style={{marginTop: '7rem'}}>
      <div className="container-lg">
       
        <div className="row m-0 justify-content-between gap-3 align-items-start">
          <div className="col-lg-5 col-xl-5 p-0">
          <Title top={"Our"} bottom={"Security"} align="d-flex flex-row gap-2" />
            <p style={{ textAlign: "justify" }} className="security-desc">
              DeFi Yield Protocol unquestionably values your security. This is
              why we have chosen three reputable security audit companies:
              <b> Blockchain Consilium, CertiK, and PeckShield,</b> to provide
              their services in an effort to avoid any vulnerabilities in the
              development of our smart contracts.
              <br /> In addition, all of our smart contracts are monitored{" "}
              <b>24/7</b> through a Security Oracle, powered by CertiK.<br/><br/> You may
              find our audit results stored in our{" "}
              <a
                href="https://github.com/dypfinance/"
                target="_blank"
                rel="noreferrer"
              >
                repositoriy!
              </a>
            </p>
          </div>
          <div className="col-lg-4 col-xl-4">
            <div className="row flex-column m-0 justify-content-end mb-2">
            <h4 className="sup-asset-title">Supported Assets</h4>
            <span className="auditedby-text">Audited by</span></div>
            <div className="d-flex flex-column gap-3">
            {auditedByArray.length > 0 &&
              auditedByArray.map((item, index) => {
                return (
                  <div key={index} className="audited-item">
                    <a href={item.link} target={'_blank'} rel="noreferrer">
                    <div className="row m-0 gap-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 align-items-center">
                      <img
                        src={require(`../../../assets/AuditedBy/${item.img}`)}
                        alt=""
                        style={{ width: 60 }}
                      />
                      <p className="audited-by-section-item-text p-0" dangerouslySetInnerHTML={{ __html: item.name }} style={{textAlign: 'left', fontSize: 12}}>
                     
                      </p>
                      </div>
                      <span className="viewsite">
                        View site <img src={filledArrow} alt="" />
                      </span>
                    </div></a>
                  </div>
                );
              })}</div>
          </div>
        </div>

          {auditItems.length > 0 &&
            auditItems.slice(0, 1).map((item, index) => {
              return (
                <div key={index} className="security-item mb-3 mt-5">
                  <a href={item.link} target={'_blank'} rel='noreferrer'>
                    <div className="row m-0 justify-content-between gap-2 align-items-center">
                      <span>{item.title}</span>
                      <img src={link} alt="" style={{width: 60}}/>
                    </div>
                  </a>
                </div>
              );
            })}
        <div className="row gap-3 m-0 justify-content-between">
          {auditItems.length > 0 &&
            auditItems.slice(1, auditItems.length).map((item, index) => {
              return (
                <div key={index} className="security-item">
                  <a href={item.link} target={'_blank'} rel='noreferrer'>
                    <div className="row m-0 justify-content-between gap-2 align-items-center">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></span>
                      <img src={link} alt="" style={{width: 60}} />
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Security;
