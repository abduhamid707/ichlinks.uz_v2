import React, { useEffect, useState } from "react";
import Links from "../../components/links/Links";
import { CiLocationOn } from "react-icons/ci";
import { FaClock, FaSubway, FaPhone, FaRoute, FaBus, FaHome, FaChevronRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md"; 
import "./style.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";



const Contact = () => {
  const [t, i18n] = useTranslation('global')
  const [contactInfo, setContactInfo] = useState(null);
  let base_url_ichlinks = 'http://ichlinks.uz';
  useEffect(() => {
    fetch(`${base_url_ichlinks}/api/site/contact`)
      .then(response => response.json())
      .then(data => setContactInfo(data.result))
      .catch(error => console.error("Error fetching contact data:", error));
  }, [base_url_ichlinks]);

  if (!contactInfo) {
    return <div>Loading...</div>;
  }


 
  return (
    <div className="page contact-page">
      <section className="section_one">
        <div className="overlay">
          <div className="container">
            <div className="left">
              <h2>{t('navbar.contact')}</h2>
            </div>
            <div className="right">
              <Links />
            </div>
          </div>
        </div>
      </section>
      <section className="section_two">
        <div className="container">
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.367399869478!2d69.23707698533809!3d41.32262359732836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b75b8b45fe1%3A0xf388d40ca1e8aec8!2z0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4IDMwLCAxMDAxMjksINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1718947309445!5m2!1sru!2s" width="1250" height="520" style={{border : 0, marginTop : "1em auto"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>         
          <div className="contacts_">
            <div className="element">
              <h4>{t('contactPage.adres')}</h4>
              <ul>
                <li>
                  <CiLocationOn /> {contactInfo.address_uz}
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>{t('contactPage.workTime')}</h4>
              <ul>
                <li>
                  <FaClock /> {t('contactPage.workTime')} : {contactInfo.weekday}
                </li>
                <li style={{fontSize : "13px", fontFamily : "sans-serif"}}>&nbsp; &nbsp; &nbsp; {t('contactPage.workTime')} : {contactInfo.work_start_time} - {contactInfo.work_end_time}</li>
                <li style={{fontSize : "13px", fontFamily : "sans-serif"}}>&nbsp; &nbsp; &nbsp; {t('contactPage.dayOff')}: {contactInfo.weekend}</li>
              </ul>
            </div>
            <div className="element">
              <h4>{t('contactPage.contacts')}</h4>
              <ul>
                <li>
                  <FaPhone /> {t('contactPage.tel')} : {contactInfo.phone_number}
                </li>
                <li>&nbsp; &nbsp; &nbsp; Faks: {contactInfo.fax}</li>
                <li>
                  <MdOutlineEmail /> {t('contactPage.email')} : {contactInfo.email}
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>{t('contactPage.dataPoint')}</h4>
              <ul>
                <li>
                  <FaRoute /> {contactInfo.reference_point_uz}
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>{t('contactPage.bus')}</h4>
              <li>
                <FaBus /> {contactInfo.bus}
              </li>
            </div>
            <div className="element">
              <h4>{t('contactPage.underground')}</h4>
              <li>
                <FaSubway /> {contactInfo.metro_uz}
              </li>
            </div>
          </div>
          <div className="back_navigate">
            <button className="home">
              <FaHome /> {t('navbar.home')}
            </button>
            <button className="next">
              <FaChevronRight />
            </button>
            <button className="about">{t('navbar.contact')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
