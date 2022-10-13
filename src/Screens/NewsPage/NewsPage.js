import React from 'react'
import './_newspage.scss'
import { useLocation } from 'react-router-dom'
import DypNews from '../Home/DypNews/DypNews'
import LatestUpdates from './LatestUpdates/LatestUpdates'

const NewsPage = () => {

    const data = useLocation()
    const { newsType } = data.state

    console.log(newsType);

    

  return (
    <div className="container-fluid px-0 d-flex flex-column" style={{paddingTop: '150px', gap: '150px'}}>
        <DypNews topTitle='Main' bottomTitle='news' titleAlign='d-flex flex-row gap-2' />
        <LatestUpdates type={newsType} />
    </div>
  )
}

export default NewsPage