import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph from "../../../assets/DypAssets/dyp-chart2.svg";
import idypGraph from "../assets/avaxGraph.png";
import Success from "../../../components/Success/Success";
import getFormattedNumber from "../../../hooks/getFormattedNumber";

const AvaxTokenomics = () => {
  const [bnbData, setBnbData] = useState("");
  const [avaxData, setavaxData] = useState("");

  const getChainData = async () => {
    await axios
      .get("https://api.dyp.finance/api/dyp-tokenomics")
      .then((data) => {
        setBnbData(data.data.bsc);
        setavaxData(data.data.avax);
      });
  };

  useEffect(() => {
    getChainData();
  }, []);

  return (
    <div className={`container-lg px-0 row m-auto justify-content-between align-items-start `} style={{boxShadow: '0px 32px 64px rgb(17 17 17 / 8%)'}}>
      <div className="col-lg-6 col-xl-6 col-md-5 p-0" >
        <div className="card card-body" style={{top: 0, borderRadius: 0}}>
          <div className="px-2">
            <div className="d-flex flex-column gap-3 mt-3 justify-content-between">
              <div>
                <div className="row m-0 justify-content-between gap-2">
                  <span className="headertitle">
                    DYP on BNB Chain{" "}
                    <a
                      href="https://bscscan.com/tx/0x75e4d998c9f415524423a49d7372252b86ff8c03b9a94e8fe4315077371056c8"
                      target={"_blank"}
                      rel="noreferrer"
                      style={{ color: "#554FD8" }}
                    >
                      <b>April 2021 Genesis</b>
                    </a>
                  </span>
                  <span className="headertitle">24,963,431.00 DYP</span>
                </div>
                <div className="separator2"></div>
                <br />
                <div className="row gap-3 justify-content-between">
                  <div className="d-flex flex-column ">
                    <span
                      className="dypcontract-title"
                      style={{ fontSize: 12 }}
                    >
                      Locked
                    </span>
                    <span className="dypcontract-addr">
                      {getFormattedNumber(bnbData.locked, 2)} DYP
                    </span>
                  </div>

                  <div className="d-flex flex-column">
                    <span
                      className="dypcontract-title"
                      style={{ fontSize: 12 }}
                    >
                      Unlocked
                    </span>
                    <span className="dypcontract-addr">
                      {getFormattedNumber(bnbData.unlocked, 2)} DYP
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="row m-0 justify-content-between gap-2">
                  <span className="headertitle">
                    DYP on Avalanche{" "}
                    <a
                      href="https://snowtrace.io/tx/0xb64b8d10129a763b22cb0be4df661d85d0c15a31c34596f8a906b79b5c69ecf1"
                      target={"_blank"}
                      rel="noreferrer"
                      style={{ color: "#554FD8" }}
                    >
                      <b>July 2021 Genesis</b>
                    </a>
                  </span>
                  <span className="headertitle">24,963,431.00 DYP</span>
                </div>
                <div className="separator2"></div>
                <br />
                <div className="row gap-3 justify-content-between">
                  <div className="d-flex flex-column ">
                    <span
                      className="dypcontract-title"
                      style={{ fontSize: 12 }}
                    >
                      Locked
                    </span>
                    <span className="dypcontract-addr">
                      {getFormattedNumber(avaxData.locked, 2)} DYP
                    </span>
                  </div>

                  <div className="d-flex flex-column">
                    <span
                      className="dypcontract-title"
                      style={{ fontSize: 12 }}
                    >
                      Unlocked
                    </span>
                    <span className="dypcontract-addr">
                      {getFormattedNumber(avaxData.unlocked, 2)} DYP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-6 col-md-7 flex-column justify-content-between p-0">
        <div className="card card-body"  style={{top: 0, borderRadius: 0}}>
          <div className="row m-0 justify-content-center justify-content-lg-end justify-content-xl-end gap-2 align-items-center ">
            <div className="legendborder row m-0 justify-content-center">
            <div className="legendwrapper">
              <div className="d-flex flex-column ">
                <span className="legendTitle">Community</span>
                <span className="legendDesc" style={{ color: "#554FD8" }}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#554FD8" />
                  </svg>
                  31.99%
                </span>
              </div>

              <div className="d-flex flex-column ">
                <span className="legendTitle">Ecosystem Development</span>
                <span className="legendDesc" style={{ color: "#F0603A" }}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#F0603A" />
                  </svg>
                  30.04%
                </span>
              </div>

              <div className="d-flex flex-column ">
                <span className="legendTitle">Bridges</span>
                <span className="legendDesc" style={{ color: "#EE82EE" }}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#EE82EE" />
                  </svg>
                  21.26%
                </span>
              </div>

              <div className="d-flex flex-column ">
                <span className="legendTitle">Liquidity Pools</span>
                <span className="legendDesc" style={{ color: "#57B6AB" }}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#57B6AB" />
                  </svg>
                  16.69%
                </span>
              </div>
            </div>
            <div>
              <img src={idypGraph} alt="" style={{ height: 260 }} />
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvaxTokenomics;
