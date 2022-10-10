import React, { useRef, useState } from 'react'
import Title from '../../../components/Title/Title'
import './_contactus.scss'
import contactHeader from '../assets/contactHeader.png'
import paperclip from '../assets/paperclip.svg'
const ContactUs = () => {

    const name = useRef()

    const [active, setActive] = useState('')

    if(document.activeElement === name.current){
        setActive('name')
    }



  return (
   <div className="container-fluid contact-wrapper">
     <div className="container-lg contact-container pt-5">
        <div className="row flex-column">
            <Title top='Contact us' />
            <p className="text-secondary">Interested in collaborating with us? Please complete this short form.</p>
            <div className="outer-form p-4">
                <div className="row align-items-center">
                    <img src={contactHeader} alt="" />
                    <div>
                        <h2 className='fw-bold'>Business</h2>
                        <p className="text-secondary">Interested in collaborating with us? Please complete this short form.</p>
                    </div>
                </div>
                <div className="row form-container mt-5 mx-2 p-4">
                    <div className="row justify-content-between align-items-start w-100">
                        <h4>Business form</h4>
                        <button className="outline-btn">Attach file <img src={paperclip} alt="" /></button>
                    </div>
                        <form>
                        <div className="d-grid">
                            <div className="position-relative">
                            <p className="text-secondary px-1 label position-absolute">Name*</p>
                            <input ref={name}  type="text" className='p-2 contact-input' />
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default ContactUs