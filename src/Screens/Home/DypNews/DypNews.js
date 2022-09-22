import React from 'react'
import NewsCard from '../../../components/NewsCard/NewsCard'
import Title from '../../../components/Title/Title'
import rightArrow from '../../../assets/right-arrow.svg'
import filledArrow from '../../../assets/filledArrow.svg'
import './_dypnews.scss'

const DypNews = () => {
  return (
    <div className='container-lg'>
        <div className="row dyp-news">
          <div className="col-12 d-flex flex-row justify-content-between align-items-center">   
            <Title top='Announcements' bottom='Lorem Ipsum' />
            <div className="button-group">
              <button className="btn filled-btn mr-3">
                Latest Announcements <img src={rightArrow} alt="" />
              </button>
              <button className="btn outline-btn">
                Latest Events <img src={filledArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="col-12">
            <div
              className="card-wrapper d-flex flex-row justify-content-evenly align-items-center"
              style={{ gap: "15px", marginBottom: "-6rem" }}
            >
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </div>
    </div>
  )
}

export default DypNews