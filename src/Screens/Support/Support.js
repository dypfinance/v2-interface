import React, {useEffect} from 'react'
import FAQ from './FAQ/FAQ'
import HelpCenter from './HelpCenter/HelpCenter'
import SupportMainHero from './SupportMainHero/SupportMainHero'
import './_support.scss'


const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid px-0 mt-5 mt-lg-0" style={{paddingBottom: '5rem', overflowX: 'hidden'}}>
      <SupportMainHero />
      <FAQ />
      <HelpCenter />
    </div>
  );
};

export default Support;
