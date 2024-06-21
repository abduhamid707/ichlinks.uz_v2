import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import { FaCalendar, FaShare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import context from '../../context';

const NewsSinglePage = () => {
    const { id } = useParams();
    const [t, i18n] = useTranslation('global');
   const { currentLang } = useContext(context)
    const [newsData, setNewsData] = useState()
 
    async function GetNewsData(){
        try {
            const { data } = await axios.get(`http://ichlinks.uz/api/site/news/${id}`)
            setNewsData(data.result)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    useEffect(()=>{
     GetNewsData();
    }, [])

  return (
    <div className='page news-single-page'>
      <div className='container'>
        <div className='txt_title'>
        <h1>{currentLang == 'uz' ?  newsData?.title_uz : currentLang == 'ru' ? newsData?.title_ru : newsData?.title_en}</h1>
        </div>
        <div className='icons'>
            <div className='date_calendar'>
                <FaCalendar/>
                 {newsData?.createdAt.slice(0, 10)}
            </div>
            <div className='share'>
                <FaShare/>
                {t('share')}
            </div>
        </div>
        <div className='img'>
          <img src={newsData?.main_img}/>
        </div>
        <div className='desc'>
            <p>  {currentLang == 'uz' ?  newsData?.text_uz.slice(3,newsData?.text_uz.length -6 ) : currentLang == 'ru' ? newsData?.text_ru.slice(3,newsData?.text_ru.length -6 ) : newsData?.text_en.slice(3, newsData?.text_en.length - 6)}</p>
        </div>
        <div className='images'>
            {newsData?.images?.map((el, idx)=>(
                <img src={el}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewsSinglePage
