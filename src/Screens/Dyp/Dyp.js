import React from "react";
import EducationalTools from "./EducationalTools/EducationalTools";
import SupportedAssets from "./SupportedAssets/SupportedAssets";
import OurTokens from "./OurTokens/OurTokens";
import Vault from "./Vault/Vault";
import DypMainHero from "./DypMainHero/DypMainHero";
import Solutions from "./Solutions/Solutions";
import WhyDypius from "./WhyDypius/WhyDypius";

const Dyp = () => {
  return (
   <div className="main-wrapper container-fluid p-0 d-flex flex-column align-items-center">
      <div>
      <DypMainHero />
        <WhyDypius />
        <Solutions />
        <OurTokens />
        <SupportedAssets />
        <Vault/>
        <EducationalTools />
      </div>
    </div>
  );
};


export default Dyp;
