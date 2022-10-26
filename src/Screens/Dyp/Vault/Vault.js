import React from "react";
import VaultCards from "../../../components/VaultCard/VaultCard";
import Title from "../../../components/Title/Title";
const Vault = () => {
  const vaultArray = [
    {
      icons: ["eth.svg"],
      title: "ETH",
      percentage: "3% - 13%",
      total_value_locked: ``,
      lock_time: "No lock",
      top_tick: true,
      new_badge: false,
      link: "https://vault.dyp.finance/vault-weth",
    },
    {
      icons: ["bitcoin.svg"],
      title: "WBTC",
      percentage: "3% - 13%",
      total_value_locked: ``,
      lock_time: "No lock",
      link: "https://vault.dyp.finance/vault-wbtc",
    },
    {
      icons: ["usdc.svg"],
      title: "USDC",
      percentage: "8% - 22%",
      total_value_locked: ``,
      lock_time: "No lock",
      new_badge: false,
      top_tick: false,
      link: "https://vault.dyp.finance/vault-usdc",
    },
    {
      icons: ["usdt.svg"],
      title: "USDT",
      percentage: "9% - 23%",
      total_value_locked: ``,
      lock_time: "No lock",
      new_badge: false,
      top_tick: false,
      link: "https://vault.dyp.finance/vault-usdt",
    },
    {
      icons: ["dai.svg"],
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
       {/* <img className='bluehero-solutions' src={require(`../../../assets/metaverse-blueHero.svg`).default} alt="" style={{bottom: 0}}/> */}
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
