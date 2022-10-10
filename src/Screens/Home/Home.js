import React, {Suspense, useEffect} from "react";
import MainHero from './MainHero/MainHero'
import DypMetaverse from "./DypMetaverse/DypMetaverse";
import DypTools from './DypTools/DypTools'
import DypToken from "./DypToken/DypToken";
import DypNews from "./DypNews/DypNews";
import DypPartners from "./DypPartners/DypPartners";

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

  return (
    <div className="homepage main-wrapper container-fluid p-0 d-flex flex-column align-items-center" style={{gap: '70px'}}>
      <MainHero/>
      <DypMetaverse/>
      <DypTools/>
      <DypToken/>
      <Suspense fallback={<div>Loading</div>}>
      <DypPartners />
      </Suspense>
      <DypNews/>
    </div>
  );
};

export default Home;