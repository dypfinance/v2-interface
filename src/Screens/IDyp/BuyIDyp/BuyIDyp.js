import React from "react";


const BuyIDyp = () => {
  return (
    <div className="container-lg buyidypsection d-flex justify-content-center">
      <div className="container px-0 row m-0 justify-content-between">
        <div className={`col-12 px-0 px-lg-3 col-lg-5 `}>
          <div className="gap-5 d-flex align-items-start justify-content-center flex-column pl-2 py-4 leftcol">
            <div className="gap-3 d-grid m-md-auto m-sm-auto m-lg-0">
              <h1 className="metaverse">
                How can I get <br />
                iDYP tokens?
              </h1>
              <p className="text-secondary" style={{fontSize: 14}}>
                At Dypius, we want to make it easy for you to purchase our
                token. We have a variety of centralized and decentralized
                exchanges that you can use to do so.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 row m-0 pb-5 justify-content-center align-items-center position-relative marketplace-container">
          {/* <a style={{height: '100px'}}
            href={
              "https://www.mexc.com/exchange/IDYP_USDT"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={"https://cdn.worldofdypians.com/dypius/mexcCard.png"} alt="" className="mexc-card"  />
          </a> */}
          <a style={{height: '100px'}}
            href={
              "https://app.uniswap.org/#/swap?use=V2&inputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={"https://cdn.worldofdypians.com/dypius/uniswapCard.png"} alt="" className="uni-card"  />
          </a>
          <a style={{height: '100px'}}
            href={
              "https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={"https://cdn.worldofdypians.com/dypius/pancakeswapCard.png"} alt="" className="pancake-card"  />
          </a>
          <a style={{height: '100px'}}
            href={
              "https://app.pangolin.exchange/#/swap?&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={"https://cdn.worldofdypians.com/dypius/pangolinCard.png"} alt="" className="pangolin-card"  />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default BuyIDyp;
