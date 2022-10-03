import React, { useEffect, useState } from 'react'
import WhyDypCard from '../../../components/DypPage/WhyDypCard'
import Title from '../../../components/Title/Title'
import useWindowSize from '../../../hooks/useWindowSize'
import './_whydypius.scss'





const WhyDypius = () => {

const windowSize = useWindowSize();
  

// const [windowSize, setWindowSize] = useState(getWindowSize());

// useEffect(() => {
//   function handleWindowResize() {
//     setWindowSize(getWindowSize());
//   }

//   window.addEventListener("resize", handleWindowResize);

//   return () => {
//     window.removeEventListener("resize", handleWindowResize);
//   };
// }, []);

// function getWindowSize() {
//   const { innerWidth, innerHeight } = window;
//   return { innerWidth, innerHeight };
// }



  return (
    <div className="container-fluid d-flex flex-column justify-content-center why-dypius mt-n5">
        <div className="row mt-5">
            <div className="col-12 card-wrapper d-flex align-items-center flex-column flex-lg-row">
        <img className='ring' src={require(`../../../assets/tokenCircle.png`)} />
               <div className="d-flex flex-column gap-5 title-container mt-5 mt-lg-0">
               <Title top="Why" bottom="Dypius?" />
              <div className="position-relative">
              <img className='orange-border' src={require(`../assets/orangeBorder.svg`).default} alt="" />
                <div className="orange-card text-white p-3 position-relative">
                    <img className='divider' src={require(`../assets/orangeDivider.svg`).default} alt="" />
                    <div className="child-1 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                        <h1 className="fw-light">42</h1>
                        <p className='fw-lighter'>Active pools</p>
                    </div>
                    <div className="child-2 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h1 className="fw-light">12</h1>
                        <p className='fw-lighter'>DYP Products</p>
                    </div>
                    <div className="child-3 d-flex flex-column justify-content-start justify-content-center mx-auto ">
                    <h1 className="fw-light">70%</h1>
                        <p className='fw-lighter'>DYP Locked</p>
                    </div>
                    <div className="child-4 d-flex flex-column justify-content-start justify-content-center mx-auto">
                    <h1 className="fw-light">5M+</h1>
                        <p className='fw-lighter'>DYP Burned</p>
                    </div>
                </div>
              </div>
               </div>
                <div className='card-container w-100 d-flex flex-column align-items-end'>
                {windowSize.width <= 786 
                  ?
                  <>
                  <WhyDypCard />
                  <WhyDypCard />
                  <WhyDypCard />
                  </>
                  :
                  <>
                  <WhyDypCard />
                  <WhyDypCard />
                  <WhyDypCard />
                  <WhyDypCard />
                  <WhyDypCard />
                  </>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyDypius