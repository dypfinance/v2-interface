import React from 'react'

const Title = ({top, bottom, align}) => {
  return (
    <div className={align}>
        <h1 className="metaverse">{top}</h1>
        <h1>{bottom}</h1>
    </div>
  )
}

export default Title