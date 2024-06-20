

import { PiSunglassesBold } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaSearch, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CustomModal from "../Modals/CustomModal";
import uzFlag from "../../../src/assets/flags/Flag-of-Uzbekistan.png";
import ruFlag from "../../../src/assets/flags/flag-of-russia.png";
import usFlag from "../../../src/assets/flags/image.png";
import "bootstrap/dist/css/bootstrap.min.css";
import context from "../../context";
import { useTranslation } from "react-i18next";
import "./style.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentLang } = useContext(context);

  const [t, i18n] = useTranslation('global');


  const changeLangHandler = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('currentLang', JSON.stringify(lang));
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLanguageChange = (language) => {
    changeLangHandler(language)
    setIsDropdownOpen(false)
  };

  const getLanguageFlag = (language) => {
    switch (language) {
      case "uz":
        return "uz";
      case "ru":
        return "ru";
      case "en":
        return "en";
      default:
        return "uz";
    }
  };

  return (
    <header className="header" id="header">
      <div className="screen-pc">
        <div className="container">
          <div className="header_top">
            <div className="header_box">
              <div className="search">
                <input
                  type="text"
                  className="search_input"
                  placeholder={t('navbar.search')}
                />
                <button type="submit" className="btn">
                  <FaSearch />
                </button>
              </div>
            </div>
            <div className="header_box">
              <div className="header_title">
                <h2 className="header-title">{t("navbar.title")}</h2>
              </div>
            </div>
            <div className="header_box">
              <div className="header_settings">
                <button onClick={openModal}>
                  <PiSunglassesBold />
                </button>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    <AiOutlineGlobal /> {getLanguageFlag(currentLang)}
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu show">
                      <button
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("uz")}
                      >
                        <img src={uzFlag} width={20} height={20} alt="Uzbek" />{" "}
                        <span className="pl-4">🇺🇿</span>
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("ru")}
                      >
                        <img
                          src={ruFlag}
                          width={20}
                          height={20}
                          alt="Russian"
                        />
                        <span className="pl-4"> 🇷🇺</span>
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("en")}
                      >
                        <img

                          src={usFlag}
                          width={20}
                          height={20}
                          alt="English"
                        />
                        <span className="pl-4"> 🇺🇸 </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="header_line"></span>
        <div className="navbar">
          <nav className={`nav-links `}>
            <NavLink to="/" activeClassName="active" exact>
              {t('navbar.home')}
            </NavLink>
            <NavLink to="/about" activeClassName="active" exact>
              {t('navbar.aboutProject')}
            </NavLink>
            <NavLink to="/nmm" activeClassName="active" exact>
              {t('navbar.nmm')}
            </NavLink>
            <NavLink to="/news" activeClassName="active" exact>
              {t('navbar.news')}
            </NavLink>
            <NavLink to="/documents" activeClassName="active" exact>
              {t('navbar.regulatoryDocuments')}
            </NavLink>
            <NavLink to="/audio-materials" activeClassName="active" exact>
              {t('navbar.material')}
            </NavLink>
            <NavLink to="/contact" activeClassName="active" exact>
              {t('navbar.contact')}
            </NavLink>
          </nav>
          <CustomModal isOpen={isModalOpen} onClose={closeModal}>
            <div>
              <p>This is a modal window!</p>
            </div>
          </CustomModal>
        </div>
      </div>
      <div className="screen-mbl">
        <div className="container">
          <div className="header-sm py-2">
            <h2 className="header-sm-title">
              O‘zbekiston nomoddiy madaniy merosi
            </h2>
            <button className="menu-toggle" onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>
          <div className="header-sm-menu">
            <div className="navbar-sm">
              {isMenuOpen ? (
                <div className="show_sm_box_wrapper">
                  <div className="show_sm_box">
                    <div className="search">
                      <input
                        type="text"
                        className="search_input"
                        placeholder="Search products"
                      />
                      <button type="submit" className="btn">
                        <FaSearch />
                      </button>
                    </div>
                    <div className="header_settings">
                      <button onClick={openModal}>
                        <PiSunglassesBold />
                      </button>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          onClick={toggleDropdown}
                        >
                          <AiOutlineGlobal />{" "}
                          {getLanguageFlag(currentLang)}
                        </button>
                        {isDropdownOpen && (
                          <div className="dropdown-menu show">
                            <button
                              className="dropdown-item"
                              onClick={() => handleLanguageChange("uz")}
                            >
                              <img
                                src={uzFlag}
                                width={20}
                                height={20}
                                alt="Uzbek"
                              />{" "}
                              <span className="pl-4">🇺🇿</span>
                            </button>
                            <button
                              className="dropdown-item"
                              onClick={() => handleLanguageChange("ru")}
                            >
                              <img

                                src={ruFlag}
                                width={20}
                                height={20}
                                alt="Russian"
                              />
                              <span className="pl-4"> 🇷🇺</span>
                            </button>
                            <button
                              className="dropdown-item"
                              onClick={() => handleLanguageChange("en")}
                            >
                              <img
                                src={usFlag}
                                width={20}
                                height={20}
                                alt="English"
                              />
                              <span className="pl-4"> 🇺🇸 </span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="show_sm_box">
                    <nav className={`nav-links show`}>
                      <NavLink
                        to="/"
                        activeClassName="active"
                        exact
                        onClick={toggleMenu}
                      >
                        Bosh sahifa
                      </NavLink>
                      <NavLink
                        to="/about"
                        activeClassName="active"
                        exact
                        onClick={toggleMenu}
                      >
                        Loyiha haqida
                      </NavLink>
                      <NavLink
                        to="/nmm"
                        activeClassName="active"
                        exact
                        onClick={toggleMenu}
                      >
                        NMM
                      </NavLink>
                      <NavLink
                        to="/news"
                        activeClassName="active"
                        exact
                        onClick={toggleMenu}
                      >
                        Yangiliklar
                      </NavLink>
                      <NavLink
                        to="/documents"
                        activeClassName="active"
                        exact
                        onClick={toggleMenu}
                      >
                        Normativ xujjatlar
                      </NavLink>
                      <NavLink
                        to="/audio-materials"
                        activeClassName="active"
                        exact
                        onClick={toggleMenu}
                      >
                        Material
                      </NavLink>
                      <NavLink
                        to="/contact"
                        activeClassName="active"
                        exact
                        onClick={toggleMenu}
                      >
                        Aloqa
                      </NavLink>
                    </nav>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <CustomModal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                  <p>This is a modal window!</p>
                </div>
              </CustomModal>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
