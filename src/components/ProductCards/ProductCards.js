import React from "react";
import BridgeAsset from './assets/bridge.png'
import EarnAsset from './assets/earn.png'

import rightArrow from "../../assets/right-arrow.svg";

const ProductCard = ({ title, desc, link, classname }) => {
  return (
    <div className={classname + 'col-12 col-lg-5'}>
      <div className={ `bg${classname}`}>
      <div className="row m-0 justify-content-start gap-0 h-100">
        <img src={classname === 'bridge' ? BridgeAsset : EarnAsset} style={{padding: 0, height: 77}}  />
        <div className="d-flex flex-column justify-content-between py-3">
          <h6 className="title">{title}</h6>
          <p className="desc">{desc}</p>
          <a
            href={link}
            target={"_blank"}
            rel={"noreferrer"}
            className="linkdesc"
          >
            Go to {title} <img src={rightArrow} alt="" className="ml-2"  />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
