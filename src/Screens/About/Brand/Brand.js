import React from "react";
import Title from "../../../components/Title/Title";
import pasteimg from "../assets/paste-icon.svg";
import DotFrame from "../../../assets/DypAssets/dotFrame.svg";
import ring from '../../../assets/tokenCircle.png';
import mediaKit from '../assets/mediaKit.svg'
import pitchDeck from '../assets/pitchDeck.svg'


const Brand = () => {
  return (
    <div className="container-fluid mt-5 mb-5 position-relative" id="brand">
      <img
        className="bluehero-solutions"
        src={require(`../../../assets/metaverse-blueHero.svg`).default}
        alt=""
        style={{ bottom: "-50px", right: "18%" }}
      />
      <div className="container-lg position-relative">
      <img src={ring} alt="" className="brand-ring" loading="lazy"/>

        <Title top={"Brand"} align="d-flex flex-row gap-2" />
        <div className="row m-0 justify-content-between gap-3">
          <div className="col-lg-5 col-xl-5 branditem">
            <div className="row m-0 justify-content-between gap-3 align-items-center">
              <img
                className="dotframe position-absolute"
                src={DotFrame}
                style={{ zIndex: "-1", bottom: "-100px" }}
              />

              <div className="brand-icon mb-3">
                <img src={mediaKit} alt="" loading="lazy"/>
              </div>
              <a  href="https://drive.google.com/drive/folders/1Sh77agasJV4iYn3xU25JS3phIIVBGeZg" target={'_blank'} rel='noreferrer' className="filled-btn btn d-flex align-items-center gap-2 pl-4 pr-4">
                Download
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 21.3C1.6134 21.3 1.3 21.6134 1.3 22C1.3 22.3866 1.6134 22.7 2 22.7V21.3ZM22 22.7C22.3866 22.7 22.7 22.3866 22.7 22C22.7 21.6134 22.3866 21.3 22 21.3V22.7ZM12.7 2C12.7 1.6134 12.3866 1.3 12 1.3C11.6134 1.3 11.3 1.6134 11.3 2H12.7ZM12 18L11.505 18.495C11.7784 18.7683 12.2216 18.7683 12.495 18.495L12 18ZM16.495 14.495C16.7683 14.2216 16.7683 13.7784 16.495 13.505C16.2216 13.2317 15.7784 13.2317 15.505 13.505L16.495 14.495ZM8.49497 13.505C8.22161 13.2317 7.77839 13.2317 7.50503 13.505C7.23166 13.7784 7.23166 14.2216 7.50503 14.495L8.49497 13.505ZM2 22.7H22V21.3H2V22.7ZM11.3 2V18H12.7V2H11.3ZM12.495 18.495L16.495 14.495L15.505 13.505L11.505 17.505L12.495 18.495ZM12.495 17.505L8.49497 13.505L7.50503 14.495L11.505 18.495L12.495 17.505Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div>
              <h6>
                <b>Media Kit</b>
              </h6>
              <p className="brand-desc ">
                We believe that powerful marketing will help bring continued
                success for your operations. Use Dypius badges, Dypius product
                images, and these identity guidelines to effectively promote
                Dypius in all marketing communications.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-xl-5 branditem">
            <div className="row m-0 justify-content-between gap-3 align-items-center">
            <div className="brand-icon mb-3">
                <img src={pitchDeck} alt="" loading="lazy"/>
              </div>
              <a href="https://drive.google.com/drive/folders/1PprliiDlNB6Cx-35eaEun-gmjk0-a1O4" target={'_blank'} rel='noreferrer' className="filled-btn btn d-flex align-items-center gap-2 pl-4 pr-4">
                Download
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 21.3C1.6134 21.3 1.3 21.6134 1.3 22C1.3 22.3866 1.6134 22.7 2 22.7V21.3ZM22 22.7C22.3866 22.7 22.7 22.3866 22.7 22C22.7 21.6134 22.3866 21.3 22 21.3V22.7ZM12.7 2C12.7 1.6134 12.3866 1.3 12 1.3C11.6134 1.3 11.3 1.6134 11.3 2H12.7ZM12 18L11.505 18.495C11.7784 18.7683 12.2216 18.7683 12.495 18.495L12 18ZM16.495 14.495C16.7683 14.2216 16.7683 13.7784 16.495 13.505C16.2216 13.2317 15.7784 13.2317 15.505 13.505L16.495 14.495ZM8.49497 13.505C8.22161 13.2317 7.77839 13.2317 7.50503 13.505C7.23166 13.7784 7.23166 14.2216 7.50503 14.495L8.49497 13.505ZM2 22.7H22V21.3H2V22.7ZM11.3 2V18H12.7V2H11.3ZM12.495 18.495L16.495 14.495L15.505 13.505L11.505 17.505L12.495 18.495ZM12.495 17.505L8.49497 13.505L7.50503 14.495L11.505 18.495L12.495 17.505Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div>
              <h6>
                <b>Pitch Deck</b>
              </h6>
              <p className="brand-desc ">
                Whether you are a potential user or simply curious about what we
                do, this deck is a great resource for learning more about us,
                the way we operate, business model, value propositions and our
                unique services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
