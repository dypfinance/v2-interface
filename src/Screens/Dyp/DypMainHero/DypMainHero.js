import React from 'react'
import './_dypmainhero.scss'

const DypMainHero = () => {
  return (
    <div className="container-fluid dyp-main-hero d-flex flex-column justify-content-end position-relative overflow-hidden">
      <img className='waves' src={require(`../assets/wavesTop.svg`).default} alt="topWaves" />
      <img className='waves d-none d-lg-block' src={require(`../assets/wavesBottom.svg`).default} alt="bottomWaves" />
      <img className='mobile-waves d-block d-lg-none' src={require(`../assets/mobileWaves.svg`).default} />
      <img className='ring d-none d-lg-block' src={require(`../../../assets/tokenCircle.png`)} />
      <div className="container-lg d-flex justify-content-between">
        <div className="col-12 col-lg-4 text-white d-flex flex-column gap-3 justify-content-end">
          <h1>DYP Token</h1>
          <p>Dypius is a powerful decentralized ecosystem that faces the future. A new era with special focus on scalability, security, and global adoption. Powered by a next-gen infrastructure through our strong foundation, and much more! </p>
        </div>
        <div className="col-9 col-lg-3 position-relative">
          <img className='coin' src={require(`../../../assets/coin.png`)} alt="" />
          <img className='background' src={require(`../assets/dypCoinBackground.svg`).default} alt="" />
        </div>
      </div>
      <div className="row pt-5 p-4 justify-content-center gap-5" style={{zIndex: 1}}>
        <a href="#solutions" className='text-decoration-none text-white submenu-link'>
          Solutions
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
        <a href="#ourTokens" className='text-decoration-none text-white submenu-link'>
          Tokens
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
        <a href="#vault" className='text-decoration-none text-white submenu-link'>
          Vault
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
        <a href="#learn" className='text-decoration-none text-white submenu-link'>
          Learn
          <img src={require(`../../../assets/accordionIndicator.svg`).default} alt="indicator" />
        </a>
      </div>
    </div>
  )
}

export default DypMainHero