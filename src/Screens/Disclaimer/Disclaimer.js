import React, {useEffect} from "react";
import DisclaimerHero from "./MainHero/DisclaimerHero";

const Disclaimer = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className="container-fluid px-0 position-relative mt-5 mt-lg-0">
      <DisclaimerHero/>
    </div>
  );
};

export default Disclaimer;
