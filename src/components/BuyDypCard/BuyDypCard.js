import React from "react";
import rightArrow from "../../assets/right-arrow.svg";
import vidthumbnail from "../../assets/vidthumbnail.png";
import trustwallet from "../../assets/trustwallet.svg";
import filledArrow from "../../assets/filledArrow.svg";

const BuyDypCard = ({ title, logo, link, totalvids, videos, id }) => {
  return (
   <div className="col-12 col-lg-3 my-3">
     <div className="buydypcard-wrapper ">
      <div className="row m-0 gap-2 justify-content-between align-items-center">
        <div className="d-flex gap-2 p-0 align-items-center">
          <img src={logo} alt="" className="buydypcard-logo"  />
          <div className="d-flex flex-column gap-1">
            <span className="buydypcard-title">{title}</span>
            <div className="videodesc-wrapper" style={{display: totalvids === "0" ? "none" : ''}}>
              <span className="videodesc">{totalvids}</span>
            </div>
          </div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="pr-0">
          <div className="rightarrow-wrapper">
            <img src={rightArrow} alt=""  />
          </div>
        </a>
      </div>
      <hr style={{marginBottom: 0, marginTop: 10 }} />
      <div className="accordion-item border-0">
        <h2 className="accordion-header" id={title}>
          <button
            className="pl-0 pr-0 accordion-button collapsed viewtutorials pb-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="false"
            aria-controls={id}
            style={{
              fontWeight: 500,
              background: "white",
              boxShadow: "none",
              opacity: totalvids === "0" ? "0.3" : "1",
              pointerEvents: totalvids === "0" ? "none" : "auto",
            }}
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
          {videos.length > 0 &&
            videos.map((item, index) => {
              return (
                <div
                  className="row ml-0 mr-0 gap-2 justify-content-between align-items-start buyitemcard"
                  key={index}
                >
                  <img  src={require(`../../Screens/BuyDyp/assets/vids/${item.thumbnail}`)} alt="" className="vidthumbnail col-5 p-0"  />
                  <div className="d-flex gap-0 flex-column p-0 col-7 px-1">
                <div className="d-flex align-items-center justify-content-between">
                <span>
                    <img
                      src={require(`../../Screens/BuyDyp/assets/buydypItems/${item.image}`)}
                      alt=""
                      className="walletimg"
                    />
                    <span className="walletname">{item.walletName}</span>
                    </span>
                  <img src={filledArrow} alt="" className="p-0 buyitem-arrow"  />

                </div>
                    <a href={item.link} target={"_blank"} rel="noreferrer">
                      <p className="videotitle mb-0 w-100">{item.title.slice(0, 60) + '...'}</p>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
   </div>
  );
};

export default BuyDypCard;
