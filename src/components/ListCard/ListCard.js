import React from 'react'
import listIcon from "../../assets/listIcon.svg";


const ListCard = ({content}) => {
  return (
    <div className="list-card d-flex flex-row align-items-center">
        <img src={listIcon} alt="" />
        <p className='m-0'>{content}</p>
    </div>
  )
}

export default ListCard