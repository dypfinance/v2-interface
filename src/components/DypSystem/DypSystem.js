import React, { useState } from "react";
import DypRect from "../../assets/dypRect.svg";
import DypPlanet from "../../assets/planetItem.png";
import Launchpad from "../../assets/satellites/launchpad.png";
import Dyptools from "../../assets/satellites/dyptool3.png";
import Bridge from "../../assets/satellites/bridge.png";
import Earn from "../../assets/satellites/earn.png";
import Governance from "../../assets/satellites/governance.png";
import Caw from "../../assets/satellites/caws.png";
import Metaverse from "../../assets/satellites/metaverse.png";

const DypSystem = ({
  onShowFirstDesc,
  onShowSecondDesc,
  onShowThirdDesc,
  onShowFourthDesc,
  onShowFifthDesc,
  onShowSixthDesc,
  onShowSeventhDesc,
  onRemoveDesc,
}) => {
  return (
    <div id="orbit-system">
      <div className="system">
        <div className="satellite-orbit2"></div>

        <div className="satellite-orbit3">
          <div className="satellite">
            <img
              src={Launchpad}
              alt="dyp-item"
              style={{ width: 50, height: 50 }}
              onMouseEnter={onShowFifthDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
          <div className="satellite3">
            <img
              src={Dyptools}
              alt="dyp-item"
              style={{ width: 50, height: 50 }}
              onMouseEnter={onShowThirdDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
          <div className="satellite33">
            <img
              src={Bridge}
              alt="dyp-item"
              style={{ width: 50, height: 50 }}
              onMouseEnter={onShowFourthDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
        </div>
        <div className="satellite-orbit4">
          <div className="satellite4">
            <img
              src={Earn}
              alt="dyp-item"
              style={{ width: 50, height: 50 }}
              onMouseEnter={onShowFirstDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
          <div className="satellite44">
            <img
              src={Governance}
              alt="dyp-item"
              style={{ width: 50, height: 50 }}
              onMouseEnter={onShowSecondDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
          <div className="satellite22">
            <img
              src={Caw}
              alt="dyp-item"
              style={{ width: 50, height: 50 }}
              onMouseEnter={onShowSixthDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>

          <div className="satellite2">
            <img
              src={Metaverse}
              alt="dyp-item"
              style={{ width: 50, height: 50 }}
              onMouseEnter={onShowSeventhDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
        </div>

        <div className="planet">
          <img src={DypRect} alt="dypPlanet" />
        </div>
      </div>
    </div>
  );
};

export default DypSystem;
