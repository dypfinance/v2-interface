import React, { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductCards/ProductCards";
import TokenCards from "../../../components/TokenCards/TokenCards";
import TokenGraph from "../../../assets/DypAssets/ourtokens-graph.svg";
import DotFrame from "../../../assets/DypAssets/dotFrame.svg";
import axios from "axios";
import getFormattedNumber from "../../../hooks/getFormattedNumber";

const OurTokens = () => {
  const [dyptokenData, setDypTokenData] = useState([]);
  const [idyptokenData, setIDypTokenData] = useState([]);
  const [dypPercentage, setDypPercentage] = useState(0)
  const [idypPercentage, setIDypPercentage] = useState(0)


  const getTokenData = async () => {
    await axios
      .get("https://api.dyp.finance/api/the_graph_eth_v2")
      .then((data) => {
        const propertyDyp = Object.entries(
          data.data.the_graph_eth_v2.token_data
        );
        setDypTokenData(propertyDyp[0][1].token_price_usd);

        const propertyIDyp = Object.entries(
          data.data.the_graph_eth_v2.token_data
        );
        setIDypTokenData(propertyIDyp[1][1].token_price_usd);
      });
  };

  const getDypTokenPercentage = async () => {
    await axios
      .get("https://api.lunarcrush.com/v2?data=assets&symbol=DYP")
      .then((data) => {
        setDypPercentage(data.data.data[0].percent_change_24h)        
      });
  };

  const getIDypTokenPercentage = async () => {
    await axios
      .get("https://api.lunarcrush.com/v2?data=assets&symbol=iDYP")
      .then((data) => {
        setIDypPercentage(data.data.data[0].percent_change_24h)        
      });
  };

  useEffect(() => {
    getTokenData();
    getDypTokenPercentage()
    getIDypTokenPercentage()
  }, []);
  
  return (
    <div className="container-fluid mt-5" id="ourTokens">
      <img className="dotframe position-absolute" src={DotFrame} />
      <div className="ourtokens-wrapper container-lg position-relative">
        <img
          className="ourtoken-sphere"
          src={require(`../../../assets/newsSphere.png`)}
        />
        <div>
          <div className="row justify-content-between m-0 gap-2 position-relative mb-4">
            <img src={TokenGraph} alt="" className="tokengraph" />
            <div className="col-lg-4 col-xl-4 p-0">
              <h2 className="ourtoken-title">
                Our <span className="bottm-text">Tokens</span>
              </h2>
              <p className="ourtoken-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>
            <div className="col-lg-7 col-xl-7 p-0 row justify-content-xl-end justify-content-lg-end justify-content-between gap-3 m-0 position-relative">
              <TokenCards
                title={"DYP Token"}
                price={getFormattedNumber(dyptokenData,4)}
                percentage={`${dypPercentage} %`}
              />
              <TokenCards
                title={"iDYP Token"}
                price={getFormattedNumber(idyptokenData,4)}
                percentage={`${idypPercentage} %`}
              />
            </div>
          </div>
        </div>
        <div className="row m-0 gap-5 justify-content-between flex-column flex-xl-row flex-lg-row">
          <ProductCard
            classname={"bridge"}
            title={"Bridge"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu lorem, viverra eu tempor quis, commodo a leo..."
            }
          />

          <ProductCard
            classname={"earn"}
            title={"Earn"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu lorem, viverra eu tempor quis, commodo a leo..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OurTokens;
