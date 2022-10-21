import React from "react";
import dropdownIcon from "../../Screens/About/assets/profileDropdown.svg";

const TeamCard = ({ name, position, id, content, photo, link }) => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="team-card d-flex flex-column justify-content-center gap-3 align-items-center">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={photo} alt="profile" className="profile-pic" loading="lazy"/>
        </a>
        <div className="d-flex justify-content-between title-container" style={{width: '270px'}}>
          <div className={`d-flex flex-column `}>
            <h4 className={`text-white ${id === "daniel" && "mb-0"}`}>
              {name}
            </h4>
            <p className={`text-white fw-light ${id === "daniel" || id ==="toni" ? "mb-0" : ''}`} style={{fontSize: id === "daniel" || id === "toni" ? "12px" : '14px'}}>
              {position}
            </p>
          </div>
          <img
            src={dropdownIcon}
            style={{
              cursor: "pointer",
              
            }}
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            data-bs-parent="#accordionExample"
            aria-expanded="true"
            aria-controls={id}
            alt=""
          />
        </div>
      </div>
      <div
        id={id}
        className="accordion-collapse collapse position-relative"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
        style={{ marginTop: "-20px" }}
      >
        <div className="accordion-body team-info d-flex align-items-end">
          <p className="text-secondary">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
