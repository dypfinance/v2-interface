import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../../../components/Title/Title";
import { shortAddress } from "../../../hooks/shortAddress";
import useWindowSize from "../../../hooks/useWindowSize";
import tokenomicsIcon from "../../../assets/tokenomicsIcon.svg";
import Success from "../../../components/Success/Success";

import getFormattedNumber from "../../../hooks/getFormattedNumber";
import Web3 from "web3";
import { TOKEN_ABI } from "./tokenAbi";
import OutsideClickHandler from "react-outside-click-handler";


const NewTokenomics = ({ bottom, showBtn, isDyp, isAbout }) => {
  const [tokenomicData, setTokenomicData] = useState("dyp");
  const [toggledyp, setToggleDyp] = useState(showBtn === false ? true : false);
  const [toggleIdyp, setToggleIDyp] = useState(false);
  const [dypiusSupply, setdypiusSupply] = useState(0);
  const [tokenToolTip, setTokenTooltip] = useState(false);

  // useEffect(() => {
  //   if (toggleIdyp === false && toggledyp === false) {
  //     setTokenomicData("");
  //   }
  // }, [toggleIdyp, toggledyp]);

  useEffect(() => {
    if (isDyp === true || isAbout === true) {
      setTokenomicData("dyp");
    }

    if (isDyp === false) {
      setTokenomicData("idyp");
    }
  }, [isDyp, isAbout]);

  const windowSize = useWindowSize();
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dypSupply, setDypSupply] = useState("0.0");
  const [dypSupplyv1, setDypSupplyv1] = useState("0.0");

  const [idypSupply, setiDypSupply] = useState("0.0");
  const [totalSupply, setTotalSupply] = useState("0.0");
  const [dypVersion, setDypVersion] = useState("v2");

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      setCopied(false);
    }, 2000);
  };

  const getCirculatingSupplyiDYP = async () => {
    try {
      await axios
        .get("https://api.dyp.finance/api/circulating-supply-idyp")
        .then((data) => {
          setiDypSupply(data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  async function getCirculatingSupplyDYPv1() {
    try {
      await axios
        .get("https://api.dyp.finance/api/circulating-supply")
        .then((data) => {
          setDypSupplyv1(data.data);
        });
      //console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  const getTotalSupply = async () => {
    const infuraWeb3 = new Web3(
      "https://mainnet.infura.io/v3/94608dc6ddba490697ec4f9b723b586e"
    );

    const tokenContract = new infuraWeb3.eth.Contract(
      TOKEN_ABI,
      "0x39b46b212bdf15b42b166779b9d1787a68b9d0c3"
    );
    const result = await tokenContract.methods
      .totalSupply()
      .call()
      .catch((e) => {
        console.log(e);
      });
    setdypiusSupply(result / 1e18);
  };

  async function getCirculatingSupplyDYP() {
    try {
      await axios
        .get("https://api.dyp.finance/api/circulating-supply-new")
        .then((data) => {
          setDypSupply(data.data);
        });
      //console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCirculatingSupplyiDYP();
    getCirculatingSupplyDYP();
    getTotalSupply();
    getCirculatingSupplyDYPv1();
  }, []);

  return (
    <>
      <div
        className={`outer-wrapper container-lg px-0 ${
          isDyp === true
            ? "dypTokenomics"
            : isDyp === false
            ? "iDypTokenomics"
            : isAbout === true
            ? null
            : null
        } ${toggledyp === true || toggleIdyp === true ? "dypborder" : ""}`}
        id="tokenomics"
      >
        <div className="row bg-white p-4 m-0 tokenomics-wrapper justify-content-between">
          <div className="row m-0 align-items-center justify-content-center gap-2 pl-0">
            <div className="tokenomics-icon d-flex justify-content-center align-items-center">
              <img src={tokenomicsIcon} alt="" />
            </div>
            <Title top={"Tokenomics"} />
          </div>
          <div className="row m-0 gap-4 pl-0 col-lg-3 col-xl-3 align-items-center justify-content-end px-0 px-lg-2 py-3 py-lg-0">
            {isDyp === true ? (
              <button
                className={`${
                  isAbout === true ? "d-none" : "d-flex"
                } tokenomics-btn btn outline-btn justify-content-center align-items-center `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={
                  tokenomicData === "idyp"
                    ? "#collapseExample3"
                    : "#collapseExample"
                }
                style={{ display: showBtn === true ? "block" : "none" }}
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={() => {
                  // setTokenomicData("dyp");
                  setToggleDyp(!toggledyp);
                  setToggleIDyp(!toggleIdyp);
                  // setToggleIDyp(false);
                }}
              >
                DYP Tokenomics
                <img
                  src={toggledyp === true ? "https://cdn.worldofdypians.com/dypius/minus.svg" : "https://cdn.worldofdypians.com/dypius/purpleArrow-down.svg"}
                  alt=""
                  className="ml-2"
                />
              </button>
            ) : (
              <button
                className={
                  toggleIdyp === true ? "btn outline-btn" : "btn filled-btn"
                }
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={
                  tokenomicData === "dyp"
                    ? "#collapseExample3"
                    : "#collapseExample"
                }
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={() => {
                  setTokenomicData("idyp");
                  setToggleIDyp(!toggleIdyp);
                  setToggleDyp(false);
                }}
              >
                iDYP Tokenomics
                <img
                  src={toggleIdyp === true ? "https://cdn.worldofdypians.com/dypius/purpleArrow-down.svg" : "https://cdn.worldofdypians.com/dypius/whiteArrow-up.svg"}
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
        <div
          className={`collapse ${showBtn === false ? "show" : ""}`}
          id="collapseExample"
        >
          {dypVersion === "v2" ? (
            <div className="card card-body pb-4">
              {tokenomicData === "dyp" ? (
                <>
                  <div className="row m-0 justify-content-between align-items-center align-items-lg-end gap-2">
                    <div className="col-xl-7 col-lg-7 px-2">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <button
                          className={`btn ${
                            dypVersion === "v2" ? "filled-btn" : "outline-btn"
                          }`}
                          onClick={() => setDypVersion("v2")}
                        >
                          DYP v2
                        </button>
                        <button
                          className={`btn ${
                            dypVersion === "v1" ? "filled-btn" : "outline-btn"
                          }`}
                          onClick={() => setDypVersion("v1")}
                        >
                          DYP v1
                        </button>
                      </div>
                      <div className="d-flex flex-column mt-0">
                        <span className="dypcontract-title">
                          DYP v2 Contract Address:
                        </span>
                        <span
                          className="dypcontract-addr position-relative"
                          style={{ width: "fit-content" }}
                        >
                          {windowSize.width < 526 ? (
                            <div
                              className="dyp-sc-address"
                              onClick={() => {
                                setTokenTooltip(true);
                              }}
                            >
                              <span>
                                {shortAddress(
                                  "0x39b46b212bdf15b42b166779b9d1787a68b9d0c3"
                                )}
                              </span>
                            </div>
                          ) : (
                            <div
                              className="dyp-sc-address"
                              onClick={() => {
                                setTokenTooltip(true);
                              }}
                            >
                              <span>
                                0x39b46b212bdf15b42b166779b9d1787a68b9d0c3
                              </span>
                            </div>
                          )}
                          <img
                            src={"https://cdn.worldofdypians.com/dypius/filledClipboard.svg"}
                            alt=""
                            onClick={() => {
                              handleCopy(
                                "0x39b46b212bdf15b42b166779b9d1787a68b9d0c3"
                              );
                            }}
                            style={{
                              cursor: "pointer",
                              display: copied === true ? "none" : "",
                            }}
                          />
                          {tokenToolTip === true && (
                            <div className="position-absolute tooltip-tokenomics">
                              <OutsideClickHandler
                                onOutsideClick={() => {
                                  setTokenTooltip(false);
                                }}
                              >
                                <div
                                  className="tooltip d-flex justify-content-center p-2"
                                  style={{ opacity: 1, width: 145 }}
                                >
                                  <div className="d-flex flex-column gap-2 align-items-start">
                                    <a
                                      href="https://etherscan.io/token/0x39b46b212bdf15b42b166779b9d1787a68b9d0c3"
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => {
                                        setTokenTooltip(false);
                                      }}
                                    >
                                      <h6 className="bottomitems m-0">
                                        <img src={"https://cdn.worldofdypians.com/dypius/arrow-up.svg"} alt="" />
                                        DYP Ethereum
                                      </h6>
                                    </a>
                                    <a
                                      href="https://basescan.org/token/0x5b2124d427fac9c80c902cbdd74b03dd85d7d3fe"
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => {
                                        setTokenTooltip(false);
                                      }}
                                    >
                                      <h6 className="bottomitems m-0">
                                        <img src={"https://cdn.worldofdypians.com/dypius/arrow-up.svg"} alt="" />
                                        DYP Base
                                      </h6>
                                    </a>

                                    <a
                                      href="https://bscscan.com/token/0x1a3264f2e7b1cfc6220ec9348d33ccf02af7aaa4"
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => {
                                        setTokenTooltip(false);
                                      }}
                                    >
                                      <h6 className="bottomitems m-0">
                                        <img src={"https://cdn.worldofdypians.com/dypius/arrow-up.svg"} alt="" />
                                        DYP BNB Chain
                                      </h6>
                                    </a>

                                    <a
                                      href="https://snowtrace.io/token/0x1a3264f2e7b1cfc6220ec9348d33ccf02af7aaa4"
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => {
                                        setTokenTooltip(false);
                                      }}
                                    >
                                      <h6 className="bottomitems m-0">
                                        <img src={"https://cdn.worldofdypians.com/dypius/arrow-up.svg"} alt="" />
                                        DYP Avalanche
                                      </h6>
                                    </a>
                                  </div>
                                </div>
                              </OutsideClickHandler>
                            </div>
                          )}
                          {copied === true && (
                            <span
                              className="d-inline-block"
                              tabindex="0"
                              data-toggle="tooltip"
                              title="Copied"
                              data-placement="top"
                            >
                              <Success bgColor={"#544ED5"} svgColor={"#FFF"} />
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="mininginfo-wrapper d-flex flex-column gap-4">
                        <p className="m-0">
                          Dypius's native token is DYP, helping power the Dypius
                          ecosystem. It's use cases are:
                        </p>
                        <ul>
                          <li>
                            Governance (for decentralized community voting)
                          </li>
                          <li>Staking</li>
                          <li>Premium Subscription</li>
                          <li>DYP Locker</li>
                          <li>DYP News</li>
                          <li>DYP Launchpad</li>
                          <li>Mini-games</li>
                          <li>World of Dypians Events</li>
                        </ul>
                        <p className="mb-0">
                          All the mentioned use cases are accessible exclusively
                          for DYP token holders. The migration process for DYP
                          has been active since November 8, 2023, allowing the
                          transition of DYP v1 tokens to DYP v2 through the
                          &nbsp;
                          <a
                            href="https://app.dypius.com/migration"
                            rel="noreferrer"
                            target="_blank"
                            style={{
                              color: "inherit",
                            }}
                          >
                            <u>
                              <b>Dypius Migration.</b>
                            </u>
                          </a>
                        </p>
                        <p className="mb-0">
                          DYP is a fair launch, community-governed project.
                          There was no seed round, no private round, and no
                          pre-sale - 91.97% of the total supply was reserved for
                          the Dypius community.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 px-0 px-lg-2">
                      <div className="circulating-wrapper w-100 mb-3">
                        <div className="d-flex flex-column gap-3">
                          <span className="circulating-title">
                            Total Supply
                          </span>
                          <span className="circulating-amount">
                            {getFormattedNumber(dypiusSupply, 0)} DYP
                          </span>
                        </div>
                      </div>
                      <div className="circulating-wrapper w-100 mb-3">
                        <div className="d-flex flex-column gap-3">
                          <span className="circulating-title">
                            Circulating supply
                          </span>
                          <span className="circulating-amount">
                            {getFormattedNumber(dypSupply, 0)} DYP
                          </span>
                        </div>
                      </div>
                      <div className="mininginfo-wrapper d-flex flex-column gap-2">
                        <p className="mb-0">
                          <b>DYP Migration - Swap Ratio</b>
                        </p>
                        <p className="mb-0">
                          The swap ratio for DYP V2 varies depending on the
                          respective blockchain.
                        </p>
                        <div className="d-flex align-items-center gap-2">
                          <img src={"https://cdn.worldofdypians.com/dypius/ethIcon.svg"} alt="" />
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            1 DYP ERC20 - 6 DYP ERC20 V2
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <img src={"https://cdn.worldofdypians.com/dypius/bnbIcon.svg"} alt="" />
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            1 DYP BEP20 - 1 DYP ERC20 V2
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <img src={"https://cdn.worldofdypians.com/dypius/avaxIcon.svg"} alt="" />
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            1 DYP ARC20 - 1 DYP ERC20 V2
                          </p>
                        </div>
                      </div>
                      {/* <div
                 id="crypto-widget-CoinList"
                 data-design="modern"
                 data-coin-ids="2669"
               ></div> */}
                      {/* <img src={Graph} alt="" className="w-100" /> */}
                    </div>
                  </div>
                  <div className="">
                    <div className="circulating-wrapper w-100">
                      <div className="d-flex flex-column gap-3">
                        <span
                          className="circulating-title"
                          // style={{ fontSize: 12 }}
                        >
                          No additional tokens can be minted
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="row m-0 justify-content-between gap-2">
                  <div className="col-lg-7 col-xl-7 col-md-7">
                    <div className="d-flex flex-column mt-0">
                      <span className="dypcontract-title">
                        iDYP Contract Address:
                      </span>
                      <span className="dypcontract-addr">
                        {windowSize.width < 526
                          ? shortAddress(
                              "0xbd100d061e120b2c67a24453cf6368e63f1be056"
                            )
                          : "0xbd100d061e120b2c67a24453cf6368e63f1be056"}

                        <img
                          src={"https://cdn.worldofdypians.com/dypius/filledClipboard.svg"}
                          alt=""
                          onClick={() => {
                            handleCopy(
                              "0xbd100d061e120b2c67a24453cf6368e63f1be056"
                            );
                          }}
                          style={{
                            cursor: "pointer",
                            display: copied === true ? "none" : "",
                          }}
                        />
                        {copied === true && (
                          <span
                            className="d-inline-block"
                            tabindex="0"
                            data-toggle="tooltip"
                            title="Copied"
                            data-placement="top"
                          >
                            <Success bgColor={"#544ED5"} svgColor={"#FFF"} />
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="mininginfo-wrapper ">
                      <p className="m-0">
                        300,000,000 iDYP have been minted at genesis and will
                        become accessible over the course of 10 years.
                        <br />
                        <b>The 10-year allocation is as follows:</b>
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-3">
                      <div>
                        <span>Community</span>
                        <br />
                        <svg
                          width="353"
                          height="1"
                          viewBox="0 0 653 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="353"
                            height="1"
                            fill="url(#paint0_linear_95_5424)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_95_5424"
                              x1="0"
                              y1="0"
                              x2="653"
                              y2="1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7770E0" />
                              <stop
                                offset="1"
                                stopColor="#7770E0"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="row gap-3 justify-content-between">
                          <div className="col-lg-6 col-xl-6 col-md-6">
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Airdrop to eligible users
                              </span>
                              <span className="dypcontract-addr">
                                5,000,000 iDYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed for liquidity on DEX
                              </span>
                              <span className="dypcontract-addr">
                                5,550,000 iDYP
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-5 col-xl-5 col-md-5">
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed for pool rewards
                              </span>
                              <span className="dypcontract-addr">
                                20,640,000 iDYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Allocation for eligible users
                              </span>
                              <span className="dypcontract-addr">
                                1,000,000 iDYP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span>Reserves, Marketing, Ecosystem</span>
                        <br />
                        <svg
                          width="353"
                          height="1"
                          viewBox="0 0 653 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="353"
                            height="1"
                            fill="url(#paint0_linear_95_5424)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_95_5424"
                              x1="0"
                              y1="0"
                              x2="653"
                              y2="1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7770E0" />
                              <stop
                                offset="1"
                                stopColor="#7770E0"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="row gap-3 justify-content-between">
                          <div className="col-lg-6 col-xl-6 col-md-6">
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Company Reserve Vested for 60 months, released
                                monthly
                              </span>
                              <span className="dypcontract-addr">
                                155,967,000 iDYP
                              </span>
                            </div>
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Marketing
                              </span>
                              <span className="dypcontract-addr">
                                15,000,000 iDYP
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-5 col-xl-5 col-md-5">
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Ecosystem Vested for 60 months, released monthly
                              </span>
                              <span className="dypcontract-addr">
                                66,843,000 iDYP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-between">
                        <div className="col-lg-6 col-xl-6 col-md-6">
                          <span>Team</span>
                          <br />
                          <svg
                            width="353"
                            height="1"
                            viewBox="0 0 653 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="353"
                              height="1"
                              fill="url(#paint0_linear_95_5424)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_95_5424"
                                x1="0"
                                y1="0"
                                x2="653"
                                y2="1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7770E0" />
                                <stop
                                  offset="1"
                                  stopColor="#7770E0"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="row gap-3 justify-content-between">
                            <div className="">
                              <div className="d-flex flex-column ">
                                <span
                                  className="dypcontract-title"
                                  style={{ fontSize: 12 }}
                                >
                                  Vested for 10 years, released monthly
                                </span>
                                <span className="dypcontract-addr">
                                  30,000,000 iDYP
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 col-md-5">
                          <span>Burned</span>
                          <br />
                          <svg
                            width="353"
                            height="1"
                            viewBox="0 0 653 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="353"
                              height="1"
                              fill="url(#paint0_linear_95_5424)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_95_5424"
                                x1="0"
                                y1="0"
                                x2="653"
                                y2="1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7770E0" />
                                <stop
                                  offset="1"
                                  stopColor="#7770E0"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="row gap-3 justify-content-between">
                            <div className="">
                              <div className="d-flex flex-column ">
                                <span
                                  className="dypcontract-title"
                                  style={{ fontSize: 12 }}
                                >
                                  Burned and removed from the total supply
                                </span>
                                <span className="dypcontract-addr">
                                  1,325,392 iDYP
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-4 flex-column justify-content-between">
                    <div className="circulating-wrapper w-100 mb-3">
                      <div className="d-flex flex-column gap-3">
                        <span className="circulating-title">
                          Circulating supply
                        </span>
                        <span className="circulating-amount">
                          {getFormattedNumber(idypSupply, 6)} iDYP
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        id="crypto-widget-CoinList"
                        data-design="modern"
                        data-coin-ids="9517"
                      ></div>
                      <img src={"https://cdn.worldofdypians.com/dypius/idyp-chart2.svg"} alt="" className="w-100" />
                    </div>
                    <div className="">
                      <div className="circulating-wrapper w-100 mb-3">
                        <div className="d-flex flex-column gap-3">
                          <span
                            className="circulating-title"
                            style={{ fontSize: 12 }}
                          >
                            No additional tokens can be minted
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="card card-body pb-4">
              {tokenomicData === "dyp" ? (
                <div className="row m-0 justify-content-between gap-2">
                  <div className="col-xl-7 col-lg-7 px-2">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <button
                        className={`btn ${
                          dypVersion === "v2" ? "filled-btn" : "outline-btn"
                        }`}
                        onClick={() => setDypVersion("v2")}
                      >
                        DYP v2
                      </button>
                      <button
                        className={`btn ${
                          dypVersion === "v1" ? "filled-btn" : "outline-btn"
                        }`}
                        onClick={() => setDypVersion("v1")}
                      >
                        DYP v1
                      </button>
                    </div>
                    <div className="d-flex flex-column mt-0">
                      <span className="dypcontract-title">
                        DYP v1 Contract Address:
                      </span>
                      <span className="dypcontract-addr">
                        {windowSize.width < 526 ? (
                          <a
                            href="https://etherscan.io/token/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17"
                            target={"_blank"}
                            rel="noreferrer"
                            style={{ color: "inherit" }}
                          >
                            <u>
                              {shortAddress(
                                "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17"
                              )}
                            </u>
                          </a>
                        ) : (
                          <a
                            href="https://etherscan.io/token/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17"
                            target={"_blank"}
                            rel="noreferrer"
                            style={{ color: "inherit" }}
                          >
                            <u>0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17</u>
                          </a>
                        )}
                        <img
                          src={"https://cdn.worldofdypians.com/dypius/filledClipboard.svg"}
                          alt=""
                          onClick={() => {
                            handleCopy(
                              "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17"
                            );
                          }}
                          style={{
                            cursor: "pointer",
                            display: copied === true ? "none" : "",
                          }}
                        />
                        {copied === true && (
                          <span
                            className="d-inline-block"
                            tabindex="0"
                            data-toggle="tooltip"
                            title="Copied"
                            data-placement="top"
                          >
                            <Success bgColor={"#544ED5"} svgColor={"#FFF"} />
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="mininginfo-wrapper ">
                      <p className="m-0">
                        30,000,000 DYP have been minted at{" "}
                        <a
                          href="https://etherscan.io/tx/0x0a579e87c2615ba29d7a3f9c0bc1491415a44e0fa2e9dd40ef5fc40dcb769c4f"
                          target={"_blank"}
                          rel="noreferrer"
                          style={{ color: "#554FD8" }}
                        >
                          <b>Genesis</b>
                        </a>{" "}
                        and will become accessible over the course of 2 years.
                        <br />
                        <b>The 2-year allocation is as follows:</b>
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-3">
                      <div>
                        <span style={{ color: "#554fd8" }}>Community</span>
                        <br />
                        <svg
                          width="353"
                          height="1"
                          viewBox="0 0 653 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="353"
                            height="1"
                            fill="url(#paint0_linear_95_5424)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_95_5424"
                              x1="0"
                              y1="0"
                              x2="653"
                              y2="1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7770E0" />
                              <stop
                                offset="1"
                                stopColor="#7770E0"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="row gap-3 justify-content-between">
                          <div className="col-lg-6 col-xl-6 col-md-6">
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed for pool rewards over the next 12
                                months
                              </span>
                              <span className="dypcontract-addr">
                                12,000,000.00 DYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed to Avalanche Chain
                              </span>
                              <span className="dypcontract-addr">
                                2,090,000.00 DYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Locked for one year to Uniswap liquidity on
                                token launch
                              </span>
                              <span className="dypcontract-addr">
                                200,000.00 DYP
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-5 col-xl-5 col-md-5">
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed to BNB Chain
                              </span>
                              <span className="dypcontract-addr">
                                4,500,000.00 DYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed for providing liquidity to CEX and
                                Marketing
                              </span>
                              <span className="dypcontract-addr">
                                1,214,111.00 DYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Reserved for other pools or chains
                              </span>
                              <span className="dypcontract-addr">
                                2,584,689.00 DYP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span style={{ color: "#554fd8" }}>Users</span>
                        <br />
                        <svg
                          width="353"
                          height="1"
                          viewBox="0 0 653 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="353"
                            height="1"
                            fill="url(#paint0_linear_95_5424)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_95_5424"
                              x1="0"
                              y1="0"
                              x2="653"
                              y2="1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7770E0" />
                              <stop
                                offset="1"
                                stopColor="#7770E0"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="row gap-3 justify-content-between">
                          <div className="col-lg-6 col-xl-6 col-md-6">
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Public Sale
                              </span>
                              <span className="dypcontract-addr">
                                651,531.00 DYP
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-5 col-xl-5 col-md-5">
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Burned
                              </span>
                              <span className="dypcontract-addr">
                                4,348,469.00 DYP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span style={{ color: "#554fd8" }}>Team</span>
                        <br />
                        <svg
                          width="353"
                          height="1"
                          viewBox="0 0 653 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="353"
                            height="1"
                            fill="url(#paint0_linear_95_5424)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_95_5424"
                              x1="0"
                              y1="0"
                              x2="653"
                              y2="1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7770E0" />
                              <stop
                                offset="1"
                                stopColor="#7770E0"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="row gap-3 justify-content-between">
                          <div className="col-lg-6 col-xl-6 col-md-6">
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Vested for 24 months, released monthly
                              </span>
                              <span className="dypcontract-addr">
                                2,411,200.00 DYP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-4 px-0 px-lg-2">
                    <div className="circulating-wrapper w-100 mb-3">
                      <div className="d-flex flex-column gap-3">
                        <span className="circulating-title">
                          Circulating supply
                        </span>
                        <span className="circulating-amount">
                          {getFormattedNumber(dypSupplyv1, 6)} DYP
                        </span>
                      </div>
                    </div>
                    <div
                      id="crypto-widget-CoinList"
                      data-design="modern"
                      data-coin-ids="2669"
                    ></div>
                    <img src={"https://cdn.worldofdypians.com/dypius/dyp-chart2.svg"} alt="" className="w-100" />
                    <div className="">
                      <div className="circulating-wrapper w-100">
                        <div className="d-flex flex-column gap-3">
                          <span
                            className="circulating-title"
                            // style={{ fontSize: 12 }}
                          >
                            No additional tokens can be minted
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row m-0 justify-content-between gap-2">
                  <div className="col-lg-7 col-xl-7 col-md-7">
                    <div className="d-flex flex-column mt-0">
                      <span className="dypcontract-title">
                        iDYP Contract Address:
                      </span>
                      <span className="dypcontract-addr">
                        {windowSize.width < 526
                          ? shortAddress(
                              "0xbd100d061e120b2c67a24453cf6368e63f1be056"
                            )
                          : "0xbd100d061e120b2c67a24453cf6368e63f1be056"}

                        <img
                          src={"https://cdn.worldofdypians.com/dypius/filledClipboard.svg"}
                          alt=""
                          onClick={() => {
                            handleCopy(
                              "0xbd100d061e120b2c67a24453cf6368e63f1be056"
                            );
                          }}
                          style={{
                            cursor: "pointer",
                            display: copied === true ? "none" : "",
                          }}
                        />
                        {copied === true && (
                          <span
                            className="d-inline-block"
                            tabindex="0"
                            data-toggle="tooltip"
                            title="Copied"
                            data-placement="top"
                          >
                            <Success bgColor={"#544ED5"} svgColor={"#FFF"} />
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="mininginfo-wrapper ">
                      <p className="m-0">
                        300,000,000 iDYP have been minted at genesis and will
                        become accessible over the course of 10 years.
                        <br />
                        <b>The 10-year allocation is as follows:</b>
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-3">
                      <div>
                        <span>Community</span>
                        <br />
                        <svg
                          width="353"
                          height="1"
                          viewBox="0 0 653 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="353"
                            height="1"
                            fill="url(#paint0_linear_95_5424)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_95_5424"
                              x1="0"
                              y1="0"
                              x2="653"
                              y2="1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7770E0" />
                              <stop
                                offset="1"
                                stopColor="#7770E0"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="row gap-3 justify-content-between">
                          <div className="col-lg-6 col-xl-6 col-md-6">
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Airdrop to eligible users
                              </span>
                              <span className="dypcontract-addr">
                                5,000,000 iDYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed for liquidity on DEX
                              </span>
                              <span className="dypcontract-addr">
                                5,550,000 iDYP
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-5 col-xl-5 col-md-5">
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Distributed for pool rewards
                              </span>
                              <span className="dypcontract-addr">
                                20,640,000 iDYP
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Allocation for eligible users
                              </span>
                              <span className="dypcontract-addr">
                                1,000,000 iDYP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span>Reserves, Marketing, Ecosystem</span>
                        <br />
                        <svg
                          width="353"
                          height="1"
                          viewBox="0 0 653 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="353"
                            height="1"
                            fill="url(#paint0_linear_95_5424)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_95_5424"
                              x1="0"
                              y1="0"
                              x2="653"
                              y2="1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7770E0" />
                              <stop
                                offset="1"
                                stopColor="#7770E0"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="row gap-3 justify-content-between">
                          <div className="col-lg-6 col-xl-6 col-md-6">
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Company Reserve Vested for 60 months, released
                                monthly
                              </span>
                              <span className="dypcontract-addr">
                                155,967,000 iDYP
                              </span>
                            </div>
                            <div className="d-flex flex-column ">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Marketing
                              </span>
                              <span className="dypcontract-addr">
                                15,000,000 iDYP
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-5 col-xl-5 col-md-5">
                            <div className="d-flex flex-column">
                              <span
                                className="dypcontract-title"
                                style={{ fontSize: 12 }}
                              >
                                Ecosystem Vested for 60 months, released monthly
                              </span>
                              <span className="dypcontract-addr">
                                66,843,000 iDYP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-between">
                        <div className="col-lg-6 col-xl-6 col-md-6">
                          <span>Team</span>
                          <br />
                          <svg
                            width="353"
                            height="1"
                            viewBox="0 0 653 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="353"
                              height="1"
                              fill="url(#paint0_linear_95_5424)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_95_5424"
                                x1="0"
                                y1="0"
                                x2="653"
                                y2="1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7770E0" />
                                <stop
                                  offset="1"
                                  stopColor="#7770E0"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="row gap-3 justify-content-between">
                            <div className="">
                              <div className="d-flex flex-column ">
                                <span
                                  className="dypcontract-title"
                                  style={{ fontSize: 12 }}
                                >
                                  Vested for 10 years, released monthly
                                </span>
                                <span className="dypcontract-addr">
                                  30,000,000 iDYP
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 col-md-5">
                          <span>Burned</span>
                          <br />
                          <svg
                            width="353"
                            height="1"
                            viewBox="0 0 653 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="353"
                              height="1"
                              fill="url(#paint0_linear_95_5424)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_95_5424"
                                x1="0"
                                y1="0"
                                x2="653"
                                y2="1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7770E0" />
                                <stop
                                  offset="1"
                                  stopColor="#7770E0"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="row gap-3 justify-content-between">
                            <div className="">
                              <div className="d-flex flex-column ">
                                <span
                                  className="dypcontract-title"
                                  style={{ fontSize: 12 }}
                                >
                                  Burned and removed from the total supply
                                </span>
                                <span className="dypcontract-addr">
                                  1,325,392 iDYP
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-4 flex-column justify-content-between">
                    <div className="circulating-wrapper w-100 mb-3">
                      <div className="d-flex flex-column gap-3">
                        <span className="circulating-title">
                          Circulating supply
                        </span>
                        <span className="circulating-amount">
                          {getFormattedNumber(idypSupply, 6)} iDYP
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        id="crypto-widget-CoinList"
                        data-design="modern"
                        data-coin-ids="9517"
                      ></div>
                      <img src={"https://cdn.worldofdypians.com/dypius/idyp-chart2.svg"} alt="" className="w-100" />
                    </div>
                    <div className="">
                      <div className="circulating-wrapper w-100 mb-3">
                        <div className="d-flex flex-column gap-3">
                          <span
                            className="circulating-title"
                            style={{ fontSize: 12 }}
                          >
                            No additional tokens can be minted
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* {tokenomicData === "dyp" && toggledyp === true && <AvaxTokenomics />} */}
    </>
  );
};

export default NewTokenomics;
