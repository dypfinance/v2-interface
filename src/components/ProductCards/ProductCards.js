import React from "react";
import NoteIcon from "../../components/NoteIcon/NoteIcon";
import rightArrow from "../../assets/right-arrow.svg";

const ProductCard = ({ title, desc, link, classname }) => {
  return (
    <div className={classname}>
      <div className={ `bg${classname}`}>
      <div className="row m-0 justify-content-start gap-0">
        <NoteIcon
          bgFill={"#FFF"}
          svgFill={classname === "bridge" ? "#F16640" : "#57B6AB"}
        />
        <div className="d-flex flex-column gap-3 pt-3">
          <h6 className="title">{title}</h6>
          <p className="desc">{desc}</p>
          <a
            href={link}
            target={"_blank"}
            rel={"noreferrer"}
            className="linkdesc"
          >
            Go to {title} <img src={rightArrow} alt="" className="ml-2" />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
