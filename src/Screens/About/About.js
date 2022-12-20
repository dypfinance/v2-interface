
import React, {useEffect} from 'react'
import AboutMainHero from './AboutMainHero/AboutMainHero'
import OurTeam from './OurTeam/OurTeam'
import Brand from "./Brand/Brand";
import Security from "./Security/Security";
import DypPartners from "../Home/DypPartners/DypPartners";
import Tokenomics from "../Dyp/Tokenomics/Tokenomics";
import Roadmap from './Roadmap/Roadmap';
import useWindowSize from '../../hooks/useWindowSize';
import ContactUs from './ContactUs/ContactUs';
import { useLocation } from 'react-router-dom';

const About = () => {

  const link = useLocation();




  useEffect(()=>{

    if(link.state?.link === 'navlink'){
      window.scrollTo(0,0)
    }
  },[])

  const windowSize = useWindowSize();

  return (
    <div className="container-fluid px-0" style={{overflowX: 'hidden'}}>
        <AboutMainHero />
        <OurTeam />
        <Roadmap />
      <Brand />
      <Security />
      <DypPartners />
      <div className="container-lg p-0" style={{ marginTop: "5rem", overflow: windowSize.width < 700 ? 'hidden' : '' }}>
        <Tokenomics bottom={0} showBtn={false} isAbout={true} isDyp={true}/>
      </div>
      <ContactUs />
    </div>
  );
};

export default About;
