import React from "react";
import VaultCards from "../../../components/VaultCard/VaultCard";
import Title from "../../../components/Title/Title";
const Vault = () => {
  const vaultArray = [
    {
      icons: ["eth-icon2.png"],
      title: "ETH",
      percentage: "3% - 13%",
      total_value_locked: ``,
      lock_time: "No lock",
      top_tick: true,
      new_badge: false,
      link: "https://vault.dyp.finance/vault-weth",
    },
    {
      icons: ["wbtc-icon.png"],
      title: "WBTC",
      percentage: "3% - 13%",
      total_value_locked: ``,
      lock_time: "No lock",
      link: "https://vault.dyp.finance/vault-wbtc",
    },
    {
      icons: ["usdc-icon.png"],
      title: "USDC",
      percentage: "8% - 22%",
      total_value_locked: ``,
      lock_time: "No lock",
      new_badge: false,
      top_tick: false,
      link: "https://vault.dyp.finance/vault-usdc",
    },
    {
      icons: ["usdt-icon.png"],
      title: "USDT",
      percentage: "9% - 23%",
      total_value_locked: ``,
      lock_time: "No lock",
      new_badge: false,
      top_tick: false,
      link: "https://vault.dyp.finance/vault-usdt",
    },
    {
      icons: ["dai-icon.png"],
      title: "DAI",
      percentage: "8% - 21%",
      total_value_locked: ``,
      lock_time: "No lock",
      new_badge: false,
      top_tick: false,
      link: "https://vault.dyp.finance/vault-dai",
    },
  ];

  return (
    <div className="container-fluid" id="vault">
      <div className="vaultwrapper container-lg">
        <div className="p-4">
          <div className="row gap-5 m-auto">
            <div className="vaultInner">
            <Title top="Vault" />
           
            <p>Make your assets work for you without losing time, effort or control</p> </div>
            {vaultArray.length > 0 &&
              vaultArray.map((item, index) => {
                return (
                  <VaultCards
                    pool={item.title}
                    apr={item.percentage}
                    key={index}
                    link={item.link}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
