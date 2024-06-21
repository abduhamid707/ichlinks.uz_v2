import React from 'react';
import RarImg from '../../assets/icons/rar.png';
import { FaDownload, FaCalendar } from 'react-icons/fa';
import './style.css';
import { useTranslation } from 'react-i18next';

const Doc = ({ doc }) => {
  const [t, i18n] = useTranslation('global');
  return (
    <div className='doc'>
      <a  className='left' href={doc.file_path} download={true} style={{ textDecoration : "none", color : "#fff" }}>
        <div className='rar'>
          <img src={RarImg} alt={doc.title_uz} />
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
              <FaDownload /> {t('numberOfDownloads')} : {doc.number_downloads}
            </p>
          </div>
        </div>
      </a>
      <div className='right'>
        <FaDownload />
        {t('downloadDocument')}
      </div>
    </div>
  );
};  

export default Doc;
