import React from 'react'
import Title from '../../../components/Title/Title'
import './_supportmainhero.scss'
import supportBrain from '../assets/supportBrain.png'
import supportPhone from '../assets/supportPhone.png'
import supportShape from '../assets/supportShape.png'
import bluehero from '../../../assets/metaverse-blueHero.svg'


const SupportMainHero = () => {
  return (
    <div className="container-fluid d-flex justify-content-end support-main-wrapper">
        <div className="container-lg d-flex justify-content-center align-items-end p-5">
        <div className="row justify-content-between">
        <div className="col-12 col-lg-5 col-md-5 mt-5 mt-lg-0">
          <Title top="Dypius" bottom="Support" align="d-flex flex-row gap-2" />
          <p className='text-secondary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet nibh magna. Curabitur fringilla feugiat dui, eu facilisis nibh scelerisque in
          </p>
        </div>
        <div className="col-12 col-lg-5 col-md-5 image-container position-relative">
          <img src={supportShape} alt="" className="shape" />
          <img src={supportPhone} alt="" className="phone" />
          <img src={supportBrain} alt="" className="brain" />
          <img src={bluehero} alt="" className="bluehero" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default SupportMainHero