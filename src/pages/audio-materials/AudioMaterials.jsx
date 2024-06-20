import React from "react";
import Links from "../../components/links/Links";
import "./style.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaChevronRight, FaHome } from "react-icons/fa";

const AudioMaterials = () => {
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
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                        <div className="ad_card">
                            <AiOutlineYoutube />
                            <p>QARSAK</p>
                        </div>
                    </div>
                    <div className="back_navigate">
                        <button className="home">
                            <FaHome /> Bosh sahifa
                        </button>
                        <button className="next">
                            {" "}
                            <FaChevronRight />{" "}
                        </button>
                        <button className="about">Videogalereya</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AudioMaterials;
