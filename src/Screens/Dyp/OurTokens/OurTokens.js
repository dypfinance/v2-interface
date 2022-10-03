import React from "react";
import ProductCard from "../../../components/ProductCards/ProductCards";
import TokenCards from "../../../components/TokenCards/TokenCards";
import TokenGraph from '../../../assets/DypAssets/ourtokens-graph.svg'
import Tokenomics from "../Tokenomics/Tokenomics";
import DotFrame from '../../../assets/DypAssets/dotFrame.svg'

const OurTokens = () => {
  return (

    <div className="container-fluid mt-5" id="ourTokens">
     
      <img className='dotframe position-absolute' src={DotFrame} />   

      <div className="ourtokens-wrapper container-lg position-relative">
         <img className='ourtoken-sphere' src={require(`../../../assets/newsSphere.png`)} />   
        <div>
          <div className="row justify-content-between m-0 gap-2 position-relative mb-4">
            <img src={TokenGraph} alt=''className="tokengraph"/>
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
                price={"0,1586"}
                percentage={"2,23 %"}
              />
              <TokenCards
                title={"DYP Token"}
                price={"0,1586"}
                percentage={"2,23 %"}
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
        {/* <Tokenomics/> */}

      </div>
    </div>
  );
};

export default OurTokens;
