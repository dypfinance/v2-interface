import React from 'react'

const ProposalCard = ({chain, icon}) => {
  return (
    <div className="d-flex align-items-center justify-content-between w-100 pb-2 px-4" style={{borderBottom: '1px solid #EFF0F6'}}>
                    <div className="d-flex flex-row align-items-center gap-2">
                        <img src="https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg" alt="" />
                        <p className="fw-bold mb-0">ETH Pools</p>
                    </div>
                    <div className="d-flex gap-4">
                        <p className="burn mb-0 d-flex align-items-center">Disburse/Burn</p>
                        <div className="d-flex flex-column">
                            <p className="expiry-text text-secondary mb-0">Expires in</p>
                            <p className="expiry-date mb-0">12:56:20</p>
                        </div>
                    </div>
                </div>
  )
}

export default ProposalCard