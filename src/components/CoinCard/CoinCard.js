import React from "react";
import coinCardIcon from "../../assets/coinCardIcon.svg";


const CoinCard = ({title, stake, description}) => {
  return (
    <div className="coin-card bg-white p-3 d-flex align-items-start position-relative">
      <div className="card-line"></div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
        <div>
        <p className="text-secondary mb-0">{title}</p>
        <h5 className="pt-1">{stake}</h5>
        </div>
      <img src={coinCardIcon} alt="" />
        </div>
        <p className="mb-0 pt-1 text-secondary" style={{fontSize: '13px'}}>{description}</p>
      </div>
    </div>
  );
};

export default CoinCard;