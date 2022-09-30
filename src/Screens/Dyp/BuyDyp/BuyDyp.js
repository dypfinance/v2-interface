import React from 'react'
import Title from '../../../components/Title/Title'
import coin from '../../../assets/coin.png'
import coinBg from '../../../assets/coinBackground.svg'
import ring from '../../../assets/tokenCircle.png';
import sphere from '../../../assets/newsSphere.png'
import './_buydyp.scss'

const BuyDyp = () => {
  return (
    <div className="container-lg buy-dyp d-flex position-relative">
      <img className='ring' src={ring} alt="" />
      <img className='sphere-1' src={sphere} alt="" />
      <img className='sphere-2' src={sphere} alt="" />
    <div className="row w-100 px-4">
    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <Title top='Buy' bottom='DYP/iDYP' />
            <p className="text-secondary">
            Hit the ground running with our quick start guide! Get tips, watch how-to videos and learn how to become an expert in no time.
            </p>
            <div className="btn filled-btn w-50 d-flex justify-content-center align-items-center">Go to buy DYP token<img className='ps-2' src={require(`../../../assets/right-arrow.svg`).default} alt="" /></div>
        </div>
        <div className="col-12 col-lg-6 position-relative">
            <img className='coin' src={coin} alt="" />
            <img className='coinBackground' src={coinBg} alt="" />
        </div>

    </div>
    </div>
  )
}

export default BuyDyp