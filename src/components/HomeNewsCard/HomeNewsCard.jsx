import { useContext } from 'react'
import './style.css'
import context from '../../context'
import { useTranslation } from 'react-i18next';

const HomeNewsCard = ({ data }) => {
    const { currentLang } = useContext(context);
    const [t, i18n] = useTranslation('global');


     return (
                <div className="new-card" style={{ width : '420px', height : "290px", padding : "15px", borderRadius : '5px' }}>
                    <div className="top">
                        <div className="left">
                            <img src={data?.main_img} alt="rams" />
                        </div>
                        <div className="right">
                            <div className="head d-flex gap-1">
                                <p className="media " style={{ fontSize : "12.3px" }}>MEDIA</p>
                                <p className="date " style={{ fontSize : "13.1px" }}>{data?.createdAt.slice(0,10)}</p>
                            </div>
                            <p className="text " style={{ fontSize : "13.4px" }}>
                            {currentLang == 'ru' ? data?.title_ru : currentLang == 'uz' ? data?.title_uz : data?.title_en}

                            </p>
                        </div>
                    </div>
                    <button className="bottom_btn">{t('more')}</button>
                </div>
    )
}

export default HomeNewsCard

