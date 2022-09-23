import React from 'react'
import listIcon from "../../assets/listIcon.svg";


const ListCard = () => {
  return (
    <div className="list-card d-flex flex-row align-items-center">
        <img src={listIcon} alt="" />
        <p className='mb-0'>A fixed 5% Lifetime commission for each friend</p>
    </div>
  )
}

export default ListCard