import React from "react";

const GovCards = ({ title, description, number }) => {
  return (
    <div
      className="gov-card position-relative py-4 py-lg-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row gap-3 m-0 justify-content-between align-items-center">
        <div className="d-flex flex-column gap-2 pl-0">
          <div className="green-tag"></div>
          <div className="tag d-flex justify-content-center align-items-center">
            <img
              src={require(`../../Screens/Dyp/assets/clipboard.svg`).default}
              alt=""
            />
          </div>
          <span className="connectwallet-text">{title}</span>
        </div>
        <h1 className="m-0 govnr">{number}</h1>
      </div>
      <div className="col-12 ms-auto d-flex align-items-center pl-0">
        <div className="d-flex flex-column gap-5 gap-lg-2 align-items-center" style={{maxWidth: 275}}>
          <p className="text-secondary" style={{fontSize: 14}}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GovCards;
