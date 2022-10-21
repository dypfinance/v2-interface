import React from 'react'
import PropTypes from 'prop-types'

const AuditedByItem = ({ imgName, text }) => {
    return (
        <div className="audited-by-section-item">
            <img src={require(`../../assets/AuditedBy/${imgName}`)} alt="" loading="lazy"/>
            <p className="audited-by-section-item-text">{text}</p>

        </div>
    )
}
AuditedByItem.propTypes = {
    imgName: PropTypes.string,
    text: PropTypes.string,
}

export default AuditedByItem