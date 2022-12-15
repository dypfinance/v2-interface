import React, { useEffect, useState } from "react";
import NewsCard from "../../../components/NewsCard/NewsCard";
import Title from "../../../components/Title/Title";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RingLoader } from "react-spinners";
import prevArrow from "../../../assets/prevArrow.svg";
import nextArrow from "../../../assets/nextArrow.svg";
import rainbowHero from "../../../assets/rainbowHero.png";
import "./_dypnews.scss";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useWindowSize from '.././../../hooks/useWindowSize'

const DypNews = ({ topTitle, bottomTitle, titleAlign, page }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: "button__bar",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: page === "news" ? false : true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          dots: page === "news" ? false : true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          dots: page === "news" ? false : true,
        },
      },
    ],
  };

  var options = { year: "numeric", month: "short", day: "numeric" };

  const [newsData, setNewsData] = useState([]);
  const [announcements, setAnnouncements] = useState([])
  const [events, setEvents] = useState([])
  const windowSize = useWindowSize();

  const fetchNews = async () => {
    if(page === 'news'){
      const url = `https://news-manage.dyp.finance/api/organics/all`;
    await axios
      .get(url)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => console.error(error));
    }else{
      return
    }
  };

  const fetchTest = async() => {
    const urls = [`https://news-manage.dyp.finance/api/announcements/9`, `https://news-manage.dyp.finance/api/events/9`]
    const announcements = axios.get(urls[0])
    const events = axios.get(urls[1])
    await axios.all([announcements, events]).then(axios.spread((...responses) => {
      setAnnouncements(responses[0].data)
      setEvents(responses[1].data)
    }))
  }


  const concatNews = () => {
    if(page !== 'news'){
      setNewsData([...announcements, ...events])
    }
  }

  useEffect(() => {
    fetchNews();
    fetchTest();
    concatNews();
  }, [announcements.length]);


  
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };


  const sortedNewsItems = newsData.map((item) => {
    return { ...item, date: new Date(item.date) };
  });


  return (
    <div className="container-lg mb-5" id="dypNews">
      <div className="row dyp-news"> 
        <div className="col-12 d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center ps-4 ps-lg-2 mb-5 mb-lg-0 gap-4">
          {page === "news" ? (
            <>
              <img src={rainbowHero} alt="" className="rainbow-hero"  />
              <img src={rainbowHero} alt="" className="rainbow-hero-2"  />
            </>
          ) : (
            <img
              className="sphere"
              src={require(`../../../assets/newsSphere.png`)}
            />
          )}
          <Title top={topTitle} bottom={bottomTitle} align={titleAlign} />
          <div className="button-group">
            {page === "news" ? 
              windowSize.width > 786 &&
              <div className="slider-buttons d-flex flex-row gap-4">
                <div
                  className="prev-button d-flex justify-content-center align-items-center"
                  onClick={previous}
                  style={{zIndex: 3}}
                >
                  <img src={prevArrow} alt=""  />
                </div>
                <div
                  className="next-button d-flex justify-content-center align-items-center"
                  onClick={next}
                >
                  <img src={nextArrow} alt=""  />
                </div>
              </div>
             : 
              <NavLink
                className="btn d-flex align-items-center filled-btn mr-3"
                to="/news"
              >
                Read more
              </NavLink>
            }
          </div>
        </div>
        <div className="col-12">
          <img
            className="sphere-2"
            src={require(`../../../assets/newsSphere.png`)}
          />
          {newsData.length > 0 ? (
            <div className="slider-wrapper">
              <Slider ref={(c) => (slider.current = c)} {...settings}>
                {sortedNewsItems.slice(0, 9).map((newsItem, index) => (
                  <NewsCard
                    key={index}
                    title={newsItem.title}
                    description={newsItem.content}
                    date={newsItem.date.toLocaleDateString("en-US", options)}
                    image={newsItem.image}
                    link={newsItem.link}
                  />
                ))}
              </Slider>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <RingLoader color="#9664FF" size={150} />
            </div>
          )}
         
          
        </div>
        {page === 'news' &&
              windowSize.width < 786 &&
              <div className="slider-buttons d-flex flex-row w-100 justify-content-between px-5 pb-3" style={{marginTop: '8rem'}}>
              <div
                className="prev-button d-flex justify-content-center align-items-center"
                onClick={previous}
              >
                <img src={prevArrow} alt=""  />
              </div>
              <div
                className="next-button d-flex justify-content-center align-items-center"
                onClick={next}
              >
                <img src={nextArrow} alt=""  />
              </div>
            </div>
          }
      </div>
    </div>
  );
};

export default DypNews;
