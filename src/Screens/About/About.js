import React from "react";
import AboutMainHero from "./AboutMainHero/AboutMainHero";
import Brand from "./Brand/Brand";
import Security from "./Security/Security";
import DypPartners from "../Home/DypPartners/DypPartners";
import Tokenomics from "../Dyp/Tokenomics/Tokenomics";

const About = () => {
  return (
    <div className="container-fluid px-0">
      <AboutMainHero />
      <Brand />
      <Security />
      <DypPartners />
      <div className="container-lg p-0" style={{ marginTop: "4rem" }}>
        <Tokenomics bottom={0} />
      </div>
    </div>
  );
};

export default About;
