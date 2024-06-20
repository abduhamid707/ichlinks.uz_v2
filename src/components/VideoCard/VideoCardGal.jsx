import { FaCalendar, FaEye, FaGlobe, FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom";
import context from "../../context";
import { useTranslation } from "react-i18next";
import { useContext } from "react";

const VideoCardGal = ({ video }) => {
    const { currentLang } = useContext(context);
    return (
        <>
            <div className="vd">
                <img src={video.img_path ? video.img_path : "https://picsum.photos/id/41/240/148"} height={"100%"} width={'100%'} />
                <div className="body">
                    <div className="top">
                        <p className="media">MEDIA</p>
                        <p className="date">August 10, 2023</p>
                    </div>
                    <h3 className="title_txt">
                        {currentLang === 'uz' ? video.title_uz : currentLang === 'ru' ? video.title_ru : video.title_en}
                    </h3>
                    <ul className="details">
                        <li>
                            <FaCalendar />
                            20 июля 2023
                        </li>
                        <li>
                            <FaGlobe />
                            Ташкент
                        </li>
                        <li>
                            <FaEye />
                            3325
                        </li>
                    </ul>
                    <button className="watch_btn">
                        <FaPlay />
                        <Link to={`${video.video_id}/${video.video_path}`} className="mb-0">KO'RISH</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default VideoCardGal