import React from "react";
import Title from "../../../components/Title/Title";
import rightArrow from '../../../assets/right-arrow.svg'
import metaverse1 from '../../../assets/metaverse-1.png'
import metaverse2 from '../../../assets/metaverse-2.png'
import metaverse3 from '../../../assets/metaverse-3.png'

const DypMetaverse = () => {
  return (
    <div className="container-lg">
      <div className="row dyp-metaverse justify-content-between">
    <div className="col-5 d-flex justify-content-center flex-column">
      <Title top="Metaverse World" bottom="ipsum dolor sit amet" />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        arcu lorem, viverra eu tempor quis, commodo a leo. Sed pretium,
        orci ac ultrices semper
      </p>
      <div className="button-group mt-3">
        <button className="btn filled-btn mr-3">
          View now <img src={rightArrow} alt="" />
        </button>
        <button className="btn outline-btn">Recieve newsletter</button>
      </div>
    </div>
    <div className="col-6">
      <div className="image-grid">
        <div className="image-1">
          <img src={metaverse1} alt="" />
        </div>
        <div className="image-2">
          <img src={metaverse2} alt="" />
        </div>
        <div className="image-3">
          <img src={metaverse3} alt="" />
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default DypMetaverse;
