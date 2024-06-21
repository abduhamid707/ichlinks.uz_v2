import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { useContext } from "react";
import context from '../../context.jsx'

const AudioMaterialCard = ({data}) => {


const { currentLang } = useContext(context);


console.log(data);

  return (
    <div className="ad_card">
      <AiOutlineYoutube />
      <p>{currentLang == 'uz' ? data.title_uz : currentLang == 'ru' ? data.title_ru : data.title_en}</p>
    </div>
  );
};

export default AudioMaterialCard;
