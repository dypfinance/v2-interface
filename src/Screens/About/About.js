
import React, {useEffect} from 'react'
import AboutMainHero from './AboutMainHero/AboutMainHero'
import OurTeam from './OurTeam/OurTeam'
import Brand from "./Brand/Brand";
import Security from "./Security/Security";
import DypPartners from "../Home/DypPartners/DypPartners";
import Tokenomics from "../Dyp/Tokenomics/Tokenomics";
import Roadmap from './Roadmap/Roadmap';
import useWindowSize from '../../hooks/useWindowSize';

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })

  const windowSize = useWindowSize();

  return (
    <div className="container-fluid px-0">
        <AboutMainHero />
        <OurTeam />
        <Roadmap />
      <Brand />
      <Security />
      <DypPartners />
      <div className="container-lg p-0" style={{ marginTop: "4rem", overflow: windowSize.width < 700 ? 'hidden' : 'inherit' }}>
        <Tokenomics bottom={0} showBtn={false}/>
      </div>
    </div>
  );
};

export default About;
