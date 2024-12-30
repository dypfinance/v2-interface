import React from "react";


const ProductCard = ({ title, desc, link, classname }) => {
  return (
    <div className={classname + 'col-12 col-lg-5'}>
      <div className={ `bg${classname}`}>
      <div className="row m-0 justify-content-start gap-0 h-100">
        <img src={classname === 'bridge' ? "https://cdn.worldofdypians.com/dypius/bridgeProduct.png" : "https://cdn.worldofdypians.com/dypius/earnProduct.png"} style={{padding: 0, height: 77}}  />
        <div className="d-flex flex-column justify-content-between py-3">
          <h6 className="title">{title}</h6>
          <p className="desc">{desc}</p>
          <a
            href={link}
            target={"_blank"}
            rel={"noreferrer"}
            className="linkdesc"
          >
            Go to {title} <img src={"https://cdn.worldofdypians.com/dypius/right-arrow.svg"} alt="" className="ml-2"  />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
