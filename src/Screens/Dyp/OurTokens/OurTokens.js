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


const getDypPrice = async () => {
  await axios.get('https://api.geckoterminal.com/api/v2/networks/eth/pools/0x7c81087310a228470db28c1068f0663d6bf88679').then((data) => {
    setDypTokenData(data.data.data.attributes.base_token_price_usd)
  })
}


  const getTokenData = async () => {
    await axios
      .get("https://api.dyp.finance/api/the_graph_eth_v2")
      .then((data) => {
        const propertyDyp = Object.entries(
          data.data.the_graph_eth_v2.token_data
        );
        // setDypTokenData(propertyDyp[0][1].token_price_usd);

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

  // const getIDypTokenPercentage = async () => {
  //   await axios
  //     .get("https://api.lunarcrush.com/v2?data=assets&symbol=iDYP")
  //     .then((data) => {
  //       setIDypPercentage(data.data.data[0].percent_change_24h)        
  //     });
  // };

  useEffect(() => {
    getTokenData();
    getDypTokenPercentage()
    // getIDypTokenPercentage()
    getDypPrice();
  }, []);
  
  return (
    <div className="container-fluid px-0 mt-0 position-relative" id="ourTokens">
      {/* <img className="dotframe position-absolute" src={DotFrame} /> */}
      <div className="ourtokens-wrapper container-lg position-relative justify-content-start gap-0 gap-lg-5">
        {/* <img
          className="ourtoken-sphere"
          src={require(`../../../assets/newsSphere.png`)}
        /> */}
        <div>
          <div className="row justify-content-between m-0 gap-2 position-relative mb-4">
            {/* <img src={TokenGraph} alt="" className="tokengraph" /> */}
            <div className="col-lg-5 col-xl-5 pt-4">
              <h2 className="ourtoken-title">
                DYP Token
              </h2>
              <p className="ourtoken-desc">
              Explore multiple possibilites with our unique token.
              </p>
            </div>
            <div className="col-lg-6 col-xl-6 row justify-content-xl-end justify-content-lg-end justify-content-between gap-3 m-0 position-relative">
              <TokenCards
                title={"DYP Token"}
                price={getFormattedNumber(dyptokenData,4)}
                percentage={`${dypPercentage} %`}
              /> 
              
            </div>
          </div>
        </div>
        <div className="row m-0 gap-5 justify-content-between flex-column flex-xl-row flex-lg-row">
          <ProductCard
            classname={"bridge"}
            title={"Bridge"}
            desc={
              "Bridge tokens between Ethereum to BNB Chain, Avalanche and many more to come. Instant and secure transactions."
            }
            link={'https://app.dypius.com/bridge'}
          />

          <ProductCard
            classname={"earn"}
            title={"Earn"}
            desc={
              "Make the most of your assets with Dypius Earn products. Start earning today!"
            }
            link={'https://app.dypius.com/earn'}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTokens;
