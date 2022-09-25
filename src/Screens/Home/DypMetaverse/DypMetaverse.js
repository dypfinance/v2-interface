import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { pulse, fadeInLeft } from "react-animations";
import Title from "../../../components/Title/Title";
import rightArrow from "../../../assets/right-arrow.svg";
import metaverse1 from "../../../assets/metaverse-1.png";
import metaverse2 from "../../../assets/metaverse-2.png";
import metaverse3 from "../../../assets/metaverse-3.png";
import BlueHero from "../../../assets/metaverse-blueHero.svg";
import Cube from "../../../assets/cube.png";

const DypMetaverse = () => {
  const pulsing = keyframes`${pulse}`;

  const PulseDiv = styled.div`
    animation: 3s ${pulsing} infinite;
  `;

  const fadeIn = keyframes`${fadeInLeft}`;

  const FadeInDiv = styled.span`
    animation: 1s ${fadeIn};
  `;


  const [isVisible, setVisible] = useState(false);
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, [])

  return (
    <div className="container-fluid overflow-hidden">
      <div className="container-lg position-relative metaverse-inner overlow-hidden">
        <img src={BlueHero} alt="bluehero" className="bluehero" />
        <img src={BlueHero} alt="bluehero2" className="bluehero2" />
        <div className="row dyp-metaverse justify-content-between">
          <div className={`col-5 fade-in-section ${isVisible ? 'is-visible' : ''}`}  ref={domRef}>
            <div className="d-flex justify-content-center flex-column">
              <Title top="Metaverse World" bottom="ipsum dolor sit amet" />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                arcu lorem, viverra eu tempor quis, commodo a leo. Sed pretium,
                orci ac ultrices semper
              </p>
              <div className="button-group mt-3">
                <button className="btn filled-btn mr-3">
                  View now <img src={rightArrow} alt="" className="ml-2"/>
                </button>
                <button className="btn outline-btn">Recieve newsletter</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="image-grid">
              <div className="image-1">
                <PulseDiv>
                  <img src={metaverse1} alt="" className="img1" />
                </PulseDiv>
              </div>
              <div className="image-2 position-relative">
                <PulseDiv>
                  <img src={metaverse2} alt="" className="img2" />
                </PulseDiv>
                <PulseDiv>
                  <img src={Cube} alt="cube" className="cube" />
                </PulseDiv>
              </div>
              <div className="image-3">
                <PulseDiv>
                  <img src={metaverse3} alt="" className="img3" />
                </PulseDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DypMetaverse;
