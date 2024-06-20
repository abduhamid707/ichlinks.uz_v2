import React from 'react';
import RarImg from '../../assets/icons/rar.png';
import { FaDownload, FaCalendar } from 'react-icons/fa';
import './style.css';

const Doc = ({ doc }) => {
  return (
    <div className='doc'>
      <div className='left'>
        <div className='rar'>
          <img src={`http://ichlinks.uz/${doc.file_path}`} alt={doc.title_uz} />
        </div>
        <div className='txt'>
          <div className='top'>
            <h3>{doc.title_uz}</h3>
          </div>
          <div className='bottom'>
            <p className='calendar'>
              <FaCalendar /> {new Date(doc.createdAt).toLocaleDateString('ru-RU')}
            </p>
            <p className='download_count'>
              <FaDownload /> Количество скачиваний: {doc.number_downloads}
            </p>
          </div>
        </div>
      </div>
      <div className='right'>
        <FaDownload />
        Скачать документ
      </div>
    </div>
  );
};

export default Doc;
