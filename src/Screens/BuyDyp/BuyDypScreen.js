import React, {useEffect} from "react";
import BuyDypHero from "./BuyDypHero/BuyDypHero";
import useWindowSize from "../../hooks/useWindowSize";


const BuyDyp = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const windowSize = useWindowSize();

  return (
    <div className="container-fluid px-0 buydypscreen">
      <div style={{ paddingTop: windowSize.width < 786 ? "6rem" : "10rem" }}>
        <BuyDypHero/></div>
    </div>
  );
};

export default BuyDyp;
