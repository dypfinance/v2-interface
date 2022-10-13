import React, {useEffect} from "react";
import BuyDypHero from "./BuyDypHero/BuyDypHero";



const BuyDyp = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className="container-fluid px-0 buydypscreen">
        <BuyDypHero/>
    </div>
  );
};

export default BuyDyp;
