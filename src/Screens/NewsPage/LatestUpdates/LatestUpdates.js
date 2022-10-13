import React from 'react'
import Title from '../../../components/Title/Title'
import './_latestupdates.scss'
import announcementsActive from '../assets/announcementsActive.svg'
import announcementsInactive from '../assets/announcementsInactive.svg'
import eventsActive from '../assets/eventsActive.svg'
import eventsInactive from '../assets/eventsInactive.svg'
import sampleImage from '../assets/sampleImage.png'
import filledArrow from '../../../assets/filledArrow.svg'
import UpdateCard from '../../../components/UpdateCard/UpdateCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const LatestUpdates = ({type}) => {

    const [newsType, setNewsType] = useState(type)
    const [news, setNews] = useState([])
    var options = {  year: 'numeric', month: 'short', day: '2-digit' };

    const url = `https://news-manage.dyp.finance/api/${newsType}`
    const fetchNews =  async(newsType) => {
        setNewsType(type)
        console.log(url);
        await axios.get(url).then((response) => {
            setNews(response.data)
        }).catch((err) => { console.error(err) })
      }

    useEffect(() => {
      setNewsType(type)
      fetchNews();
    }, [type, newsType])
    
    
    
    const sortedUpdates = news.length !== 0 && news.map(item => {
        return {...item, date: new Date(item.date)}
        
    }) 

  return (
    <div className="container-fluid updates-wrapper">
        <div className="container-lg updates-container p-5">
            <div className="row justify-content-between">
                <Title top='Latest' bottom='updates' align='d-flex flex-row gap-2' />
                <div className="years-wrapper d-flex flex-row px-2 gap-1 justify-content-center align-items-center">
              <p className='selected-year'>2020</p>
              <p className=''>2021</p>
              <p className=''>2022</p>
            </div>
                <div className="years-wrapper d-flex flex-row px-2 gap-1 justify-content-center align-items-center">
              <p className={`${type === 'announcements' && 'selected-year'} d-flex flex-row gap-2 align-items-center`} onClick={() => setNewsType('announcements')}><img src={type === 'announcements' ? announcementsActive : announcementsInactive} alt="" />Announcements</p>
              <p className={` ${type === 'events' && 'selected-year'} d-flex flex-row gap-2 align-items-center`} onClick={() => setNewsType('events')}><img src={type === 'events' ? eventsActive : eventsInactive} alt="" />Events</p>
            </div>
            </div>
            <div className="row update-card-container mt-5">
                {news.length !== 0 && sortedUpdates.map((newsItem, index) => (
                    <UpdateCard key={index} title={newsItem.title} image={newsItem.image && newsItem.image} link={newsItem.link} month={newsItem.date.toLocaleDateString("en-US", options).slice(0, 3)} date={newsItem.date.toLocaleDateString("en-US", options).slice(4, 6)} />
                ))}
               
            </div>
        </div>
    </div>
  )
}

export default LatestUpdates