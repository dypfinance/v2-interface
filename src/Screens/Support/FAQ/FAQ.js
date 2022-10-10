import React from 'react'
import Title from '../../../components/Title/Title'
import './_faq.scss'

const FAQ = () => {
  return (
    <div className="container-fluid faq-wrapper">
        <div className="container-lg d-flex justify-content-center align-items-center flex-column py-5">
            <div className="col-6">
            <Title top='Contact' bottom="us" align='d-flex flex-row gap-2 justify-content-center' />
            <p className="text-secondary text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis nisi sed diam placerat, in commodo odio posuere. Aliquam lacus sapien</p>
            </div>
            <div className="faq-container w-100 mt-4 p-5">
                <div className="row justify-content-between align-items-center">
                    <h2 className='fw-bold mb-0'>Tell us about your issue so we can help you more quickly.</h2>
                    <select class="form-select w-auto" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="m-5">
                <input type="text" class="form-control" placeholder="Subject*" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ