import React, { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductCards/ProductCards";
import TokenCards from "../../../components/TokenCards/TokenCards";
import axios from "axios";
import getFormattedNumber from "../../../hooks/getFormattedNumber";
import "./_idypToken.scss";
import bluehero from "../../../assets/metaverse-blueHero.svg";


const IDypToken = () => {
  const [idyptokenData, setIDypTokenData] = useState([]);
  const [idypPercentage, setIDypPercentage] = useState(0);

  const getTokenData = async () => {
    await axios
      .get("https://api.dyp.finance/api/the_graph_eth_v2")
      .then((data) => {
        const propertyIDyp = Object.entries(
          data.data.the_graph_eth_v2.token_data
        );
        setIDypTokenData(propertyIDyp[1][1].token_price_usd);
      });
  };

  const getIDypTokenPercentage = async () => {
    await axios
      .get("https://api.lunarcrush.com/v2?data=assets&symbol=iDYP")
      .then((data) => {
        setIDypPercentage(data.data.data[0].percent_change_24h);
      });
  };

  useEffect(() => {
    getTokenData();
    getIDypTokenPercentage();
  }, []);

  return (
    <div className="container-fluid mt-0 position-relative" id="ourTokens" style={{top: '-90px'}}>
      
      <div className="ourtokens-wrapper container-lg position-relative">
      <img src={bluehero} className="blueheroidyp" alt=""  />
        <div>
          <div className="row justify-content-between m-0 gap-2 position-relative mb-4">
            <div className="col-lg-5 col-xl-5 p-xl-0 p-lg-0 p-md-0 pt-4">
              <h2 className="ourtoken-title">
                Explore <br />
                iDYP Token
              </h2>
            </div>
            <div className="col-lg-6 col-xl-6 p-0 row justify-content-xl-end justify-content-lg-end justify-content-between gap-3 m-0 position-relative">
              <TokenCards
                title={"iDYP Token"}
                price={getFormattedNumber(idyptokenData, 4)}
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
              "Dypius Bridge offers users the possibility to send tokens from Ethereum to BNB and Avalanche chains with ease. Every transaction is instant and secure."
            }
            link={"https://app.dypius.com/bridge"}
          />

          <ProductCard
            classname={"earn"}
            title={"Stake"}
            desc={
              "Make the most of your assets with Dypius Earn products. Start earning today!"
            }
            link={"https://app.dypius.com/earn"}
          />
        </div>
      </div>
    </div>
  );
};

export default IDypToken;
