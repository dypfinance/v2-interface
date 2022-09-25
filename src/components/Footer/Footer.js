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
    <div className="container-fluid footer">
        <div className="row justify-content-evenly align-items-center">
            {socials.map((social) => (
                <a target='_blank' className='text-decoration-none' href={social.link}>
                    <div className="d-flex flex-row justify-content-center align-items-center" style={{gap: '5px'}}>
                    <img src={require(`../../assets/${social.name.toLowerCase()}.svg`)} alt="" />
                    <p className='mb-0'>{social.name}</p>
                </div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Footer