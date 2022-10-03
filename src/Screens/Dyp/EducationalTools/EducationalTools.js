import React from "react";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";
import purpleArrow from "../../../assets/DypAssets/purpleArrow.svg";

const EducationalTools = () => {
  const vidsArray = [
    {
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPAbzuedp9ii6OszPT1STy8",
      image: "stake.png",
    },
    {
      link: "https://www.youtube.com/watch?v=0WSYN2qHTNQ",
      image: "governance.png",
    },
    {
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPKtu_gWiu7vm73k_TnZOs4",
      image: "farm.png",
    },
  ];

  return (
    <div className="eduactionalwrapper container-lg" id="learn">
      <div className="row gap-3 justify-content-between align-items-center p-4">
        <div className="col-12 col-lg-5">
          <Title top="Educational" bottom="Tools" />
          <p>
            Hit the ground running with our quick start guide! Get tips, watch
            how-to videos and learn how to become an expert in no time.
          </p>
        </div>
        <a
          className="btn outline-btn d-flex align-items-center"
          href="https://www.youtube.com/c/DeFiYieldProtocol"
          target={"_blank"}
          rel={"noreferrer"}
        >
          Go to our Youtube <img src={filledArrow} alt="" className="ml-2" />
        </a>
      </div>
      <div className="row gap-3 justify-content-between p-4 position-relative">
      <img className='edu-sphere' src={require(`../../../assets/newsSphere.png`)} />   
      <img className='edu-sphere2' src={require(`../../../assets/newsSphere.png`)} />   

        {vidsArray.length > 0 &&
          vidsArray.map((item, index) => {
            return (
              <div key={index} className="cardWrapper">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className="p-3 bg-white">
                    <img
                      src={require(`../../../assets/DypAssets/${item.image}`)}
                      alt=""
                      className="eduImg"
                    />
                  </div>
                  <img src={purpleArrow} alt="" className="ml-2 purpleArrow" />{" "}
                </a>
              </div>
            );
          })}
        <div></div>
      </div>
    </div>
  );
};

export default EducationalTools;
