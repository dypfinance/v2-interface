import React from "react";
import Title from "../../../components/Title/Title";



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



  return (
    <div className="container-fluid mb-5 px-0 px-lg-2" id="security" style={{ marginTop: '7rem' }}>
      <div className="container-lg">

        <div className="row m-0 justify-content-between gap-3 align-items-start">
          <div className="col-lg-5 col-xl-5 p-0">
            <Title top={"Security"} align="d-flex flex-row gap-2" />
            <p className="security-desc">
              Dypius unquestionably values your security. This is
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
                          <div className="d-flex m-0 p-0 align-items-center gap-3">
                            <img
                              src={`https://cdn.worldofdypians.com/dypius/${item.img}`}
                              alt=""
                              style={{ width: 40, height: 40 }}
                            />
                            <p className="audited-by-section-item-text p-0" dangerouslySetInnerHTML={{ __html: item.name }} style={{ textAlign: 'left', fontSize: 12 }}>

                            </p>
                          </div>
                          <span className="viewsite">
                            View site <img src={"https://cdn.worldofdypians.com/dypius/filledArrow.svg"} className="ms-1" alt=""  />
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
                <img src={"https://cdn.worldofdypians.com/dypius/github.svg"} alt='' className="github-logo"  />
              </a>
            </div>

          </div>
        </div>
       
     

      </div>
    </div>
  );
};

export default Security;
