import React from "react";
import "./_dyppartners.scss";
import Title from "../../../components/Title/Title";
import Slider from "react-slick";
import { useState } from "react";

const DypPartners = () => {

const [partnersLength, setPartnersLength] = useState(12)

  const partnersArray = [
    {
      image: "chainlink.png",
      text: "Chainlink",
      href: "https://chain.link/",
    },
    {
      image: "coinbase.png",
      text: "Coinbase",
      href: "https://www.coinbase.com/",
    },
    {
      image: "huobi.png",
      text: "Huobi",
      href: "https://www.huobi.com/",
    },
    {
      image: "kuCoin.png",
      text: "KuCoin",
      href: "https://www.kucoin.com/trade/DYP-USDT",
    },
    {
      image: "avax.png",
      text: "Avalanche",
      href: "https://www.avalabs.org/",
    },
    {
      image: "pangolin.png",
      text: "Pangolin",
      href: "https://pangolin.exchange/",
    },
    {
      image: "kyber-network.png",
      text: "Kyber Network",
      href: "https://kyber.network/",
    },
    {
      image: "coin98.png",
      text: "Coin98",
      href: "https://coin98.com/wallet",
    },
    // {
    //     image: "uniswap.png",
    //     text: "Uniswap V2",
    //     href: 'https://app.uniswap.org/'
    // },
    {
      image: "efficient-frontier.png",
      text: "Efficient Frontier",
      href: "https://www.efrontier.io/",
    },
    {
      image: "aircoins.png",
      text: "Aircoins",
      href: "https://www.aircoins.io/",
    },
    {
      image: "cryptoAdventure.png",
      text: "CryptoAdventure",
      href: "https://cryptoadventure.com/",
    },
    {
      image: "hummingbot.png",
      text: "Hummingbot",
      href: "https://hummingbot.io/",
    },
    {
      image: "certic-foundation.png",
      text: "CertiK Security",
      href: "https://www.certik.com/",
    },
    {
      image: "peckShield.png",
      text: "PeckShield",
      href: "https://peckshield.com/",
    },
    {
      image: "blockchain-consillium.png",
      text: "Blockchain Consillium",
      href: "https://www.blockchainconsilium.com/",
    },
    {
      image: "crypto.com.png",
      text: "Crypto.com",
      href: "https://crypto.com/price/defi-yield-protocol",
    },
    {
      image: "gate.io.png",
      text: "Gate.io",
      href: "https://www.gate.io/trade/dyp_usdt",
    },
    {
      image: "poloniex.png",
      text: "Poloniex",
      href: "https://poloniex.com/exchange/USDT_DYP",
    },
    {
      image: "mexc.png",
      text: "Mexc",
      href: "https://www.mexc.com/",
    },
    {
      image: "ankr.png",
      text: "ANKR",
      href: "https://www.ankr.com/",
    },
    {
      image: "swft.svg",
      text: "SWFT",
      href: "https://www.swft.pro/",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const loadMore = () => {
    setPartnersLength(partnersLength + 6)
  }

  return (
    <div className="container-fluid">
      <div className="container-lg d-flex flex-column justify-content-center align-items-center p-0 p-lg-2">
        <div className="row flex-column justify-content-center align-items-center gap-2">
          <Title top="Our" bottom="Partners" align="d-flex flex-row gap-2" />
          <p className="text-secondary">
            We are proud of our growing list of partners.
          </p>
        </div>

        <div
          className="row dyp-partners position-relative p-5 justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {partnersArray.slice(0, partnersLength).map((partner, index) => (
            <a href={partner.href}>
              <div
                key={index}
                className="partner_wrapper d-flex flex-column align-items-center justify-content-center"
              >
                <img src={`/PartnerIcons/${partner.image}`} alt="" />
                <p className="mb-0 text-dark">{partner.text}</p>
              </div>
            </a>
          ))}
          <div className={`btn outline-btn ${partnersLength < 23 ? 'd-flex' : 'd-none'} justify-content-center align-items-center position-absolute load-more`}  onClick={loadMore}>Load More</div>
        </div>
      </div>
    </div>
  );
};

export default DypPartners;
