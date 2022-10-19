import React from "react";
import coinCardIcon from "../../assets/coinCardIcon.svg";

const CoinCard = ({ title, stakeAmount, description }) => {
  return (
    <div className="coin-card bg-white p-3 d-flex align-items-start position-relative">
      <div className="card-line"></div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p
              className="text-secondary mb-0"
              style={{ fontSize: "12px", fontWeight: "400" }}
            >
              {title}
            </p>
            <div className="d-flex align-items-center pt-1 gap-1">
              <h4 className="mb-0">{stakeAmount}</h4>
              <h5 className="mb-0">APR</h5>
            </div>
          </div>
          <img
            src={require(`./assets/${
              stakeAmount.includes("20%")
                ? "vault.png"
                : stakeAmount.includes("80%")
                ? "farm.png"
                : "stake.png"
            }`)}
            alt=""
            style={{width: 57, height: 57}}
          />
        </div>
        <p
          className="mb-0 pt-1 text-secondary"
          style={{ fontSize: "10px", fontWeight: "400" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoinCard;
