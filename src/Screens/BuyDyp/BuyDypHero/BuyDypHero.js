import React from "react";
import Title from "../../../components/Title/Title";
import BuyDypCard from "../../../components/BuyDypCard/BuyDypCard";
import SupportedWallets from "../SupportedWallets/SupportedWallets";

const BuyDypHero = () => {
  const buyDypItems = [
    {
      title: "KuCoin",
      logo: "kucoin.png",
      link: "https://www.kucoin.com/trade/DYP-USDT",
      totalvids: "1 video",
      dypVersion: "DYP v2",
      active: true,
      videos: [
        {
          link: "https://www.youtube.com/watch?v=BIuy1A-_-dU",
          image: "kucoinBuy.png",
          title: "How to buy DeFi Yield Protocol (DYP) on KuCoin",
          walletName: "KuCoin",
          thumbnail: "kucoinVid.png",
        },
      ],
      id: "collapsethree",
    },

    {
      title: "Gate.io",
      logo: "gateio.png",
      link: "https://www.gate.io/trade/DYP_USDT",
      totalvids: "1 video",
      dypVersion: "DYP v2",
      active: true,
      videos: [
        {
          link: "https://www.youtube.com/watch?v=arVFXf5hESE",
          image: "gateBuy.png",
          title: "How to buy DeFi Yield Protocol (DYP) on Gate.io",
          walletName: "Gate.io",
          thumbnail: "gateVid.png",
        },
      ],
      id: "collapsefour",
    },
    {
      title: "MEXC",
      logo: "mexc.png",
      link: "https://www.mexc.com/exchange/DYP_USDT",
      totalvids: "0",
      videos: "",
      id: "collapsefive",
      active: true,
      dypVersion: "DYP v2",
    },
    {
      title: "HTX",
      logo: "huobi.png",
      link: "https://www.htx.com/en-us/trade/dyp_usdt/",
      totalvids: "0",
      videos: "",
      active: true,
      id: "collapsetwo",
      dypVersion: "DYP v2",
    },
    {
      title: "Uniswap V2",
      logo: "uniswap.png",
      link: "https://app.uniswap.org/swap?use=V2&inputCurrency=0x39b46B212bDF15b42B166779b9d1787A68b9D0c3",
      totalvids: "8 videos",
      active: true,
      dypVersion: "DYP v2",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
          image: "metamaskBuy.png",
          title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
          walletName: "Metamask",
          thumbnail: "uni1Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=XsmZ9xW_nps",
          image: "metamaskBuy.png",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using MetaMask",
          walletName: "Metamask",
          thumbnail: "uni2Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=amM9wOGNVpg",
          image: "trustwalletBuy.png",
          walletName: "Trust wallet",
          title: "How to set up Trust Wallet for DeFi Yield Protocol (DYP)",
          thumbnail: "trust1Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=AxWb2TxiQHw",
          walletName: "Trust wallet",
          image: "trustwalletBuy.png",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using Trust Wallet",
          thumbnail: "trust2Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=-kE6mM6d9ek",
          image: "coin98Buy.png",
          walletName: "Coin98",
          title:
            "How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)",
          thumbnail: "coin1Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=Dkt7JCbKHv4",
          image: "coin98Buy.png",
          walletName: "Coin98",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Ethereum Network using the Coin98 Wallet",
          thumbnail: "coin2Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=lTD8DAsxmtY",
          image: "safepalBuy.png",
          walletName: "SafePal",
          title: "How to set up SafePal for DeFi Yield Protocol",
          thumbnail: "safe1Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=h-oLMDhVvbg",
          image: "safepalBuy.png",
          walletName: "SafePal",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using SafePal",
          thumbnail: "safe2Vid.png",
        },
      ],
      id: "collapsesix",
    },
    // {
    //   title: "Coinbase",
    //   logo: "coinbase.png",
    //   link: "https://www.coinbase.com/advanced-trade/spot/DYP-USD",
    //   totalvids: "1 video",
    //   active: true,
    //   dypVersion: "DYP v1",
    //   videos: [
    //     {
    //       link: "https://youtu.be/mjUUqNy-zW8",
    //       image: "coinbaseBuy.png",
    //       title: "How to buy DeFi Yield Protocol (DYP) on Coinbase",
    //       walletName: "Coinbase",
    //       thumbnail: "coinbaseVid.png",
    //     },
    //   ],
    //   id: "collapseone",
    // },
    {
      title: "SynFutures",
      logo: "synfutures.svg",
      link: "https://oyster.synfutures.com/#/trade/base/ETH-DYP-EMG-Perpetual",
      totalvids: "0",
      active: true,
      dypVersion: "DYP v2",
      videos: "",
      id: "collapseone",
    },
    {
      title: "PancakeSwap V2",
      logo: "pancake.png",
      active: true,

      link: "https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0x1a3264f2e7b1cfc6220ec9348d33ccf02af7aaa4",
      totalvids: "4 videos",
      dypVersion: "DYP v2",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
          image: "metamaskBuy.png",
          title: "How to set up MetaMask for DeFi Yield Protocol",
          walletName: "Metamask",
          thumbnail: "uni1Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=sLHWYgNEbq8",
          image: "metamaskBuy.png",
          walletName: "Metamask",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using MetaMask",
          thumbnail: "panc1Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=amM9wOGNVpg",
          image: "trustwalletBuy.png",
          walletName: "Trust wallet",
          title: "How to set up Trust Wallet for DeFi Yield Protocol (DYP)",
          thumbnail: "trust1Vid.png",
        },
        {
          link: "https://www.youtube.com/watch?v=Z8X3ythoZbg",
          image: "trustwalletBuy.png",
          walletName: "Trust wallet",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using Trust Wallet",
          thumbnail: "panc2Vid.png",
        },
      ],
      id: "collapseseven",
    },
    {
      title: "LFJ",
      logo: "traderjoe.webp",
      link: "https://traderjoexyz.com/avalanche/trade?outputCurrency=0x1a3264f2e7b1cfc6220ec9348d33ccf02af7aaa4",
      totalvids: "0",
      active: true,
      dypVersion: "DYP v2",
      videos: "",
      //  [
      //   {
      //     link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
      //     image: "metamask.png",
      //     walletName: "Metamask",
      //     title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
      //     thumbnail: 'uni1.png'

      //   },
      //   {
      //     link: "https://www.youtube.com/watch?v=T6qYvErqD-M",
      //     image: "metamask.png",
      //     walletName: "Metamask",
      //     title:
      //       "How to buy DeFi Yield Protocol (DYP) on the Pangolin exchange using MetaMask",
      //     thumbnail: 'pan1.png'

      //   },
      //   {
      //     link: "https://www.youtube.com/watch?v=-kE6mM6d9ek",
      //     image: "coin98.png",
      //     walletName: "Coin98",
      //     title:
      //       "How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)",
      //     thumbnail: 'coin1.png'

      //   },
      //   {
      //     link: "https://www.youtube.com/watch?v=FmrgSuCo_nk",
      //     image: "coin98.png",
      //     walletName: "Coin98",
      //     title:
      //       "How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Wallet",
      //     thumbnail: 'pan2.png'

      //   },
      // ]
      id: "collapseeight",
    },

    


  

    
 
  ];

  return (
    <div className="container-fluid buydyp-main-hero d-flex flex-column justify-content-lg-end justify-content-xl-end justify-content-center mb-5">
      <div className="container-lg px-0 d-flex justify-content-between align-items-center flex-column mt-5">
        <div className="container-lg d-flex justify-content-between align-items-center mb-5 px-0">
          <div className="col-12 col-lg-5 text-white d-flex flex-column gap-3 justify-content-lg-center justify-content-xl-center">
            <Title top={"Buy"} bottom={"DYP"} align={"d-flex gap-1"} />
            <p className="text-secondary">
              You can purchase our token through a variety of centralized and
              decentralized exchanges.
            </p>
          </div>
          <div className="col-9 col-lg-3 position-relative d-xl-block d-lg-block d-none">
            <img
              className="buydypcoin"
              src={`https://cdn.worldofdypians.com/dypius/coin.png`}
              alt=""
            />

            <img
              className="backgroundbuydyp"
              src={`https://cdn.worldofdypians.com/dypius/purplebg.png`}
              alt=""
            />
          </div>
        </div>
        <div className="row justify-content-center pb-5">
          {buyDypItems.length > 0 &&
            buyDypItems.map((item, index) => {
              return (
                <BuyDypCard
                  title={item.title}
                  id={item.id}
                  key={index}
                  logo={`https://cdn.worldofdypians.com/dypius/${item.logo}`}
                  link={item.link}
                  totalvids={item.totalvids}
                  videos={item.videos}
                  active={item.active}
                  version={item.dypVersion}
                />
              );
            })}
        </div>
        <SupportedWallets />
      </div>
    </div>
  );
};

export default BuyDypHero;
