import React from "react";
import ListCard from "../../../components/ListCard/ListCard";
import Title from "../../../components/Title/Title";
import filledArrow from '../../../assets/filledArrow.svg'
import iphone from '../../../assets/iphone13.png'
import iphoneBg from '../../../assets/iphoneBackground.png'
import dots from '../../../assets/dots.png'

const DypTools = () => {
    return(
        <div className="container-lg">
              <div className="row dyp-tools">
          <div className="col-4 d-flex align-items-start justify-content-center flex-column pl-5 pt-4">
            <Title top="DYP Tools" bottom="& benefits" />
            <ListCard />
            <ListCard />
            <ListCard />
            <button className="btn outline-btn">
              Go to DYP Tools <img src={filledArrow} alt="" className="ml-2"/>
            </button>
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center position-relative">
            <img className="iphoneBackground" src={iphoneBg} alt="" />
            <img className="iphone" src={iphone} alt="" />
            <img className="dots" src={dots} alt="" />
          </div>
        </div>
        </div>
    )
}

export default DypTools