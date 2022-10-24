import React from "react";
import Title from "../../../components/Title/Title";
import coin from "../../../assets/coin.png";
import coinBg from "../../../assets/coinBackground.svg";
import ring from "../../../assets/tokenCircle.png";
import sphere from "../../../assets/newsSphere.png";
import useWindowSize from "../../../hooks/useWindowSize";
import "./_buydyp.scss";
import { NavLink } from "react-router-dom";

const BuyDyp = () => {
  const windowSize = useWindowSize();

  return (
    <div className="container-lg buy-dyp d-flex position-relative justify-content-between flex-column flex-lg-row py-4 py-lg-0">
      <img className="ring" src={ring} alt="" />
      <img className="sphere-1" src={sphere} alt="" />
      <img className="sphere-2" src={sphere} alt="" />
      <div className="row  px-4">
        <div className="col-12 col-sm-6 col-lg-5 d-flex flex-column justify-content-center gap-4">
          <Title
            top="Buy DYP"
            bottom="in a few steps"
            align={"d-flex flex-column flex-lg-row gap-2 align-items-start"}
            animation="fade-up"
            duration="1000"
          />
          <p
            className="text-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            At Dypius, we want to make it easy for you to purchase our token. We
            have a variety of centralized and decentralized exchanges that you
            can use to do so.
          </p>
          {windowSize.width > 786 ? (
            <NavLink
              className="btn filled-btn d-flex justify-content-center align-items-center "
              style={{ width: "24%" }}
              to='/buydyp'
              data-aos="fade-up"
              data-aos-duration="1000"
              // onClick={()=>{ window.scrollTo(0, 0)}}
            >
              Explore
            </NavLink>
            
          ) : null}
        </div>
        <div className="col-12 col-sm-6 col-lg-6 position-relative">
          <img className="coin" src={coin} alt="" />
          <img className="coinBackground" src={coinBg} alt="" />
        </div>
      </div>
      {windowSize.width < 786 ? (
        <div className="row ps-5" style={{zIndex: 5}}>
             
          <NavLink to='/buydyp' className="btn filled-btn w-75 d-flex justify-content-center align-items-center" onClick={()=>{window.scrollTo(0,0)}} >
            Explore
            <img
              className="ps-2"
              src={require(`../../../assets/right-arrow.svg`).default}
              alt=""
            />
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default BuyDyp;
