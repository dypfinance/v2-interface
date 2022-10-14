import React, { useEffect } from "react";
import FAQ from "./FAQ/FAQ";
import HelpCenter from "./HelpCenter/HelpCenter";
import SupportMainHero from "./SupportMainHero/SupportMainHero";
import VideoTutorials from "./VideoTutorials/VideoTutorials";
import "./_support.scss";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid px-0" style={{paddingBottom: '10rem'}}>
      <SupportMainHero />
      <FAQ />
      <VideoTutorials />
      <HelpCenter />
    </div>
  );
};

export default Support;
