import React from 'react'
// import profilePic from "../assets/profilePic.png";
import profilePic from '../../Screens/About/assets/profilePic.png'
import dropdownIcon from "../../Screens/About/assets/profileDropdown.svg";

const TeamCard = () => {
  return (
    <div className="accordion" id="teamAccordion">
              <div className="team-card d-flex flex-column justify-content-around align-items-center">
                <img src={profilePic} alt="profile" className="profile-pic" />
                <div className="d-flex w-100 justify-content-around">
                  <div className="d-flex flex-column">
                    <h4 className="text-white">Fatjon Shaba</h4>
                    <p className="text-white fw-light">Lead UI/UX Designer</p>
                  </div>
                  <img
                    src={dropdownIcon}
                    style={{cursor: 'pointer'}}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    alt=""
                  />
                </div>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                style={{marginTop: '-20px'}}
              >
                <div className="accordion-body team-info d-flex align-items-end">
                  <p className="text-secondary">
                  Over the last few years, I’ve worked with a wide range of
                  products to create an insight led, human-centred digital
                  experiences.
                  <br />
                  <br />
                  My approach to UI/UX combines design thinking, user research
                  and with a focus on the humans who use the designs I create.
                  <br />
                  <br />
                  In my free time, I enjoy exploring design by seeing what can
                  be done next in the future, trying to push my knowledge and
                  abilities even further. I enjoy playing with designs and
                  exploring new pathways I haven’t tried before… but most
                  importantly I love what I do.
                  </p>
                </div>
              </div>
            </div>
  )
}

export default TeamCard