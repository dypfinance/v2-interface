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
            <span
              className="token-valuechange"
              style={{
                color: parseFloat(percentage) > 0 ? "#75cac2" : "#E07070",
              }}
            >
              Value change (24h)
            </span>
            <div
              className="tokenpercentage d-flex gap-2 align-items-center"
              style={{
                background: parseFloat(percentage) > 0 ? "#57B6AB" : "#E07070", padding: '0 5px'
              }}
            >
              {parseFloat(percentage) > 0 ? (
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999999 8C4.86599 4.13401 11.134 4.13401 15 8L8 1L0.999999 8Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1C11.134 4.86599 4.86599 4.86599 1 1L8 8L15 1Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
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
