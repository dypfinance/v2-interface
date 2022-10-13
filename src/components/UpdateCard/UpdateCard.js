import React from 'react'
import sampleImage from '../../Screens/NewsPage/assets/sampleImage.png'
import filledArrow from '../../assets/filledArrow.svg'

const UpdateCard = ({title, image, link, date, month}) => {
  return (
    <div className="update-card d-flex flex-row gap-3 p-3">
    <div className="date d-flex flex-column justify-content-center align-items-center">
        <p className="month">
            {month}
        </p>
        <h3 className="text-white">
            {date}
        </h3>
    </div>
        <img className='update-image' src={image} alt="" />
        <div className="update-title d-flex flex-column justify-content-between">
            <p className=''>{title.slice(0, 25) + '...'}</p>
            <a target="_blank" href={link}>
            <p className='d-flex flex-row mb-0 gap-2 align-items-center' style={{color: '#6962DC', fontSize: '11px'}}>View Article <img src={filledArrow} alt="" /></p>
            </a>
        </div>
</div>
  )
}

export default UpdateCard