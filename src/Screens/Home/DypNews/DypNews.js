import React, { useEffect, useState } from 'react'
import NewsCard from '../../../components/NewsCard/NewsCard'
import Title from '../../../components/Title/Title'
import rightArrow from '../../../assets/right-arrow.svg'
import filledArrow from '../../../assets/filledArrow.svg'
import axios from 'axios'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Carousel from 'better-react-carousel'

import './_dypnews.scss'

const DypNews = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 3000
  };

const [newsData, setNewsData] = useState([])
const [descriptions, setDescriptions] = useState([])

const fetchNews = async() => {
  const url = `https://news-manage.dyp.finance/api/populars`
  await axios.get(url).then((response) => {
    setNewsData(response.data)
  }).catch(error => console.error(error))

}

const fetchDescription = async() => {
  var descriptionsArray = []
  if(newsData.length > 0){
     newsData.slice(0, 9).map((newsItem) => {
      axios.get(`https://news-manage.dyp.finance/api/populars/${newsItem.id}`).then((response) => {
        descriptionsArray.push(response.data)
      }).catch(error => console.error(error))
    
    }
    )
  }

  // console.log(descriptionsArray);

  setDescriptions(descriptionsArray)
}


useEffect(() => {
  
  
  fetchNews();

  fetchDescription();


// console.log(newsData);
  
}, [newsData.length])


const sortedDesc = descriptions.map(desc => {
  return {...desc, date: new Date(desc.date)}
}).sort((a, b) => b.date - a.date)


// console.log(sortedDesc);


  return (
    <div className='container-lg'>
        <div className="row dyp-news">
          <div className="col-12 d-flex flex-row justify-content-between align-items-center">   
            <Title top='Announcements' bottom='Lorem Ipsum' />
            <div className="button-group">
              <button className="btn filled-btn mr-3">
                Latest Announcements <img src={rightArrow} alt="" className='ml-2'/>
              </button>
              <button className="btn outline-btn">
                Latest Events <img src={filledArrow} alt="" className='ml-2'/>
              </button>
            </div>
          </div>
          <div className="col-12">
            {/* <div
              className="card-wrapper d-flex flex-row justify-content-evenly align-items-center"
              style={{ gap: "15px", marginBottom: "-6rem" }}
            > */}
            {/* <div className="slider-wrapper"> */}
            <Slider {...settings}>
            {sortedDesc.length > 0 && 
              newsData.slice(0, 9).map((newsItem, index) => (
                <NewsCard  key={index} title={newsItem.title} description={sortedDesc[index]?.content} date={newsItem.date.slice(0, 10)} image={newsItem.image} />
              ))}
            </Slider>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
    </div>
  )
}

export default DypNews