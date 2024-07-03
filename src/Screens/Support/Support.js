import React, {useEffect} from 'react'
import FAQ from './FAQ/FAQ'
import GetInTouch from './GetInTouch/GetInTouch'
import HelpCenter from './HelpCenter/HelpCenter'
import SupportMainHero from './SupportMainHero/SupportMainHero'
import VideoTutorials from './VideoTutorials/VideoTutorials'
import './_support.scss'


const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid px-0 mt-5 mt-lg-0" style={{paddingBottom: '5rem', overflowX: 'hidden'}}>
      <SupportMainHero />
      <FAQ />
      <VideoTutorials />
      <GetInTouch />
      <HelpCenter />
    </div>
  );
};

export default Support;
