import React, { useContext } from "react";
import { FaCalendar, FaShare } from "react-icons/fa";
import "./style.css";
import context from "../../context";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  const { currentLang } = useContext(context);
  const [t, i18n] = useTranslation('global')
  const textUz = news.text_uz.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="new_card d-flex">
      <div className="left" style={{ width : "400px" }}>
        <img src={news.main_img} alt={news.title_uz} />
      </div>
      <div className="right " style={{marginLeft : "6em" }}>
        <div className="top">
          <h3 className="heading">{news.title_uz}</h3>
          <p className="desc">{currentLang == 'uz' ? news?.text_uz.slice(3, 80)+ '...' : currentLang == 'ru' ? news?.text_ru.slice(3, 80) + '...' : news?.text_en.slice(3, 80) + '...'}</p>
        </div>
        <div className="bottom">
          <ul className="left">
            <li>
              <FaCalendar /> {new Date(news.createdAt).toLocaleDateString()}
            </li>
            <li>
              <FaShare /> {t('share')}
            </li>
          </ul>
          <div className="right" style={{ marginLeft : "7em", marginTop : '1.7em' }}>
            <button onClick={()=> navigate(`/news/${news?.news_id}`)}>{t('more')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
