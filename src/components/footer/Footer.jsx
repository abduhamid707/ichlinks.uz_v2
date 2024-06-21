import React from "react";
import "./style.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n]  = useTranslation("global");
  return (
    <footer>
      <div className="contents">
        <div className="left">
          <h3>
           {t('navbar.title')}
          </h3>
        </div>
        <div className="center">
          <h4>{t('navbar.contact')}</h4>
          <ul className="contact">
            <li>
              <MdOutlineEmail />
              INFO@MADANIYAT.UZ
            </li>
            <li>
              <FaPhone />
              +998 55 502 33 75
            </li>
            <li>
              <CiLocationOn />
              O'ZBEKISTON RESPUBLIKASI, TOSHKENT SH, 100084, A.TEMUR SHOH <br />{" "}
              KO'CHASI 107B
            </li>
          </ul>
        </div>
        <div className="right">
          <h4>{t('footer.usefulLinks')}</h4>
          <ul className="useful_links">
            <li>
              <FaChevronRight />
              WWW.MADANIYAT.UZ
            </li>
            <li>
              <FaChevronRight />
              WWW.EGOV.UZ
            </li>
            <li>
              <FaChevronRight />
              WWW.MFA.UZ
            </li>
          </ul>
        </div>
      </div>
      <p className="bottom_txt">
        www.unwto2023.uz © 2023 &nbsp; &nbsp;{t('footer.allRightsReserved')}
      </p>
    </footer>
  );
};

export default Footer;
