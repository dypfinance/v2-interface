import React, { useState } from "react";
import ChainlinkData from "../ChainlinkData/ChainlinkData";
import DypSystem from "../../../components/DypSystem/DypSystem";
import dypiusLogo from '../../../assets/dypiusLogo.svg';
import dypiusIcon from '../../../assets/dyptoolsIcon.svg';

const MainHero = () => {

  const [opacity, setOpacity] = useState(false)


const changeBackground = () => {
    if (window.scrollY >= 75) {
      setOpacity(true)

    } else {
      setOpacity(false)
    }

  }

  window.addEventListener('scroll', changeBackground)


  return (
    <div className="container-fluid p-0" style={{overflow: 'hidden', marginTop: '92px'}}>
    <div className="container-fluid main-hero">
      <div className={`row pt-4 justify-content-between page-navigation ${opacity ? 'opacity' : null}`}>
        <div className="col-2 d-flex justify-content-center">
          <img src={dypiusLogo} />
        </div>
        <div className="col-6 bg-white d-flex justify-content-around align-items-center py-3 links">
          <a className="text-decoration-none" href="#metaverse">
            DYP
          </a>
          <a className="text-decoration-none" href="#metaverse">
            Metaverse World
          </a>
          <a className="text-decoration-none" href="#metaverse">
            Governance
          </a>
          <a className="text-decoration-none" href="#metaverse">
            Support
          </a>
          <a className="text-decoration-none" href="#metaverse">
            About Us
          </a>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <button className="btn text-white py-2"><img src={dypiusIcon} className='pe-2' />Dyp Tools</button>
        </div>
      </div>
      <div className="container-lg">
    <div className="heading row">
      <div className="col-5 d-flex justify-content-center flex-column text-white ml-4">
        <div>
          <h1>DYP Lorem</h1>
          <h1>ipsum dolor sit amet</h1>
        </div>
        <p className="text-white">
          The Defi Yield Protocol Referral Program is our way of thanking
          and rewarding you for being an active member of the community and
          for sharing and promoting our products.
        </p>
        <button type="button" className="btn outline-btn">
          Explore More
        </button>
      </div>
      <div className="col-5 d-flex justify-content-center flex-column text-white ml-4">
        <DypSystem/>
      </div>
    </div>
    </div>
  </div>
  <ChainlinkData/>
  </div>
  );
};

export default MainHero;