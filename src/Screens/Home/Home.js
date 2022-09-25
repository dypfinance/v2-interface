import React from "react";
import MainHero from './MainHero/MainHero'
import DypMetaverse from "./DypMetaverse/DypMetaverse";
import DypTools from './DypTools/DypTools'
import DypToken from "./DypToken/DypToken";
import DypNews from "./DypNews/DypNews";
import DypPartners from "./DypPartners/DypPartners";

const Home = () => {
  return (
    <div className="container-fluid p-0 d-flex flex-column align-items-center" style={{gap: '70px'}}>
      <MainHero/>
      <DypMetaverse/>
      <DypTools/>
      <DypToken/>
      <DypPartners />
      <DypNews/>
    </div>
  );
};

export default Home;