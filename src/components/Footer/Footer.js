import React from 'react'
import './_footer.scss'

const Footer = () => {

    const socials = [
        {
            name: 'Twitter',
            link: 'https://twitter.com/dypfinance'
        },
        {
            name: 'Telegram',
            link: 'https://t.me/dypfinance'
        },
        {
            name: 'Discord',
            link: 'https://discord.gg/dypcaws'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/dyp.finance/'
        },
        {
            name: 'Medium',
            link: 'https://medium.com/@dypfinance'
        },
        {
            name: 'Youtube',
            link: 'https://www.youtube.com/c/DeFiYieldProtocol/featured'
        },
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/defi-yield-protocol'
        },
        {
            name: 'Github',
            link: 'https://github.com/dypfinance'
        },
        {
            name: 'Email',
            link: 'mailto:contact@dyp.finance'
        },
    ]



  return (
    <div className="container-fluid p-0 footer">
        <div className="socials row justify-content-evenly align-items-center">
            {socials.map((social, index) => (
                <a key={index} target='_blank' className='text-decoration-none' href={social.link}>
                    <div className="d-flex flex-row justify-content-center align-items-center" style={{gap: '5px'}}>
                    <img src={require(`../../assets/${social.name.toLowerCase()}.svg`)} alt="" />
                    <p className='mb-0'>{social.name}</p>
                </div>
                </a>
            ))}
        </div>
        <div className="row px-5 py-0 footer-links justify-content-center">
            <div className="row justify-content-between align-items-center py-2 w-100" style={{zIndex: 2}}>
                <a href="#">
                <img src={require(`../../assets/dypiusLogo.svg`).default} alt="" width={160} height={90} />
                </a>
                <div className='d-flex flex-row gap-5'>
                    <a href="https://coinmarketcap.com/currencies/defi-yield-protocol/" className='text-white text-decoration-none'>
                    <h5>CoinMarketCap</h5>
                    </a>
                    <a href="https://www.coingecko.com/en/coins/defi-yield-protocol" className='text-white text-decoration-none'>
                    <h5>CoinGecko</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Disclaimer</h5>
                    </a>
                </div>
            </div>
            <img className='spiral' src={require(`../../assets/footerSpiral.png`)} alt="" />
            <hr />
            <div className="row mt-5 footer-blocks w-100">
                <div className="col-3 text-white d-flex flex-column gap-3">
                    <h4 className="fw-bold">About Us</h4>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Our team</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Our partners</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Roadmap</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Security</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Tokenomics</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Brand</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Contact Us</h5>
                    </a>
                </div>
                <div className="col-3 text-white d-flex flex-column gap-3">
                <h4 className="fw-bold">Products and services</h4>
                    <div className="row">
                        <div className="col-6 d-flex flex-column gap-3">
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Buyback</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Vault</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Farm</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Stake</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Bridge</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5 className='fw-bold'>iDYP Token</h5>
                        </a>
                        </div>
                        <div className="col-6 d-flex flex-column gap-3">
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>CAWS NFT</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Buy DYP</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Buy iDYP</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>DYP Tools</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Governance</h5>
                        </a>
                        <a href="#" className='text-white text-decoration-none'>
                        <h5>Launchpad</h5>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="col-3 text-white d-flex flex-column gap-3">
                <h4 className="fw-bold">Anouncements</h4>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Latest anouncements</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Latest events</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>Press</h5>
                    </a>
                </div>
                <div className="col-3 text-white d-flex flex-column gap-3">
                    <h4 className="fw-bold">Learn</h4>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>How to buy DYP</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>How to Stake</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>How to Farm</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>How to use Buyback</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>How to use the Vault</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>How to use DYP Tools</h5>
                    </a>
                    <a href="#" className='text-white text-decoration-none'>
                    <h5>How to Bridge</h5>
                    </a>
                    
                </div>
            </div>
            <div className="row w-100 justify-content-center align-items-center pb-3">
                <p className="mb-0 text-white fw-light" style={{fontSize: '12px'}}>Copyright © DeFi Yield Protocol 2022. All rights reserved.</p>
            </div>
                <img className='sphere' src={require(`../../assets/footerSphere.png`)} alt="" />
        </div>
    </div>
  )
}

export default Footer