import React from "react";
import calendar from '../../assets/calendar.svg'
import filledArrow from '../../assets/filledArrow.svg'


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
      <h3>{title.length > 70 ? title.slice(0, 70) + '...' : title}</h3>
      </div>
      <div className="d-flex flex-column justify-content-between">
      <div className="news-description" dangerouslySetInnerHTML={{__html: description?.slice(0, 100) + '...'}}></div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <img src={calendar} alt="" className="pr-2" />
          <p className="mb-0" style={{color: '#7770E0'}}>{date}</p>
        </div>
        <img src={filledArrow} alt="" />
      </div>
    </div>
    </a>
  );
};

export default NewsCard;