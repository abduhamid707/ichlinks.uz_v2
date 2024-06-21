import React, { useContext, useEffect, useState } from "react";
import Links from "../../components/links/Links";
import "./style.css";
import FirstImg from '../../assets/icons/kulol.png';
import SecondImg from '../../assets/icons/gallery-3.png'
import ThirdImg from '../../assets/icons/gallery-1.png'
import BottomImg from '../../assets/icons/gallery-2.png'
import { FaHome } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { useTranslation } from "react-i18next";
import context from "../../context";
import axios from "axios";


const About = () => {
  const [t, i18n] = useTranslation('global');

const { currentLang } = useContext(context);
const [aboutDatas, setAboutDatas] = useState()

async function GetAboutDatas(){
  try {
    const { data } = await axios.get(`http://ichlinks.uz/api/site/about`)
     setAboutDatas(data.result)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}


useEffect(()=>{
  GetAboutDatas();
}, [])

  return (
    <div className="page about-page">
      <section className="section_one">
        <div className="overlay">
          <div className="container">
            <div className="left">
              <h2>{t('navbar.aboutProject')}</h2>
            </div>
            <div className="right">
              <Links />
            </div>
          </div>
        </div>
      </section>
      <section className="section_two">
        <div className="container">
          <div className="txt">
            <h2>  {currentLang == 'uz' ? aboutDatas?.title_uz : currentLang == 'ru' ? aboutDatas?.title_ru : aboutDatas?.title_en}</h2>
            <p>

            {currentLang == 'uz' ? aboutDatas?.text_uz : currentLang == 'ru' ? aboutDatas?.text_ru : aboutDatas?.text_en}
            
            </p>
          </div>
          <div className="images">
          {aboutDatas?.images.map((el, idx)=>(
            <img src={el}/>
          ))}
          
          </div>
          {/* <div className="bottom_img">
             <img src={BottomImg}/>
          </div> */}
          <div className="back_navigate">
            <button className="home"><FaHome/> {t('navbar.home')}</button>
            <button className="next"> <FaChevronRight/> </button>
            <button className="about">{t('navbar.aboutProject')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
