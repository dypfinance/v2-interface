import React, { useEffect } from "react";
const NewsCard = ({title, description, date, image, link}) => {

  

  return (
    <a target='_blank' href={link} className='text-dark text-decoration-none' rel="noreferrer">
      <div className="news-card d-flex flex-column justify-content-between p-3 bg-white">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
        className="news-image"
        src={image}
        alt=""
      />
      <h3>{title?.length > 70 ? title.slice(0, 70) + '...' : title}</h3>
      </div>
      <div className="d-flex flex-column justify-content-between">
      <div id="news-desc" className="news-description" dangerouslySetInnerHTML={{__html: description?.slice(0, 100).replace() + '...'}}></div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <img src={"https://cdn.worldofdypians.com/dypius/calendar.svg"} alt="" className="pr-2"  />
          <p className="mb-0" style={{color: '#7770E0'}}>{date}</p>
        </div>
        <img src={"https://cdn.worldofdypians.com/dypius/filledArrow.svg"} alt=""  />
      </div>
    </div>
    </a>
  );
};

export default NewsCard;