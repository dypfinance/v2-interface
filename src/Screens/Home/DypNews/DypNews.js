import React, { useEffect, useState } from "react";
import NewsCard from "../../../components/NewsCard/NewsCard";
import Title from "../../../components/Title/Title";
import rightArrow from "../../../assets/right-arrow.svg";
import filledArrow from "../../../assets/filledArrow.svg";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RingLoader } from "react-spinners";

import "./_dypnews.scss";

const DypNews = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: "button__bar",
    // autoplay: true,
    // autoplaySpeed: 3000,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };

  var options = { year: "numeric", month: "short", day: "numeric" };

  const [newsData, setNewsData] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  const fetchNews = async () => {
    const url = `https://news-manage.dyp.finance/api/populars`;
    await axios
      .get(url)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => console.error(error));
  };

  const fetchDescription = async () => {
    var descriptionsArray = [];
    if (newsData.length > 0) {
      newsData.slice(0, 9).map((newsItem) => {
        axios
          .get(`https://news-manage.dyp.finance/api/populars/${newsItem.id}`)
          .then((response) => {
            descriptionsArray.push(response.data);
          })
          .catch((error) => console.error(error));
      });
    }

    setDescriptions(descriptionsArray);
  };

  useEffect(() => {
    fetchNews();

    fetchDescription();
  }, [newsData.length]);

  const sortedDesc = descriptions
    .map((desc) => {
      return { ...desc, date: new Date(desc.date) };
    })
    .sort((a, b) => b.date - a.date);

  const sortedNewsItems = newsData.map((item) => {
    return { ...item, date: new Date(item.date) };
  });

  return (
    <div className="container-lg">
      <div className="row dyp-news">
        <div className="col-12 d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center mb-5 mb-lg-0 gap-4">
          <img
            className="sphere"
            src={require(`../../../assets/newsSphere.png`)}
          />
          <Title top="Announcements" bottom="Stay tuned" />
          <div className="button-group">
            <button className="btn filled-btn mr-3">
              Latest Announcements{" "}
              <img src={rightArrow} alt="" className="ml-2" />
            </button>
            <button className="btn outline-btn mt-4 mt-lg-0">
              Latest Events <img src={filledArrow} alt="" className="ml-2" />
            </button>
          </div>
        </div>
        <div className="col-12">
          <img
            className="sphere-2"
            src={require(`../../../assets/newsSphere.png`)}
          />
          {sortedDesc.length > 0 ? (
            <div className="slider-wrapper">
              <Slider {...settings}>
                {sortedNewsItems.slice(0, 9).map((newsItem, index) => (
                  <NewsCard
                    key={index}
                    title={newsItem.title}
                    description={sortedDesc[index]?.content}
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
      </div>
    </div>
  );
};

export default DypNews;
