import React from 'react'
import Title from '../../../components/Title/Title'
import './_getintouch.scss'
import touchTelegram from '../assets/touchTelegram.png'
import touchDiscord from '../assets/touchDiscord.png'

const GetInTouch = () => {

    const socials = [
        {
            link: "https://twitter.com/dypius",
            title: 'Twitter',
            icon: 'touchTwitter'
        },
        {
      link: "https://medium.com/@dypius",
            title: 'Medium',
            icon: 'touchMedium'
        },
        // {
        //     link: "https://www.youtube.com/@Dypius",
        //     title: 'Youtube',
        //     icon: 'touchYoutube'
        // },
        {
            link: "https://www.instagram.com/dyp.eth",
            title: 'Instagram',
            icon: 'touchInstagram'
        },
        {
            link: "https://www.linkedin.com/company/dypius-ecosystem",
            title: 'Linkedin',
            icon: 'touchLinkedin'
        },
        {
            link: "https://github.com/dypfinance",
            title: 'Github',
            icon: 'touchGithub'
        },
        {
            link: "mailto:helpcenter@dypius.com",
            title: 'General Inquiry',
            icon: 'touchInquiry'
        },
        {
            link: "mailto:business@dypius.com",
            title: 'Business',
            icon: 'touchInquiry'
        },
    ]

  return (
    <div className="container-lg touch-wrapper p-4 p-lg-5">
        <div className="row gap-5 gap-lg-0">
            <div className="col-12 col-lg-7 d-flex flex-column gap-5 gap-lg-4">
                <Title top='Get in touch with the' bottom='Dypius team' />
                <div className="general-container position-relative" style={{minHeight: '250px'}}>
                <p className="touch-title text-white">General chat</p>
                <a target="_blank" rel="noreferrer" href="https://t.me/dypius" className='d-flex justify-content-center'>
                <img className='telegram' src={touchTelegram} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://discord.gg/worldofdypians" className='d-flex justify-content-center'>
                <img className='discord' src={touchDiscord} alt="" />
                </a>
                </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                <div className="touch-socials d-grid position-relative w-100">
                    <p className="text-white socials-title">Follow us for more</p>
                    {socials.map((social, index) => (
                        <a target="_blank" rel="noreferrer" key={index} href={social.link} className="d-flex flex-column justify-content-center align-items-center gap-2">
                            <img width={29} height={29} src={require(`../assets/${social.icon}.svg`)} alt=""  />
                            <p className="social-title mb-0">{social.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch