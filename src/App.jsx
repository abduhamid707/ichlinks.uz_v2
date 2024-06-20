import React, { useState, useEffect } from "react";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import context from "./context";
import { useTranslation } from "react-i18next";

const App = () => {



const [t, i18n] = useTranslation('global');

function handleChangeLanguage(lang){
  i18n.changeLanguage(lang)
};

const currentLang = JSON.parse(localStorage.getItem('currentLang')) || 'uz';


  return (
    <context.Provider value={{ currentLang, handleChangeLanguage }}>
      <Router />
    </context.Provider>
  );
};

export default App;