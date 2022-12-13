import React, { useState, useEffect } from "react";
import axios from "axios";
import EthereumLogo from "../../../assets/ethereum.svg";
import BnbLogo from "../../../assets/bnb.svg";
import AvaxLogo from "../../../assets/avax.svg";
import CountUp from "react-countup";
import AuditedByItem from "../../../components/AuditedByItem/AuditedByItem";
import getFormattedNumber from "../../../hooks/getFormattedNumber";
import Pin from "../../../assets/pin.png";

const ChainlinkData = () => {
  const [totalpaid, setTotalPaid] = useState();

  const getTotalPaidData = async () => {
    await axios.get("https://api.dyp.finance/api/totalpaid").then((data) => {
      setTotalPaid(data.data);
    });
  };

  useEffect(() => {
    getTotalPaidData();
  }, []);

  const auditedByArray = [
    {
      img: "peckshield.svg",
      name: "PeckShield",
    },
    {
      img: "blockchain-consilium.svg",
      name: "Blockchain Consilium",
    },
    {
      img: "certik.svg",
      name: "CertiK",
    },
  ];
  return (
    <div className="container-fluid chainlink-wrapper">
      <div className="container-lg position-relative">
        <div className="row justify-content-between mt-5 gap-3">
          <div className="d-grid">
            <a
              href="https://data.chain.link/"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className="chainlink-data-title">
              Data Feed Provided by Chainlink
              </span>
            </a>
            <div className="row chainlink-row m-0">
              <div className="chainlink-cell">
                <img src={EthereumLogo} alt="eth"   />{" "}
                <div className="d-flex align-items-baseline gap-2">
                  <span className="totalpaid-amount">
                    {getFormattedNumber(
                      totalpaid?.ethTotal.wethPaiOutTotals,
                      0
                    )}
                  </span>
                  <span className="totalpaid-token">ETH</span>
                </div>
              </div>
              <div className="chainlink-cell">
                <img src={BnbLogo} alt="bnb"   />
                <div className="d-flex align-items-baseline gap-2">
                  <span className="totalpaid-amount">
                    {getFormattedNumber(
                      totalpaid?.bnbTotal.wbnbPaidOutTotals,
                      0
                    )}
                  </span>{" "}
                  <span className="totalpaid-token">BNB</span>{" "}
                </div>
              </div>
              <div className="chainlink-cell">
                <img src={AvaxLogo} alt="avax"   />
                <div className="d-flex align-items-baseline gap-2">
                  <span className="totalpaid-amount">
                    {getFormattedNumber(
                      totalpaid?.avaxTotal.avaxPaidOutTotals,
                      0
                    )}
                  </span>
                  {""}
                  <span className="totalpaid-token">AVAX</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid" style={{ width: 220 }}>
            <span className="chainlink-data-title" style={{whiteSpace: 'pre'}}>Total rewards paid to users ($USD)</span>
            <div className="row chainlink-row m-0">
              <div className="chainlink-cell">
                <div className="d-flex align-items-baseline gap-2">
                  <span className="totalpaid-amount">
                    <CountUp
                      style={{ fontSize: 26, fontWeight: 300 }}
                      start={totalpaid?.totalPaidInUsd - 400.0}
                      end={totalpaid?.totalPaidInUsd}
                      duration={120}
                      separator=","
                      decimals={2}
                      prefix="$"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid" style={{ gap: 15 }}>
            <span className="chainlink-data-title">Audited by</span>
            <div className="row audit">
              {auditedByArray.map((item, index) => {
                return (
                  <AuditedByItem
                    key={index}
                    imgName={item.img}
                    text={item.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <img src={Pin} className="pin"   />{" "}
      </div>
    </div>
  );
};

export default ChainlinkData;
