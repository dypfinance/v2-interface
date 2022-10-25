import React from "react";

const Title = ({ top, bottom, align, animation, duration }) => {
  return (
    <div className={align}
     data-aos={animation}
     data-aos-duration={duration}
     >
      <h1 className="metaverse">{top}</h1>
      <h1>{bottom}</h1>
    </div>
  );
};

export default Title;
