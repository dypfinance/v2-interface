import React from 'react'

const WhyDypCard = ({title, description}) => {
  return (
    <div className="why-card position-relative mt-5 py-4 py-lg-auto">
    <div className="green-tag"></div>
<div className="tag d-flex justify-content-center align-items-center">
    <img src={require(`../../Screens/Dyp/assets/clipboard.svg`).default} alt="" />
</div>

<div className="col-12 col-lg-10 ms-auto h-100 d-flex align-items-center px-4 px-lg-auto">
<div className='d-flex flex-column gap-5 gap-lg-0'>
<h5 className='text-center text-lg-start'>{title}</h5>
<p className='text-secondary'>{description}</p>
</div>
</div>
</div>
  )
}

export default WhyDypCard