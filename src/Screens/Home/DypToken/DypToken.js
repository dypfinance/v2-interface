import React from 'react'
import CoinCard from '../../../components/CoinCard/CoinCard'
import Title from '../../../components/Title/Title'
import coin from '../../../assets/coin.png'
import coinBg from '../../../assets/coinBackground.svg'
import rightArrow from '../../../assets/right-arrow.svg'
import './_dyptoken.scss'


const DypToken = () => {
  return (
    <div className='container-lg d-none d-lg-flex'>
         <div className="row dyp-token justify-content-between">
          <div className="col-3 blue-half">
         <img className='ring' src={require(`../../../assets/tokenCircle.png`)} />
         <img className='ring' src={require(`../../../assets/tokenCircle.png`)} />
            <img src={coin} className="coin" alt="" />
            <img src={coinBg} className="coin" alt="" />
          </div>
          <div
            className="col-5 d-flex justify-content-center align-items-end flex-column pr-5">
         <img className='ring' src={require(`../../../assets/tokenCircle.png`)} />
            <Title top="DYP Token" bottom="ipsum dolor sit" align='text-end' />
            <p className="text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              arcu lorem, viverra eu tempor quis, commodo a leo
            </p>
            <div className="row">
              <div className="d-flex flex-row">
                <CoinCard />
                <CoinCard />
              </div>
            </div>
            <button className="btn filled-btn">
              Go to DYP Token <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
    </div>
  )
}

export default DypToken