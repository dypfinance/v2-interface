import React, {useEffect} from "react";
import DisclaimerHero from "./MainHero/DisclaimerHero";

const Disclaimer = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className="container-fluid px-0 position-relative">
      <DisclaimerHero/>
    </div>
  );
};

export default Disclaimer;
