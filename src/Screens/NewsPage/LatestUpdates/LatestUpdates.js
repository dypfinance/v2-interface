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
            <div className="row justify-content-center justify-content-lg-between gap-5">
                <Title top='Latest' bottom='updates' align='d-flex flex-row gap-2' />
                <div
                className="years d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
               
              >
                <div
                    className="d-flex flex-row align-items-center justify-content-start gap-2"
                    style={{
                      cursor: "pointer",
                      color: "#566FCE",
                    }}
                  >
                    {year}
                  </div>
              
                <img src={dropdownIndicator} alt="" />
              </div>
              <ul className="dropdown-menu coin-menu p-1" style={{width: '200px'}}>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  style={{ cursor: 'pointer', color: "#566FCE" }}
                  onClick={() => setYear('2020')}
                >
                   2020
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  style={{ cursor: 'pointer', color: "#566FCE"}}
                  onClick={() => setYear('2021')}
                >
                   2021
                </li>
                <li
                  className="d-flex flex-row align-items-center justify-content-start gap-3 py-3 mx-2 coin"
                  style={{ cursor: 'pointer', color: "#566FCE"}}
                  onClick={() => setYear('2022')}
                >
                   2022
                </li>
              </ul>
                <div className="years-wrapper d-flex flex-row px-2 gap-1 justify-content-center align-items-center">
              <p className={`${newsType === 'announcements' && 'selected-year'} d-flex flex-row gap-2 align-items-center`} onClick={() => setNewsType('announcements')}><img src={newsType === 'announcements' ? announcementsActive : announcementsInactive} alt="" />Announcements</p>
              <p className={` ${newsType === 'events' && 'selected-year'} d-flex flex-row gap-2 align-items-center`} onClick={() => setNewsType('events')}><img src={newsType === 'events' ? eventsActive : eventsInactive} alt="" />Events</p>
            </div>
            </div>
                {news.length !== 0 ? 
                <div className="row update-card-container justify-content-center mt-5">
                  {sortedUpdates.filter(item => item.date.toLocaleDateString("en-US", options).includes(year)).map((newsItem, index) => (
                    <UpdateCard key={index} title={newsItem.title} image={newsItem.image && newsItem.image} link={newsItem.link} month={newsItem.date.toLocaleDateString("en-US", options).slice(0, 3)} date={newsItem.date.toLocaleDateString("en-US", options).slice(4, 6)} />
                ))}
                </div>
                :
            <div className="d-flex justify-content-center align-items-center mt-5">
            <RingLoader color='#9664FF' size={150} />
            </div>
                }
               
        </div>
    </div>
  )
}

export default LatestUpdates