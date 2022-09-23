import React from "react";
import coinCardIcon from "../../assets/coinCardIcon.svg";


const CoinCard = () => {
  return (
    <div className="coin-card bg-white p-3 d-flex align-items-start position-relative">
      <div className="card-line"></div>
      <div>
        <p className="text-secondary">Lorem Ipsum</p>
        <h4>123 Lorem Ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <img src={coinCardIcon} alt="" />
    </div>
  );
};

export default CoinCard;
