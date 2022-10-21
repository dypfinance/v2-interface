import React from 'react'
import sampleImage from '../../Screens/NewsPage/assets/sampleImage.png'
import filledArrow from '../../assets/filledArrow.svg'

const UpdateCard = ({title, image, link, date, month}) => {
  return (
    <a target="_blank" href={link} className="update-card d-flex flex-column flex-lg-row gap-3 p-3">
        <div className='d-flex flex-row gap-2'>
        <div className="date d-flex flex-column justify-content-center align-items-center gap-3">
        <p className="month mb-0">
            {month}
        </p>
        <h3 className="text-white mb-0">
            {date}
        </h3>
    </div>
    <img className='update-image' src={image} alt="" />
        </div>
            <div className='d-flex'>
        <div className="update-title d-flex flex-column justify-content-between">
            <p className='mb-0' style={{color: 'black', fontSize: '13px'}}>{title.slice(0, 35) + '...'}</p>
            <a target="_blank" href={link}>
            <p className='d-flex flex-row mb-0 align-items-center justify-content-between' style={{color: '#6962DC', fontSize: '10px'}}>View Article <img src={filledArrow} alt="" loading="lazy"/></p>
            </a>
            </div>
        </div>
</a>
  )
}

export default UpdateCard