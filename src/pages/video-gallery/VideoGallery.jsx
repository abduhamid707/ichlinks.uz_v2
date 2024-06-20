import React from 'react';
import './style.css';
import Links from '../../components/links/Links';
import { FaChevronLeft, FaChevronRight, FaHome, FaPlay } from 'react-icons/fa';
import VideoCard from '../../components/video-card/VideoCard';

const VideoGallery = () => {
    return (
        <div className='video-gallery-page page'>
            <section className='section_one'>
                <div className='container'>
                    <div className='left'>
                        <h2>VIDEOGALEREYA</h2>
                    </div>
                    <div className='right'>
                        <Links />
                    </div>
                </div>
            </section>
            <section className='section_two'>
                <div className='container'>
                    <h3 className='title'>Количество изображений:  &nbsp; &nbsp; 1 694</h3>
                    <div className='vds_wrp'>
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                    <div className='pagination_btns'>
                        <div className='left_btns'>
                            <button className='prev'>
                                <FaChevronLeft /> Пред. стр
                            </button>
                            <button className='next'>След. стр <FaChevronRight /> </button>
                        </div>
                        <div className='right_btns'>
                            <div className='left_page'>
                                <p>страница</p>
                                <button>3</button>
                                <p>из 157</p>
                            </div>
                            <button className='go_'>Перейти <FaChevronRight /></button>
                        </div>
                    </div>
                    <div className="back_navigate">
                        <button className="home"><FaHome /> Bosh sahifa</button>
                        <button className="next"> <FaChevronRight /> </button>
                        <button className="about">Videogalereya</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VideoGallery
