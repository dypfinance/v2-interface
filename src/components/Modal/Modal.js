import React from "react";
import envelope from "../../assets/envelope.svg";
import Title from "../Title/Title";

const Modal = ({visible}) => {
  return (
    <div
      className={`modal fade ${visible}`}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog tymodal">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center text-center">
            <img src={envelope} alt="" style={{width: 200}}/>
            <Title top={"Thank"} bottom={"you"} align="d-flex gap-1" />
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              elit tellus. Curabitur in molestie nulla. Quisque sodales auctor
              hendrerit.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
