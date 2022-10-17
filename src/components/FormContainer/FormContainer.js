import React from 'react'
import supportPhone from '../../Screens/Support/assets/supportPhone.png'
import plus from '../../Screens/Support/assets/plus.svg'
import minus from '../../Screens/Support/assets/minus.svg'
import formEmail from '../../assets/formEmail.svg'

const FormContainer = ({onClick, accordionState, children, title, desc, collapse, email, emailLink}) => {
  return (
    <div className="col-12 col-lg-6">
          <div className="help-card position-relative p-4 d-flex flex-column justify-content-between">
            <img
              src={supportPhone}
              alt=""
              className="position-absolute phone-image"
            />
            <div className="row w-100 justify-content-end" style={{height: '110px'}}>
              <button
                onClick={onClick}
                className={`btn ${accordionState ? 'outline-btn' : 'filled-btn'} d-flex align-items-center gap-2`}
                data-bs-toggle="collapse"
                data-bs-target={`#${collapse}`}
                aria-expanded="true"
                aria-controls={collapse}
              >
                Fill out form <img src={accordionState ? minus : plus} alt="" />
              </button>
            </div>
            <div className="row w-100 position-relative justify-content-between align-items-center">
             <div className='col-12'>
             <h3 className="fw-bold">{title}</h3>
              <p className="text-secondary">
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