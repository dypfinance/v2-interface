import React from 'react'
import completedIcon from '../../Screens/About/assets/completedIcon.svg'

const RoadmapCard = ({data}) => {





  return (
    <div className="col-12 d-flex flex-column gap-4">
    <div className="date-card d-flex flex-column align-items-center">
      <h2 style={{ color: "#EFF0F6" }}>{data.date}</h2>
      <div className="outer-circle d-flex justify-content-center align-items-center">
        <div className="inner-circle"></div>
      </div>
    </div>
    <div className="roadmap-items d-flex flex-column gap-3 p-4">
      {data.name.map((item, index) => (
        <div key={index} className="d-flex flex-row align-items-center gap-2">
        <img src={completedIcon} alt="" />
        <p>{item}</p>
      </div>
      ))}
    </div>
  </div>
  )
}

export default RoadmapCard