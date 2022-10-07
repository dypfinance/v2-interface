import React from 'react'
import Title from '../../../components/Title/Title'
import coin from '../../../assets/coin.png';
import coinBg from '../../../assets/coinBackground.svg';
import ring from '../../../assets/tokenCircle.png';
import sphere from '../../../assets/newsSphere.png';
import useWindowSize from '../../../hooks/useWindowSize'
import './_buydyp.scss'

const BuyDyp = () => {

  const windowSize = useWindowSize()


  return (
    <div className="container-lg buy-dyp d-flex position-relative justify-content-between flex-column flex-lg-row py-4 py-lg-0">
      <img className='ring' src={ring} alt="" />
      <img className='sphere-1' src={sphere} alt="" />
      <img className='sphere-2' src={sphere} alt="" />
    <div className="row  px-4">
    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <Title top='Buy DYP' bottom='in a few steps' align={'d-flex flex-column flex-lg-row gap-2 align-items-start'}/>
            <p className="text-secondary">
            At Dypius, we want to make it easy for you to purchase our token. We have a variety of centralized and decentralized exchanges that you can use to do so.
            </p>
            {windowSize.width > 786 
            ?
            <div className="btn filled-btn d-flex justify-content-center align-items-center " style={{width: '30%'}}>Explore</div>
            :
            null
            }
        </div>
        <div className="col-12 col-lg-6 position-relative">
            <img className='coin' src={coin} alt="" />
            <img className='coinBackground' src={coinBg} alt="" />
        </div>

    </div>
    {windowSize.width < 786 ?
        <div className="row ps-5">
            <div className="btn filled-btn w-75 d-flex justify-content-center align-items-center">Explore<img className='ps-2' src={require(`../../../assets/right-arrow.svg`).default} alt="" /></div>

        </div>
    : null
  }
    </div>
  )
}

export default BuyDyp