import React, { useEffect, useState } from 'react'
import NewsCard from '../../../components/NewsCard/NewsCard'
import Title from '../../../components/Title/Title'
import rightArrow from '../../../assets/right-arrow.svg'
import filledArrow from '../../../assets/filledArrow.svg'
import axios from 'axios'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { RingLoader } from 'react-spinners'
import prevArrow from '../../../assets/prevArrow.svg'
import nextArrow from '../../../assets/nextArrow.svg'

import './_dypnews.scss'
import { useRef } from 'react'

const DypNews = ({topTitle, bottomTitle, titleAlign, page}) => {


  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: 'button__bar',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
        }
      }
    ]
  };

  var options = {  year: 'numeric', month: 'short', day: 'numeric' };

const [newsData, setNewsData] = useState([])

const fetchNews = async() => {
  const url = `https://news-manage.dyp.finance/api/populars/9`
  await axios.get(url).then((response) => {
    setNewsData(response.data)
    
  }).catch(error => console.error(error))

}

useEffect(() => {
  
  fetchNews();

}, [newsData.length])

const slider = useRef();

const next = () => {
  slider.current.slickNext();
};
const previous = () => {
  slider.current.slickPrev();
};


const sortedNewsItems = newsData.map(item => {
  return {...item, date: new Date(item.date)}

}) 


  return (
    <div className='container-lg' id='dypNews'>
        <div className="row dyp-news">

          <div className="col-12 d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center ps-4 ps-lg-2 mb-5 mb-lg-0 gap-4">
          <img className='sphere' src={require(`../../../assets/newsSphere.png`)} />   
            <Title top={topTitle} bottom={bottomTitle} align={titleAlign} />
            <div className="button-group">
           {page === 'news' ? 
          <div className="slider-buttons d-flex flex-row gap-4">
            <div className="prev-button d-flex justify-content-center align-items-center" onClick={previous}>
              <img src={prevArrow} alt="" />
            </div>
            <div className="next-button d-flex justify-content-center align-items-center" onClick={next}>
              <img src={nextArrow} alt="" />
            </div>
          </div>
          : 
          <button className="btn filled-btn mr-3">
          Read more 
        </button> 
          }
              
            </div>
          </div>
          <div className="col-12">
          <img className='sphere-2' src={require(`../../../assets/newsSphere.png`)} /> 
            {newsData.length > 0 ?
            <div className="slider-wrapper">
            <Slider ref={(c) => (slider.current = c)} {...settings}>
              {sortedNewsItems.map((newsItem, index) => (
                <NewsCard  key={index} title={newsItem.title} description={newsItem.content} date={newsItem.date.toLocaleDateString("en-US", options)} image={newsItem.image} link={`https://tools.dyp.finance/news/${newsItem.id}`} />
              ))}
            </Slider>
            </div>
            :
            <div className="d-flex justify-content-center align-items-center">
            <RingLoader color='#9664FF' size={150} />
            </div>
                }
           
          </div>
        </div>
    </div>
  )
}

export default DypNews