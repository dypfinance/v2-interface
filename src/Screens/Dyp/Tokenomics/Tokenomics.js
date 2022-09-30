import React from "react";
import NoteIcon from "../../../components/NoteIcon/NoteIcon";
import Title from "../../../components/Title/Title";
import Clipboard from "../assets/filledClipboard.svg";
import Graph from "../../../assets/DypAssets/tokenomics-graph.png";

const Tokenomics = () => {
  return (
    <div>
      <div className="row bg-white p-4 m-0 tokenomics-wrapper">
        <NoteIcon bgFill={"#7770E0"} svgFill={"#fff"} />
        <Title top={"Tokenomics"} />
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          idyp
        </button>
      </div>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="row m-0 justify-content-between gap-2">
            <div className="col-7">
              <div className="circulating-wrapper col-6">
                <div className="d-flex flex-column gap-3">
                  <span className="circulating-title">Circulating supply</span>
                  <span className="circulating-amount">23,631,124.00 DYP</span>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <span className="dypcontract-title">DYP Contract Address:</span>
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
              <div>
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
                        <stop stop-color="#7770E0" />
                        <stop
                          offset="1"
                          stop-color="#7770E0"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="row m-0 gap-3 justify-content-between">
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
                        <span className="dypcontract-addr">200,000.00 DYP</span>
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
                        <stop stop-color="#7770E0" />
                        <stop
                          offset="1"
                          stop-color="#7770E0"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="row m-0 gap-3 justify-content-between">
                    <div className="col-6">
                      <div className="d-flex flex-column ">
                        <span
                          className="dypcontract-title"
                          style={{ fontSize: 12 }}
                        >
                          Public Sale
                        </span>
                        <span className="dypcontract-addr">651,531.00 DYP</span>
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
                        <stop stop-color="#7770E0" />
                        <stop
                          offset="1"
                          stop-color="#7770E0"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="row m-0 gap-3 justify-content-between">
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
        
            <div id="crypto-widget-CoinList" data-design="modern" data-coin-ids="2669"></div>
              <img src={Graph} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
