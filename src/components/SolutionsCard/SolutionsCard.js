import React from 'react'


const SolutionsCard = ({title, image}) => {
  return (
    <div className="solutions-card d-flex justify-content-between align-items-center py-4 px-3" data-aos="fade-up" data-aos-duration="1000">
                <div className='d-flex flex-row align-items-center gap-2'>
                <div className="clipboard d-flex justify-content-center align-items-center">
                    <img src={require(`./assets/${image}`)} alt="" style={{width: 55, height: 55}}/>
                </div>
                <h4>{title}</h4>
                </div>
                <img src={require(`../../assets/filledArrow.svg`).default} alt="" />
            </div>
  )
}

export default SolutionsCard