import React, { useState } from "react";
import DypRect from "../../assets/dypRect.svg";
import DypPlanet from "../../assets/planetItem.png";

const DypSystem = ({
  onShowFirstDesc,
  onShowSecondDesc,
  onShowThirdDesc,
  onRemoveDesc,
}) => {
  return (
    <div id="orbit-system">
      <div className="system">
        <div className="satellite-orbit">
          <div className="satellite">

            <img
              src={DypPlanet}
              alt="dyp-item"
              style={{ width: 70, height: 70 }}
              onMouseEnter={onShowFirstDesc}
              onMouseLeave={onRemoveDesc}
            />

          </div>
        </div>

        <div className="satellite-orbit2">
          <div className="satellite2">

            <img
              src={DypPlanet}
              alt="dyp-item"
              style={{ width: 70, height: 70 }}
              onMouseEnter={onShowSecondDesc}
              onMouseLeave={onRemoveDesc}
            />

          </div>
        </div>

        <div className="satellite-orbit3">
          <div className="satellite3">

            <img
              src={DypPlanet}
              alt="dyp-item"
              style={{ width: 70, height: 70 }}
              onMouseEnter={onShowThirdDesc}
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
