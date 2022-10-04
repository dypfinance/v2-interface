import React from "react";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";

const Security = () => {
  const auditedByArray = [
    {
      img: "peckshield.svg",
      name: "PeckShield",
      link: "https://peckshield.com/",
    },
    {
      img: "blockchain-consilium.svg",
      name: "Blockchain Consilium",
      link: "https://www.blockchainconsilium.com/",
    },
    {
      img: "certik.svg",
      name: "CertiK Security",
      link: "https://www.certik.com/",
    },
  ];

  return (
    <div className="container-fluid mb-5">
      <div className="container-lg">
        <Title top={"Our"} bottom={"Security"} align="d-flex flex-row gap-2" />
        <div className="row m-0 justify-content-between gap-3 align-items-center">
          <div className="col-lg-5 col-xl-5 p-0">
            <p style={{ textAlign: "justify" }}>
              DeFi Yield Protocol unquestionably values your security. This is
              why we have chosen three reputable security audit companies:
              <b> Blockchain Consilium, CertiK, and PeckShield,</b> to provide
              their services in an effort to avoid any vulnerabilities in the
              development of our smart contracts.
              <br /> In addition, all of our smart contracts are monitored{" "}
              <b>24/7</b> through a Security Oracle, powered by CertiK. You may
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
            <h4>Supported Assets</h4>
            {auditedByArray.length > 0 &&
              auditedByArray.map((item, index) => {
                return (
                  <div key={index} className="audited-item">
                    <div className="row m-0 gap-3 justify-content-between align-items-center">
                      <img
                        src={require(`../../../assets/AuditedBy/${item.img}`)}
                        alt=""
                        style={{width: 60}}
                      />
                      <p className="audited-by-section-item-text">
                        {item.name}
                      </p>
                      <p>
                        View site <img src={filledArrow} alt="" />
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
