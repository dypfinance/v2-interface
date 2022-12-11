import React from "react";
import Ship from "../assets/images/ship.svg";
import MultipleCaws from "../assets/images/multi-caws.png";
import Console from "../assets/images/game-console.svg";
import CawsLogo from "../assets/images/caws-logo.png";
import MiniConsole from "../assets/images/console-small.svg";
import ChevronArrowSvg from "../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import $alert from "../functions/$alert";

const CawsGame = () => {

  const bios = {
    alert: {
      title: "Play CAWS 2D Game",
      content:
          "Top scores on the leaderboard will be eligible for prizes! Coming Soon!",
    },
  };
  const handleShowModal = (e) => {
    e && e.preventDefault();
    $alert(bios["alert"]);
  };

  return (
      <div className="container-fluid">
    <div
      className="row justify-content-between container-padding m-auto"
      style={{ gap: 20 }}
    >
      <div className="caws-left-wrapper">
        <div className="buy-caws-wrapper">
          <div className="justify-content-between m-0 caws-content-wrapper">
            <div>
              <h1>Cats and Watches Society</h1>
              <p className="m-0">
                The initial sale has sold out.
                <br />To get your{" "}
                <b>CAWS NFT</b>,
                <br /> check out the collection on OpenSea.
              </p>
            </div>
            <div>
              <img src={MultipleCaws} id="multi-caws2" />
            </div>
          </div>
          <a href='https://opensea.io/collection/catsandwatchessocietycaws' target={'_blank'} rel='noreferrer'>
          <div className="buy-caws-btn">
            <img src={Ship} alt="" />
            <span>BUY A CAT ON OPENSEA</span>
            <ChevronArrowSvg size="12" />
          </div></a>
        </div>
      </div>
      <div className="caws-right-wrapper">
        <div className="caw-game-wrapper">
          <div className="caws-content-wrapper justify-content-between m-0">
            <div>
              <h1>CAWS 2D GAME</h1>
              <p>
                Play as a CAWS NFT inspired character.
                <br />Exclusive to CAWS NFT holders.
              </p>
            </div>
            <div className="d-flex m-0" style={{ alignItems: "end" }}>
              <img src={CawsLogo} alt="" id="cawsLogo2" />
              <img src={Console} alt="" id="console2" />
            </div>
          </div>
          <a target="_blank" href="https://game.dyp.finance" rel='noreferrer'>
            <div className="play-now-btn">
              <img src={MiniConsole} /> <span>PLAY NOW</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CawsGame;
