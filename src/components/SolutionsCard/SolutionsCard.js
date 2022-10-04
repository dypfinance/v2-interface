import React from 'react'

const SolutionsCard = ({title}) => {
  return (
    <div className="solutions-card d-flex justify-content-between align-items-center py-4 px-3">
                <div className='d-flex flex-row align-items-center gap-2'>
                <div className="clipboard d-flex justify-content-center align-items-center">
                    <img src={require(`../../Screens/Dyp/assets/filledClipboard.svg`).default} alt="" />
                </div>
                <h4>{title}</h4>
                </div>
                <img src={require(`../../assets/filledArrow.svg`).default} alt="" />
            </div>
  )
}

export default SolutionsCard