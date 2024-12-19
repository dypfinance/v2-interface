import React from 'react'

const FormContainer = ({onClick, accordionState, children, title, desc, collapse, email, emailLink, image}) => {
  return (
    <div className="col-12 col-xl-6">
          <div className="help-card position-relative p-4 d-flex flex-column justify-content-between">
            <img
              src={image === "business" ? "https://cdn.worldofdypians.com/dypius/supportBusiness.png": "https://cdn.worldofdypians.com/dypius/supportInquiry.png"}
              alt=""
              className={`${image} position-absolute phone-image `}
            />
            <div className="row justify-content-start justify-content-lg-end align-items-end align-items-lg-start mb-4 pb-2 pb-lg-0 ms-0 mb-lg-0" style={{height: '110px'}}>
              <button
                onClick={onClick}
                className={`btn ${accordionState ? 'outline-btn' : 'filled-btn'} d-flex align-items-center gap-2 form-button`}
                data-bs-toggle="collapse"
                data-bs-target={`#${collapse}`}
                aria-expanded="true"
                aria-controls={collapse}
              >
                Fill out form <img src={accordionState ? "https://cdn.worldofdypians.com/dypius/minus.svg" : "https://cdn.worldofdypians.com/dypius/plus.svg"} alt=""  />
              </button>
            </div>
            <div className="row w-100 position-relative justify-content-between align-items-center">
             <div className='col-12'>
             <h3 className="fw-bold">{title}</h3>
              <p className="text-secondary mb-0 form-container-desc">
                {desc}
              </p>
             </div>
            
            </div>
           {children}
          </div>
        </div>
  )
}

export default FormContainer