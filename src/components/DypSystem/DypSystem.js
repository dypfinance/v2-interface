import React, { useState } from "react";
import DypRect from "../../assets/dypRect.svg";
import DypPlanet from "../../assets/planetItem.png";

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

          <div className="satellite22">
            <img
              src={DypPlanet}
              alt="dyp-item"
              style={{ width: 70, height: 70 }}
              onMouseEnter={onShowThirdDesc}
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
              onMouseEnter={onShowFourthDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
          <div className="satellite33">
            <img
              src={DypPlanet}
              alt="dyp-item"
              style={{ width: 70, height: 70 }}
              onMouseEnter={onShowFifthDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
        </div>
        <div className="satellite-orbit4">
          <div className="satellite4">
            <img
              src={DypPlanet}
              alt="dyp-item"
              style={{ width: 70, height: 70 }}
              onMouseEnter={onShowSixthDesc}
              onMouseLeave={onRemoveDesc}
            />
          </div>
          <div className="satellite44">
            <img
              src={DypPlanet}
              alt="dyp-item"
              style={{ width: 70, height: 70 }}
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
