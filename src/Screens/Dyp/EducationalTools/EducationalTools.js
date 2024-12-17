import React, {useState} from "react";
import Title from "../../../components/Title/Title";
import filledArrow from "../../../assets/filledArrow.svg";
import playButtonActive from "../assets/playbtn-passive.svg";
import playButton from "../assets/playButton.svg";


const EducationalTools = () => {
  const vidsArray = [
    {
      link: "https://www.youtube.com/watch?v=1Dma3QORq9E",
      image: "firstEducational.png",
    },
    {
      link: "https://www.youtube.com/watch?v=WfY3OhuZoco",
      image: "secondEducational.png",
    },
    {
      link: "https://www.youtube.com/watch?v=0kUrIP4d9Tc",
      image: "thirdEducational.png",
    },
    {
      link: "https://www.youtube.com/watch?v=n2NgErKU-a8",
      image: "fourthEducational.png",
    },
  ];
const [playbtn, setPlaybtn] = useState('passive')
  return (
    
    <div className="eduactionalwrapper container-lg" id="learn">
      <div className="row justify-content-between align-items-center p-4">
        <div className="col-12 col-lg-4 d-flex flex-column px-1 px-lg-3 gap-2">
        <Title top="World of" bottom="Dypians" align="d-flex flex-row align-items-center gap-2" />

          <p style={{marginBottom: 32}}>
          Embark on thrilling adventures, forge new alliances, and experience the future of gaming like never before.
Button: Explore
          </p>

          <a
            className="btn filled-btn d-flex align-items-center"
            href="https://www.worldofdypians.com/"
            target={"_blank"}
            rel={"noreferrer"}
            style={{ width: "fit-content", justifyContent: "center" }}
          >
            Check us out
          </a>
        </div>


        <div className="col-12 col-lg-8 educational-wrapper gap-4 gap-lg-5 justify-content-center p-4 position-relative">
          {/* <img

            className="edu-sphere"
            src={require(`../../../assets/newsSphere.png`)}
          />
          <img
            className="edu-sphere2"
            src={require(`../../../assets/newsSphere.png`)}
          /> */}

          {vidsArray.length > 0 &&
            vidsArray.map((item, index) => {
              return (
                <div key={index} className="cardWrapper" onMouseOverCapture={()=>{setPlaybtn('active')}} onMouseLeave={()=>{setPlaybtn('passive')}}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="p-3 bg-white">
                      <img
                        src={`https://cdn.worldofdypians.com/dypius/${item.image}`}
                        alt=""
                        className="eduImg"
                      />
                    </div>
                    <img src={playButton} alt="" className="ml-2 purpleArrow"  />{" "}
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
