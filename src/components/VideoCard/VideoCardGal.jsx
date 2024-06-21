import { FaCalendar, FaEye, FaGlobe, FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom";
import context from "../../context";
import { useTranslation } from "react-i18next";
import { useContext } from "react";

const VideoCardGal = ({ video }) => {
    const [t, i18n] = useTranslation('global')
    const { currentLang } = useContext(context);
    return (
        <>
            <div className="vd">
                <img src={video.img_path ? video.img_path : "https://picsum.photos/id/41/240/148"} height={"100%"} width={'100%'} />
                <div className="body">
                    <div className="top">
                        <p className="media">MEDIA</p>
                        <p className="date">  {video.createdAt.slice(0, 10)}</p>
                    </div>
                    <h3 className="title_txt">
                        {currentLang === 'uz' ? video.title_uz : currentLang === 'ru' ? video.title_ru : video.title_en}
                    </h3>
                    <ul className="details">
                        <li style={{fontSize : "12px"}}>
                            <FaCalendar />
                            {video.createdAt.slice(0, 10)}
                        </li>
                        <li>
                            <FaGlobe />
                            {t('statistics.tashkentCity')}
                        </li>
                        <li>
                            <FaEye />
                            3325
                        </li>
                    </ul>
                    <button className="watch_btn">
                        <FaPlay />
                        <Link to={`${video.video_id}/${video.video_path}`} className="mb-0">{t('watch')}</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default VideoCardGal