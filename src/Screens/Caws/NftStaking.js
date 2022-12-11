import React from "react";
import CatHero from "./catHero.png";
import Stakegraph from "./stakegraph.png";
import { useNavigate } from "react-router-dom";

const NftStaking = () => {
  let navigate = useNavigate();
  const gotoMint = () => {
    navigate("/stake-caws");
  };

  const devicewidth = window.innerWidth;
  return (
    <div className="caws-traits container-padding nft-staking-wrapper" style={{margin: '5rem auto', maxWidth: '93%'}}>
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <img src={CatHero} alt="" height={ devicewidth < 450 ? 200 : 350} />
        </div>
        <div className="col-lg-7">
          <div className="innerwrapper">
            <div className="d-flex flex-column">
              <h2>NFT</h2>
              <h1>STAKING</h1>
            </div>
            <img src={Stakegraph} alt="" height={100}  style={{ display: devicewidth < 500 ? 'none' : ''}}/>
          </div>
          <div>
            {/*<p>*/}
            {/*  Time for staking has finally arrived! You can now do even more with your newly-<br/>acquired icons by*/}
            {/*  staking them.<br/> Staking is as easy as you’d expect: To get started, simply select one or all of your*/}
            {/*  minted NFTs, and begin earning continuous ETH rewards!*/}
            {/*</p>*/}
            <p>
              Time for staking has finally arrived! You can now do even more with your CAWS.<br/>
              Staking is as easy as you’d expect: To get started, simply select one or all of your minted NFTs, and
              begin earning continuous ETH rewards!
            </p>
            <button className="start-staking-btn" onClick={() => gotoMint()}>
              Start Earning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftStaking;
