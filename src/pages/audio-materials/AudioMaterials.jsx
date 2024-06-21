import React, { useContext, useEffect, useState } from "react";
import Links from "../../components/links/Links";
import "./style.css";
import axios from 'axios'
import { FaChevronRight, FaHome } from "react-icons/fa";
import AudioMaterialCard from "../../components/audio-material-card/AudioMaterialCard";
import { useTranslation } from "react-i18next";

const AudioMaterials = () => {



const [audios, setAudios] = useState([]);


const [t, i18n] = useTranslation('global')

async function GetAudios(){
    try {
        const { data } = await axios.get(`http://ichlinks.uz/api/site/audios`)
        console.log(data);
        if(data.success){
            setAudios(data.result.rows)
        }else{
            console.log(`Failed to fetch audios!`)
        }
    } catch (error) {
         console.log('Error fetching audios: ', error)
    }
} 

    useEffect(()=>{
       GetAudios();
    }, [])



    return (
        <div className="audio-page">
            <section className="section_one">
                <div className="container">
                    <div className="left">
                        <h2>
                            ИСКУССТВО <br /> ХАЛФА
                        </h2>
                    </div>
                    <div className="right">
                        <Links />
                    </div>
                </div>
            </section>
            <section className="section_two">
                <div className="container">
                    <div className="text">
                        Халфа - это женщина-исполнительница народных песен и
                        инструментальной музыка, одновременно поэтесса в Хорезмском оазисе,
                        вобравшие в себя традиции устного народного творчества. <br />
                        По роду деятельности они подразделяются на следующие: халфа созий
                        (халфа музыкант) – исполнительница народных инструментальных
                        мелодий; халфа ёдогий (харфа певица и поэтесса), исполняющая
                        народные песни на свадьбах и торжествах, одновременно сопровождает
                        свое пение игрой на музыкальном инструменте; халфа китобий (халфа
                        книжница, читающая старинные книги), которые читают старинные книги
                        религиозного содержания (Пайгамбар хикояси, Бобо Ровшан, Биби
                        Сешанба и др.) на траурных (поминках) и ритуальных (мушкулкушод -
                        букв.облегчение) мероприятиях; халфа достончи (халфа сказительница),
                        исполняет дастаны романического содержания, например, дастаны «Тахир
                        и Зухра», «Асли и Карам», «Хурлико и Хамро» и поёт песни и терма из
                        эпических сказаний. Все они были ориентированы выступать во
                        внутренних помещениях (ичкари) перед женской аудиторией. Халфа
                        одаренные музыканты, певцы и поэтессы, прекрасно владеют музыкальным
                        инструментом кул соз (букв. ручной инструмент, на самом деле это
                        русская диатоническая гармонь, которая получила распространение в
                        Хорезме среди халфа в ХIХ веке). Ансамбль халфа состоит из
                        певицы-халфа, которая аккомпанирует себе на гармони, доирачи
                        (аккомпанирует на доире и подпевает) и раккоса (танцовщица, которая
                        одновременно подпевает халфа).
                    </div>
                    <div className="ads_wrp">
                    {audios?.map((el, idx)=>(
                        <AudioMaterialCard data={el} key={idx}/>
                    ))}
                       {/* <AudioMaterialCard/>
                       <AudioMaterialCard/>
                       <AudioMaterialCard/>
                       <AudioMaterialCard/> */}
                       
                    </div>
                    <div className="back_navigate">
                        <button className="home">
                            <FaHome /> {t('navbar.home')}
                        </button>
                        <button className="next">
                            {" "}
                            <FaChevronRight />{" "}
                        </button>
                        <button className="about">{t('navbar.material')}</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AudioMaterials;
