import React from "react";
import DypRect from '../../assets/dypRect.svg'

const DypSystem = () => {
  return (
    <div id="orbit-system">
      <div class="system">
        <div class="satellite-orbit">
          <div class="satellite">SAT</div>
        </div>

        <div class="satellite-orbit2">
          <div class="satellite2">SAT2</div>
        </div>

        <div class="satellite-orbit3">
          <div class="satellite3">SAT3</div>
        </div>

        <div class="planet">
          <img src={DypRect} alt='dypPlanet' />
        </div>
      </div>
    </div>
  );
};

export default DypSystem
