import React from 'react'
import FAQ from './FAQ/FAQ'
import GetInTouch from './GetInTouch/GetInTouch'
import HelpCenter from './HelpCenter/HelpCenter'
import SupportMainHero from './SupportMainHero/SupportMainHero'
import VideoTutorials from './VideoTutorials/VideoTutorials'
import './_support.scss'

const Support = () => {
  return (
    <div className="container-fluid px-0">
      <SupportMainHero />
      <FAQ />
      <VideoTutorials />
      <GetInTouch />
      <HelpCenter />
    </div>
  )
}

export default Support