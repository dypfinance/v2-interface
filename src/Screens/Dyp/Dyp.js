import React, { useEffect } from "react";
import EducationalTools from "./EducationalTools/EducationalTools";
import SupportedAssets from "./SupportedAssets/SupportedAssets";
import OurTokens from "./OurTokens/OurTokens";
import Vault from "./Vault/Vault";
import DypMainHero from "./DypMainHero/DypMainHero";
import Solutions from "./Solutions/Solutions";
import WhyDypius from "./WhyDypius/WhyDypius";
import BuyDyp from "./BuyDyp/BuyDyp";
import Tokenomics from "./Tokenomics/Tokenomics";

const Dyp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="dyp-page main-wrapper container-fluid p-0 d-flex flex-column align-items-center"
      style={{ overflowX: "clip" }}
    >
      <DypMainHero />
      <WhyDypius />
      <Solutions />
      <div className="container-fluid" style={{ gap: 100 }}>
        <OurTokens />
        <div className="container-lg pl-xl-5 pl-lg-5 pl-md-5 pl-0 pr-xl-5 pr-lg-5 pr-md-5 px-0 ">
        <Tokenomics bottom={55} showBtn={true}/></div>
        <BuyDyp />
        <SupportedAssets />
      </div>
      <Vault />
      <EducationalTools />
    </div>
  );
};

export default Dyp;
