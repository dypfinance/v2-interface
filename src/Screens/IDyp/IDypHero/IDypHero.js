import React from "react";

const IDypHero = () => {
  return (
    <div className="container-fluid dyp-main-hero d-flex flex-column justify-content-end position-relative overflow-hidden">
      <div className="container-lg d-flex justify-content-between">
        <div className="col-12 col-lg-6 text-white d-flex flex-column gap-3 justify-content-lg-end justify-content-xl-end">
          <h1>iDYP</h1>
          <p>
            iDYP is an ERC-20 token used in the Dypius ecosystem as a component
            of smart contract strategies. It is accessible on three majour
            networks like Ethereum, BNB chain, and Avalanche. The ecosystem it
            is designed in a way that makes it easier for users to receive
            rewards from the farm, buyback, vaults, and staking pools using iDYP
            tokens. Dypius has a multi-token economy, and uses another ERC-20
            token called DYP as a governance token for its ecosystem. <br />
            The Dypius metaverse platform will use iDYP as a key token by being
            a crucial component of a fascinating play-to-earn (P2E) game. iDYP
            will bring extraordinary interactions from metaverse to crypto space
            by being the center of Dypius ecosystem.
          </p>
        </div>
        <div className="col-9 col-lg-3 position-relative d-lg-block d-xl-block d-none">
          <img
            className="idypcoin"
            src={require(`../../../assets/coin.png`)}
            alt=""
          />
          <img
            className="backgroundbuydyp"
            src={require(`../assets/idyp_purplebg.png`)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IDypHero;
