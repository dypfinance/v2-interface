import React from "react";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";
import playButton from "../assets/playButton.svg";

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
    {
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVPmVy8aBOZratFGWKIBbthl",
      image: "bridge.png",
    },
  ];

  return (
    <div className="eduactionalwrapper container-lg" id="learn">
      <div className="row justify-content-between align-items-center p-4">
        <div className="col-12 col-lg-4">
          <Title top="Educational" bottom="Tools" />
          <p>
            Hit the ground running with our quick start guide! Get tips, watch
            how-to videos and learn how to become an expert in no time.
          </p>

          <a
            className="btn filled-btn d-flex align-items-center"
            href="https://www.youtube.com/c/DeFiYieldProtocol"
            target={"_blank"}
            rel={"noreferrer"}
            style={{ width: "50%", justifyContent: "center" }}
          >
            Check us out
          </a>
        </div>

        <div className="col-12 col-lg-8 video-wrapper gap-5 justify-content-between p-4 position-relative">
          <img
            className="edu-sphere"
            src={require(`../../../assets/newsSphere.png`)}
          />
          <img
            className="edu-sphere2"
            src={require(`../../../assets/newsSphere.png`)}
          />

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
                    <img src={playButton} alt="" className="ml-2 purpleArrow" />{" "}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default EducationalTools;
