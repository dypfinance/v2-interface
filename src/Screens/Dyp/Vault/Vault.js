import React from "react";
import VaultCards from "../../../components/VaultCard/VaultCard";
import Title from "../../../components/Title/Title";
const Vault = () => {
  const vaultArray = [
    {
      icons: ["wethVault.svg"],
      title: "WETH",
      percentage: "1.9 - 3.7",
      total_value_locked: ``,
      lock_time: "No lock",
      top_tick: true,
      new_badge: false,
      link: "https://vault.dyp.finance/vault-weth",
    },
    {
      icons: ["bitcoinVault.svg"],
      title: "WBTC",
      percentage:"1.6 - 3.4",
      total_value_locked: ``,
      lock_time: "No lock",
      link: "https://vault.dyp.finance/vault-wbtc",
    },
    {
      icons: ["usdcVault.svg"],
      title: "USDC",
      percentage: "2.1 - 4.2",
      total_value_locked: ``,
      lock_time: "No lock",
      new_badge: false,
      top_tick: false,
      link: "https://vault.dyp.finance/vault-usdc",
    },
    {
      icons: ["usdtVault.svg"],
      title: "USDT",
      percentage: "2.2 - 4.9",
      total_value_locked: ``,
      lock_time: "No lock",
      new_badge: false,
      top_tick: false,
      link: "https://vault.dyp.finance/vault-usdt",
    },
    {
      icons: ["daiVault.svg"],
      title: "DAI",
      percentage: "2.3 - 5.3",
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
                    top_tick={item.top_tick}
                    icon={item.icons}
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
