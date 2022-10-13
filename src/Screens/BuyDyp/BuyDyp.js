import React, {useEffect} from "react";
import BuyDypHero from "./BuyDypHero/BuyDypHero";



const BuyDyp = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className="buydyp-page container-fluid p-0 d-flex flex-column align-items-center">
      <div>
        <BuyDypHero/>
      </div>
    </div>
  );
};

export default BuyDyp;
