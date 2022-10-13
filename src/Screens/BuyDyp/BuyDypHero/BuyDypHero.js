import React from "react";
import Title from "../../../components/Title/Title";
import BuyDypCard from "../../../components/BuyDypCard/BuyDypCard";
import vidthumbnail from '../assets/vidthumbnail.png'

const BuyDypHero = () => {
  const buyDypItems = [
    {
      title: "Coinbase",
      logo: "coinbase.png",
      link: "https://pro.coinbase.com/trade/DYP-USD",
      totalvids: "1 video",
      videos: {
        link: "https://youtu.be/mjUUqNy-zW8",
        image: "",
        title: "How to buy DeFi Yield Protocol (DYP) on Coinbase",
      },
      id: "collapseone",
    },
    {
      title: "Huobi",
      logo: "huobi.png",
      link: "https://www.huobi.com/en-us/exchange/dyp_usdt/",
      totalvids: "0",
      videos: "",
      id: "collapsetwo",
    },
    {
      title: "KuCoin",
      logo: "kucoin.png",
      link: "https://www.kucoin.com/trade/DYP-USDT",
      totalvids: "1 video",
      videos: {
        link: "https://www.youtube.com/watch?v=BIuy1A-_-dU",
        image: "",
        title: "How to buy DeFi Yield Protocol (DYP) on KuCoin",
      },
      id: "collapsethree",
    },
    {
      title: "Gate.io",
      logo: "Gate.png",
      link: "https://www.gate.io/zh/trade/DYP_USDT",
      totalvids: "1 video",
      videos: {
        link: "https://www.youtube.com/watch?v=arVFXf5hESE",
        image: "",
        title: "How to buy DeFi Yield Protocol (DYP) on Gate.io",
      },
      id: "collapsefour",
    },
    {
      title: "MEXC",
      logo: "mexc.png",
      link: "https://www.mexc.com/exchange/DYP_USDT",
      totalvids: "0",
      videos: "",
      id: "collapsefive",
    },
    {
      title: "Uniswap V2",
      logo: "uniswap.png",
      link: "https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
      totalvids: "8 videos",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
          image: "",
          title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
        },
        {
          link: "https://www.youtube.com/watch?v=XsmZ9xW_nps",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using MetaMask",
        },
        {
          link: "https://www.youtube.com/watch?v=amM9wOGNVpg",
          image: "",
          title: "How to set up Trust Wallet for DeFi Yield Protocol (DYP)",
        },
        {
          link: "https://www.youtube.com/watch?v=AxWb2TxiQHw",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using Trust Wallet",
        },
        {
          link: "https://www.youtube.com/watch?v=-kE6mM6d9ek",
          image: "",
          title:
            "How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)",
        },
        {
          link: "https://www.youtube.com/watch?v=Dkt7JCbKHv4",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Ethereum Network using the Coin98 Wallet",
        },
        {
          link: "https://www.youtube.com/watch?v=lTD8DAsxmtY",
          image: "",
          title: "How to set up SafePal for DeFi Yield Protocol",
        },
        {
          link: "https://www.youtube.com/watch?v=h-oLMDhVvbg",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using SafePal",
        },
      ],
      id: "collapsesix",
    },
    {
      title: "PancakeSwap V2",
      logo: "pancake.png",
      link: "https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
      totalvids: "4 videos",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
          image: "",
          title: "How to set up MetaMask for DeFi Yield Protocol",
        },
        {
          link: "https://www.youtube.com/watch?v=sLHWYgNEbq8",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using MetaMask",
        },
        {
          link: "https://www.youtube.com/watch?v=amM9wOGNVpg",
          image: "",
          title: "How to set up Trust Wallet for DeFi Yield Protocol (DYP)",
        },
        {
          link: "https://www.youtube.com/watch?v=Z8X3ythoZbg",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using Trust Wallet",
        },
      ],
      id: "collapseseven",
    },
    {
      title: "Pangolin",
      logo: "pangolin.svg",
      link: "https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
      totalvids: "4 videos",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
          image: "",
          title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
        },
        {
          link: "https://www.youtube.com/watch?v=T6qYvErqD-M",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Pangolin exchange using MetaMask",
        },
        {
          link: "https://www.youtube.com/watch?v=-kE6mM6d9ek",
          image: "",
          title:
            "How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)",
        },
        {
          link: "https://www.youtube.com/watch?v=FmrgSuCo_nk",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Wallet",
        },
      ],
      id: "collapseeight",
    },
    {
      title: "Coin98",
      logo: "coin98.png",
      link: "",
      totalvids: "3 videos",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=SvUaexmtgnU",
          image: "",
          title: "How to buy DeFi Yield Protocol (DYP) on Ethereum using the Coin98 Wallet App",
        },
        {
          link: "https://www.youtube.com/watch?v=7jf8HGOrdBM",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Mobile Wallet App",
        },
        {
          link: "https://www.youtube.com/watch?v=8xaXadlb_Iw",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Binance Smart Chain using the Coin98 Mobile Wallet App",
        }
      ],
      id: "collapsenine",
    },
    {
      title: "1inch",
      logo: "1Inch.png",
      link: "https://app.1inch.io/#/1/swap/DYP/ETH",
      totalvids: "6 videos",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
          image: "",
          title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
        },
        {
          link: "https://www.youtube.com/watch?v=IE5danKYD-c",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on 1Inch using MetaMask",
        },
        {
          link: "https://www.youtube.com/watch?v=8xaXadlb_Iw",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Binance Smart Chain using the Coin98 Mobile Wallet App",
        },
        {
          link: "https://www.youtube.com/watch?v=SvUaexmtgnU",
          image: "",
          title: "How to buy DeFi Yield Protocol (DYP) on Ethereum using the Coin98 Wallet App",
        },
        {
          link: "https://www.youtube.com/watch?v=7jf8HGOrdBM",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Mobile Wallet App",
        },
        {
          link: "https://www.youtube.com/watch?v=8xaXadlb_Iw",
          image: "",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Binance Smart Chain using the Coin98 Mobile Wallet App",
        }
      ],
      id: "collapseten",
    },
    {
      title: "KyberDMM",
      logo: "kyber-dmm.png",
      link: "https://app.1inch.io/#/1/swap/DYP/ETH",
      totalvids: "1 video",
      videos: "",
      id: "collapseeleven",
    },
    {
      title: "Poloniex",
      logo: "poloniex.png",
      link: "https://poloniex.com/spot/BTC_USDT",
      totalvids: "0",
      videos: "",
      id: "collapsetwelve",
    },
  ];

  return (
    <div className="container-fluid buydyp-main-hero d-flex flex-column justify-content-lg-end justify-content-xl-end justify-content-center">
      <div className="container-lg d-flex justify-content-between align-items-center flex-column">
        <div className="container-lg d-flex justify-content-between align-items-center mb-5">
          <div className="col-12 col-lg-4 text-white d-flex flex-column gap-3 justify-content-lg-center justify-content-xl-center">
            <Title top={"Buy"} bottom={"DYP"} align={"d-flex gap-1"} />
            <p className="text-secondary">
              At Dypius, we want to make it easy for you to purchase our token.
              We have a variety of centralized and decentralized exchanges that
              you can use to do so.
            </p>
          </div>
          <div className="col-9 col-lg-3 position-relative">
            <img
              className="buydyp-coin"
              src={require(`../../../assets/coin.png`)}
              alt=""
            />
            {/* <div className="rotate-scale-up"> */}
            <img
              className="backgroundbuydyp"
              src={require(`../assets/purplebg.svg`).default}
              alt=""
            />
            {/* </div> */}
          </div>
        </div>
        <div className="row gap-4 justify-content-center">
          {buyDypItems.length > 0 &&
            buyDypItems.map((item, index) => {
              return (
                <BuyDypCard
                  title={item.title}
                  id={item.id}
                  key={index}
                  logo={require(`../../../assets/coins/${item.logo}`)}
                  link={item.link}
                  totalvids={item.totalvids}
                  videos={item.videos.videos}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BuyDypHero;
