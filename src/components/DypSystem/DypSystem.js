import React, { useState } from "react";



import { NavLink } from "react-router-dom";

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
          <div
            className="satellite"
            onMouseEnter={onShowFifthDesc}
            onMouseLeave={onRemoveDesc}
          >
             <a
              href="https://app.dypius.com/launchpad"
              target={"_blank"}
              rel="noreferrer"
              style={{ width: 50, height: 50, display: "flex" }}
            ></a>

          </div>

          <div
            className="satellite3"
            onMouseEnter={onShowThirdDesc}
            onMouseLeave={onRemoveDesc}
          >
            <a
              href="https://app.dypius.com/"
              target={"_blank"}
              rel="noreferrer"
              style={{ width: 50, height: 50, display: "flex" }}
            ></a>
          </div>

          <div
            className="satellite33"
            onMouseEnter={onShowFourthDesc}
            onMouseLeave={onRemoveDesc}
          >
             <a
              href="https://app.dypius.com/bridge"
              target={"_blank"}
              rel="noreferrer"
              style={{ width: 50, height: 50, display: "flex" }}
            ></a>

          </div>
        </div>
        <div className="satellite-orbit4">
          <div
            className="satellite4"
            onMouseEnter={onShowFirstDesc}
            onMouseLeave={onRemoveDesc}
          >
             <a
              href="https://app.dypius.com/earn"
              target={"_blank"}
              rel="noreferrer"
              style={{ width: 50, height: 50, display: "flex" }}
            ></a>

          </div>
          <div
            className="satellite44"
            onMouseEnter={onShowSecondDesc}
            onMouseLeave={onRemoveDesc}
          >
            <NavLink
              to="/governance"
              style={{ width: 50, height: 50, display: "flex" }}
            >
              {/* <img
                src={Governance}
                alt="dyp-item"
              /> */}
            </NavLink>
          </div>
          <div
            className="satellite22"
            onMouseEnter={onShowSixthDesc}
            onMouseLeave={onRemoveDesc}
          ></div>
          <div
            className="satellite2"
            onMouseEnter={onShowSeventhDesc}
            onMouseLeave={onRemoveDesc}
          >
             <a
              href="https://www.worldofdypians.com/"
              target={"_blank"}
              rel="noreferrer"
              style={{ width: 50, height: 50, display: "flex" }}
            ></a>

          </div>
        </div>

        <div className="planet">
          <img src={"https://cdn.worldofdypians.com/dypius/planetImg.svg"} className="planet-image" alt="dypPlanet" />
          <img src={"https://cdn.worldofdypians.com/dypius/planetShadow.svg"} className="planet-shadow" alt="dypPlanet" />
        </div>
      </div>
    </div>
  );
};

export default DypSystem;
