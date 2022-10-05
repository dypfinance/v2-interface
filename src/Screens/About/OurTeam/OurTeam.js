import React from "react";
import Title from "../../../components/Title/Title";

import "./_ourteam.scss";
import TeamCard from "../../../components/TeamCard/TeamCard";

const OurTeam = () => {
  return (
    <div className="container-fluid our-team px-0">
      <div className="our-team-background"></div>
      <div className="container-lg d-flex mt-5">
        <div className="col-3 d-flex align-items-center justify-content-center">
          <div>
            <Title top="Our" bottom="team" />
            <p className="text-secondary">
            DYPIUS is made up of a team of people with decades of experience in business, engineering, development, finance and more. We believe in our expertise and we know you can trust us to do what's best for you.
            </p>
          </div>
        </div>
        <div className="col-9">
          <div className="team-container d-grid">
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
