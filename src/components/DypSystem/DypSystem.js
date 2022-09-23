import React from "react";
import DypRect from '../../assets/dypRect.svg'
import DypPlanet from '../../assets/planetItem.svg'

const DypSystem = () => {
  return (
    <div id="orbit-system">
      <div class="system">
        <div class="satellite-orbit">
          <div class="satellite">
            <img src={DypPlanet} alt='dyp-item' style={{width: 70, height: 70}}/>
          </div>
        </div>

        <div class="satellite-orbit2">
          <div class="satellite2">
          <img src={DypPlanet} alt='dyp-item' style={{width: 70, height: 70}}/>
          </div>
        </div>

        <div class="satellite-orbit3">
          <div class="satellite3">
          <img src={DypPlanet} alt='dyp-item' style={{width: 70, height: 70}}/>
          </div>
        </div>

        <div class="planet">
          <img src={DypRect} alt='dypPlanet' />
        </div>
      </div>
    </div>
  );
};

export default DypSystem
