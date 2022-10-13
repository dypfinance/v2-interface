import React, {useEffect, useState} from 'react'
import Title from '../../../components/Title/Title'
import './_latestupdates.scss'
import announcementsActive from '../assets/announcementsActive.svg'
import announcementsInactive from '../assets/announcementsInactive.svg'
import eventsActive from '../assets/eventsActive.svg'
import eventsInactive from '../assets/eventsInactive.svg'
import UpdateCard from '../../../components/UpdateCard/UpdateCard'
import { RingLoader } from 'react-spinners'
import dropdownIndicator from '../../Dyp/assets/dropdownIndicator.svg'
import axios from 'axios'

const LatestUpdates = ({type}) => {

    const [newsType, setNewsType] = useState(type)
    const [news, setNews] = useState([])
    const [year, setYear] = useState('2022')
    var options = {  year: 'numeric', month: 'short', day: '2-digit' };

    const url = `https://news-manage.dyp.finance/api/${newsType}`
    const fetchNews =  async(newsType) => {
        console.log(url);
        await axios.get(url).then((response) => {
            setNews(response.data)
        }).catch((err) => { console.error(err) })
      }

    useEffect(() => {


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
                <div
                class="coins d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
               
              >
                <div
                    className="d-flex flex-row align-items-center justify-content-start gap-2"
                    style={{
                      cursor: "pointer",
                      color: "#566FCE",
                      fontSize: 12,
                    }}
                  >
                    {year}
                  </div>
              
                <img src={dropdownIndicator} alt="" />
              </div>
              <ul className="dropdown-menu coin-menu p-1">
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  style={{ color: "#566FCE" }}
                >
                   2020
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  style={{ color: "#D5A404" }}
                >
                   2021
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  style={{ color: "#E84142" }}
                >
                   2022
                </li>
              </ul>
                <div className="years-wrapper d-flex flex-row px-2 gap-1 justify-content-center align-items-center">
              <p className={`${newsType === 'announcements' && 'selected-year'} d-flex flex-row gap-2 align-items-center`} onClick={() => setNewsType('announcements')}><img src={newsType === 'announcements' ? announcementsActive : announcementsInactive} alt="" />Announcements</p>
              <p className={` ${newsType === 'events' && 'selected-year'} d-flex flex-row gap-2 align-items-center`} onClick={() => setNewsType('events')}><img src={newsType === 'events' ? eventsActive : eventsInactive} alt="" />Events</p>
            </div>
            </div>
            <div className="row update-card-container justify-content-center mt-5">
                {news.length !== 0 ? sortedUpdates.map((newsItem, index) => (
                    <UpdateCard key={index} title={newsItem.title} image={newsItem.image && newsItem.image} link={newsItem.link} month={newsItem.date.toLocaleDateString("en-US", options).slice(0, 3)} date={newsItem.date.toLocaleDateString("en-US", options).slice(4, 6)} />
                )) :
                <div className="d-flex justify-content-center align-items-center">
            <RingLoader color='#9664FF' size={150} />
            </div>
                }
               
            </div>
        </div>
    </div>
  )
}

export default LatestUpdates