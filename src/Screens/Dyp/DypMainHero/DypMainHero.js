import React from 'react'
import './_dypmainhero.scss'

const DypMainHero = () => {
  return (
    <div className="container-fluid dyp-main-hero d-flex flex-column justify-content-end position-relative overflow-hidden">
      <img className='waves' src={require(`../assets/wavesTop.svg`).default} alt="topWaves" />
      <img className='waves' src={require(`../assets/wavesBottom.svg`).default} alt="bottomWaves" />
      <img className='ring' src={require(`../../../assets/tokenCircle.png`)} />
      <div className="row justify-content-evenly">
        <div className="col-4 text-white d-flex flex-column gap-3 justify-content-end">
          <h1>DYP Token</h1>
          <p>DYPIUS is a powerful decentralized ecosystem that faces the future. A new era with special focus on scalability, security, and global adoption. Powered by a next-gen infrastructure through our strong foundation, and much more! </p>
        </div>
        <div className="col-3 position-relative">
          <img className='coin' src={require(`../../../assets/coin.png`)} alt="" />
          <img className='background' src={require(`../assets/dypCoinBackground.svg`).default} alt="" />
        </div>
      </div>
      <div className="row pt-5 p-4 justify-content-center gap-5">
        <a href="#" className='text-decoration-none text-white'>
          Solutions
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
        <a href="#" className='text-decoration-none text-white'>
          Tokens
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
        <a href="#" className='text-decoration-none text-white'>
          Vault
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
        <a href="#" className='text-decoration-none text-white'>
          Learn
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
      </div>
    </div>
  )
}

export default DypMainHero