import React, {Suspense, useEffect} from "react";
import MainHero from './MainHero/MainHero'
import DypMetaverse from "./DypMetaverse/DypMetaverse";
import DypTools from './DypTools/DypTools'
import DypToken from "./DypToken/DypToken";
import DypNews from "./DypNews/DypNews";
import DypPartners from "./DypPartners/DypPartners";
import './DypNews/_dypnews.scss'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

  return (
    <div className="homepage main-wrapper container-fluid pl-0 pr-0 d-flex flex-column align-items-center" >
      <MainHero/>
     <DypMetaverse/>
       <DypTools/>
      <DypToken/>
      <Suspense fallback={<div>Loading</div>}>
      <DypPartners />
      </Suspense>
      <DypNews topTitle='Announcements' bottomTitle='Stay tuned'/>
    </div>
  );
};

export default Home;