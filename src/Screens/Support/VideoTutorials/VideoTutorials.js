import React from 'react'
import Title from '../../../components/Title/Title'
import './_videotutorials.scss'
import rightArrow from '../../../assets/right-arrow.svg'
import playButton from '../../Dyp/assets/playButton.svg'
import sphere from '../../../assets/newsSphere.png'

const VideoTutorials = () => {

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
      link: "https://www.youtube.com/playlist?list=PL8K0d30DJYVMLMbhYcOmzQHmPGDRrDpnl",
      image: "vault.png",
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
    <div className="container-fluid mt-5" id='tutorials'>
        <div className="container-lg p-5">
            <div className="row">
                <div className="col-12 col-lg-3 d-flex flex-column gap-3">
                    <Title top="Popular" bottom="Tutorials" />
                    <p className="text-secondary">
                    Watch our latest tutorials on Dypius solutions and learn how to become an expert in no time.
                    </p>
                    <button className="btn filled-btn d-flex justify-content-center align-items-center gap-2" style={{width: 'fit-content'}}>
                        View More <img src={rightArrow} alt="" />
                    </button>
                </div>
                <div className="col-12 col-lg-9 d-grid video-wrapper justify-content-center p-4 position-relative">
                  <img src={sphere} className='sphere position-absolute d-none d-lg-block' alt="" />
                  <img src={sphere} className='sphere position-absolute d-none d-lg-block' alt="" />
                  <img src={sphere} className='sphere position-absolute d-none d-lg-block' alt="" />
                {vidsArray.length > 0 &&
            vidsArray.map((item, index) => {
              return (
                <div key={index} className={`cardWrapper card-${index + 1}`}>
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
    </div>
  )
}

export default VideoTutorials