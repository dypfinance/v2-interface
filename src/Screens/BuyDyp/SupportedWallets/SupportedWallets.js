import React from "react";

const SupportedWallets = () => {
  const wallets = [
    {
      logo: "coinbase.png",
      title: "Coinbase",
    },
    {
      logo: "metamask.png",
      title: "Metamask",
    },
    {
      logo: "trustwallet.png",
      title: "Trust wallet",
    },
    {
      logo: "coin98.png",
      title: "Coin98",
    },
    {
      logo: "safepal.png",
      title: "SafePal",
    },
  ];

  return (
    <div className="supportedwallet-wrapper container-lg mt-5 mb-5">
      <div>
        <div className="row m-0 gap-3 justify-content-between align-items-center">
          <h1>Supported wallets</h1>
          <div>
            <div className="row m-0 gap-2 justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span className="dypcontractaddr">
                  DYP Contract Address (ETH, BNB Chain, Avalanche):
                </span>
                <span className="contractaddr">
                  0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17
                  <img
                    src={require("../assets/copy.svg").default}
                    alt=""
                    className="ml-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17"
                      );
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 gap-2 justify-content-center">
          {wallets.length > 0 &&
            wallets.map((item, index) => {
              return (
                <div className="walletitem" key={index}>
                  <img
                    src={require(`../assets/buydypItems/${item.logo}`)}
                    alt=""
                    className="walletimg"
                  />
                  <span className="wallettitle">{item.title}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SupportedWallets;
