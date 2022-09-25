import React from "react";
import coinCardIcon from "../../assets/coinCardIcon.svg";


const CoinCard = () => {
  return (
    <div className="coin-card bg-white p-3 d-flex align-items-start position-relative">
      <div className="card-line"></div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
        <div>
        <p className="text-secondary mb-0">Lorem Ipsum</p>
        <h5>123 Lorem Ipsum</h5>
        </div>
      <img src={coinCardIcon} alt="" />
        </div>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    </div>
  );
};

export default CoinCard;