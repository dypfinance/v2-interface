import React, { useEffect, useState } from 'react'
import CoinCard from '../../../components/CoinCard/CoinCard'
import Title from '../../../components/Title/Title'
import coin from '../../../assets/coin.png'
import coinBg from '../../../assets/coinBackground.svg'
import rightArrow from '../../../assets/right-arrow.svg'
import './_dyptoken.scss'


const DypToken = () => {


  return (
    <div className='container-lg d-flex justify-content-center'>
         <div className="row dyp-token justify-content-between">
             <div className="col-6 col-lg-3 blue-half order-2 order-lg-1">
            <img src={coin} className="coin" alt="" />
            <img src={coinBg} className="coin" alt="" />
         <img className='ring-1' src={require(`../../../assets/tokenCircle.png`)} />
         <img className='ring-2' src={require(`../../../assets/tokenCircle.png`)} />
          </div>
          <div
            className="token-info col-12 col-lg-5 d-flex justify-content-center align-items-end flex-column pr-3 pr-lg-5 order-1 order-lg-2">
         <img className='ring' src={require(`../../../assets/tokenCircle.png`)} />
            <Title top="DYP Token" bottom="Empower your future" align='text-end' />
            <p className="text-end">
            An immersive ecosystem with a wide range of unique products and solutions.
            </p>
            <div className="row">
              <div className="d-flex flex-row">
                <CoinCard title='Dypius Earn' stakeAmount='30%' description='Earn rewards by securely depositing your assets into the staking smart contract'  />
                <CoinCard title='Dypius Earn' stakeAmount='75%' description='Earn rewards by securely depositing your assets into the staking smart contract' />
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