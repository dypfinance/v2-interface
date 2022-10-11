import React from 'react'
import FAQ from './FAQ/FAQ'
import SupportMainHero from './SupportMainHero/SupportMainHero'
import VideoTutorials from './VideoTutorials/VideoTutorials'
import './_support.scss'

const Support = () => {
  return (
    <div className="container-fluid px-0">
      <SupportMainHero />
      <FAQ />
      <VideoTutorials />
    </div>
  )
}

export default Support