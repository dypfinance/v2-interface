import React from "react";

const ProposalCard = ({ title, type, date, icon }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between w-100 px-4">
        <a href='https://app.dypius.com/governance' target="_blank" rel="noreferrer"  className="d-flex align-items-center justify-content-between w-100 px-4" style={{color: 'inherit'}}>
        <div className="d-flex flex-row align-items-center gap-2">
          <img src={icon} alt="" />
          <p className="fw-bold mb-0">{title}</p>
        </div>
        <div className="d-flex gap-4">
          <p className="burn mb-0 d-flex align-items-center">{type}</p>
          <div className="d-flex flex-column">
            <p className="expiry-text text-secondary mb-0">Expires in</p>
            <p className="expiry-date mb-0">3 days</p>
          </div>
        </div></a>
      </div>
      <hr style={{ margin: "12px 0" }} />
    </>
  );
};

export default ProposalCard;
