import React from 'react'
import Title from '../../../components/Title/Title'
import profilePic from '../assets/profilePic.png'
import dropdownIcon from '../assets/profileDropdown.svg'
import './_ourteam.scss'

const OurTeam = () => {
  return (
    <div className="container-fluid our-team px-0">
        <div className="our-team-background">
        </div>
        <div className="container-lg d-flex mt-5">
          <div className="col-3 d-flex align-items-center justify-content-center">
          <div>
          <Title top='Our' bottom='team' />
            <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur elit...
            </p>
          </div>
          </div>
          <div className="col-9">
            <div className="team-container d-grid">
              <div className="team-card d-flex flex-column justify-content-around align-items-center">
                <img src={profilePic} alt="profile" className='profile-pic' />
                <div className="d-flex">
                  <div className="d-flex flex-column">
                  <h4 className="text-white">
                    Fatjon Shaba
                  </h4>
                  <p className="text-white fw-light">
                    Lead UI/UX Designer
                  </p>
                  </div>
                  <img src={dropdownIcon} alt="" />
                </div>
              </div>
              <div className="team-card">

              </div>
              <div className="team-card">

              </div>
              <div className="team-card">

              </div>
              <div className="team-card">

              </div>
              <div className="team-card">

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurTeam