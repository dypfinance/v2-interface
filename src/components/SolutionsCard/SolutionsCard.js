import React from "react";

const SolutionsCard = ({ title, image, link }) => {
  return (
    <div
      className="solutions-card d-flex justify-content-between align-items-center py-4 px-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <a href={link} target='_blank' rel="noreferrer" className="d-flex justify-content-between w-100" style={{color: 'inherit'}}>
      <div className="d-flex flex-row align-items-center gap-2">
        <div className="clipboard d-flex justify-content-center align-items-center">
          <img
            src={require(`../../Screens/Support/assets/${image}Icon.png`)}
            style={{ width: 40, height: 40 }}
            alt=""
          />
        </div>
        <h4>{title}</h4>
      </div>
      <img src={require(`../../assets/filledArrow.svg`).default} alt="" /></a>
    </div>
  );
};

export default SolutionsCard;
