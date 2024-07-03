import React, { Suspense, useEffect, useState } from "react";
import MainHero from "./MainHero/MainHero";
import DypMetaverse from "./DypMetaverse/DypMetaverse";
import DypTools from "./DypTools/DypTools";
import DypToken from "./DypToken/DypToken";
import DypNews from "./DypNews/DypNews";
import DypPartners from "./DypPartners/DypPartners";
import "./DypNews/_dypnews.scss";
import LandPopup from "../../components/LandPopup/LandPopup";


const Home = ({onDownloadClick}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="homepage main-wrapper container-fluid pl-0 pr-0 d-flex flex-column align-items-center mt-5 mt-lg-0">
      <MainHero />
      <DypMetaverse />
      <DypTools
        onDownloadClick={() => {
         onDownloadClick()
        }}
      />
      <DypToken />
      <Suspense fallback={<div>Loading</div>}>
        <DypPartners />
      </Suspense>
      <DypNews topTitle="Announcements" bottomTitle="Stay tuned" />
      <LandPopup />

    </div>
  );
};

export default Home;
