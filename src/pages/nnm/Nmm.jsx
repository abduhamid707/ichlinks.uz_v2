import React, { useState, useEffect } from 'react';
import './style.css';
import Links from '../../components/links/Links';
import { FaChevronLeft, FaChevronRight, FaHome } from 'react-icons/fa';
import NewsCard from '../../components/news-card/NewsCard';
import currentBackground from "../../assets/icons/news-page.png";
import { useTranslation } from 'react-i18next';

const Nmm = () => {
  const [newsList, setNewsList] = useState([]);
const [t, i18n] = useTranslation('global');
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://ichlinks.uz/api/site/news');
        if (response.ok) {
          const data = await response.json(); 
          setNewsList(data.result); // Assuming data.result contains the array of news items
        } else {
          console.error('Failed to fetch news');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <div className='page news-page'>
      <section className='section_one' style={{ backgroundImage: `url(${currentBackground})` }}>
        <div className='overlay'>
          <div className='container'>
            <div className='left'>
              <h2>{t('navbar.nmm')}</h2>
            </div>
            <div className='right'>
              <Links />
            </div>
          </div>
        </div>
      </section>
      <section className='section_two'>
        <div className='container'>
          <h3 className='title'>{t('numberOfPublications')}: {newsList.length}</h3>
          <div className='news_wrp'>
            {newsList.map(news => (
              <NewsCard key={news.news_id} news={news} />
            ))}
          </div>
          <div className='pagination_btns'>
            <div className='left_btns'>
              <button className='prev'>
                <FaChevronLeft /> Пред. стр
              </button>
              <button className='next'>След. стр <FaChevronRight /> </button>
            </div>
            <div className='right_btns'>
              <div className='left_page'>
                <p>страница</p>
                <button>3</button>
                <p>из 157</p>
              </div>
              <button className='go_'>{t('enter')} <FaChevronRight /></button>
            </div>
          </div>
          <div className="back_navigate">
            <button className="home"><FaHome /> {t('navbar.home')}</button>
            <button className="next"> <FaChevronRight /> </button>
            <button className="about">{t('navbar.nmm')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nmm;
