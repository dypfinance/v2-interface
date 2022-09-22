import React from "react";
import metaverse1 from '../../assets/metaverse-1.png'
import calendar from '../../assets/calendar.svg'
import filledArrow from '../../assets/filledArrow.svg'


const NewsCard = () => {
  return (
    <div className="news-card p-3 bg-white">
      <div className="d-flex justify-content-center align-items-center">
        <img
        src={metaverse1}
        alt=""
        style={{ borderRadius: "12px 0", marginBottom: "10px", maxWidth: '360px' }}
      />
      </div>
      <h3>Lorem Ipsum</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu
        lorem, viverra eu tempor quis, commodo a leo. Sed pretium, orci ac
        ultrices semper, diam nulla fringilla est, sed aliquet...
      </p>
      <br />
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <img src={calendar} alt="" className="pr-2" />
          <p>Sept 10, 2022</p>
        </div>
        <img src={filledArrow} alt="" />
      </div>
    </div>
  );
};

export default NewsCard;
