import React from 'react'

const SolutionsCard = () => {
  return (
    <div className="solutions-card d-flex justify-content-around align-items-center py-4">
                <div className="clipboard d-flex justify-content-center align-items-center">
                    <img src={require(`../../Screens/Dyp/assets/filledClipboard.svg`).default} alt="" />
                </div>
                <h4>Lorem Ipsum</h4>
                <img src={require(`../../assets/filledArrow.svg`).default} alt="" />
            </div>
  )
}

export default SolutionsCard