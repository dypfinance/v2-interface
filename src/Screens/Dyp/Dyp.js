import React from "react";
import EducationalTools from "./EducationalTools/EducationalTools";
import SupportedAssets from "./SupportedAssets/SupportedAssets";
import OurTokens from "./OurTokens/OurTokens";
import Vault from "./Vault/Vault";

const Dyp = () => {
  return (
    <div className="container-fluid p-0 d-flex flex-column align-items-center" style={{gap: '70px'}}>
      <div>
        <OurTokens />
        <SupportedAssets />
        <Vault/>
        <EducationalTools />
      </div>
    </div>
  );
};

export default Dyp;
