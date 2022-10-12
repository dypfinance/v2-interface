import React from "react";
import Title from "../../../components/Title/Title";

const BuyDypHero = () => {
  return (
    <div className="container-fluid">
      <div className="container-lg d-flex justify-content-between">
       
          <div className="col-12 col-lg-4 text-white d-flex flex-column gap-3 justify-content-lg-end justify-content-xl-end">
            <Title top={"Buy"} bottom={"DYP"} align={"d-flex gap-1"} />
            <p>
              At Dypius, we want to make it easy for you to purchase our token.
              We have a variety of centralized and decentralized exchanges that
              you can use to do so.
            </p>
          </div>
          <div className="col-9 col-lg-3 position-relative">
            <img
              className="coin"
              src={require(`../../../assets/coin.png`)}
              alt=""
            />
            <img
              className="backgroundbuydyp"
              src={require(`../assets/purplebg.svg`).default}
              alt=""
            />
          </div>
      </div>
    </div>
  );
};

export default BuyDypHero;
