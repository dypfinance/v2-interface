import React from "react";
import Commet1 from "../../assets/Comet/comet1.svg";
import Commet2 from "../../assets/Comet/comet2.svg";
import Commet3 from "../../assets/Comet/comet3.svg";
import Commet4 from "../../assets/Comet/comet4.svg";
import Commet5 from "../../assets/Comet/comet5.svg";
import Commet6 from "../../assets/Comet/comet6.svg";
import Commet7 from "../../assets/Comet/comet7.svg";
import Commet8 from "../../assets/Comet/comet8.svg";
import Commet9 from "../../assets/Comet/comet9.svg";
import Commet10 from "../../assets/Comet/comet10.svg";

const CometBg = () => {
  return (
    <div className="position-relative">
      <div className="comet"><img src={Commet1} alt='comet'/></div>
      <div className="comet"><img src={Commet2} alt='comet'/></div>
      <div className="comet"><img src={Commet3} alt='comet'/></div>
      <div className="comet"><img src={Commet4} alt='comet'/></div>
      <div className="comet"><img src={Commet5} alt='comet'/></div>
      <div className="comet"><img src={Commet6} alt='comet'/></div>
      <div className="comet"><img src={Commet7} alt='comet'/></div>
      <div className="comet"><img src={Commet8} alt='comet'/></div>
      <div className="comet"><img src={Commet9} alt='comet'/></div>
      <div className="comet"><img src={Commet10} alt='comet'/></div>
    </div>
  );
};

export default CometBg;
