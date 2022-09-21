import React from "react";
import MainHero from './MainHero/MainHero'
import DypMetaverse from "./DypMetaverse/DypMetaverse";
import DypTools from './DypTools/DypTools'

const Home = () => {
  return (
    <div className="container-lg">
      <MainHero/>
      <DypMetaverse/>
      <DypTools/>
    </div>
  );
};

export default Home;
