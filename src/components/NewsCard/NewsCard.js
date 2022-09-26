import React from "react";
import metaverse1 from '../../assets/metaverse-1.png'
import calendar from '../../assets/calendar.svg'
import filledArrow from '../../assets/filledArrow.svg'


const NewsCard = ({title, description, date, image, link}) => {
  return (
    <a target='_blank' href={link} className='text-dark text-decoration-none'>
      <div className="news-card d-flex flex-column justify-content-between p-3 bg-white">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
        className="news-image"
        src={image}
        alt=""
        
      />
      <h3>{title}</h3>
      </div>
      <div className="d-flex flex-column justify-content-between">
      <div dangerouslySetInnerHTML={{__html: description?.slice(0, 100) + '...'}}></div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <img src={calendar} alt="" className="pr-2" />
          <p className="mb-0">{date.slice(0, 10)}</p>
        </div>
        <img src={filledArrow} alt="" />
      </div>
    </div>
    </a>
  );
};

export default NewsCard;