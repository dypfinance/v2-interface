
import React, {useEffect} from 'react'
import AboutMainHero from './AboutMainHero/AboutMainHero'
import Brand from "./Brand/Brand";
import Security from "./Security/Security";
import DypPartners from "../Home/DypPartners/DypPartners";
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
    <div className="container-fluid px-0 mt-5 mt-lg-0" style={{overflowX: 'hidden'}}>
        <AboutMainHero />
        <Roadmap />
      <Brand />
      <Security />
      <DypPartners />
      <ContactUs />
    </div>
  );
};

export default About;
