import React from "react";

const WhyDypCard = ({ title, description, icon }) => {
  return (
    <div
      className="why-card position-relative py-4 py-lg-auto"
      // data-aos="fade-up"
      // data-aos-duration="1000"
    >
      <div className="green-tag"></div>
      <div className="tag d-flex justify-content-center align-items-center">
        <img
          src={require(`../../Screens/Dyp/assets/${icon}.svg`)}
          alt=""
        />
      </div>

      <div className="col-12 ms-auto h-100 d-flex align-items-center px-4 px-lg-auto">
        <div className="d-flex flex-column gap-4 gap-lg-2 align-items-center">
          <h5 className="text-center text-lg-start">{title}</h5>
          <p className="text-secondary" style={{ textAlign: "center" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyDypCard;
