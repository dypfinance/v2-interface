import React, { useEffect } from "react";
import Title from "../../../components/Title/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import "./_buydyp.scss";
import { NavLink } from "react-router-dom";

const BuyDyp = () => {
  const windowSize = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-lg buy-dyp d-flex position-relative justify-content-between flex-column flex-lg-row py-4 py-lg-0">
      {/* <img className="ring" src={ring} alt="" />
      <img className="sphere-1" src={sphere} alt="" />
      <img className="sphere-2" src={sphere} alt="" /> */}
      <div className="row w-100 px-4">
        <div className="col-12 col-sm-6 col-lg-5 d-flex flex-column justify-content-center gap-4">
          <Title
            top="Buying DYP"
            bottom="has never been easier"
            align={"d-flex flex-column flex-xxl-row gap-2 align-items-start"}
            animation="fade-up"
            duration="1000"
          />
          <p
            className="text-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            You can purchase it using a variety of centralized and decentralized
            exchanges.
          </p>
          {windowSize.width > 576 ? (
            <NavLink
              className="btn filled-btn d-flex justify-content-center align-items-center "
              style={{ width: "24%" }}
              to="/buydyp"
              data-aos="fade-up"
              data-aos-duration="1000"
              // onClick={()=>{ window.scrollTo(0, 0)}}
            >
              Buy now
            </NavLink>
          ) : null}
        </div>
        <div className="col-12 col-sm-6 col-lg-6 position-relative">
          <img className="coin" src={"https://cdn.worldofdypians.com/dypius/coin.png"} alt="" />
          <img className="coinBackground" src={"https://cdn.worldofdypians.com/dypius/coinbackground.png"} alt="" />
        </div>
      </div>
      {windowSize.width < 576 ? (
        <div className="row justify-content-center" style={{ zIndex: 5 }}>
          <NavLink
            to="/buydyp"
            className="btn filled-btn w-75 d-flex justify-content-center align-items-center"
          >
            Explore
            <img
              className="ps-2"
              src={`https://cdn.worldofdypians.com/dypius/right-arrow.svg`}
              alt=""
            />
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default BuyDyp;
