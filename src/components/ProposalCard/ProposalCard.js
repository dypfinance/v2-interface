import React from 'react'

const ProposalCard = ({title, icon}) => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-between w-100 px-4">
                    <div className="d-flex flex-row align-items-center gap-2">
                        <img src={icon} alt="" loading="lazy"/>
                        <p className="fw-bold mb-0">{title}</p>
                    </div>
                    <div className="d-flex gap-4">
                        <p className="burn mb-0 d-flex align-items-center">Disburse/Burn</p>
                        <div className="d-flex flex-column">
                            <p className="expiry-text text-secondary mb-0">Expires in</p>
                            <p className="expiry-date mb-0">12:56:20</p>
                        </div>
                    </div>
                </div>
                <hr style={{margin: '12px 0'}} />
                </>

  )
}

export default ProposalCard