import React, { useEffect } from "react";
import EducationalTools from "./EducationalTools/EducationalTools";
import Vault from "./Vault/Vault";
import DypMainHero from "./DypMainHero/DypMainHero";
import Solutions from "./Solutions/Solutions";
import WhyDypius from "./WhyDypius/WhyDypius";


const Dyp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div
      className="dyp-page mt-5 mt-lg-0 main-wrapper container-fluid pl-0 pr-0 d-flex flex-column align-items-center"
      style={{ overflowX: "clip", paddingBottom: '0rem' }}
    >
      <DypMainHero />
      <WhyDypius />
      <Solutions />
      <Vault />
      <EducationalTools />
    </div>
  );
};

export default Dyp;
