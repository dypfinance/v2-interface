import React from "react";

const TokenCards = ({ title, price, percentage }) => {
  return (
    <div className="tokenwrapper">
      <div>
        <div className="row m-0 justify-content-between gap-4 align-items-start">
          <div className="d-flex flex-column p-0">
            <span className="tokentitle">{title}</span>
            <span className="tokenprice">${price}</span>
          </div>
          <div className="d-flex flex-column gap-3 p-0">
            <span className="token-valuechange">Value change</span>
            <div className="tokenpercentage">
              <span>{percentage}</span>
            </div>
          </div>
        </div>
        <span className="current-value">Current value</span>
      </div>
    </div>
  );
};

export default TokenCards;
