import React, { useState, useEffect } from "react";
import "./_mobileflyout.scss";
import newTag from "./assets/newTag.svg";
import close from "./assets/close.svg";
const MobileFlyout = ({ onClose, onDownloadClick }) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 300) {
        setShow(false);
      } else {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }
    setLastScrollY(window.scrollY);
  };

  const html = document.querySelector("html");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
      window.addEventListener("click", changeBackground);
      window.addEventListener("load", changeBackground);
    }

   

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("click", changeBackground);
      window.removeEventListener("load", changeBackground);
    };
  }, [lastScrollY]);

  return (
    <div className={`mobile-flyout-wrapper p-2 w-100 d-block d-lg-none`}>
      <div className="d-flex align-items-center gap-2">
        <img src={newTag} alt="" />
        <span className="mobile-flyout-text w-100">Dypius Mobile App</span>
        <div className="d-flex w-100 justify-content-end">
          <button
            className="download-button px-3 py-1"
            onClick={onDownloadClick}
          >
            Download
          </button>
        </div>
        <div className="d-flex justify-content-end">
          <img
            src={close}
            alt=""
            onClick={onClose}
            style={{ width: 22, height: 22 }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileFlyout;
