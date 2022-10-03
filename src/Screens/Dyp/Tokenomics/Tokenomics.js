import React, { useState } from "react";
import NoteIcon from "../../../components/NoteIcon/NoteIcon";
import Title from "../../../components/Title/Title";
import Clipboard from "../assets/filledClipboard.svg";
import Graph from "../../../assets/DypAssets/tokenomics-graph.png";
import idypGraph from '../../../assets/DypAssets/idypGraph.png'

const Tokenomics = () => {
  const [tokenomicData, setTokenomicData] = useState("");

  return (
    <div className="position-relative" style={{top: 95}}>
      <div className="row bg-white p-4 m-0 tokenomics-wrapper justify-content-between">
        <div className="row m-0 gap-2">
          <NoteIcon bgFill={"#7770E0"} svgFill={"#fff"} />
          <Title top={"Tokenomics"} />
        </div>
        <div className="row m-0 gap-4">
          <button
            className="btn filled-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => {
              setTokenomicData("idyp");
            }}
          >
            iDYP Tokenomics
          </button>
          <button
            className="btn outline-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => {
              setTokenomicData("dyp");
            }}
          >
            DYP Tokenomics
          </button>
        </div>
      </div>
      <div className="collapse" id="collapseExample">
        <div className="card card-body pb-4">
          {tokenomicData === "dyp" ? (
            <div className="row m-0 justify-content-between gap-2">
              <div className="col-7">
                <div className="circulating-wrapper col-6">
                  <div className="d-flex flex-column gap-3">
                    <span className="circulating-title">
                      Circulating supply
                    </span>
                    <span className="circulating-amount">
                      23,631,124.00 DYP
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="dypcontract-title">
                    DYP Contract Address:
                  </span>
                  <span className="dypcontract-addr">
                    0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17{" "}
                    <img src={Clipboard} alt="" />
                  </span>
                </div>
                <div className="mininginfo-wrapper ">
                  <p className="m-0">
                    30,000,000 DYP have been minted at genesis and will become
                    accessible over the course of 2 years.
                    <br />
                    <b>The 2-year allocation is as follows:</b>
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 mt-3">
                  <div>
                    <span>Community</span>
                    <svg
                      width="653"
                      height="1"
                      viewBox="0 0 653 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="653"
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
                      <div className="col-6">
                        <div className="d-flex flex-column ">
                          <span
                            className="dypcontract-title"
                            style={{ fontSize: 12 }}
                          >
                            Distributed for pool rewards over the next 12 months
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
                            Distributed to Avalanche Network
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
                            Locked for one year to Uniswap liquidity on token
                            launch
                          </span>
                          <span className="dypcontract-addr">
                            200,000.00 DYP
                          </span>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="d-flex flex-column">
                          <span
                            className="dypcontract-title"
                            style={{ fontSize: 12 }}
                          >
                            Distributed to Binance Smart Chain
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
                            Reserved for other pools or chains - Locked on smart
                            contract
                          </span>
                          <span className="dypcontract-addr">
                            2,584,689.00 DYP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>Users</span>
                    <svg
                      width="653"
                      height="1"
                      viewBox="0 0 653 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="653"
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
                      <div className="col-6">
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
                      <div className="col-5">
                        <div className="d-flex flex-column">
                          <span
                            className="dypcontract-title"
                            style={{ fontSize: 12 }}
                          >
                            Burned and removed from the total supply
                          </span>
                          <span className="dypcontract-addr">
                            4,348,469.00 DYP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>Team</span>
                    <svg
                      width="653"
                      height="1"
                      viewBox="0 0 653 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="653"
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
                      <div className="col-6">
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
                      <div className="col-5">
                        <div className="circulating-wrapper">
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
                </div>
              </div>
              <div className="col-4">
                <div
                  id="crypto-widget-CoinList"
                  data-design="modern"
                  data-coin-ids="2669"
                ></div>
                <img src={Graph} alt="" className="w-100" />
              </div>
            </div>
          ) : (
            <div className="row m-0 justify-content-between gap-2">
              <div className="col-7">
                <div className="circulating-wrapper col-6">
                  <div className="d-flex flex-column gap-3">
                    <span className="circulating-title">Max Total Supply</span>
                    <span className="circulating-amount">300,000,000 iDYP</span>
                  </div>
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="dypcontract-title">
                    iDYP Contract Address:
                  </span>
                  <span className="dypcontract-addr">
                    0xbd100d061e120b2c67a24453cf6368e63f1be056
                    <img src={Clipboard} alt="" />
                  </span>
                </div>
                <div className="mininginfo-wrapper ">
                  <p className="m-0">
                    300,000,000 iDYP have been minted at genesis and will become
                    accessible over the course of 10 years.
                    <br />
                    <b>The 10-year allocation is as follows:</b>
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 mt-3">
                  <div>
                    <span>Community</span>
                    <svg
                      width="653"
                      height="1"
                      viewBox="0 0 653 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="653"
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
                      <div className="col-6">
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
                      <div className="col-5">
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
                    <svg
                      width="653"
                      height="1"
                      viewBox="0 0 653 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="653"
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
                      <div className="col-6">
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
                      <div className="col-5">
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
                     <div className="col-6">
                    <span>Team</span>
                    <svg
                      width="353"
                      height="1"
                      viewBox="0 0 653 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="653"
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
                            Vested for 24 months, released monthly
                          </span>
                          <span className="dypcontract-addr">
                            30,000,000 iDYP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <span>Burned</span>
                    <svg
                      width="353"
                      height="1"
                      viewBox="0 0 653 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="653"
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
              <div className="col-4 d-flex flex-column justify-content-between">
                <div>
                  <div
                    id="crypto-widget-CoinList"
                    data-design="modern"
                    data-coin-ids="2669"
                  ></div>
                  <img src={idypGraph} alt="" className="w-100" />
                </div>
                <div className="">
                  <div className="circulating-wrapper m-auto">
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
      </div>
    </div>
  );
};

export default Tokenomics;
