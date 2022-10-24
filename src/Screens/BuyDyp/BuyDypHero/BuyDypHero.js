import React from "react";
import Title from "../../../components/Title/Title";
import BuyDypCard from "../../../components/BuyDypCard/BuyDypCard";
import SupportedWallets from "../SupportedWallets/SupportedWallets";

const BuyDypHero = () => {
  const buyDypItems = [
    {
      title: "Coinbase",
      logo: "coinbase.png",
      link: "https://pro.coinbase.com/trade/DYP-USD",
      totalvids: "1 video",
      videos: [
        {
          link: "https://youtu.be/mjUUqNy-zW8",
          image: "coinbase.png",
          title: "How to buy DeFi Yield Protocol (DYP) on Coinbase",
          walletName: "Coinbase",
          thumbnail: 'coinbase.png'
        },
      ],
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
      videos: [
        {
          link: "https://www.youtube.com/watch?v=BIuy1A-_-dU",
          image: "kucoin.png",
          title: "How to buy DeFi Yield Protocol (DYP) on KuCoin",
          walletName: "KuCoin",
          thumbnail: 'kucoin.png'

        },
      ],
      id: "collapsethree",
    },
    {
      title: "Gate.io",
      logo: "Gate.png",
      link: "https://www.gate.io/zh/trade/DYP_USDT",
      totalvids: "1 video",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=arVFXf5hESE",
          image: "gate.png",
          title: "How to buy DeFi Yield Protocol (DYP) on Gate.io",
          walletName: "Gate.io",
          thumbnail: 'gate.png'

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
    },
    {
      title: "Uniswap V2",
      logo: "uniswap.png",
      link: "https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
      totalvids: "8 videos",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=yBzIPecqKY8",
          image: "metamask.png",
          title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
          walletName: "Metamask",
          thumbnail: 'uni1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=XsmZ9xW_nps",
          image: "metamask.png",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using MetaMask",
          walletName: "Metamask",
          thumbnail: 'uni2.png'

        },
        {
          link: "https://www.youtube.com/watch?v=amM9wOGNVpg",
          image: "trustwallet.png",
          walletName: "Trust wallet",
          title: "How to set up Trust Wallet for DeFi Yield Protocol (DYP)",
          thumbnail: 'trust1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=AxWb2TxiQHw",
          walletName: "Trust wallet",
          image: "trustwallet.png",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using Trust Wallet",
          thumbnail: 'trust2.png'

        },
        {
          link: "https://www.youtube.com/watch?v=-kE6mM6d9ek",
          image: "coin98.png",
          walletName: "Coin98",
          title:
            "How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)",
          thumbnail: 'coin1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=Dkt7JCbKHv4",
          image: "coin98.png",
          walletName: "Coin98",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Ethereum Network using the Coin98 Wallet",
          thumbnail: 'coin2.png'

        },
        {
          link: "https://www.youtube.com/watch?v=lTD8DAsxmtY",
          image: "safepal.png",
          walletName: "SafePal",
          title: "How to set up SafePal for DeFi Yield Protocol",
          thumbnail: 'safe1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=h-oLMDhVvbg",
          image: "safepal.png",
          walletName: "SafePal",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using SafePal",
          thumbnail: 'safe2.png'

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
          image: "metamask.png",
          title: "How to set up MetaMask for DeFi Yield Protocol",
          walletName: "Metamask",
          thumbnail: 'uni1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=sLHWYgNEbq8",
          image: "metamask.png",
          walletName: "Metamask",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using MetaMask",
          thumbnail: 'panc1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=amM9wOGNVpg",
          image: "trustwallet.png",
          walletName: "Trust wallet",
          title: "How to set up Trust Wallet for DeFi Yield Protocol (DYP)",
          thumbnail: 'trust1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=Z8X3ythoZbg",
          image: "trustwallet.png",
          walletName: "Trust wallet",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using Trust Wallet",
          thumbnail: 'panc2.png'

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
          image: "metamask.png",
          walletName: "Metamask",
          title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
          thumbnail: 'uni1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=T6qYvErqD-M",
          image: "metamask.png",
          walletName: "Metamask",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Pangolin exchange using MetaMask",
          thumbnail: 'pan1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=-kE6mM6d9ek",
          image: "coin98.png",
          walletName: "Coin98",
          title:
            "How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)",
          thumbnail: 'coin1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=FmrgSuCo_nk",
          image: "coin98.png",
          walletName: "Coin98",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Wallet",
          thumbnail: 'pan2.png'

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
          image: "uniswap.png",
          walletName: "UniSwap",
          title:
            "How to buy DeFi Yield Protocol (DYP) on Ethereum using the Coin98 Wallet App",
          thumbnail: 'coineth.png'

        },
        {
          link: "https://www.youtube.com/watch?v=7jf8HGOrdBM",
          image: "pangolin.png",
          walletName: "Pangolin",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Mobile Wallet App",
          thumbnail: 'coinbsc.png'

        },
        {
          link: "https://www.youtube.com/watch?v=8xaXadlb_Iw",
          image: "pancake.png",
          walletName: "PancakeSwap",
          title:
            "How to buy DeFi Yield Protocol (DYP) on the Binance Smart Chain using the Coin98 Mobile Wallet App",
          thumbnail: 'coinavax.png'

        },
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
          image: "metamask.png",
          walletName: "Metamask",
          title: "How to set up MetaMask for DeFi Yield Protocol (DYP)",
          thumbnail: 'uni1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=IE5danKYD-c",
          image: "metamask.png",
          walletName: "Metamask",
          title: "How to buy DeFi Yield Protocol (DYP) on 1Inch using MetaMask",
          thumbnail: 'inch1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=amM9wOGNVpg",
          image: "trustwallet.png",
          walletName: "Trust wallet",
          title:
            "How to set up Trust Wallet for DeFi Yield Protocol (DYP)",
          thumbnail: 'trust1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=UtcP4cWkXwg",
          image: "trustwallet.png",
          walletName: "Trust wallet",
          title:
            "How to buy DeFi Yield Protocol (DYP) on 1Inch using Trust Wallet",
          thumbnail: 'inch2.png'

        },
        {
          link: "https://www.youtube.com/watch?v=lTD8DAsxmtY",
          image: "safepal.png",
          walletName: "SafePal",
          title: "How to set up SafePal for DeFi Yield Protocol",
          thumbnail: 'safe1.png'

        },
        {
          link: "https://www.youtube.com/watch?v=nUvFG00QqS0",
          image: "safepal.png",
          walletName: "SafePal",
          title: "How to buy DeFi Yield Protocol (DYP) on 1Inch using SafePal",
          thumbnail: 'inch3.png'

        },
      ],
      id: "collapseten",
    },
    {
      title: "KyberDMM",
      logo: "kyber-dmm.png",
      link: "https://dmm.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17&networkId=43114",
      totalvids: "1 video",
      videos: [
        {
          link: "https://www.youtube.com/watch?v=olhIziGMs0Y",
          image: "metamask.png",
          walletName: "Metamask",
          title:
            "How to buy DeFi Yield Protocol (DYP) on KyberDMM using MetaMask",
          thumbnail: 'kyberdmm.png'

        },
      ],
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
    <div className="container-fluid buydyp-main-hero d-flex flex-column justify-content-lg-end justify-content-xl-end justify-content-center mb-5">
      <div className="container-lg d-flex justify-content-between align-items-center flex-column mt-5">
        <div className="container-lg d-flex justify-content-between align-items-center mb-5 px-0">
          <div className="col-12 col-lg-6 text-white d-flex flex-column gap-3 justify-content-lg-center justify-content-xl-center">
            <Title top={"Buy"} bottom={"DYP"} align={"d-flex gap-1"} />
            <p className="text-secondary">
              At Dypius, we want to make it easy for you to purchase our token.
              We have a variety of centralized and decentralized exchanges that
              you can use to do so.
            </p>
          </div>
          <div className="col-9 col-lg-3 position-relative d-xl-block d-lg-block d-none">
            <img
              className="buydypcoin"
              src={require(`../../../assets/coin.png`)}
              alt=""
            />

            <img
              className="backgroundbuydyp"
              src={require(`../assets/purplebg.png`)}
              alt=""
            />
          </div>
        </div>
        <div className="row gap-4 justify-content-center pb-5">
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
                  videos={item.videos}
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
