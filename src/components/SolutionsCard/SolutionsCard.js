import React from "react";
import { NavLink } from "react-router-dom";

const SolutionsCard = ({ title, image, link, arrow, onMetaverseOpen }) => {
  return (
    <div
      className="solutions-card d-flex justify-content-between align-items-center py-4 px-3"
      data-aos="fade-up"
      data-aos-duration="1000"
      onClick={() => {
        link === "" && onMetaverseOpen();
      }}
    >
      {link !== "" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="d-flex justify-content-between w-100"
          style={{ color: "inherit" }}
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <div className="clipboard d-flex justify-content-center align-items-center">
              <img
                src={`https://cdn.worldofdypians.com/dypius/${image}Icon.png`}
                style={{ width: 40, height: 40 }}
                alt=""
              />
            </div>
            <h4>{title}</h4>
          </div>
          {arrow && (
            <img src={`https://cdn.worldofdypians.com/dypius/filledArrow.svg`} alt="" />
          )}
        </a>
      ) : (
        <div
          className="d-flex justify-content-between w-100"
          style={{ color: "inherit" }}
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <div className="clipboard d-flex justify-content-center align-items-center">
              <img
                src={`https://cdn.worldofdypians.com/dypius/${image}Icon.png`}
                style={{ width: 40, height: 40 }}
                alt=""
              />
            </div>
            <h4>{title}</h4>
          </div>
          {arrow && (
            <img src={`https://cdn.worldofdypians.com/dypius/filledArrow.svg`} alt="" />
          )}
        </div>
      )}
    </div>
  );
};

export default SolutionsCard;
