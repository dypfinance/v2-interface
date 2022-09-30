import React from 'react'

const WhyDypCard = () => {
  return (
    <div className="why-card position-relative mt-5">
    <div className="green-tag"></div>
<div className="tag d-flex justify-content-center align-items-center">
    <img src={require(`../../Screens/Dyp/assets/clipboard.svg`).default} alt="" />
</div>

<div className="col-10 ms-auto h-100 d-flex align-items-center">
<div>
<h5>Lorem Ipsum</h5>
<p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu lorem, viverra eu tempor quis, commodo a leo. Sed pretium, orci ac ultrices semper, diam nulla fringilla est, sed aliquet...</p>
</div>
</div>
</div>
  )
}

export default WhyDypCard