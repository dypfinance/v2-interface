import React from "react";
import envelope from "../../assets/envelope.svg";
import Title from "../Title/Title";

const Modal = ({ visible, modalId, setIsVisible }) => {
  let className = "modal fade ";
  let style = {};
  if (visible === true) {
    className = "modal fade show";
    style = { display: "block", background: "rgba(0,0,0, 0.5)" };
  }

  const closeModal = () => {
    setIsVisible(false)
}


  return (
    <div
      className={className}
      id={modalId}
      tabIndex="-1"
      aria-labelledby={"modalLabel" + modalId}
      aria-hidden="true"
      style={style}
      onClick={closeModal}

    >
      <div className="modal-dialog tymodal">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center text-center">
              <img src={envelope} alt="" style={{ width: 200 }} />
              <Title top={"Thank"} bottom={"you"} align="d-flex gap-1" />
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut elit tellus. Curabitur in molestie nulla. Quisque sodales
                auctor hendrerit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  setIsVisible: () => {}
}

export default Modal;
