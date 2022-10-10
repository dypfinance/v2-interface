import React from 'react'
import FAQ from './FAQ/FAQ'
import SupportMainHero from './SupportMainHero/SupportMainHero'
import './_support.scss'

const Support = () => {
  return (
    <div className="container-fluid px-0">
      <SupportMainHero />
      <FAQ />
    </div>
  )
}

export default Support