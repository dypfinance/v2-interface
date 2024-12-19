import React from 'react'
import Title from '../../../components/Title/Title'
import './_supportmainhero.scss'

import bluehero from '../../../assets/metaverse-blueHero.svg'

import  sphere from '../../../assets/newsSphere.png'


const SupportMainHero = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-end support-main-wrapper">
        <div className="container-lg d-flex justify-content-center align-items-end ">
        <div className="row justify-content-between w-100 align-items-center position-relative" style={{minHeight: 200, top: 55}}>
        <div className="col-12 col-lg-5 col-md-5 mt-5 mt-lg-0 position-relative">
          {/* <img src={sphere} alt="" className="support-sphere d-none d-lg-block"  /> */}
          <Title top="Dypius" bottom="Support" align="d-flex flex-row gap-2" />
          <p className='text-secondary'>
          Get up to date information about Dypius products and solutions in one place. 
          </p>
        </div>
        <div className="col-12 col-lg-5 col-md-5 image-container position-relative">
          {/* <img src={supportShape} alt="" className="shape"  />
          <img src={supportPhone} alt="" className="phone"  />
          <img src={supportBrain} alt="" className="brain"  /> */}
          {/* <img src={bluehero} alt="" className="bluehero"  /> */}
          <img src={"https://cdn.worldofdypians.com/dypius/supportBanner.png"} className="support-banner" alt="" />
        </div> 
        </div>
        </div>
        <div
        className="row  p-4 justify-content-center gap-2 gap-lg-4 support-submenu-container"
        style={{ zIndex: 5 }}
      >
        <a href="#faq" className="text-decoration-none submenu-link">
          FAQs
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className="submenu-indicator" alt=""  />
        </a>
        <a href="#tutorials" className="text-decoration-none submenu-link">
          Tutorials
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className="submenu-indicator" alt=""  />
        </a>
        <a href="#helpcenter" className="text-decoration-none submenu-link">
          Contact us
          <img src={"https://cdn.worldofdypians.com/dypius/aboutIndicator.svg"} className="submenu-indicator" alt=""  />
        </a>
      </div>
    </div>
  )
}

export default SupportMainHero