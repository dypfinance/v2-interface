import React from 'react'
import PropTypes from 'prop-types'

const AuditedByItem = ({ imgName, text }) => {
    return (
        <div className="audited-by-section-item">
            <img src={`https://cdn.worldofdypians.com/dypius/${imgName}`} alt=""  />
            <p className="audited-by-section-item-text">{text}</p>

        </div>
    )
}
AuditedByItem.propTypes = {
    imgName: PropTypes.string,
    text: PropTypes.string,
}

export default AuditedByItem