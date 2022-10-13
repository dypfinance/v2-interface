import React from "react";
import rightArrow from "../../assets/right-arrow.svg";

const BuyDypCard = ({ title, logo, link, totalvids, videos, id }) => {
  return (
    <div className="buydypcard-wrapper">
      <div className="row m-0 gap-2 justify-content-between align-items-center">
        <div className="d-flex gap-2 p-0 align-items-center">
          <img src={logo} alt="" className="buydypcard-logo" />
          <div className="d-flex flex-column gap-1">
            <span className="buydypcard-title">{title}</span>
            <div className="videodesc-wrapper">
              <span className="videodesc">{totalvids}</span>
            </div>
          </div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="pr-0">
          <div className="rightarrow-wrapper">
            <img src={rightArrow} alt="" />
          </div>
        </a>
      </div>
      <div className="accordion-item border-0">
        <h2 className="accordion-header" id={title}>
          <button
            className="pl-0 pr-0 accordion-button viewtutorials"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="false"
            aria-controls={id}
            style={{ fontWeight: 500, background: "white", boxShadow: "none" }}
          >
            View video tutorials
          </button>
        </h2>
        <div
          id={id}
          className="accordion-collapse collapse"
          aria-labelledby={title}
          data-bs-parent="#buydypcards"
        >
           <span
                          dangerouslySetInnerHTML={{ __html: videos }}
                        ></span>
        </div>
      </div>
    </div>
  );
};

export default BuyDypCard;
